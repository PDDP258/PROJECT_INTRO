import { useEffect, useRef, useState } from 'react';

export default function GlassRefraction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        backgroundColor: 'transparent',
      }}
    >
      {/* SVG Filter - only render when visible */}
      {isVisible && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="glass-refraction">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
              <feSpecularLighting
                in="blur"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="20"
                lightingColor="#ffffff"
                result="specOut"
              >
                <fePointLight x="-5000" y="-10000" z="20000" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
              <feSpecularLighting
                in="blur"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="20"
                lightingColor="#ffffff"
                result="specOut2"
              >
                <fePointLight x="5000" y="10000" z="10000" />
              </feSpecularLighting>
              <feComposite in="specOut2" in2="SourceAlpha" operator="in" result="specOut2" />
              <feComposite
                in="specOut"
                in2="specOut2"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litPaint"
              />
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="bumpMap" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="bumpMap"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feComposite
                in="litPaint"
                in2="SourceGraphic"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
              />
            </filter>
          </defs>
        </svg>
      )}

      {/* Refraction Medium - Background Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url("/images/editorial-pattern.png")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          filter: 'contrast(1.2) brightness(0.9)',
          animation: 'shift-background 20s linear infinite',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        {/* Decorative radial lines */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, transparent 30%, rgba(184,92,72,0.1) 70%)',
          }}
        />
      </div>

      {/* Glass Ball */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          boxShadow:
            'inset -10px -10px 20px rgba(0,0,0,0.2), inset 10px 10px 20px rgba(255,255,255,0.8), 0 15px 25px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: isVisible ? 'url(#glass-refraction)' : 'none',
          backgroundColor: 'rgba(255,255,255,0.05)',
          overflow: 'hidden',
          transition: 'filter 1s ease',
        }}
      >
        {/* Inner content visible through refraction */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("/images/editorial-pattern.png")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
            animation: 'shift-background 15s linear infinite',
            opacity: 0.3,
          }}
        />
      </div>

      {/* Text overlay outside the ball */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Noto Serif SC', serif",
          color: 'var(--color-bg)',
          fontSize: '24px',
          letterSpacing: '2px',
          fontWeight: 600,
          zIndex: 2,
          pointerEvents: 'none',
          textShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        安全
      </div>
    </div>
  );
}
