import React from 'react';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Award, MapPin, Users } from 'lucide-react';
import { HERO_IMAGE, SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenRegister: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExplore }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-end text-white overflow-hidden pt-28 pb-12 sm:pb-16">
      {/* Background Photography with High Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Siswa SMP Alam Excellentia Pamekasan belajar aktif di alam terbuka"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/45 to-forest-950/95" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Label (No static pill per constitution) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-300 uppercase mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
            <span>Pendidikan Berbasis Alam dan Pengalaman Nyata</span>
            <span className="text-white/40">·</span>
            <span className="text-stone-300 font-normal">Yayasan Insan Kamil</span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12] mb-5 [text-wrap:balance]"
          >
            BELAJAR DARI ALAM, BERTUMBUH MENJADI PEMIMPIN MASA DEPAN
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-stone-200/95 leading-relaxed font-normal mb-8 max-w-2xl">
            {SCHOOL_INFO.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-forest-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg shadow-amber-950/20 transition-all uppercase tracking-wider"
            >
              <span>PENDAFTARAN SISWA BARU</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 active:scale-98 border border-white/20 rounded-xl backdrop-blur-md transition-all uppercase tracking-wider"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>JELAJAHI SEKOLAH</span>
            </button>
          </div>
        </div>

        {/* 4-Item Proof / Value Strip Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/15">
          <div className="bg-forest-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 sm:p-4">
            <p className="text-xs text-emerald-300 font-medium">Kurikulum Unggul</p>
            <p className="text-base sm:text-lg font-bold text-white font-display mt-0.5">4 Pilar Pendidikan</p>
            <p className="text-[11px] text-stone-300 mt-1">Akhlak, Logika, Lead & Bisnis</p>
          </div>

          <div className="bg-forest-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 sm:p-4">
            <p className="text-xs text-amber-300 font-medium">Metode Belajar</p>
            <p className="text-base sm:text-lg font-bold text-white font-display mt-0.5">Experiential Learning</p>
            <p className="text-[11px] text-stone-300 mt-1">Eksplorasi & riset nyata</p>
          </div>

          <div className="bg-forest-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 sm:p-4">
            <p className="text-xs text-sky-300 font-medium">Karakter & Spiritual</p>
            <p className="text-base sm:text-lg font-bold text-white font-display mt-0.5">Tahfidz & Adab</p>
            <p className="text-[11px] text-stone-300 mt-1">Tadabbur ayat kauniyah</p>
          </div>

          <div className="bg-forest-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 sm:p-4">
            <p className="text-xs text-emerald-300 font-medium">Lingkungan Asri</p>
            <p className="text-base sm:text-lg font-bold text-white font-display mt-0.5">Pamekasan, Madura</p>
            <p className="text-[11px] text-stone-300 mt-1">Kampus hijau tanpa sekat</p>
          </div>
        </div>
      </div>
    </section>
  );
};
