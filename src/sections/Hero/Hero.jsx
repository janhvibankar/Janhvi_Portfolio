import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, Code2, Cpu, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { useSound } from '../../context/SoundContext';

// Floating interactive chips orbiting the hero photograph
const FloatingHeroGraphics = ({ mouseX, mouseY }) => {
  const x1 = useTransform(mouseX, [-300, 300], [-10, 10]);
  const y1 = useTransform(mouseY, [-300, 300], [-8, 8]);
  const x2 = useTransform(mouseX, [-300, 300], [12, -12]);
  const y2 = useTransform(mouseY, [-300, 300], [10, -10]);

  return (
    <>
      {/* 1. Top-Left: Mini Code Snippet Chip */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '6%',
          left: '-4%',
          zIndex: 4,
          x: x1,
          y: y1,
        }}
        className="hero-floating-card"
      >
        <div
          style={{
            padding: '0.65rem 0.95rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              backgroundColor: 'var(--accent-lavender-subtle)',
              color: 'var(--accent-lavender)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Terminal size={14} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-coral)',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              const role = "Software Developer";
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
              }}
            >
              Building with code
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Top-Right: Applied AI/ML Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '12%',
          right: '-4%',
          zIndex: 4,
          x: x2,
          y: y2,
        }}
        className="hero-floating-card"
      >
        <div
          style={{
            padding: '0.6rem 0.95rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-lavender)',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-cobalt)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <Cpu size={14} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.01em' }}>
            Applied AI/ML
          </span>
        </div>
      </motion.div>

      {/* 3. Bottom-Left: Full-Stack Development Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          zIndex: 4,
          x: x2,
          y: y2,
        }}
        className="hero-floating-card"
      >
        <div
          style={{
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--accent-coral-border)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'var(--accent-coral-subtle)',
              color: 'var(--accent-coral)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Layers size={13} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Full-Stack Development
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-muted)' }}>
              Flutter · React · Node.js
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom-Right: SIH '25 Champion Chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-2%',
          zIndex: 4,
          x: x1,
          y: y1,
        }}
        className="hero-floating-card"
      >
        <div
          style={{
            padding: '0.55rem 0.95rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-lime)',
            color: '#0A1128',
            boxShadow: 'var(--shadow-lime)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            border: '1.5px solid rgba(0,0,0,0.08)',
          }}
        >
          <Sparkles size={13} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 800 }}>
            SIH '25 Winner
          </span>
        </div>
      </motion.div>
    </>
  );
};

export const Hero = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const containerRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Software Developer',
    'Full-Stack Developer',
    'Applied AI / ML Enthusiast',
    'Creative Problem Solver',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((r) => (r + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 35, stiffness: 90 });
  const springY = useSpring(mouseY, { damping: 35, stiffness: 90 });

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
        minHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 9vw, 8rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow matching navy & lavender palette */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-lavender-subtle) 0%, transparent 68%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(70px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-coral-subtle) 0%, transparent 68%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(70px)',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Status Row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <div className="status-indicator">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.84rem' }}>
                {profileData.availability.status}
              </span>
            </div>
            <span className="badge-tech badge-lime">
              <Sparkles size={11} />
              SIH '25 Winner
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              color: 'var(--text-muted)',
            }}
          >
            Sangola, Maharashtra, India
          </span>
        </motion.div>

        {/* Asymmetric Hero Grid: Left Content + Right Photograph Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.95fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
          className="hero-main-grid"
        >
          {/* LEFT: Typographic & Personal Branding Content */}
          <div>
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.06em',
                color: 'var(--accent-lavender)',
                marginBottom: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              <span>Software Developer</span>
              <span style={{ color: 'var(--border-strong)' }}>·</span>
              <span>Full-Stack & Applied AI/ML</span>
            </motion.div>

            {/* Name Lockup */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={{ marginBottom: '1rem' }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 6.2vw, 5.25rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  margin: 0,
                  fontWeight: 800,
                }}
              >
                <span>Janhvi Pradip</span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    display: 'block',
                    color: 'var(--accent-coral)',
                    marginTop: '-0.08em',
                  }}
                >
                  Bankar
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                height: '2rem',
                overflow: 'hidden',
                marginBottom: '1.25rem',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                    color: 'var(--accent-lavender)',
                    letterSpacing: '-0.015em',
                    position: 'absolute',
                  }}
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Human Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.68,
                maxWidth: '540px',
                marginBottom: '2rem',
              }}
            >
              {profileData.aboutBrief} Combining clean architecture, responsive design, and practical AI implementations into solutions that deliver real-world impact.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.46 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </MagneticButton>

              <MagneticButton
                onClick={() => { playSound('click'); onOpenResume(); }}
                className="btn-secondary"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={15} />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="btn-ghost"
              >
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { href: profileData.contact.github, Icon: Github, label: 'GitHub' },
                { href: profileData.contact.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profileData.contact.email}`, Icon: Mail, label: profileData.contact.email },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound('hover')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.84rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                  }}
                  className="hero-social-link"
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Prominent Photograph Composition with Floating Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem 1rem',
            }}
            className="hero-photo-wrapper"
          >
            {/* Background Orbital Rings & Soft Gradient */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '105%',
                height: '105%',
                borderRadius: 'var(--radius-xl)',
                background: 'radial-gradient(circle at 50% 50%, var(--accent-lavender-subtle) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '48%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '92%',
                height: '92%',
                borderRadius: '34px',
                border: '1.5px dashed var(--accent-lavender-border)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* Primary Portrait Card Container */}
            <motion.div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '430px',
                borderRadius: '28px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--border-strong)',
                boxShadow: 'var(--shadow-lg)',
                aspectRatio: '4 / 5.2',
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="./images/hero-janhvi.jpeg"
                alt="Janhvi Pradip Bankar — Software Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />

              {/* Fallback portrait container if image path issue arises */}
              <div
                style={{
                  display: 'none',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  padding: '2rem',
                  background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '4.5rem',
                    color: 'var(--accent-lavender)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  JPB
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                  Janhvi Pradip Bankar
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-coral)' }}>
                  Software Developer
                </div>
              </div>

              {/* Subtle Bottom Card Overlay Strip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem 1.25rem 1rem 1.25rem',
                  background: 'linear-gradient(to top, rgba(10, 17, 40, 0.88) 0%, rgba(10, 17, 40, 0.4) 65%, transparent 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  zIndex: 3,
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.98rem', color: '#FFFFFF' }}>
                    Janhvi Pradip Bankar
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-lime)' }}>
                    B.Tech CSE · RIT (CPI: 8.37)
                  </div>
                </div>
                <div
                  style={{
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#FFFFFF',
                    fontWeight: 600,
                  }}
                >
                  SIH 2025 Winner
                </div>
              </div>
            </motion.div>

            {/* Orbiting Floating Chips */}
            <FloatingHeroGraphics mouseX={springX} mouseY={springY} />
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--text-dim)' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-photo-wrapper {
            order: -1;
            max-width: 380px;
            margin: 0 auto;
          }
          .hero-floating-card {
            transform: scale(0.88) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-photo-wrapper {
            max-width: 320px;
          }
        }
        .hero-social-link:hover {
          color: var(--accent-lavender) !important;
        }
      `}</style>
    </section>
  );
};
