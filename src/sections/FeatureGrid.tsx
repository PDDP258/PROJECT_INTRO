import ScrollReveal from '@/components/ScrollReveal';
import GlassRefraction from '@/components/GlassRefraction';

const features = [
  {
    num: '01',
    title: '私密手势锁',
    desc: '九宫格密码 + 指纹面容识别，本地 AES 加密存储，密码备份图片防遗忘',
  },
  {
    num: '02',
    title: '智能日历视图',
    desc: '全年日记分布一目了然，有图日期自动显示缩略，支持年份快速跳转回顾',
  },
  {
    num: '03',
    title: '丰富日记编辑',
    desc: '文字图片混合排版，自定义贴图系统，标签分类管理，纪念日自动提醒',
  },
  {
    num: '04',
    title: '个性化主题',
    desc: '14 套精美主题含 5 款动态背景，支持自定义配色，打造专属书写风格',
  },
  {
    num: '05',
    title: '自言自语',
    desc: '聊天式双身份记录体验，AI 共情开关，把日记写成与自己的对话',
  },
  {
    num: '06',
    title: '速记浮窗',
    desc: '悬浮按钮拖拽贴边，双击展开速记面板，灵感一闪即刻捕捉',
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: '120px 0',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Vertical Title */}
      <div
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'left center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.15)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        FEATURES — 核心功能
      </div>

      {/* Circular Badge */}
      <div
        style={{
          position: 'absolute',
          right: '40px',
          top: '80px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(184,92,72,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'spin 30s linear infinite',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--color-accent-terracotta)',
          }}
        >
          v1.25
        </span>
      </div>

      {/* Content Layout */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          gap: '80px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Glass Refraction + App Image */}
        <div
          style={{
            flex: '0 0 300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            position: 'sticky',
            top: '120px',
          }}
          className="hidden lg:flex"
        >
          <ScrollReveal>
            <GlassRefraction />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div
              style={{
                width: '220px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(-4deg) rotateX(2deg) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(-8deg) rotateX(4deg)';
              }}
            >
              <img
                src="/images/mockup-hero.jpg"
                alt="App 编辑界面"
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Feature List */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          {/* Section Header */}
          <ScrollReveal>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-accent-terracotta)',
                marginBottom: '12px',
              }}
            >
              {'// 功能刻度'}
            </div>
            <h2
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '16px',
                wordBreak: 'keep-all',
              }}
            >
              每一个功能，都为你而生
            </h2>
            <div
              style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--color-accent-terracotta)',
                marginBottom: '60px',
              }}
            />
          </ScrollReveal>

          {/* Feature Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {features.map((feature, i) => (
              <ScrollReveal key={feature.num} delay={i * 80}>
                <div
                  style={{
                    padding: '28px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start',
                    cursor: 'default',
                    transition: 'padding-left 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '12px';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-text-muted)',
                      minWidth: '32px',
                      paddingTop: '4px',
                    }}
                  >
                    {feature.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '8px',
                        wordBreak: 'keep-all',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '13px',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.45)',
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
