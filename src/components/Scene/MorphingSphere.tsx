import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mouseState, scrollState } from '../../state/world';

export const MorphingSphere: React.FC = () => {
  const meshRef    = useRef<THREE.Mesh>(null);
  const matRef     = useRef<THREE.MeshStandardMaterial>(null);
  const geoRef     = useRef<THREE.SphereGeometry | null>(null);

  // Create sphere geometry
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(2, 72, 72);
    geoRef.current = geo;
    return geo;
  }, []);

  // Store original vertex positions for morphing
  const origPositions = useMemo(() => {
    return Float32Array.from(geometry.attributes.position.array as Float32Array);
  }, [geometry]);

  useFrame(({ clock }) => {
    if (!meshRef.current || !matRef.current) return;
    const t = clock.getElapsedTime() * 0.45;

    // ── Vertex morphing ───────────────────────────────────────────────────
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const mx = mouseState.x, my = mouseState.y;
    const mouseInfluence = Math.sqrt(mx * mx + my * my) * 0.18;

    for (let i = 0; i < arr.length; i += 3) {
      const ox = origPositions[i];
      const oy = origPositions[i + 1];
      const oz = origPositions[i + 2];

      // Multi-frequency wave displacement (organic morphing)
      const wave =
        Math.sin(ox * 2.5 + t * 1.1) * Math.cos(oy * 2.2 + t * 0.75) * 0.18 +
        Math.sin(oy * 3.0 + t * 0.9) * Math.cos(oz * 2.8 + t * 1.3) * 0.14 +
        Math.sin(oz * 1.8 + t * 1.5) * Math.cos(ox * 3.2 + t * 0.6) * 0.10;

      const scale = 1 + wave + mouseInfluence * 0.12;

      arr[i]     = ox * scale;
      arr[i + 1] = oy * scale;
      arr[i + 2] = oz * scale;
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    // ── Mouse-reactive rotation (lerp toward target) ───────────────────
    meshRef.current.rotation.y += (mx * 1.1 - meshRef.current.rotation.y) * 0.04;
    meshRef.current.rotation.x += (-my * 0.55 - meshRef.current.rotation.x) * 0.04;
    meshRef.current.rotation.z += (0.08 - meshRef.current.rotation.z) * 0.01; // slow drift

    // ── Emissive glow reacts to mouse distance ────────────────────────
    const dist = Math.sqrt(mx * mx + my * my);
    matRef.current.emissiveIntensity = 0.6 + dist * 1.2;
    matRef.current.opacity           = 0.65 + dist * 0.15;

    // ── Scroll-based transform ──────────────────────────────────────────
    const sp = scrollState.progress;
    // Shift left and scale down as scroll increases
    meshRef.current.position.x = sp * -3.8;
    meshRef.current.position.y = sp *  0.5;
    meshRef.current.position.z = sp * -1.5;
    const sc = Math.max(0.25, 1 - sp * 0.65);
    meshRef.current.scale.setScalar(sc);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow>
      <meshStandardMaterial
        ref={matRef}
        color="#00F2FE"
        emissive="#00F2FE"
        emissiveIntensity={0.6}
        wireframe
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};
