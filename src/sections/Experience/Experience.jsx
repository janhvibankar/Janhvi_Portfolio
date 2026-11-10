import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Experience = () => {
  const { playSound } = useSound();
  const [activeExp, setActiveExp] = useState(experienceData[0].id);

  return (
    <section id="experience" className="section-wrapper" style={{ paddingTop: '2.5rem' }}>
      <div className="site-container">
        <SectionHeader
          number="05"
          label="Experience"
          title="Leadership & Engineering"
          serifWord="Roles"
          subtitle="Directing design systems, mentoring developer cohorts, and investigating distributed systems architectures."
        />

        {/* Interactive Timeline Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start'
          }}
          className="experience-layout"
        >
          {/* Left Column: Role Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {experienceData.map((exp) => {
              const isActive = activeExp === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    playSound('click');
                    setActiveExp(exp.id);
                  }}
                  className="card-editorial"
                  style={{
                    padding: '1.15rem 1.35rem',
                    textAlign: 'left',
                    borderColor: isActive ? 'var(--accent-sage)' : 'var(--border-hairline)',
                    backgroundColor: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                    position: 'relative',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="exp-active-indicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '3.5px',
                        backgroundColor: 'var(--accent-sage)',
                        borderTopLeftRadius: 'var(--radius-lg)',
                        borderBottomLeftRadius: 'var(--radius-lg)'
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        color: isActive ? 'var(--accent-coral)' : 'var(--text-muted)'
                      }}
                    >
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="badge-tech badge-sage" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                        Active
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.15rem'
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {exp.organization}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Role Breakdown */}
          {(() => {
            const exp = experienceData.find(e => e.id === activeExp) || experienceData[0];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="card-editorial card-editorial-accent"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: 'var(--accent-coral)', fontWeight: 500 }}>
                      @{exp.organization}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    // Core Responsibilities & Impact
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-sage-dark)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.65rem'
                    }}
                  >
                    Skills Applied
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="badge-tech" style={{ fontSize: '0.72rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .experience-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
