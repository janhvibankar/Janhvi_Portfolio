import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useSound } from '../../context/SoundContext';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, toggleSound, playSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'experience', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playSound('click');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 'clamp(0.75rem, 2vw, 1.35rem)',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 var(--container-pad)',
          pointerEvents: 'none'
        }}
      >
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0.45rem 0.65rem 0.45rem 1.15rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-hairline)',
            boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            width: '100%',
            maxWidth: '1020px',
            transition: 'box-shadow var(--transition-fast), border-color var(--transition-fast)'
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--accent-coral)',
                lineHeight: 1
              }}
            >
              JB
            </span>
            <span className="nav-title-desktop" style={{ display: 'none', fontWeight: 600 }}>
              Janhvi Bankar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem'
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => playSound('hover')}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--badge-bg)',
                        border: '1px solid var(--border-hairline)',
                        borderRadius: 'var(--radius-full)',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Actions: Sound, Theme, Resume, Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
              }}
              title={soundEnabled ? 'Mute audio' : 'Enable sound effects'}
              aria-label={soundEnabled ? 'Mute audio' : 'Enable sound effects'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--badge-bg)',
                border: '1px solid var(--border-hairline)',
                color: soundEnabled ? 'var(--accent-cobalt)' : 'var(--text-muted)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <button
              onClick={() => {
                playSound('click');
                onOpenResume();
              }}
              className="btn-primary resume-desktop-btn"
              style={{
                padding: '0.45rem 0.95rem',
                fontSize: '0.82rem',
                gap: '0.35rem',
                marginLeft: '0.2rem'
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => {
                playSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle menu"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-full)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--badge-bg)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Full-Screen Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-primary)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '6rem 2rem 3rem 2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase'
                }}
              >
                // Navigation
              </span>

              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '2rem',
                    color: activeSection === item.href.slice(1) ? 'var(--accent-coral)' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontStyle: 'normal', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 960px) {
          .nav-title-desktop { display: inline !important; }
        }
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .resume-desktop-btn { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
};
