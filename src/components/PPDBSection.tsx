import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, FileText, HelpCircle, Phone, Calendar, UserCheck } from 'lucide-react';
import { PPDB_STEPS, FAQS, SCHOOL_INFO } from '../data/schoolData';

interface PPDBSectionProps {
  onOpenRegister: () => void;
}

export const PPDBSection: React.FC<PPDBSectionProps> = ({ onOpenRegister }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="ppdb" className="py-20 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-3">
            <span>Penerimaan Peserta Didik Baru</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">Tahun Ajaran Baru</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight leading-tight">
            Alur Pendaftaran Siswa Baru (PPDB)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Kami menyambut setiap calon siswa dengan pendekatan observasi potensi minat dan gaya belajar, bukan sekadar tes akademis baku.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PPDB_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl border border-stone-200 bg-stone-50/60 hover:border-emerald-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-emerald-700">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                    ✓
                  </div>
                </div>
                <h3 className="text-base font-bold text-stone-900 font-display leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-emerald-800">
                Tahap {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner Card */}
        <div className="rounded-2xl bg-gradient-to-br from-forest-950 to-emerald-900 text-white p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-[at_top_right] from-amber-400/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Kuota Kelas Terbatas demi Pendampingan Optimal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-2 leading-tight">
              Siap Bergabung dengan Keluarga SMP Alam Excellentia Pamekasan?
            </h3>
            <p className="text-sm sm:text-base text-stone-200 mt-3 leading-relaxed">
              Daftarkan putra-putri Anda sekarang untuk mendapatkan kesempatan observasi lebih awal dan konsultasi program bersama tim pengajar kami.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-forest-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-md transition-all uppercase tracking-wider"
              >
                <span>DAFTAR SEKARANG SECARA ONLINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent("Halo Panitia PPDB SMP Alam Excellentia Pamekasan, saya ingin bertanya seputar pendaftaran siswa baru.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Tanya Panitia via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Informasi Umum & Tanya Jawab
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200 bg-stone-50/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:text-emerald-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-md text-stone-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
