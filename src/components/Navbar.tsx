import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { OfficialSchoolLogo, getStoredLogos } from './OfficialLogos';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogoManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenLogoManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schoolLogo, setSchoolLogo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const logos = getStoredLogos();
    setSchoolLogo(logos.schoolLogo);
    const handler = () => {
      const updated = getStoredLogos();
      setSchoolLogo(updated.schoolLogo);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: '4 Pilar', href: '#pilar' },
    { label: 'Program Unggulan', href: '#program' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-950/95 backdrop-blur-md shadow-md border-b border-emerald-900/60 py-3'
          : 'bg-gradient-to-b from-black/75 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-left shrink-0"
            aria-label="SMP ALAM EXCELLENTIA PAMEKASAN Beranda"
          >
            <OfficialSchoolLogo customSrc={schoolLogo} className="w-10 h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-display leading-tight whitespace-nowrap">
                SMP ALAM EXCELLENTIA
              </span>
              <span className="text-[11px] font-medium text-emerald-300/90 tracking-wide uppercase whitespace-nowrap">
                PAMEKASAN · MADURA
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap hover:text-amber-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA Button (Single-line) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-forest-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap uppercase tracking-wider"
            >
              <span>DAFTAR SEKARANG</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenRegister}
              className="sm:hidden px-3 py-1.5 text-[11px] font-bold text-forest-950 bg-amber-400 rounded-md whitespace-nowrap uppercase"
            >
              DAFTAR
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigasi mobile"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/98 border-b border-emerald-800/80 px-4 pt-3 pb-6 shadow-xl animate-fade-in backdrop-blur-lg">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-amber-300 font-medium py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-emerald-900/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 text-center text-xs font-bold text-forest-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors uppercase tracking-wider"
              >
                DAFTAR SEKARANG (PPDB)
              </button>
              {onOpenLogoManager && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogoManager();
                  }}
                  className="w-full py-2 text-center text-xs text-stone-300 hover:text-white"
                >
                  Kelola Logo Resmi
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
