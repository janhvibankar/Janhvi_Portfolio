import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Experience = () => {
  const { playSound } = useSound();
  const [activeExp, setActiveExp] = useState(experienceData[0].id);

  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="06"
          label="Trajectory & Leadership"
          title="Engineering Roles & Community Direction"
          subtitle="Directing design systems, mentoring developer cohorts, and spearheading technical initiatives across campus and research laboratories."
        />

        {/* Interactive Timeline Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start'
          }}
          className="experience-layout"
        >
          {/* Left Column: Role Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {experienceData.map((exp, idx) => {
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
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-hairline)',
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
                        width: '4px',
                        backgroundColor: 'var(--accent-primary)',
                        borderTopLeftRadius: 'var(--radius-lg)',
                        borderBottomLeftRadius: 'var(--radius-lg)'
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)'
                      }}
                    >
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="badge-tech badge-accent" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                        Active
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="card-editorial card-editorial-accent"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      @{exp.organization}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    // Core Responsibilities & Impact
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '4px' }} />
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
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Skills Applied
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="badge-tech">
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
    </section>
  );
};

