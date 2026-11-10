import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles, Code2, Users, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    label: 'Academic',
    value: '8.37 CPI',
    sub: 'B.Tech CSE · RIT (2023–2027)',
    accent: 'var(--accent-coral)',
    subtle: 'var(--accent-coral-subtle)',
  },
  {
    Icon: Award,
    label: 'Hackathon',
    value: 'SIH \'25 Champion',
    sub: 'National 1st Place Winner',
    accent: 'var(--accent-lime-dark)',
    subtle: 'var(--accent-lime-subtle)',
  },
  {
    Icon: Sparkles,
    label: 'Leadership',
    value: 'UI/UX Head',
    sub: 'OysterCode Club',
    accent: 'var(--accent-lavender)',
    subtle: 'var(--accent-lavender-subtle)',
  },
  {
    Icon: Code2,
    label: 'Focus',
    value: 'Full-Stack & Applied AI',
    sub: 'React · Flutter · Node · YOLO',
    accent: 'var(--accent-coral)',
    subtle: 'var(--accent-coral-subtle)',
  },
];

export const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="01"
          label="About Me"
          title="Curious mind. Creative builder."
          serifWord="Engineer at heart."
          subtitle="Software developer passionate about building meaningful applications, full-stack architectures, and applied AI/ML solutions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Authentic Narrative + Highlights + Creative Leadership Card */}
          <div>
            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.15vw, 1.08rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
              }}
            >
              <p style={{ marginBottom: '1.15rem' }}>
                I am a Computer Science undergraduate at{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Rajarambapu Institute of Technology (RIT), Islampur</strong>{' '}
                with an{' '}
                <strong style={{ color: 'var(--accent-coral)' }}>8.37 CPI</strong>
                . My focus lies in software engineering, full-stack application development, and practical applied AI/ML — turning real-world needs into clean, robust digital products.
              </p>
              <p style={{ marginBottom: '1.15rem' }}>
                Winning 1st place at the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Smart India Hackathon 2025</strong>{' '}
                with our AI-Based Bharatanatyam Learning App reinforced my dedication to solving complex engineering challenges through real-time computer vision, gesture tracking, and cross-platform mobile delivery.
              </p>
              <p>
                Beyond coding, I serve as the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>UI/UX Head at OysterCode Club</strong>
                {' '}and previously as{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Social Media Head at Cryptex Club</strong>
                , bridging human-centered design, technical leadership, and community collaboration.
              </p>
            </motion.div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                borderLeft: '3px solid var(--accent-lavender)',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45,
                  display: 'block',
                }}
              >
                "Building with code. Designing for people. Learning continuously."
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginTop: '0.4rem',
                }}
              >
                — Personal engineering principle
              </span>
            </motion.div>

            {/* 4-Card Highlight Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
              className="about-highlights-grid"
            >
              {HIGHLIGHTS.map((h, idx) => {
                const { Icon } = h;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="card-editorial"
                    style={{ padding: '1rem 1.15rem' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          backgroundColor: h.subtle,
                          color: h.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={13} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.66rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {h.label}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        fontSize: '0.96rem',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.1rem',
                      }}
                    >
                      {h.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {h.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Creative & Leadership Showcase with Photograph 17.jpeg */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="card-editorial"
              style={{
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '84px 1fr',
                gap: '1.15rem',
                alignItems: 'center',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-card-subtle)',
                border: '1px solid var(--border-hairline)',
              }}
            >
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1.5px solid var(--border-strong)',
                }}
              >
                <img
                  src="./images/creative-janhvi.jpeg"
                  alt="Janhvi Bankar — Campus Leadership"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <span className="badge-tech badge-lavender" style={{ fontSize: '0.64rem', padding: '0.15rem 0.5rem' }}>
                    <Users size={10} />
                    Community
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    OysterCode & Cryptex
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Campus Leadership & Collaborative Spirit
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Active mentor and event lead — conducting UI/UX workshops, coordinating coding hackathons, and fostering peer-to-peer technical growth.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Photograph (11.jpeg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'sticky', top: '5.5rem' }}
          >
            <div
              className="card-editorial"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                border: '1.5px solid var(--border-strong)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                style={{
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--accent-lavender), var(--accent-coral), var(--accent-lime))',
                }}
              />

              {/* Editorial Photograph 11.jpeg Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5.2',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-card-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {!imgError ? (
                  <img
                    src="./images/about-janhvi.jpeg"
                    alt="Janhvi Pradip Bankar — Editorial Profile"
                    onError={() => setImgError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />
                ) : null}

                {/* Fallback Artboard */}
                {imgError && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at 50% 35%, var(--accent-lavender-subtle) 0%, var(--bg-card-subtle) 75%)',
                      textAlign: 'center',
                      padding: '2.5rem 1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '4.5rem',
                        color: 'var(--accent-lavender)',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}
                    >
                      JPB
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      Janhvi Pradip Bankar
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-coral)' }}>
                      Software Developer
                    </span>
                  </div>
                )}
              </div>

              {/* Caption Bar */}
              <div
                style={{
                  padding: '1.15rem 1.35rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Janhvi Pradip Bankar
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    B.Tech CSE · CPI 8.37
                  </div>
                </div>
                <div className="status-indicator">
                  <span className="pulse-dot" />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Open to roles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-highlights-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .about-highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
