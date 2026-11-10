import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { certificatesData, certificateCategories } from '../../data/certificates';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Certificates = ({ onSelectCertificate }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');

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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '2.5rem'
          }}
        >
          {certificateCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat);
                }}
                className={`badge-tech ${isActive ? 'badge-sage' : ''}`}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 600 : 500,
                  backgroundColor: isActive ? 'var(--accent-sage-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-sage)' : 'var(--border-hairline)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="card-editorial card-editorial-accent"
                onClick={() => {
                  playSound('click');
                  onSelectCertificate(cert);
                }}
                data-cursor="explore"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 1.85rem)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '240px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span className="badge-tech badge-sage" style={{ fontSize: '0.7rem' }}>{cert.badge}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {cert.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em',
                      marginBottom: '0.3rem',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-coral)',
                      marginBottom: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-hairline)',
                    paddingTop: '0.85rem',
                    marginTop: '1.25rem'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    ID: {cert.credentialId}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-coral)'
                    }}
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
