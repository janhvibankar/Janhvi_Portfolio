import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="01"
          label="About"
          title="Curious mind. Creative builder."
          serifWord="Engineer at heart."
          subtitle="I turn ideas into digital experiences and intelligent solutions, bridging full-stack systems and applied machine learning."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Concise Human Introduction */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                I am a Computer Science undergraduate at <strong style={{ color: 'var(--text-primary)' }}>Rajarambapu Institute of Technology (RIT)</strong> with an <strong style={{ color: 'var(--accent-coral)' }}>8.37 CPI</strong>. My journey centers around solving tangible engineering problems — combining resilient backends, responsive user interfaces, and edge-optimized AI models.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Leading our team to first place in the <strong style={{ color: 'var(--text-primary)' }}>Smart India Hackathon 2025</strong> taught me the discipline required to build mission-critical systems under strict time and computational constraints.
              </p>
              <p>
                As the <strong style={{ color: 'var(--text-primary)' }}>UI/UX Head at OysterCode Club</strong>, I enjoy translating complex architectures into clear, accessible interfaces that make technology approachable and empowering.
              </p>
            </motion.div>

            {/* Three Essential Focus Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem'
              }}
            >
              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-coral)', marginBottom: '0.35rem' }}>
                  <GraduationCap size={16} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Academic</span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                  8.37 CPI
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  B.Tech CSE, RIT
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-sage-dark)', marginBottom: '0.35rem' }}>
                  <Award size={16} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Hackathon</span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                  SIH '25 Champion
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  National 1st Place
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-coral)', marginBottom: '0.35rem' }}>
                  <Sparkles size={16} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Leadership</span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                  UI/UX Head
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  OysterCode Club
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photo Composition & Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="card-editorial"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                position: 'relative'
              }}
            >
              {/* Photo Frame Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-card-muted)',
                  border: '1px solid var(--border-hairline)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <img
                  src="./profile.jpg"
                  alt="Janhvi Bankar"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Stylized Editorial Fallback Monogram */}
                <div
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    padding: '2rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '3.5rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1,
                      marginBottom: '0.5rem'
                    }}
                  >
                    Janhvi Bankar
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-coral)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Computer Science Engineer
                  </span>
                </div>
              </div>

              {/* Caption & Philosophy */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3
                  }}
                >
                  "Code that solves problems. Design that honors people."
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  Janhvi Bankar · Sangola, Maharashtra, India
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
        }
      `}</style>
    </section>
  );
};
