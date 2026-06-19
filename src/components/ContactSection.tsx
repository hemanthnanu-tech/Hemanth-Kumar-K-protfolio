import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { Mail, Phone, Github, Send } from 'lucide-react';
import { portfolio } from '../data/portfolio';

// 3D Envelope / Communication node
const EnvelopeMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.5;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z = t * 0.8;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial color="#9B51E0" wireframe emissive="#9B51E0" emissiveIntensity={1.0} transparent opacity={0.8} />
      </mesh>
      {/* Orbiting torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[1.8, 0.04, 8, 48]} />
        <meshStandardMaterial color="#00F2FE" emissive="#00F2FE" emissiveIntensity={0.9} />
      </mesh>
      {/* Second torus perpendicular */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.03, 8, 48]} />
        <meshStandardMaterial color="#9B51E0" emissive="#9B51E0" emissiveIntensity={0.7} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const useReveal = (ref: React.RefObject<Element | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('in-view'), i * 120)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
};

export const ContactSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just visual — real submission can be wired to any backend
    alert('Message sent! I will get back to you soon.');
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 lg:px-20 overflow-hidden"
      style={{ background: '#0B0B0F', zIndex: 10 }}>
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,81,224,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-label mb-5 justify-center">Contact</div>
          <h2 className="section-heading">
            Let's Build<br /><span className="gradient-text">Something Together</span>
          </h2>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: '15px', color: 'rgba(232,232,240,0.5)', maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.75 }}>
            Available for internships, collaborations, and interesting engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Form */}
          <div className="reveal glass rounded-2xl p-8" style={{ transitionDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,242,254,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="glowing-input"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,242,254,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="glowing-input"
                  />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,242,254,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="glowing-input"
                />
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,242,254,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="glowing-input resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* RIGHT — 3D canvas + contact info */}
          <div className="reveal flex flex-col gap-8 items-center" style={{ transitionDelay: '0.25s' }}>
            {/* 3D communication node */}
            <div className="w-full max-w-xs" style={{ height: '280px' }}>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.3} />
                <pointLight position={[3, 3, 3]} intensity={2} color="#00F2FE" />
                <pointLight position={[-3, -3, 2]} intensity={1.5} color="#9B51E0" />
                <Suspense fallback={null}>
                  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                    <EnvelopeMesh />
                  </Float>
                </Suspense>
              </Canvas>
            </div>

            {/* Contact cards */}
            <div className="w-full space-y-4">
              {[
                { icon: <Mail size={18} />,   label: 'Email',  value: portfolio.personal.email,       href: `mailto:${portfolio.personal.email}` },
                { icon: <Phone size={18} />,  label: 'Phone',  value: portfolio.personal.phone,       href: `tel:${portfolio.personal.phone}` },
                { icon: <Github size={18} />, label: 'GitHub', value: portfolio.personal.githubLabel, href: portfolio.personal.github },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'GitHub' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass rounded-xl p-5 flex items-center gap-4 group transition-all duration-300 block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,242,254,0.1)', color: '#00F2FE' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(0,242,254,0.6)', textTransform: 'uppercase', marginBottom: '3px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: 'rgba(232,232,240,0.7)', transition: 'color 0.3s' }}
                      className="group-hover:text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
