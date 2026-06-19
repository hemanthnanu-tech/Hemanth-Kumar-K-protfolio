import React from 'react';
import { resumeData } from '../data';
import { Mail, Phone, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-24 px-6 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07071a 0%, #020208 100%)' }}>
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)', filter: 'blur(40px)' }} />
      {/* Top divider */}
      <div className="section-divider mb-12" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', fontWeight: 300, lineHeight: 1 }}>
              <span style={{ color: '#e2e8f0' }}>Hemanth </span>
              <span style={{ fontStyle: 'italic', color: '#00d4ff' }}>Kumar K</span>
            </h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: 'rgba(226,232,240,0.45)', maxWidth: '340px', lineHeight: 1.75 }}>
              Electronics, IoT &amp; Industrial Automation Engineer. Available for embedded systems design and technical assignments.
            </p>
            <div className="flex items-center gap-2">
              <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(226,232,240,0.25)', textTransform: 'uppercase' }}>
                Bangalore, Karnataka, India
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,212,255,0.5)', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</div>
            {[
              { icon: <Mail size={14} />,   label: resumeData.profile.email,  href: `mailto:${resumeData.profile.email}` },
              { icon: <Phone size={14} />,  label: resumeData.profile.phone,  href: `tel:${resumeData.profile.phone}` },
              { icon: <Github size={14} />, label: resumeData.profile.github, href: `https://${resumeData.profile.github}`, ext: true },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noreferrer' : undefined}
                className="flex items-center gap-3 py-3 group transition-all duration-300"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#00d4ff', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '13px', color: 'rgba(226,232,240,0.5)', fontWeight: 500 }}
                  className="group-hover:!text-[#e2e8f0] transition-colors truncate">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 space-y-3">
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(0,212,255,0.5)', textTransform: 'uppercase', marginBottom: '20px' }}>Navigate</div>
            {['About', 'Skills', 'Experience', 'Projects', 'Certifications'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="block transition-all duration-200 hover:translate-x-1"
                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '13px', color: 'rgba(226,232,240,0.4)', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,232,240,0.4)')}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(226,232,240,0.18)', letterSpacing: '0.15em' }}>
            © 2026 Hemanth Kumar K
          </span>
          <button type="button" id="btn-scroll-top" onClick={scrollTop}
            className="flex items-center gap-2 cursor-pointer group transition-all duration-300"
            style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(226,232,240,0.25)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Back to top
            <div className="flex items-center justify-center w-7 h-7 rounded-full border group-hover:border-[#00d4ff] group-hover:text-[#00d4ff] transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(226,232,240,0.3)' }}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
