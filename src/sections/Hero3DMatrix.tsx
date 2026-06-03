import { useEffect, useRef } from 'react';

const fragments = [
  '2024.05.20', '星期六', '晴', '今日心情', '地铁', '深夜', '代码', '重启',
  '咖啡', '习惯性失眠', '1:42 AM', '旅行', '备忘录', '灵感',
  '樱花', '雨天', '读书笔记', '年度总结', '手冲咖啡', '晨跑',
];

const layerConfigs = [
  { z: -500, scale: 1.5, opacity: 0.3, anim: 'animate-layer-1', duration: 60 },
  { z: -300, scale: 1.3, opacity: 0.5, anim: 'animate-layer-2', duration: 50 },
  { z: -100, scale: 1.1, opacity: 0.7, anim: 'animate-layer-3', duration: 40 },
  { z: 0, scale: 1, opacity: 0.9, anim: 'animate-layer-4', duration: 30 },
  { z: 100, scale: 1, opacity: 1, anim: 'animate-layer-5', duration: 25 },
];

export default function Hero3DMatrix() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Ensure section is visible
    section.style.opacity = '1';
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--color-surface)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 3D Background Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        {layerConfigs.map((config, layerIdx) => (
          <div
            key={layerIdx}
            style={{
              position: 'absolute',
              width: '200%',
              height: '200%',
              left: '-50%',
              top: '-50%',
              fontSize: '24px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: 'center',
              gap: '20px',
              transform: `translateZ(${config.z}px) scale(${config.scale})`,
              opacity: config.opacity,
              animation: `${config.anim} ${config.duration}s linear infinite`,
            }}
          >
            {fragments.map((text, i) => (
              <span
                key={`${layerIdx}-${i}`}
                style={{
                  color: i % 5 === layerIdx % 5 ? 'var(--color-accent-terracotta)' : 'var(--color-text-muted)',
                  whiteSpace: 'nowrap',
                  padding: '4px 8px',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        ))}

        {/* Track layers for additional depth */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            whiteSpace: 'nowrap',
            animation: 'track-scroll-forward 80s linear infinite',
            opacity: 0.15,
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={`tf-${i}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                color: 'var(--color-text-muted)',
              }}
            >
              {fragments[i % fragments.length]}
            </span>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            whiteSpace: 'nowrap',
            animation: 'track-scroll-reverse 70s linear infinite',
            opacity: 0.1,
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            top: '60%',
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={`tr-${i}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: 'var(--color-text-muted)',
              }}
            >
              {fragments[(i + 5) % fragments.length]}
            </span>
          ))}
        </div>
      </div>

      {/* Foreground Content Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '600px',
          width: '90%',
          padding: '48px 40px',
          backgroundColor: 'rgba(13, 14, 16, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        {/* Small Label */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-accent-terracotta)',
            letterSpacing: '1px',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          {'> 每日启动 // 0x92A'}
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '20px',
            wordBreak: 'keep-all',
          }}
        >
          记录此刻，封存时光
        </h1>

        {/* Body Text */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '32px',
            maxWidth: '480px',
            margin: '0 auto 32px',
          }}
        >
          一个纯粹、私密且充满温度的数字日记本。支持手势加密、动态主题与多媒体混排。
        </p>

        {/* CTA Button */}
        <a
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            display: 'inline-block',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            letterSpacing: '1px',
            padding: '14px 40px',
            borderRadius: '40px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1.5px solid var(--color-accent-terracotta)',
            textDecoration: 'none',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = '#d4755c';
            el.style.boxShadow = '0 0 20px rgba(184, 92, 72, 0.3)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = 'var(--color-accent-terracotta)';
            el.style.boxShadow = 'none';
          }}
        >
          开始书写
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
          }}
        />
      </div>
    </section>
  );
}
