import React, { useState } from 'react';
import { Send, Mail, Phone, Github, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappNumber = "919538520031"; // Standard wa.me format without the +
    const text = `Hello Hemanth,\n\nMy name is ${form.name}.\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the form
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-medium text-[var(--text-main)] mb-6 tracking-tight">Let's build something extraordinary.</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-12 max-w-md">
              Whether you have an idea for a project, need a technical consultation, or just want to chat about embedded systems and web tech—I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: <Mail size={18} />, 
                  hoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
                  text: 'hemanth2678nanu@gmail.com', 
                  href: 'mailto:hemanth2678nanu@gmail.com',
                  hoverBorder: 'group-hover:border-[#EA4335] group-hover:shadow-[0_0_15px_#EA433530]'
                },
                { 
                  icon: <Phone size={18} />, 
                  hoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
                  text: '+91 9538520031', 
                  href: 'tel:+919538520031',
                  hoverBorder: 'group-hover:border-[#25D366] group-hover:shadow-[0_0_15px_#25D36630]'
                },
                { 
                  icon: <Linkedin size={18} />, 
                  hoverUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
                  text: 'hemanth-kumar-98744b313', 
                  href: 'https://www.linkedin.com/in/hemanth-kumar-98744b313',
                  hoverBorder: 'group-hover:border-[#0A66C2] group-hover:shadow-[0_0_15px_#0A66C230]'
                },
                { 
                  icon: <Github size={18} />, 
                  hoverUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
                  text: 'github.com/hemanthnanu-tech', 
                  href: 'https://github.com/hemanthnanu-tech',
                  hoverBorder: 'group-hover:border-[#888888] group-hover:shadow-[0_0_15px_#88888830]'
                },
                { 
                  icon: <MapPin size={18} />, 
                  hoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
                  text: 'Bangalore, Karnataka, India',
                  hoverBorder: 'group-hover:border-[#4285F4] group-hover:shadow-[0_0_15px_#4285F430]'
                },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-3 sm:gap-4 text-[var(--text-main)] hover:text-[var(--accent)] transition-colors group w-full max-w-full">
                      <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--panel-border)] bg-[var(--btn-bg)] flex items-center justify-center transition-all duration-300 relative overflow-hidden ${item.hoverBorder}`}>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-0">
                          {item.icon}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 scale-0 group-hover:scale-100">
                          <img src={item.hoverUrl} alt="icon" className={`w-5 h-5 object-contain ${item.hoverUrl.includes('github') ? 'invert-dark' : ''}`} />
                        </div>
                      </div>
                      <span className="font-medium text-sm sm:text-base truncate">{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4 text-[var(--text-main)] group w-full max-w-full cursor-default">
                      <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--panel-border)] bg-[var(--btn-bg)] flex items-center justify-center transition-all duration-300 relative overflow-hidden ${item.hoverBorder}`}>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-0">
                          {item.icon}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 scale-0 group-hover:scale-100">
                          <img src={item.hoverUrl} alt="icon" className={`w-5 h-5 object-contain ${item.hoverUrl.includes('github') ? 'invert-dark' : ''}`} />
                        </div>
                      </div>
                      <span className="font-medium text-sm sm:text-base truncate group-hover:text-[var(--accent)] transition-colors">{item.text}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel lg:mt-20 h-fit"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="input-glass"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="input-glass"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                />
              </div>
              <textarea 
                rows={6}
                placeholder="Tell me about your project or inquiry..." 
                required 
                className="input-glass resize-none"
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              />
              <button type="submit" className="btn-hero w-full py-4 mt-2 text-[15px]">
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
