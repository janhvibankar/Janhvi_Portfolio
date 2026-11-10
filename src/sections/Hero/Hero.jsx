import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { useSound } from '../../context/SoundContext';

export const Hero = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(7rem, 12vw, 10rem)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Top Status & Telemetry Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            borderBottom: '1px solid var(--border-hairline)',
            paddingBottom: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Live Availability Badge */}
            <div className="status-indicator">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                {profileData.availability.status}
              </span>
            </div>

            <span className="badge-tech badge-accent">
              <Sparkles size={12} />
              SIH '25 Winner
            </span>

            <span className="badge-tech" style={{ display: 'none' }} id="cpi-badge">
              CPI: {profileData.education.cpi}
            </span>
          </div>

          {/* Timezone & Location telemetry */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <span>{profileData.location.city}, IN [{currentTime || '14:30:00'} IST]</span>
            <span style={{ color: 'var(--accent-primary)' }}>// LAT 17.4°N</span>
          </div>
        </motion.div>

        {/* Hero Asymmetric Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start'
          }}
          className="hero-grid"
        >
          {/* Main Title & Editorial Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                marginBottom: '1rem'
              }}
            >
              <Terminal size={14} />
              <span>{profileData.role}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8.5vw, 6.75rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}
            >
              JANHVI<br />
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px var(--accent-primary)',
                  letterSpacing: '-0.03em'
                }}
              >
                BANKAR
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                marginBottom: '1.25rem'
              }}
            >
              {profileData.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '680px',
                marginBottom: '2.5rem'
              }}
            >
              "{profileData.headline}"
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem'
              }}
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <span>Explore My Work</span>
                <ArrowDown size={17} />
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  playSound('click');
                  onOpenResume();
                }}
                className="btn-secondary"
                style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}
              >
                <span>Download Resume</span>
                <ArrowUpRight size={17} />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="btn-ghost"
                style={{ padding: '0.95rem 1.5rem', fontSize: '1rem' }}
              >
                <span>Let's Connect</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.5rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)'
                }}
              >
                Networks:
              </span>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Github size={16} />
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
                  gap: '0.35rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                onMouseEnter={() => playSound('hover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)'
                }}
              >
                <Mail size={16} />
                <span>{profileData.contact.email}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={() => scrollToSection('about')}
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          <div
            style={{
              width: '24px',
              height: '38px',
              borderRadius: '12px',
              border: '1.5px solid var(--border-strong)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px'
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                backgroundColor: 'var(--accent-primary)'
              }}
            />
          </div>
          <span>Scroll to Explore Narrative</span>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          #cpi-badge { display: inline-flex !important; }
        }
      `}</style>
    </section>
  );
};
