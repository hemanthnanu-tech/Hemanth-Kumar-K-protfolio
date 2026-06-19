import React from 'react';
import { Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const FooterSection: React.FC = () => (
  <footer className="relative py-16 px-6 lg:px-20 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, #07070C 100%)', zIndex: 10 }}>
    <div className="divider absolute top-0 left-0 right-0" />

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-2 flex items-center justify-center"
              style={{ borderColor: '#00F2FE', transform: 'rotate(45deg)', boxShadow: '0 0 20px rgba(0,242,254,0.4)' }}>
              <span style={{ transform: 'rotate(-45deg)', fontFamily: 'Syne', fontWeight: 800, fontSize: '11px', color: '#00F2FE' }}>HK</span>
            </div>
            <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '15px', color: '#E8E8F0', letterSpacing: '0.08em' }}>
              HEMANTH KUMAR K
            </span>
          </div>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: 'rgba(232,232,240,0.4)', lineHeight: 1.7, maxWidth: '280px' }}>
            Electronics & Automation Engineer · Available for opportunities in Bangalore & remote.
          </p>
          <div className="flex items-center gap-2">
            <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px rgba(16,185,129,0.8)' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(232,232,240,0.25)', textTransform: 'uppercase' }}>
              Available for work
            </span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(0,242,254,0.6)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Contact
          </div>
          <div className="space-y-4">
            {[
              { icon: <Mail size={14} />,   text: portfolio.personal.email,       href: `mailto:${portfolio.personal.email}` },
              { icon: <Phone size={14} />,  text: portfolio.personal.phone,       href: `tel:${portfolio.personal.phone}` },
              { icon: <Github size={14} />, text: portfolio.personal.githubLabel, href: portfolio.personal.github, external: true },
            ].map(item => (
              <a key={item.text} href={item.href} target={item.external ? '_blank' : undefined} rel="noreferrer"
                className="flex items-center gap-3 group transition-all"
                style={{ textDecoration: 'none' }}>
                <span style={{ color: '#00F2FE' }}>{item.icon}</span>
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: 'rgba(232,232,240,0.45)', transition: 'color 0.2s' }}
                  className="group-hover:text-white">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Certifications brief */}
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(155,81,224,0.6)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Certifications
          </div>
          <div className="space-y-3">
            {portfolio.certifications.map(cert => (
              <div key={cert.id} className="text-sm" style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: 'rgba(232,232,240,0.4)', lineHeight: 1.5 }}>
                <span style={{ color: 'rgba(232,232,240,0.65)' }}>{cert.title.length > 42 ? cert.title.slice(0, 42) + '…' : cert.title}</span>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'rgba(155,81,224,0.5)', marginTop: '2px' }}>{cert.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(232,232,240,0.18)', letterSpacing: '0.15em' }}>
          © 2026 Hemanth Kumar K · Built with React + Three.js
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group transition-all duration-300"
          style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(232,232,240,0.3)', letterSpacing: '0.25em', textTransform: 'uppercase' }}
        >
          Back to top
          <div className="flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 group-hover:border-[#00F2FE] group-hover:text-[#00F2FE] group-hover:shadow-[0_0_12px_rgba(0,242,254,0.5)]"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <ArrowUp size={12} />
          </div>
        </button>
      </div>
    </div>
  </footer>
);
