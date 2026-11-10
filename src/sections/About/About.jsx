import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles, Code2, Sparkle } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    label: 'Academic',
    value: '8.37 CPI',
    sub: 'B.Tech CSE · RIT',
    accent: 'var(--accent-coral)',
    subtle: 'var(--accent-coral-subtle)',
  },
  {
    Icon: Award,
    label: 'Hackathon',
    value: 'SIH \'25 Champion',
    sub: 'National 1st Place',
    accent: 'var(--accent-lime-dark)',
    subtle: 'var(--accent-lime-subtle)',
  },
  {
    Icon: Sparkles,
    label: 'Leadership',
    value: 'UI/UX Head',
    sub: 'OysterCode Club',
    accent: 'var(--accent-cobalt)',
    subtle: 'var(--accent-cobalt-subtle)',
  },
  {
    Icon: Code2,
    label: 'Focus',
    value: 'Full-Stack & AI',
    sub: 'React · FastAPI · PyTorch',
    accent: 'var(--accent-coral)',
    subtle: 'var(--accent-coral-subtle)',
  },
];

export const About = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="01"
          label="About"
          title="Curious mind. Creative builder."
          serifWord="Engineer at heart."
          subtitle="Bridging full-stack systems and applied machine learning — turning ambitious ideas into digital experiences that work."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Story + highlights */}
          <div>
            {/* Intro paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.15vw, 1.08rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
              }}
            >
              <p style={{ marginBottom: '1.15rem' }}>
                I am a Computer Science undergraduate at{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Rajarambapu Institute of Technology (RIT)</strong>{' '}
                with an{' '}
                <strong style={{ color: 'var(--accent-coral)' }}>8.37 CPI</strong>
                . My work centers around solving real engineering problems — combining resilient backends, responsive interfaces, and edge-optimized AI models.
              </p>
              <p style={{ marginBottom: '1.15rem' }}>
                Leading our team to first place in the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Smart India Hackathon 2025</strong>{' '}
                taught me the discipline required to build mission-critical systems under strict time and computational constraints.
              </p>
              <p>
                As the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>UI/UX Head at OysterCode Club</strong>
                , I translate complex architectures into clear, accessible interfaces that make technology empowering — not intimidating.
              </p>
            </motion.div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                borderLeft: '3px solid var(--accent-cobalt)',
                paddingLeft: '1.25rem',
                marginBottom: '2.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45,
                  display: 'block',
                }}
              >
                "Code that solves problems. Design that honors people."
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginTop: '0.4rem',
                }}
              >
                — Personal philosophy
              </span>
            </motion.div>

            {/* Highlight grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.85rem',
              }}
            >
              {HIGHLIGHTS.map((h, idx) => {
                const { Icon } = h;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="card-editorial"
                    style={{ padding: '1.1rem 1.25rem' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '8px',
                          backgroundColor: h.subtle,
                          color: h.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={13} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {h.label}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        fontSize: '0.98rem',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.15rem',
                      }}
                    >
                      {h.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {h.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Editorial photo / visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'sticky', top: '5.5rem' }}
          >
            <div
              className="card-editorial"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                position: 'relative',
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--accent-cobalt), var(--accent-lime), var(--accent-coral))',
                }}
              />

              {/* Photo container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-card-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {!imgError ? (
                  <img
                    src="./profile.jpg"
                    alt="Janhvi Bankar"
                    onError={() => setImgError(true)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : null}

                {/* Editorial Portrait Artboard Fallback */}
                {imgError && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at 50% 35%, var(--accent-cobalt-subtle) 0%, var(--bg-card-subtle) 75%)',
                      textAlign: 'center',
                      padding: '2.5rem 1.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Concentric rings */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        border: '1px dashed var(--accent-cobalt-border)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        border: '1px solid var(--accent-lime-border)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Monogram emblem */}
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-card)',
                        border: '2px solid var(--accent-cobalt-border)',
                        boxShadow: 'var(--shadow-cobalt)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          fontSize: '3.2rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1,
                        }}
                      >
                        JB
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      Janhvi Bankar
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-coral)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      Creative Technologist
                    </div>
                  </div>
                )}
              </div>

              {/* Caption bar */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Janhvi Bankar
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Sangola, Maharashtra, India
                  </div>
                </div>
                <div className="status-indicator">
                  <span className="pulse-dot" />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
