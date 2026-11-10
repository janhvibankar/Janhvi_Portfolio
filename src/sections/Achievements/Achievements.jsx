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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E66B48', '#A4A58A', '#D9CBB9', '#F5F0E8']
    });
  };

  return (
    <section id="achievements" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="05"
          label="Honors & Recognition"
          title="Competitive Excellence & Hackathon Victories"
          subtitle="Milestones celebrating national hackathon championships, rigorous research, and consistent academic distinction."
        />

        {/* Featured Hero Achievement: SIH 2025 */}
        {achievementsData.slice(0, 1).map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="card-editorial card-editorial-accent"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background trophy icon watermark */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                color: 'var(--accent-primary)',
                opacity: 0.04,
                pointerEvents: 'none'
              }}
            >
              <Trophy size={280} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="badge-tech badge-accent" style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}>
                  <Sparkles size={13} />
                  {ach.badgeText}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {ach.organization}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  // {ach.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                  lineHeight: 1.15
                }}
              >
                {ach.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: 'var(--accent-primary)',
                  marginBottom: '1.25rem'
                }}
              >
                {ach.subtitle}
              </p>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '780px',
                  marginBottom: '1.75rem'
                }}
              >
                {ach.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {ach.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action row with interactive celebrate button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCelebrate}
                  className="btn-primary"
                  style={{ fontSize: '0.88rem' }}
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
                    style={{ fontSize: '0.88rem' }}
                  >
                    <span>Inspect Winning Architecture</span>
                    <ArrowUpRight size={15} />
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-editorial"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge-tech">{ach.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {ach.year}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {ach.title}
                </h4>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-primary)', marginBottom: '0.85rem' }}>
                  {ach.subtitle}
                </p>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {ach.description}
                </p>
              </div>

              {ach.metrics && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    backgroundColor: 'var(--badge-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-hairline)'
                  }}
                >
                  {ach.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
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

