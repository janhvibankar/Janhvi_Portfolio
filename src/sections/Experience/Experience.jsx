import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Experience = () => {
  const { playSound } = useSound();
  const [activeExp, setActiveExp] = useState(experienceData[0].id);

  const exp = experienceData.find(e => e.id === activeExp) || experienceData[0];

  return (
    <section id="experience" className="section-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="site-container">
        <SectionHeader
          number="05"
          label="Leadership Experience"
          title="Campus Leadership &"
          serifWord="Community Roles"
          subtitle="Guiding UI/UX design systems, directing technical community outreach, and mentoring fellow developers."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'start',
          }}
          className="experience-layout"
        >
          {/* Left: Tab selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {experienceData.map((item) => {
              const isActive = activeExp === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { playSound('click'); setActiveExp(item.id); }}
                  className="card-editorial"
                  style={{
                    padding: '1.1rem 1.35rem',
                    textAlign: 'left',
                    borderColor: isActive ? 'var(--accent-cobalt-border)' : 'var(--border-hairline)',
                    backgroundColor: isActive ? 'var(--accent-cobalt-subtle)' : 'var(--bg-card)',
                    boxShadow: isActive ? 'var(--shadow-cobalt)' : 'none',
                    position: 'relative',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  {/* Active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="exp-active-indicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '3px',
                        backgroundColor: 'var(--accent-cobalt)',
                        borderTopLeftRadius: 'var(--radius-lg)',
                        borderBottomLeftRadius: 'var(--radius-lg)',
                      }}
                    />
                  )}

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.2rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: isActive ? 'var(--accent-coral)' : 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {item.period}
                      </span>
                      {item.current && (
                        <span
                          className="badge-tech badge-lime"
                          style={{ fontSize: '0.62rem', padding: '0.12rem 0.45rem' }}
                        >
                          Active
                        </span>
                      )}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.role}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        color: isActive ? 'var(--accent-cobalt)' : 'var(--text-secondary)',
                      }}
                    >
                      {item.organization}
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    style={{
                      color: isActive ? 'var(--accent-cobalt)' : 'var(--text-dim)',
                      flexShrink: 0,
                      transition: 'color var(--transition-fast)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detail panel */}
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="card-editorial"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              borderColor: 'var(--accent-cobalt-border)',
              boxShadow: 'var(--shadow-cobalt)',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-hairline)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: 'var(--accent-cobalt)',
                    fontWeight: 600,
                  }}
                >
                  @ {exp.organization}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
              }}
            >
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                // Core Responsibilities & Impact
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: 'var(--accent-cobalt)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech tags */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.6rem',
                }}
              >
                Skills Applied
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.technologies.map((t, ti) => (
                  <span key={ti} className="badge-tech" style={{ fontSize: '0.72rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
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
