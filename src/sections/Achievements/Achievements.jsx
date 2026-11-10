import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, Sparkles, CheckCircle2, Trophy, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../../data/achievements';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Achievements = ({ onSelectProjectById }) => {
  const { playSound } = useSound();
  const [hovered, setHovered] = useState(null);

  const handleCelebrate = () => {
    playSound('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D9F36A', '#6258E8', '#FF785E', '#F7F3EA'],
    });
  };

  const heroAch = achievementsData[0];
  const secondaryAchs = achievementsData.slice(1);

  return (
    <section id="achievements" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="04"
          label="Honors"
          title="Competitive Milestones"
          serifWord="& Recognition"
          subtitle="National hackathon championships, distributed systems research, and consistent academic distinction."
        />

        {/* SIH 2025 Hero Achievement */}
        {heroAch && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '3rem', position: 'relative' }}
          >
            <div
              className="card-editorial"
              style={{
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                borderRadius: 'var(--radius-xl)',
                borderColor: 'var(--accent-lime-border)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Background lime accent glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--accent-lime-subtle) 0%, transparent 65%)',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Badges row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '1.1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="badge-tech badge-lime" style={{ fontSize: '0.78rem', padding: '0.4rem 1rem' }}>
                    <Trophy size={12} />
                    {heroAch.badgeText}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {heroAch.organization}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--accent-coral)',
                      fontWeight: 600,
                    }}
                  >
                    // {heroAch.year}
                  </span>
                </div>

                {/* Two-column layout */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.3fr 1fr',
                    gap: 'clamp(2rem, 4vw, 3.5rem)',
                    alignItems: 'start',
                  }}
                  className="achievement-hero-grid"
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        marginBottom: '0.4rem',
                        lineHeight: 1.1,
                      }}
                    >
                      {heroAch.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: 'var(--accent-coral)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {heroAch.subtitle}
                    </p>

                    <p
                      style={{
                        fontSize: '0.98rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {heroAch.description}
                    </p>

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button onClick={handleCelebrate} className="btn-lime" style={{ fontSize: '0.84rem' }}>
                        <Sparkles size={14} />
                        <span>Celebrate!</span>
                      </button>
                      {heroAch.relatedProjectId && (
                        <button
                          onClick={() => { playSound('click'); onSelectProjectById(heroAch.relatedProjectId); }}
                          className="btn-secondary"
                          style={{ fontSize: '0.84rem' }}
                        >
                          <span>Inspect Winning Architecture</span>
                          <ArrowUpRight size={13} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.85rem',
                      }}
                    >
                      // Key Highlights
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {heroAch.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                          style={{
                            display: 'flex',
                            gap: '0.6rem',
                            alignItems: 'flex-start',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            style={{ color: 'var(--accent-lime-dark)', flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {secondaryAchs.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="card-editorial"
              style={{
                padding: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              whileHover={{ y: -4, borderColor: 'var(--accent-cobalt-border)', boxShadow: 'var(--shadow-cobalt)' }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span className="badge-tech badge-cobalt" style={{ fontSize: '0.68rem' }}>
                    {ach.category}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {ach.year}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.3rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {ach.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--accent-coral)',
                    marginBottom: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  {ach.subtitle}
                </p>
                <p
                  style={{
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.1rem',
                  }}
                >
                  {ach.description}
                </p>
              </div>

              {ach.metrics && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  {ach.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .achievement-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
