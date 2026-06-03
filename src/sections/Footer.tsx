import ScrollReveal from '@/components/ScrollReveal';

const footerData = {
  download: {
    title: '下载',
    links: [
      { label: 'Android APK', href: '#cta' },
      { label: '版本历史', href: '#logs' },
    ],
  },
  about: {
    title: '关于',
    links: [
      { label: '功能特性', href: '#features' },
      { label: '灵感漫游', href: '#showcase' },
      { label: '开发团队', href: '#logs' },
    ],
  },
  legal: {
    title: '协议',
    links: [
      { label: '隐私政策', href: '#' },
      { label: '用户协议', href: '#' },
      { label: '数据安全说明', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer
      id="cta"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-text-muted)',
        padding: '80px 0 40px',
      }}
    >
      {/* CTA Banner */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
          marginBottom: '80px',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '16px',
              padding: '60px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '12px',
                  wordBreak: 'keep-all',
                }}
              >
                准备好开始记录了吗？
              </h2>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                下载小记日记，让每一天都值得被记住
              </p>
            </div>
            <a
              href="#"
              style={{
                display: 'inline-block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                letterSpacing: '1px',
                padding: '16px 40px',
                borderRadius: '40px',
                backgroundColor: 'var(--color-accent-terracotta)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,92,72,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              立即下载
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer Grid */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {Object.values(footerData).map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '20px',
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#') && link.href !== '#') {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '13px',
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
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '20px',
              }}
            >
              联系
            </h4>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                color: 'var(--color-text-main)',
                lineHeight: 1.8,
              }}
            >
              <div>PLLL 工作室 PDDP</div>
              <div
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '12px',
                  marginTop: '4px',
                }}
              >
                1638615339@qq.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(122,122,122,0.3)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              letterSpacing: '1px',
            }}
          >
            {'Flutter 3.x + Provider + SQLite'}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              letterSpacing: '1px',
            }}
          >
            {'2026 \u00A9 小记日记'}
          </div>
        </div>
      </div>
    </footer>
  );
}
