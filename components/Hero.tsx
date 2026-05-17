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
          className="absolute inset-0 w-full h-full object-cover z-[1] opacity-70"
        >
          <source src="/videos/Intro.mp4" type="video/mp4" />
        </video>

        {/* Video overlay — đảm bảo text vẫn đọc được trên video */}
        <div className="absolute inset-0 z-[2] bg-black/20" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-black/60" />


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


        {/* ===== HEADLINE — centered at ~66% ===== */}
        <div
          className="absolute z-10 left-0 right-0 animate-cine-fade-in-up text-center px-4"
          style={{
            top: '66%',
            animationDelay: '0.9s',
          }}
        >
          <p className="font-oswald font-bold italic text-white uppercase leading-[1.5] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            style={{ fontSize: 'clamp(0.65rem, 2.1vw, 1.35rem)' }}
          >
            Cánh cửa bước vào "Lý Thuyết Chân Trời Thứ 2" sắp mở.
          </p>
          <p className="font-oswald font-bold italic text-white uppercase leading-[1.5] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            style={{ fontSize: 'clamp(0.65rem, 2.1vw, 1.35rem)' }}
          >
            Đăng ký ngay để nhận thông báo và đặc quyền ở giai đoạn Alpha/Beta Test.
          </p>
        </div>


        {/* ===== CTA BUTTON — centered at ~80% ===== */}
        <div
          className="absolute z-10 left-0 right-0 flex justify-center animate-cine-fade-in-up"
          style={{
            top: '80%',
            animationDelay: '1.5s',
          }}
        >
          <a
            href="#register"
            id="cta-register"
            className="
              animate-cine-pulse
              group relative inline-flex items-center justify-center
              px-12 sm:px-16 md:px-20
              py-2.5 sm:py-3
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
            "
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <span className="relative z-10">Đăng Ký Hẹn Trước</span>
          </a>
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
