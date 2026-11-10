import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, ExternalLink, Code2, Cpu, Layers } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { useSound } from '../../context/SoundContext';

// Floating card data for the right visual composition
const FLOAT_CARDS = [
  {
    id: 'sih',
    icon: Sparkles,
    label: 'SIH 2025',
    sub: 'National Champion',
    color: 'var(--accent-lime)',
    textColor: '#151827',
    x: '8%',
    y: '10%',
    delay: 0.6,
    rotate: -5,
  },
  {
    id: 'fullstack',
    icon: Layers,
    label: 'Full-Stack',
    sub: 'React · Node · FastAPI',
    color: 'var(--accent-cobalt)',
    textColor: '#FFFFFF',
    x: '55%',
    y: '6%',
    delay: 0.75,
    rotate: 4,
  },
  {
    id: 'aiml',
    icon: Cpu,
    label: 'AI / ML',
    sub: 'YOLOv8 · PyTorch · RAG',
    color: 'var(--accent-coral)',
    textColor: '#FFFFFF',
    x: '62%',
    y: '65%',
    delay: 0.9,
    rotate: -3,
  },
  {
    id: 'cpi',
    icon: Code2,
    label: '8.37 CPI',
    sub: 'B.Tech CSE · RIT',
    color: 'var(--bg-card)',
    textColor: 'var(--text-primary)',
    x: '5%',
    y: '70%',
    delay: 1.0,
    rotate: 2,
  },
];

// Animated geometric SVG for the hero right composition
const HeroGeometry = ({ mouseX, mouseY }) => {
  const x1 = useTransform(mouseX, [-300, 300], [-12, 12]);
  const y1 = useTransform(mouseY, [-300, 300], [-10, 10]);
  const x2 = useTransform(mouseX, [-300, 300], [8, -8]);
  const y2 = useTransform(mouseY, [-300, 300], [6, -6]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '480px' }}>
      {/* Large backdrop circle */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, var(--accent-cobalt-subtle), transparent 65%)',
          border: '1px solid var(--accent-cobalt-border)',
          x: x1,
          y: y1,
        }}
      />
      {/* Secondary ring */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          border: '1px dashed var(--border-strong)',
          x: x2,
          y: y2,
        }}
      />
      {/* Central monogram medallion */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--accent-cobalt-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-cobalt)',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '3rem',
            color: 'var(--text-primary)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          JB
        </span>
      </motion.div>

      {/* Floating accent chips */}
      {FLOAT_CARDS.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.06, zIndex: 10 }}
            style={{
              position: 'absolute',
              left: card.x,
              top: card.y,
              zIndex: 4,
              backgroundColor: card.color,
              borderRadius: '14px',
              padding: '0.7rem 1rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              rotate: card.rotate,
              cursor: 'default',
              minWidth: '140px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <Icon size={16} color={card.textColor} style={{ flexShrink: 0 }} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  color: card.textColor,
                  lineHeight: 1.2,
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.66rem',
                  color: card.textColor,
                  opacity: 0.75,
                  lineHeight: 1.3,
                  marginTop: '1px',
                }}
              >
                {card.sub}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Accent lime dot cluster */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '30%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 8px)',
          gap: '6px',
          zIndex: 2,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-lime)',
              opacity: 0.5 + (i % 3) * 0.15,
            }}
          />
        ))}
      </motion.div>

      {/* Top right abstract line art */}
      <motion.svg
        viewBox="0 0 80 80"
        fill="none"
        style={{
          position: 'absolute',
          top: '8%',
          right: '8%',
          width: '70px',
          height: '70px',
          opacity: 0.5,
          zIndex: 2,
        }}
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 0.5, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <circle cx="40" cy="40" r="30" stroke="var(--accent-cobalt)" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="40" cy="40" r="18" stroke="var(--accent-lime)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="40" cy="40" r="5" fill="var(--accent-coral)" />
      </motion.svg>
    </div>
  );
};

export const Hero = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const containerRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'AI / ML Engineer',
    'Creative Technologist',
    'Problem Solver',
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
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6.5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow behind hero */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-cobalt-subtle) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-lime-subtle) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(60px)',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Status Row */}
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
            marginBottom: 'clamp(2rem, 3.5vw, 3rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <div className="status-indicator">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
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
              fontSize: '0.74rem',
              color: 'var(--text-muted)',
            }}
          >
            Sangola, Maharashtra, India
          </span>
        </motion.div>

        {/* Asymmetric hero grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
          className="hero-main-grid"
        >
          {/* LEFT: Typographic lockup */}
          <div>
            {/* Role label */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.07em',
                color: 'var(--accent-coral)',
                marginBottom: '0.9rem',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Computer Science Engineer
            </motion.div>

            {/* Name lockup: bold sans + italic serif */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={{ marginBottom: '1rem' }}
            >
              <h1
                style={{
                  fontSize: 'clamp(3rem, 7.8vw, 6.25rem)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.038em',
                  color: 'var(--text-primary)',
                  margin: 0,
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
                    display: 'block',
                    marginTop: '-0.04em',
                    color: 'var(--text-primary)',
                  }}
                >
                  Bankar
                </span>
              </h1>
            </motion.div>

            {/* Animated role ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                height: '2rem',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    color: 'var(--accent-cobalt)',
                    letterSpacing: '-0.02em',
                    position: 'absolute',
                  }}
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Human intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '520px',
                marginBottom: '2.25rem',
              }}
            >
              I turn ambitious ideas into digital experiences — blending
              {' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>distributed systems</span>
              ,{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>computer vision</span>
              , and{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>thoughtful design</span>
              {' '}into solutions that matter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.46 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2.25rem',
              }}
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                <span>Explore Projects</span>
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

            {/* Social links */}
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

          {/* RIGHT: Interactive geometric visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="hero-visual-col"
            style={{ position: 'relative' }}
          >
            <HeroGeometry mouseX={springX} mouseY={springY} />
          </motion.div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--text-dim)' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual-col {
            display: none !important;
          }
        }
        .hero-social-link:hover {
          color: var(--accent-cobalt) !important;
        }
      `}</style>
    </section>
  );
};
