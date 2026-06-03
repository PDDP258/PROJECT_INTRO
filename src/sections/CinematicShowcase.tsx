import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollReveal from '@/components/ScrollReveal';

const images = [
  { src: '/images/mockup-hero.jpg', width: '34vw', label: '编辑界面' },
  { src: '/images/calendar-view.jpg', width: '20vw', label: '日历视图' },
  { src: '/images/theme-panel.jpg', width: '34vw', label: '主题面板' },
  { src: '/images/mockup-hero.jpg', width: '20vw', label: '书写体验' },
  { src: '/images/calendar-view.jpg', width: '34vw', label: '深色模式' },
  { src: '/images/theme-panel.jpg', width: '20vw', label: '个性配色' },
];

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gsapContextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    const lenis = (window as any).__lenis;
    if (!lenis) return;

    const ctx = gsap.context(() => {
      lenis.on('scroll', (e: any) => {
        const scrollX = -e.animatedScroll * 0.8;
        gsap.set(wrapper, { x: scrollX });

        const columns = wrapper.querySelectorAll('.cinematic-column');
        columns.forEach((col, i) => {
          const direction = i % 2 === 0 ? 1 : -1;
          gsap.to(col, {
            x: e.velocity * 0.5 * direction,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: true,
          });
        });

        const imgs = wrapper.querySelectorAll('.cinematic-image');
        gsap.to(imgs, {
          x: -e.velocity * 0.2,
          duration: 1,
          ease: 'power2.out',
          overwrite: true,
        });
      });
    }, section);

    gsapContextRef.current = ctx;

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      style={{
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '24px',
          zIndex: 10,
        }}
      >
        <ScrollReveal>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '4px',
            }}
          >
            {'// 界面掠影'}
          </div>
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: '28px',
              fontWeight: 600,
              color: 'var(--color-text-main)',
            }}
          >
            灵感漫游
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal Image Track */}
      <div
        ref={wrapperRef}
        className="cinematic-wrapper"
        style={{
          display: 'flex',
          gap: '40px',
          height: '100%',
          alignItems: 'center',
          paddingLeft: '10vw',
          paddingRight: '10vw',
          paddingTop: '80px',
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="cinematic-column"
            style={{
              flexShrink: 0,
              width: img.width,
              height: '70%',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              className="cinematic-image"
              src={img.src}
              alt={img.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
            {/* Label overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: '4px 10px',
                borderRadius: '4px',
                backdropFilter: 'blur(4px)',
              }}
            >
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
