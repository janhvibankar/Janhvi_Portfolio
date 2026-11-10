import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
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
          number="07"
          label="Credentials & Qualifications"
          title="Verified Professional & Academic Certifications"
          subtitle="Accredited technical credentials from premier institutions including IIT Madras, IIT Kharagpur (NPTEL), Ministry of Education, and Infosys."
        />

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
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
                className={`badge-tech ${isActive ? 'badge-accent' : ''}`}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-primary-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-hairline)'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-editorial card-editorial-accent"
                onClick={() => {
                  playSound('click');
                  onSelectCertificate(cert);
                }}
                data-cursor="explore"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px'
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="badge-tech badge-accent">{cert.badge}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {cert.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.4rem',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--accent-primary)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    style={{
                      fontSize: '0.88rem',
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

                {/* Footer Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-hairline)',
                    paddingTop: '1rem',
                    marginTop: '1.5rem'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    ID: {cert.credentialId}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)'
                    }}
                  >
                    <span>View Credential</span>
                    <ArrowUpRight size={14} />
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

