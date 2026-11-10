import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Award, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { certificatesData } from '../../data/certificates';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

const CERT_ACCENTS = [
  { badge: 'badge-cobalt', accent: 'var(--accent-cobalt)', subtle: 'var(--accent-cobalt-subtle)' },
  { badge: 'badge-lime', accent: 'var(--accent-lime-dark)', subtle: 'var(--accent-lime-subtle)' },
  { badge: 'badge-coral', accent: 'var(--accent-coral)', subtle: 'var(--accent-coral-subtle)' },
  { badge: 'badge-cobalt', accent: 'var(--accent-cobalt)', subtle: 'var(--accent-cobalt-subtle)' },
];

export const Certificates = ({ onSelectCertificate, onViewAllCertificates }) => {
  const { playSound } = useSound();
  const [hoveredId, setHoveredId] = useState(null);

  // Take the 4 primary featured certificates for the homepage
  const featuredCerts = certificatesData.filter(c => c.featured).slice(0, 4);

  return (
    <section id="certificates" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="06"
          label="Certifications"
          title="Verified Technical"
          serifWord="Credentials"
          subtitle="Accredited academic & industry credentials from IIT Madras, IIT Kharagpur, Infosys Springboard, Cisco, and Coursera."
        />

        {/* Top bar with count & direct CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge-tech badge-cobalt" style={{ fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={13} />
              <span>4 Featured · {certificatesData.length} Total Verified</span>
            </span>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onViewAllCertificates();
            }}
            className="btn-ghost"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.84rem',
              padding: '0.5rem 1rem',
              fontWeight: 600,
              color: 'var(--accent-cobalt)'
            }}
          >
            <span>Browse Full Gallery ({certificatesData.length})</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 4 Featured Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {featuredCerts.map((cert, idx) => {
            const accentMeta = CERT_ACCENTS[idx % CERT_ACCENTS.length];
            const isHovered = hoveredId === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card-editorial"
                data-cursor="explore"
                onClick={() => {
                  playSound('click');
                  onSelectCertificate(cert);
                }}
                onMouseEnter={() => {
                  playSound('hover');
                  setHoveredId(cert.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  borderColor: isHovered ? accentMeta.accent : 'var(--border-hairline)',
                  boxShadow: isHovered ? `0 14px 36px ${accentMeta.subtle}` : 'none',
                  transition: 'all var(--transition-normal)',
                  backgroundColor: 'var(--bg-card)',
                  position: 'relative'
                }}
              >
                {/* Visual Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    height: '160px',
                    backgroundColor: 'var(--bg-card-subtle)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--border-hairline)'
                  }}
                >
                  {cert.thumbnailUrl ? (
                    <img
                      src={cert.thumbnailUrl}
                      alt={cert.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', color: accentMeta.accent }}>
                      <Award size={40} />
                    </div>
                  )}

                  {/* Top floating badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.65rem',
                      left: '0.65rem',
                      right: '0.65rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pointerEvents: 'none'
                    }}
                  >
                    <span className={`badge-tech ${accentMeta.badge}`} style={{ fontSize: '0.68rem' }}>
                      {cert.badge}
                    </span>
                    {cert.score && (
                      <span
                        style={{
                          backgroundColor: 'rgba(10, 17, 40, 0.88)',
                          backdropFilter: 'blur(4px)',
                          color: 'var(--accent-coral)',
                          border: '1px solid var(--border-hairline)',
                          borderRadius: '4px',
                          padding: '2px 7px',
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700
                        }}
                      >
                        {cert.score}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.45rem',
                      gap: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: accentMeta.accent,
                        fontWeight: 600
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em',
                      marginBottom: '0.45rem',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      flex: 1
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* Card Bottom */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-hairline)',
                      marginTop: 'auto'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.66rem',
                        color: 'var(--text-muted)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '140px'
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
                        color: accentMeta.accent
                      }}
                    >
                      <span>Preview</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Certifications Banner */}
        <div
          onClick={() => {
            playSound('click');
            onViewAllCertificates();
          }}
          style={{
            cursor: 'pointer',
            padding: '1.75rem 2rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-hairline)',
            backgroundColor: 'var(--bg-card-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            transition: 'all var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cobalt)';
            e.currentTarget.style.boxShadow = '0 12px 30px var(--accent-cobalt-subtle)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-hairline)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--accent-cobalt-subtle)',
                color: 'var(--accent-cobalt)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Award size={24} />
            </div>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem'
                }}
              >
                Explore Complete Certification Gallery
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Includes AI &amp; Machine Learning, Software Development, Core CS, and Cloud IoT credentials with PDF previews &amp; verification.
              </p>
            </div>
          </div>

          <div
            className="btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.86rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>View All ({certificatesData.length})</span>
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </section>
  );
};
