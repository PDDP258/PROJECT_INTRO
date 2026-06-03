import { useEffect, useState } from 'react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '功能特性', href: '#features' },
  { label: '灵感漫游', href: '#showcase' },
  { label: '开发者', href: '#logs' },
];

export default function TerminalNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(253,246,227,0.95)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: '1px solid var(--color-text-muted)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--color-text-main)',
            textDecoration: 'none',
            letterSpacing: '1px',
          }}
        >
          小记日记
        </a>

        {/* Center Links */}
        <div
          className="hidden md:flex"
          style={{
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-text-main)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--color-accent-terracotta)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--color-text-main)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download Button */}
        <a
          href="#cta"
          onClick={(e) => handleClick(e, '#cta')}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            letterSpacing: '1px',
            padding: '10px 24px',
            borderRadius: '40px',
            backgroundColor: 'var(--color-text-main)',
            color: 'var(--color-bg)',
            textDecoration: 'none',
            transition: 'background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = 'var(--color-bg)';
            el.style.color = 'var(--color-text-main)';
            el.style.boxShadow = 'inset 0 0 0 1px var(--color-text-main)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = 'var(--color-text-main)';
            el.style.color = 'var(--color-bg)';
            el.style.boxShadow = 'none';
          }}
        >
          下载 APP
        </a>
      </div>
    </nav>
  );
}
