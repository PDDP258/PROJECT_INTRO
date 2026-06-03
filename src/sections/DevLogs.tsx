import ScrollReveal from '@/components/ScrollReveal';

const logs = [
  { version: 'v1.25.0', date: '2026-05-12', desc: '修复了习惯打卡在特定时区下的统计偏移问题' },
  { version: 'v1.24.0', date: '2026-04-28', desc: '新增「自言自语」AI 深度共情模式' },
  { version: 'v1.23.0', date: '2026-04-10', desc: '优化星空主题粒子系统，新增黄金主题' },
  { version: 'v1.22.0', date: '2026-03-20', desc: '扭蛋系统上线，84 枚徽章全量发布' },
  { version: 'v1.20.0', date: '2026-02-15', desc: '速记浮窗功能上线，支持拖拽贴边与快速记录' },
  { version: 'v1.18.0', date: '2026-01-08', desc: '日记影院功能上线，支持电影式回顾播放' },
];

export default function DevLogs() {
  return (
    <section
      id="logs"
      style={{
        backgroundColor: 'var(--color-accent-terracotta)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative noise overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("/images/editorial-pattern.png")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          gap: '80px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Title */}
        <div style={{ flex: '0 0 240px' }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(253,246,227,0.6)',
                marginBottom: '12px',
              }}
            >
              {'// 持续迭代'}
            </div>
            <h2
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: 'var(--color-bg)',
                lineHeight: 1.2,
                marginBottom: '8px',
                wordBreak: 'keep-all',
              }}
            >
              开发日志
            </h2>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                color: 'rgba(253,246,227,0.5)',
                letterSpacing: '1px',
              }}
            >
              {'// LOGS'}
            </div>
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: 'var(--color-bg)',
                marginTop: '24px',
                opacity: 0.5,
              }}
            />
          </ScrollReveal>
        </div>

        {/* Right: Log Entries */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {logs.map((log, i) => (
              <ScrollReveal key={log.version} delay={i * 60}>
                <div
                  style={{
                    padding: '18px 0',
                    borderBottom: '1px solid rgba(253,246,227,0.15)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'baseline',
                    cursor: 'default',
                    transition: 'padding-left 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '16px';
                    const cursor = e.currentTarget.querySelector('.log-cursor') as HTMLElement;
                    if (cursor) cursor.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0';
                    const cursor = e.currentTarget.querySelector('.log-cursor') as HTMLElement;
                    if (cursor) cursor.style.opacity = '0';
                  }}
                >
                  {/* Blinking cursor */}
                  <span
                    className="log-cursor"
                    style={{
                      position: 'absolute',
                      left: '-4px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '14px',
                      color: 'var(--color-bg)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      animation: 'cursor-blink 1s step-end infinite',
                    }}
                  >
                    {'\u258B'}
                  </span>

                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-bg)',
                      minWidth: '70px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {log.version}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      color: 'rgba(253,246,227,0.5)',
                      minWidth: '100px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {log.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      color: 'rgba(253,246,227,0.85)',
                      lineHeight: 1.5,
                    }}
                  >
                    {log.desc}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
