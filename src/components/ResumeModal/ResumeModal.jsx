import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { Github } from '../Icons';
import { profileData } from '../../data/profile';
import { useSound } from '../../context/SoundContext';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { playSound } = useSound();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSound('click');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, playSound]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--bg-overlay)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 3vw, 2.5rem)',
          overflowY: 'auto'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '92vh',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)'
          }}
          className="resume-sheet"
        >
          {/* Action Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.75rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-hairline)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-tech badge-cobalt">Curriculum Vitae</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                2025–2026
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <button
                onClick={handlePrint}
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                title="Print / Save as PDF"
              >
                <Printer size={14} />
                <span>Print</span>
              </button>

              <a
                href="./resume.pdf"
                download="Janhvi_Bankar_Resume.pdf"
                className="btn-primary"
                style={{ padding: '0.4rem 0.95rem', fontSize: '0.8rem' }}
                onClick={() => playSound('click')}
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--badge-bg)',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--text-primary)',
                  marginLeft: '0.4rem'
                }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '2.5rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.2rem',
                  lineHeight: 1.1
                }}
              >
                {profileData.fullName}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.65rem',
                  fontWeight: 500
                }}
              >
                Computer Science Engineer · Full-Stack & AI/ML
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={13} style={{ color: 'var(--accent-cobalt)' }} />
                  {profileData.contact.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-cobalt)' }} />
                  {profileData.location.city}, {profileData.location.state}, India
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Github size={13} style={{ color: 'var(--accent-cobalt)' }} />
                  github.com/janhvibankar
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.45rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.2rem'
                }}
              >
                Summary
              </h2>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                Computer Science undergraduate with an 8.37 CPI and 1st-place victory in Smart India Hackathon 2025. Proven experience developing scalable full-stack applications with React, Node.js, and FastAPI, combined with applied AI/ML architectures in computer vision (PyTorch, YOLOv8) and retrieval-augmented systems. Passionate about solving real-world problems with clean, resilient code.
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.65rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.2rem'
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.96rem' }}>
                    {profileData.education.institution}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    {profileData.education.degree}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cobalt)', fontSize: '0.92rem' }}>
                    CPI: {profileData.education.cpi} / 10.0
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    Expected 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Honors */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.65rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.2rem'
                }}
              >
                Key Honors
              </h2>
              <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.45rem' }}>
                <Award size={16} style={{ color: 'var(--accent-cobalt)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    Smart India Hackathon 2025 — Grand Winner (1st Place)
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    Ministry of Education & Innovation Cell, Govt. of India. Team Lead for the AI Grid Failure Early Warning System.
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Proficiencies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.65rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.2rem'
                }}
              >
                Technical Proficiencies
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.65rem', fontSize: '0.84rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Languages:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Python, Java, JavaScript (ES6+), TypeScript, C/C++, SQL</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Frontend:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>React, Flutter, HTML5, CSS3, Tailwind CSS, Motion</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Backend:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Node.js, Express.js, FastAPI, REST APIs, WebSockets</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>AI/ML & Vision:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>PyTorch, Scikit-learn, OpenCV, YOLOv8, RAG, SHAP</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Databases & Cloud:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>MongoDB, MySQL, Pinecone, Redis, AWS, Firebase</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Tools:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Git, GitHub, Docker, Postman, Linux, VS Code</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.65rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.2rem'
                }}
              >
                Leadership
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>UI/UX Head — OysterCode Club</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>2024 – Present</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0.15rem 0 0 0' }}>
                    Directed design systems and conducted frontend workshops for 100+ students.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Social Media & Outreach Head — Cryptex Club</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>2023 – 2024</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0.15rem 0 0 0' }}>
                    Organized campus coding marathons and managed technical community engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

