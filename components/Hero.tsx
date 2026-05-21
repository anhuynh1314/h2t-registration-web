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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stripVisible, setStripVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Force autoplay video on mobile — hide until actually playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When video starts playing, fade it in
    const onPlaying = () => setVideoReady(true);
    video.addEventListener('playing', onPlaying);

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        console.warn('Video autoplay blocked, waiting for user tap:', err);
      }
    };

    // Try autoplay immediately
    tryPlay();

    // Retry on first user interaction (tap/click anywhere)
    const handleInteraction = () => {
      if (video.paused) {
        tryPlay();
      }
    };
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      video.removeEventListener('playing', onPlaying);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

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
        {/* Video starts invisible (opacity-0), fades in when actually playing */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore — webkit-playsinline for older iOS
          webkit-playsinline="true"
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover z-[1] hero-video transition-opacity duration-1000 ${
            videoReady ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <source src="/videos/Intro.mp4" type="video/mp4" />
        </video>

        {/* Invisible tap layer — catches touch events above video to prevent native play button */}
        {!videoReady && (
          <div className="absolute inset-0 z-[2] cursor-pointer" />
        )}

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
          <p className="font-oswald text-[10px] sm:text-xs font-semibold text-white/35 uppercase tracking-[0.18em]">
            Copyright © 2026 2HTSurvival.com. Trò chơi được phát triển và phát hành bởi người Việt. All rights reserved.
          </p>
        </footer>


        {/* ===== SOCIAL ICONS — bottom right ===== */}
        <div
          className="absolute bottom-16 sm:bottom-6 right-4 sm:right-6 z-10 flex flex-col gap-3 animate-cine-fade-in"
          style={{ animationDelay: '2.4s' }}
        >
          {/* Facebook Page */}
          <a
            href="https://www.facebook.com/profile.php?id=61589551115987"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook Page"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/50 hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/2htgamemmo/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/50 hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>

          {/* Facebook Group */}
          <a
            href="https://www.facebook.com/groups/2170501973726457/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook Group"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/50 hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@2htgame"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/50 hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.82A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:Viemediajsc@gmail.com"
            title="Email"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/50 hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 7L2 7"/>
            </svg>
          </a>
        </div>


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
        style={{ height: '44px' }}
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

        </nav>

        {/* Bottom edge — very subtle line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.03]" />
      </section>
    </>
  );
};

export default Hero;
