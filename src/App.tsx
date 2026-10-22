/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InstitutionalBanner } from './components/OfficialLogos';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FourPillarsSection } from './components/FourPillarsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { PPDBSection } from './components/PPDBSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { LogoManagerModal } from './components/LogoManagerModal';

export default function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [logoManagerOpen, setLogoManagerOpen] = useState(false);
  const [logoUpdateCounter, setLogoUpdateCounter] = useState(0);

  const handleExplore = () => {
    const el = document.getElementById('tentang');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogosUpdated = () => {
    setLogoUpdateCounter((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-800 selection:text-white antialiased">
      {/* Dynamic Navigation Bar */}
      <Navbar
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenLogoManager={() => setLogoManagerOpen(true)}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero
          onOpenRegister={() => setRegisterModalOpen(true)}
          onExplore={handleExplore}
        />

        {/* Official Institutional Banner (The 3 Official Logos) */}
        <InstitutionalBanner
          key={logoUpdateCounter}
          onOpenManager={() => setLogoManagerOpen(true)}
        />

        {/* Section 3: Tentang Kami */}
        <AboutSection
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Section 4: Empat Pilar Pendidikan */}
        <FourPillarsSection
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Section 5: Program Unggulan */}
        <ProgramsSection
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Section 6: Galeri Aktivitas */}
        <GallerySection />

        {/* Section 7: Alur PPDB & FAQs */}
        <PPDBSection
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Section 8: Kontak & Lokasi */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLogoManager={() => setLogoManagerOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      {/* Logo Manager Modal for User to upload their 3 official logos */}
      <LogoManagerModal
        isOpen={logoManagerOpen}
        onClose={() => setLogoManagerOpen(false)}
        onLogosUpdated={handleLogosUpdated}
      />
    </div>
  );
}
