import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Landing — Cinematic AAA Game Teaser
 * 
 * Assets cần thay thế:
 *  - Logo:   public/images/logo.png
 *  - Video:  public/videos/Intro.mp4
 *  - Poster: public/images/poster.jpg  (optional — ảnh tĩnh fallback)
 */

const Hero: React.FC = () => {
  const stripRef = useRef<HTMLElement>(null);
  const [stripVisible, setStripVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStripVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (stripRef.current) observer.observe(stripRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================================================= */}
      {/*  SECTION 1 — HERO (100vh)                          */}
      {/* ================================================= */}
      <section className="grain-overlay relative w-full h-screen overflow-hidden bg-[#050709]">

        {/* ===== ATMOSPHERIC BACKGROUND ===== */}

        {/* Base gradient — deep navy to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#070a12] to-[#030406]" />

        {/* Atmospheric radial glow — subtle blue haze at upper center */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 25%, rgba(15,25,55,0.8) 0%, transparent 70%)',
          }}
        />

        {/* Secondary warm glow — faint amber at bottom center (cinematic horizon feel) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 60% 30% at 50% 85%, rgba(80,40,10,0.5) 0%, transparent 70%)',
          }}
        />

        {/* Vignette — dark edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Top & bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        {/* ===== VIDEO BACKGROUND ===== */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-[1] opacity-90"
        >
          <source src="/videos/Intro.mp4" type="video/mp4" />
        </video>

        {/* Video overlay — đảm bảo text vẫn đọc được trên video */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-transparent to-black/50" />


        {/* ===== LOGO — top of page, small, centered ===== */}
        <div
          className="absolute z-10 left-0 right-0 flex justify-center animate-cine-scale-in"
          style={{
            top: '5%',
            animationDelay: '0.3s',
          }}
        >
          <img
            src="/images/White.png"
            alt=""
            className="h-28 sm:h-32 md:h-36 lg:h-44 w-auto select-none"
            draggable={false}
          />
        </div>


        {/* ===== HEADLINE — centered at ~60% mobile, ~66% desktop ===== */}
        <div
          className="absolute z-10 left-0 right-0 animate-cine-fade-in-up text-center px-6 sm:px-4"
          style={{
            top: 'clamp(75%, 66vw, 75%)',
            animationDelay: '0.9s',
          }}
        >
          <p className="font-oswald font-bold italic text-white uppercase leading-[1.4] sm:leading-[1.5] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] text-[0.72rem] sm:text-base md:text-lg lg:text-[1.35rem]">
            Cánh cửa bước vào "Lý Thuyết Chân Trời Thứ 2" sắp mở.
          </p>
          <p className="font-oswald font-bold italic text-white uppercase leading-[1.4] sm:leading-[1.5] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] text-[0.72rem] sm:text-base md:text-lg lg:text-[1.35rem]">
            Đăng ký ngay để nhận thông báo và đặc quyền ở giai đoạn Alpha/Beta Test.
          </p>
        </div>


        {/* ===== CTA BUTTON — centered at ~75% mobile, ~80% desktop ===== */}
        <div
          className="absolute z-10 left-0 right-0 flex justify-center animate-cine-fade-in-up"
          style={{
            top: 'clamp(85%, 80vw, 85%)',
            animationDelay: '1.5s',
          }}
        >
          <button
            onClick={() => setShowModal(true)}
            id="cta-register"
            className="
              animate-cine-pulse
              group relative inline-flex items-center justify-center
              px-8 sm:px-12 md:px-20
              py-2 sm:py-2.5 md:py-3
              bg-gradient-to-r from-[#e8760a] to-[#d4620a]
              hover:from-[#f08c1f] hover:to-[#e8760a]
              text-white font-oswald font-semibold uppercase
              text-[0.72rem] sm:text-[0.8rem]
              tracking-[0.18em]
              rounded-lg
              transition-all duration-500 ease-out
              hover:scale-[1.03]
              active:scale-[0.97]
              overflow-hidden
              cursor-pointer
              border-none outline-none
            "
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <span className="relative z-10">Đăng Ký Hẹn Trước</span>
          </button>
        </div>


        {/* ===== COPYRIGHT — bottom ===== */}
        <footer
          className="absolute bottom-0 left-0 right-0 z-10 text-center py-4 px-4 animate-cine-fade-in"
          style={{ animationDelay: '2.2s' }}
        >
          <p className="font-oswald text-[9px] sm:text-[10px] text-white/25 uppercase tracking-[0.18em]">
            Copyright © 2026 2HTSurvival.com. Trò chơi được phát triển và phát hành bởi người Việt. All rights reserved.
          </p>
        </footer>



        {/* ===== REGISTRATION MODAL ===== */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) { setShowModal(false); setSubmitSuccess(false); } }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <div
              className="relative w-full max-w-md rounded-xl overflow-hidden my-auto"
              style={{
                background: 'linear-gradient(145deg, rgba(15,17,25,0.97), rgba(8,10,16,0.99))',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 80px rgba(232,118,10,0.08), 0 25px 60px rgba(0,0,0,0.6)',
                animation: 'cine-scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#e8760a] to-transparent" />

              {/* Close button */}
              <button
                onClick={() => { setShowModal(false); setSubmitSuccess(false); }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none outline-none"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="px-5 py-6 sm:px-10 sm:py-10">

                {!submitSuccess ? (
                  <>
                    {/* Title */}
                    <h2 className="font-oswald font-bold italic text-white uppercase text-lg sm:text-xl tracking-[0.08em] text-center mb-2">
                      Đăng Ký Trải Nghiệm Beta
                    </h2>
                    <p className="font-oswald text-white/40 text-xs text-center mb-8 tracking-wide">
                      Nhận thông báo sớm nhất khi Alpha/Beta Test mở cửa
                    </p>

                    {/* Form */}
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        try {
                          // 👇 THAY URL NÀY bằng URL Google Apps Script của bạn
                          const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYn01GjfUE7e15xyQzLT5e8WXKnCa8x5HGewdrzJpueHQRzRZnyVExOQ9DnGvQhQTy/exec';
                          
                          await fetch(GOOGLE_SCRIPT_URL, {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData),
                          });
                          setSubmitSuccess(true);
                        } catch (err) {
                          console.error('Submit error:', err);
                          alert('Có lỗi xảy ra, vui lòng thử lại!');
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div>
                        <label className="block font-oswald text-[11px] text-white/50 uppercase tracking-[0.12em] mb-1.5">Họ và Tên</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Nhập họ và tên"
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white font-oswald text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8760a]/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-oswald text-[11px] text-white/50 uppercase tracking-[0.12em] mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="example@email.com"
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white font-oswald text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8760a]/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block font-oswald text-[11px] text-white/50 uppercase tracking-[0.12em] mb-1.5">Số Điện Thoại</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="0912 345 678"
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white font-oswald text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8760a]/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-[#e8760a] to-[#d4620a] hover:from-[#f08c1f] hover:to-[#e8760a] text-white font-oswald font-semibold uppercase text-sm tracking-[0.15em] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-none outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            Đang xử lý...
                          </span>
                        ) : 'Xác Nhận Đăng Ký'}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-6">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#e8760a]/10 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#e8760a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-oswald font-bold text-white uppercase text-lg tracking-wide mb-2">Đăng Ký Thành Công!</h3>
                    <p className="font-oswald text-white/40 text-xs tracking-wide mb-6">Chúng tôi sẽ liên hệ bạn khi Beta Test mở cửa.</p>
                    <button
                      onClick={() => { setShowModal(false); setSubmitSuccess(false); setFormData({ name: '', email: '', phone: '' }); }}
                      className="px-8 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 font-oswald text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer bg-transparent outline-none"
                    >
                      Đóng
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </section>


      {/* ================================================= */}
      {/*  SECTION 2 — SCROLL FOOTER STRIP                   */}
      {/*  Game launcher style bottom bar                    */}
      {/* ================================================= */}
      <section
        ref={stripRef}
        className={`
          relative w-full bg-[#000000]
          flex items-center justify-center
          transition-all duration-[1200ms] ease-out
          ${stripVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
          }
        `}
        style={{ height: '80px' }}
      >
        {/* Top edge — thin gradient separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Strip content */}
        <nav className="w-full flex items-center justify-center gap-6 sm:gap-10 md:gap-14 px-8 sm:px-16 md:px-24 lg:px-32">

          <Link
            to="/terms"
            className="
              font-oswald text-[11px] sm:text-xs font-semibold text-white/50
              uppercase tracking-[0.15em]
              hover:text-white/70
              transition-all duration-400 ease-out
              relative
              group
            "
          >
            Điều khoản và hỗ trợ
            {/* Subtle underline on hover */}
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-center" />
          </Link>

          {/* Separator dot */}
          <span className="w-[3px] h-[3px] rounded-full bg-white/20 flex-shrink-0" />

          <Link
            to="/privacy"
            className="
              font-oswald text-[11px] sm:text-xs font-semibold text-white/50
              uppercase tracking-[0.15em]
              hover:text-white/70
              transition-all duration-400 ease-out
              relative
              group
            "
          >
            Chính sách quyền riêng tư
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-center" />
          </Link>

        </nav>

        {/* Bottom edge — very subtle line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.03]" />
      </section>
    </>
  );
};

export default Hero;
