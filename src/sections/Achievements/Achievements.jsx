import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../../data/achievements';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Achievements = ({ onSelectProjectById }) => {
  const { playSound } = useSound();

  const handleCelebrate = () => {
    playSound('success');
    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.65 },
      colors: ['#B8D9B2', '#E98570', '#DDDCCF', '#F4F3EC']
    });
  };

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

        {/* Featured Hero Achievement: SIH 2025 */}
        {achievementsData.slice(0, 1).map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="card-editorial card-editorial-accent"
            style={{
              padding: 'clamp(2rem, 5vw, 3.25rem)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                <span className="badge-tech badge-sage" style={{ fontSize: '0.8rem', padding: '0.4rem 0.95rem' }}>
                  <Sparkles size={12} />
                  {ach.badgeText}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  {ach.organization}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent-coral)', fontWeight: 600 }}>
                  // {ach.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.65rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em',
                  marginBottom: '0.35rem',
                  lineHeight: 1.2
                }}
              >
                {ach.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: 'var(--accent-coral)',
                  marginBottom: '1.25rem',
                  fontWeight: 500
                }}
              >
                {ach.subtitle}
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '740px',
                  marginBottom: '1.75rem'
                }}
              >
                {ach.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {ach.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-sage-dark)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCelebrate}
                  className="btn-primary"
                  style={{ fontSize: '0.86rem' }}
                >
                  <Sparkles size={15} />
                  <span>Celebrate Milestone</span>
                </button>

                {ach.relatedProjectId && (
                  <button
                    onClick={() => {
                      playSound('click');
                      onSelectProjectById(ach.relatedProjectId);
                    }}
                    className="btn-secondary"
                    style={{ fontSize: '0.86rem' }}
                  >
                    <span>Inspect Winning Architecture</span>
                    <ArrowUpRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Secondary Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {achievementsData.slice(1).map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="card-editorial"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge-tech badge-sage">{ach.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {ach.year}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.3rem'
                  }}
                >
                  {ach.title}
                </h4>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-coral)', marginBottom: '0.85rem', fontWeight: 500 }}>
                  {ach.subtitle}
                </p>

                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
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
                    border: '1px solid var(--border-hairline)'
                  }}
                >
                  {ach.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
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
    </section>
  );
};
