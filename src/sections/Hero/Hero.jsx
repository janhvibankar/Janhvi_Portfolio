import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { useSound } from '../../context/SoundContext';

export const Hero = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const containerRef = useRef(null);

  // Subtle interactive parallax for generative sculpture
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  const rotateX = useTransform(springY, [-250, 250], [8, -8]);
  const rotateY = useTransform(springX, [-250, 250], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="section-wrapper"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6.5rem, 10vw, 8.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Subtle status row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 3.5vw, 3rem)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="status-indicator">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                {profileData.availability.status}
              </span>
            </div>

            <span className="badge-tech badge-sage">
              <Sparkles size={12} />
              SIH '25 Winner
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--text-muted)'
            }}
          >
            Sangola, Maharashtra, India
          </span>
        </motion.div>

        {/* Hero Asymmetric Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
          }}
          className="hero-main-grid"
        >
          {/* Left Column: Typographic Lockup */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                color: 'var(--accent-coral)',
                marginBottom: '0.85rem',
                fontWeight: 500
              }}
            >
              Computer Science Engineer · Full-Stack & AI/ML
            </motion.div>

            {/* Editorial Name Treatment: Sans + Italic Serif interplay */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 7.5vw, 5.75rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, display: 'block' }}>
                  Janhvi
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    display: 'block',
                    marginTop: '-0.08em'
                  }}
                >
                  Bankar
                </span>
              </h1>
            </motion.div>

            {/* Concise Human Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '580px',
                marginBottom: '2.25rem'
              }}
            >
              "I turn ideas into digital experiences and intelligent solutions."
              <span style={{ display: 'block', marginTop: '0.4rem', fontSize: '0.98rem', color: 'var(--text-muted)' }}>
                Blending distributed systems engineering, computer vision, and thoughtful interface craft.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.25rem'
              }}
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  playSound('click');
                  onOpenResume();
                }}
                className="btn-secondary"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="btn-ghost"
              >
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>

            {/* Clean Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.25rem',
                flexWrap: 'wrap'
              }}
            >
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                onMouseEnter={() => playSound('hover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Mail size={15} />
                <span>{profileData.contact.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Organic Geometric Sculpture */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-visual-col"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Organic geometric background shapes */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-15%',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-sage-subtle)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15%',
                  left: '-10%',
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-coral-subtle)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none'
                }}
              />

              {/* Card top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em'
                  }}
                >
                  DIGITAL IDENTITY
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-coral)',
                    fontWeight: 500
                  }}
                >
                  B.TECH CSE · 8.37
                </span>
              </div>

              {/* Center Medallion: Monogram in Instrument Serif */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto 0'
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-primary)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '3rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1
                    }}
                  >
                    JB
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Janhvi Bankar
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.2rem'
                  }}
                >
                  Rajarambapu Institute of Technology
                </div>
              </div>

              {/* Card Bottom: Core focus tags */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>Focus: Full-Stack & AI</span>
                <span style={{ color: 'var(--accent-sage-dark)', fontWeight: 600 }}>SIH '25 Champion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual-col {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
