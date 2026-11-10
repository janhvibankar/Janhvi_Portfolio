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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '820px',
            maxHeight: '92vh',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            padding: 'clamp(1.5rem, 4vw, 3rem)'
          }}
          className="resume-sheet"
        >
          {/* Action Bar (Top) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-hairline)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-tech badge-accent">Curriculum Vitae</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Updated 2025-2026
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={handlePrint}
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                title="Print / Save as PDF"
              >
                <Printer size={15} />
                <span>Print</span>
              </button>

              <a
                href="./resume.pdf"
                download="Janhvi_Bankar_Resume.pdf"
                className="btn-primary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                onClick={() => playSound('click')}
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--badge-bg)',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--text-primary)',
                  marginLeft: '0.5rem'
                }}
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Resume Body Content */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.35rem'
                }}
              >
                {profileData.fullName}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem'
                }}
              >
                Computer Science Engineer · Full-Stack Developer · AI/ML Enthusiast
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={13} style={{ color: 'var(--accent-primary)' }} />
                  {profileData.contact.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-primary)' }} />
                  {profileData.location.city}, {profileData.location.state}, India
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Github size={13} style={{ color: 'var(--accent-primary)' }} />
                  github.com/janhvibankar
                </span>
              </div>
            </div>

            {/* Profile Overview */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.25rem'
                }}
              >
                Professional Summary
              </h2>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                Computer Science undergraduate with an 8.37 CPI and national 1st-place victory in Smart India Hackathon 2025. Proven expertise designing scalable full-stack applications with React, Node.js, and FastAPI, combined with applied AI/ML architectures in computer vision (PyTorch, YOLOv8) and retrieval-augmented systems. Passionate about solving high-impact industrial problems with clean code and distributed systems.
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.25rem'
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>
                    {profileData.education.institution}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {profileData.education.degree}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-primary)', fontSize: '0.95rem' }}>
                    CPI: {profileData.education.cpi} / 10.0
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Expected 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Honors & Major Achievements */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.25rem'
                }}
              >
                Honors & Key Milestones
              </h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Award size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Smart India Hackathon 2025 — Grand Winner (1st Place)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Ministry of Education & Innovation Cell, Govt. of India. Led the engineering team to 1st place designing an AI-driven SCADA telemetry and power grid failure prediction platform.
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.25rem'
                }}
              >
                Technical Proficiencies
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>Languages:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Python, Java, JavaScript (ES6+), TypeScript, C/C++, SQL</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>Frontend:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>React, Flutter, HTML5, CSS3, Tailwind CSS, Framer Motion</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>Backend:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Node.js, Express.js, FastAPI, REST APIs, WebSockets</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>AI/ML & Vision:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>PyTorch, Scikit-learn, OpenCV, YOLOv8, RAG, SHAP</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>Databases & Cloud:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>MongoDB, MySQL, Pinecone (Vector), Redis, AWS, Firebase</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>Tools & Workflow:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Git, GitHub, Docker, Postman, Linux, VS Code</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.25rem'
                }}
              >
                Leadership & Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>UI/UX Head — OysterCode Club</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>2024 – Present</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Directed UI/UX component architectures, conducted design thinking workshops for 100+ students, and reviewed frontend implementations.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Social Media & Outreach Head — Cryptex Club</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>2023 – 2024</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Spearheaded technical outreach, organized competitive programming marathons, and managed digital branding.
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
