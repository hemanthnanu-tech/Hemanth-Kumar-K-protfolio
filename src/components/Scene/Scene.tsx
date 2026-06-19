import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';
import { MorphingSphere } from './MorphingSphere';

const isMobile = () =>
  typeof window !== 'undefined' && window.innerWidth < 768;

export const Scene: React.FC = () => {
  const mobile = isMobile();

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      dpr={mobile ? 1 : Math.min(window.devicePixelRatio, 2)}
    >
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      {/* Sharp directional spot — studio quality */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
        color="#00F2FE"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Violet fill from opposite */}
      <pointLight position={[-6, -4, -4]} intensity={1.5} color="#9B51E0" />
      {/* Warm rim */}
      <pointLight position={[0, -5, 4]}  intensity={0.8} color="#00F2FE" />

      {/* Stars background */}
      <Stars
        radius={80}
        depth={50}
        count={mobile ? 1500 : 3500}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* The main 3D object */}
      <Suspense fallback={null}>
        <MorphingSphere />
      </Suspense>

      {/* Post-processing — Bloom makes wireframe glow! */}
      {!mobile && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.05}
            luminanceSmoothing={0.9}
            intensity={1.8}
            height={300}
            blendFunction={BlendFunction.SCREEN}
          />
          <ChromaticAberration
            offset={new Vector2(0.0008, 0.0008)}
            radialModulation={false}
            modulationOffset={0}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      )}
    </Canvas>
  );
};
