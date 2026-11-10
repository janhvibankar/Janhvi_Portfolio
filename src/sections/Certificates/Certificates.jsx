import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Shield } from 'lucide-react';
import { certificatesData, certificateCategories } from '../../data/certificates';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

// Accent cycling for visual variety
const CERT_ACCENTS = [
  { badge: 'badge-cobalt', accent: 'var(--accent-cobalt)', subtle: 'var(--accent-cobalt-subtle)' },
  { badge: 'badge-lime', accent: 'var(--accent-lime-dark)', subtle: 'var(--accent-lime-subtle)' },
  { badge: 'badge-coral', accent: 'var(--accent-coral)', subtle: 'var(--accent-coral-subtle)' },
];

export const Certificates = ({ onSelectCertificate }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="06"
          label="Credentials"
          title="Verified Certifications"
          serifWord="& Qualifications"
          subtitle="Accredited technical credentials from premier institutions including IIT Madras, IIT Kharagpur (NPTEL), and Infosys Springboard."
        />

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.5rem' }}>
          {certificateCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { playSound('click'); setActiveCategory(cat); }}
                className="badge-tech"
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-cobalt-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-cobalt)' : 'var(--border-hairline)',
                  color: isActive ? 'var(--accent-cobalt)' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-style certificate grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => {
              const accentMeta = CERT_ACCENTS[idx % CERT_ACCENTS.length];
              const isHovered = hoveredId === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="card-editorial"
                  data-cursor="explore"
                  onClick={() => { playSound('click'); onSelectCertificate(cert); }}
                  onMouseEnter={() => { playSound('hover'); setHoveredId(cert.id); }}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    overflow: 'hidden',
                    borderColor: isHovered ? accentMeta.accent : 'var(--border-hairline)',
                    boxShadow: isHovered ? `0 12px 36px ${accentMeta.subtle}` : 'none',
                    transition: 'all var(--transition-normal)',
                    position: 'relative',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: accentMeta.accent,
                      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.35s ease',
                    }}
                  />

                  <div style={{ padding: 'clamp(1.35rem, 2.5vw, 1.75rem)' }}>
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.85rem',
                        gap: '0.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: accentMeta.subtle,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Shield size={14} style={{ color: accentMeta.accent }} />
                        </div>
                        <span className={`badge-tech ${accentMeta.badge}`} style={{ fontSize: '0.68rem' }}>
                          {cert.badge}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          flexShrink: 0,
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>

                    {/* Title & issuer */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.015em',
                        marginBottom: '0.3rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        color: accentMeta.accent,
                        marginBottom: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      style={{
                        fontSize: '0.84rem',
                        lineHeight: 1.55,
                        color: 'var(--text-secondary)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      padding: '0.85rem 1.5rem',
                      borderTop: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: isHovered ? accentMeta.subtle : 'transparent',
                      transition: 'background-color var(--transition-fast)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '160px',
                      }}
                    >
                      ID: {cert.credentialId}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: accentMeta.accent,
                      }}
                    >
                      Inspect
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
