import React, { useState } from 'react';
import { X, CheckCircle2, Send, Download, Phone, ShieldCheck, User, Calendar, MapPin, School } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    studentName: '',
    gender: 'Laki-laki',
    birthPlaceDate: '',
    originSchool: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    programInterest: 'Sekolah Alam Reguler & Kepemimpinan',
    notes: '',
  });

  const [submittedData, setSubmittedData] = useState<{ regCode: string; date: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Nama calon siswa wajib diisi';
    if (!formData.birthPlaceDate.trim()) errs.birthPlaceDate = 'Tempat & tanggal lahir wajib diisi';
    if (!formData.originSchool.trim()) errs.originSchool = 'Asal sekolah (SD/MI) wajib diisi';
    if (!formData.parentName.trim()) errs.parentName = 'Nama orang tua/wali wajib diisi';
    if (!formData.parentPhone.trim() || formData.parentPhone.length < 9) {
      errs.parentPhone = 'Nomor WhatsApp valid wajib diisi (minimal 9 digit)';
    }
    if (!formData.address.trim()) errs.address = 'Alamat domisili wajib diisi';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const regCode = `EXC-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionDate = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    setSubmittedData({ regCode, date: submissionDate });
  };

  const handleSendWhatsApp = () => {
    if (!submittedData) return;
    const message = encodeURIComponent(
      `Assalamu'alaikum Panitia PPDB SMP Alam Excellentia Pamekasan.\n\n` +
      `Saya bermaksud mengonfirmasi formulir pendaftaran PPDB online:\n` +
      `• No. Registrasi: ${submittedData.regCode}\n` +
      `• Nama Calon Siswa: ${formData.studentName}\n` +
      `• Asal Sekolah: ${formData.originSchool}\n` +
      `• Orang Tua/Wali: ${formData.parentName}\n` +
      `• No. WA: ${formData.parentPhone}\n` +
      `• Program Peminatan: ${formData.programInterest}\n` +
      `• Alamat: ${formData.address}\n\n` +
      `Mohon petunjuk tahapan observasi selanjutnya. Terima kasih.`
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      studentName: '',
      gender: 'Laki-laki',
      birthPlaceDate: '',
      originSchool: '',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      programInterest: 'Sekolah Alam Reguler & Kepemimpinan',
      notes: '',
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Tutup Formulir"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedData ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Penerimaan Peserta Didik Baru (PPDB)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Formulir Pendaftaran Siswa Baru
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
              SMP Alam Excellentia Pamekasan (Yayasan Insan Kamil). Silakan lengkapi data awal di bawah ini. Panitia PPDB kami akan segera menghubungi Anda.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Data Calon Siswa */}
              <div className="space-y-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                  1. Data Calon Siswa
                </p>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nama Lengkap Calon Siswa *
                  </label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => {
                      setFormData({ ...formData, studentName: e.target.value });
                      if (errors.studentName) setErrors({ ...errors, studentName: '' });
                    }}
                    placeholder="Contoh: Muhammad Faris Al-Fatih"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                  />
                  {errors.studentName && (
                    <p className="text-xs text-red-600 mt-1">{errors.studentName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Jenis Kelamin *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Tempat, Tanggal Lahir *
                    </label>
                    <input
                      type="text"
                      value={formData.birthPlaceDate}
                      onChange={(e) => {
                        setFormData({ ...formData, birthPlaceDate: e.target.value });
                        if (errors.birthPlaceDate) setErrors({ ...errors, birthPlaceDate: '' });
                      }}
                      placeholder="Contoh: Pamekasan, 14 Mei 2013"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                    {errors.birthPlaceDate && (
                      <p className="text-xs text-red-600 mt-1">{errors.birthPlaceDate}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Asal Sekolah (SD / MI) *
                  </label>
                  <input
                    type="text"
                    value={formData.originSchool}
                    onChange={(e) => {
                      setFormData({ ...formData, originSchool: e.target.value });
                      if (errors.originSchool) setErrors({ ...errors, originSchool: '' });
                    }}
                    placeholder="Contoh: SD Plus Insan Kamil Pamekasan"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                  />
                  {errors.originSchool && (
                    <p className="text-xs text-red-600 mt-1">{errors.originSchool}</p>
                  )}
                </div>
              </div>

              {/* Data Orang Tua / Kontak */}
              <div className="space-y-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                  2. Data Orang Tua / Wali & Kontak
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nama Orang Tua / Wali *
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: '' });
                      }}
                      placeholder="Nama Ayah / Ibu"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-red-600 mt-1">{errors.parentName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => {
                        setFormData({ ...formData, parentPhone: e.target.value });
                        if (errors.parentPhone) setErrors({ ...errors, parentPhone: '' });
                      }}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                    {errors.parentPhone && (
                      <p className="text-xs text-red-600 mt-1">{errors.parentPhone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Alamat Domisili Lengkap *
                  </label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (errors.address) setErrors({ ...errors, address: '' });
                    }}
                    placeholder="Alamat tempat tinggal di Pamekasan / Madura"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                  />
                  {errors.address && (
                    <p className="text-xs text-red-600 mt-1">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Peminatan Program Utama
                  </label>
                  <select
                    value={formData.programInterest}
                    onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option value="Sekolah Alam Reguler & Kepemimpinan">Sekolah Alam Reguler & Kepemimpinan</option>
                    <option value="Tahfidzul Qur’an & Tadabbur Alam">Tahfidzul Qur’an & Tadabbur Alam</option>
                    <option value="Riset Green Science & Agropreneurship">Riset Green Science & Agropreneurship</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold text-forest-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-md transition-all uppercase tracking-wider"
                >
                  <span>KIRIM PENDAFTARAN</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Receipt State */
          <div className="py-4 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Pendaftaran Berhasil Diterima
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mt-1">
              Selamat Datang di Keluarga SMP Alam Excellentia
            </h3>

            {/* Official Registration Slip Box */}
            <div className="mt-6 p-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Nomor Registrasi PPDB</p>
                  <p className="text-lg font-bold text-forest-950 font-mono tracking-wider">{submittedData.regCode}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-stone-500 uppercase font-semibold">Tanggal Daftar</p>
                  <p className="text-xs font-medium text-stone-700">{submittedData.date}</p>
                </div>
              </div>

              <div className="text-xs text-stone-700 space-y-1.5 pt-1">
                <p><strong className="text-stone-900">Nama Calon Siswa:</strong> {formData.studentName}</p>
                <p><strong className="text-stone-900">Asal Sekolah:</strong> {formData.originSchool}</p>
                <p><strong className="text-stone-900">Nama Orang Tua:</strong> {formData.parentName}</p>
                <p><strong className="text-stone-900">Nomor WhatsApp:</strong> {formData.parentPhone}</p>
                <p><strong className="text-stone-900">Program:</strong> {formData.programInterest}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-colors uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Konfirmasi via WhatsApp Panitia</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
              >
                Daftar Calon Siswa Lain
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
