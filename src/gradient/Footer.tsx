import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 border-t border-[var(--panel-border)] z-10 bg-[var(--bg-color)]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-xl font-semibold tracking-tight text-[var(--text-main)] flex items-center">
          Hemanth<sup className="text-xs font-normal ml-0.5 text-[#D946EF]">®</sup>
        </div>

        <div className="text-[13px] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Hemanth Kumar K. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-[13px] font-medium text-[var(--text-muted)]">
          <a href="#" className="hover:text-[var(--text-main)] transition-colors">LinkedIn</a>
          <a href="https://github.com/hemanthnanu-tech" target="_blank" rel="noreferrer" className="hover:text-[var(--text-main)] transition-colors">GitHub</a>
          <a href="mailto:hemanth2678nanu@gmail.com" className="hover:text-[var(--text-main)] transition-colors">Email</a>
        </div>

      </div>
    </footer>
  );
};
