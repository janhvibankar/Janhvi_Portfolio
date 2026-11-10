import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, CheckCircle2, Phone } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
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
            border: '1.5px solid var(--border-strong)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '820px',
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
              <span className="badge-tech badge-lavender">Curriculum Vitae</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Official Resume
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
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '2.25rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em',
                  marginBottom: '0.2rem',
                  lineHeight: 1.15
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
                  fontWeight: 600
                }}
              >
                Software Developer · Full-Stack & Applied AI/ML
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
                  <Mail size={13} style={{ color: 'var(--accent-lavender)' }} />
                  {profileData.contact.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={13} style={{ color: 'var(--accent-lavender)' }} />
                  {profileData.contact.phone}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-lavender)' }} />
                  {profileData.location.city}, {profileData.location.state}, India
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Github size={13} style={{ color: 'var(--accent-lavender)' }} />
                  github.com/janhvibankar
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Linkedin size={13} style={{ color: 'var(--accent-lavender)' }} />
                  linkedin.com/in/janhvi-bankar
                </span>
              </div>
            </div>

            {/* Professional Summary */}
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Professional Summary
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                Computer Science undergraduate with experience in AI-based monitoring systems, backend development, and real-time data processing. Skilled in Java, MERN stack, Flutter, computer vision, and predictive analytics.
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                      B.Tech (CSE) — Rajarambapu Institute of Technology, Islampur, Maharashtra
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-lavender)', fontSize: '0.88rem' }}>
                    CPI: 8.34 — 2027
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    HSC — New English School Jr. College, Sangola, Maharashtra
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    81.83% — 2023
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    SSC — New English School, Sangola, Maharashtra
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    97.20% — 2021
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Technical Skills
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.65rem', fontSize: '0.84rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Programming:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>C, Java, JavaScript</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Frameworks:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Flutter, React.js, Node.js</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>AI/ML:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>YOLO, CNN, OpenCV, MediaPipe</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Databases:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>MySQL, MongoDB</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Tools:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Git, VS Code, GitHub, Jupyter Notebook, Google Colab</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>Core Areas:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>OOP, DBMS</span>
                </div>
              </div>
            </div>

            {/* Projects */}
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                      AI-Based Bharatanatyam Learning App
                    </span>
                    <span className="badge-tech badge-lime" style={{ fontSize: '0.64rem', padding: '0.1rem 0.45rem' }}>
                      SIH 2025 Winner
                    </span>
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    <li>Developed a real-time gesture recognition system using YOLO and CNN.</li>
                    <li>Built a Flutter-based application integrated with backend APIs and created a custom dataset using OpenCV and MediaPipe.</li>
                    <li>Designed the system to evaluate dance pose accuracy in real time.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                      MigraineGuardian – AI Migraine Risk Prediction System
                    </span>
                    <span className="badge-tech badge-coral" style={{ fontSize: '0.64rem', padding: '0.1rem 0.45rem' }}>
                      Ongoing
                    </span>
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    <li>Building an AI-based migraine early warning system that predicts daily migraine risk levels.</li>
                    <li>Implementing adaptive trigger weighting, ML models, and a Flutter-based interface with health data visualization.</li>
                    <li>Integrating chatbot assistance for preventive healthcare insights.</li>
                  </ul>
                </div>

                <div>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    RAG Chatbot – Module of MigraineGuardian
                  </span>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    <li>Designed and developed a Retrieval-Augmented Generation (RAG) chatbot with document ingestion, chunking, embeddings, and vector search.</li>
                    <li>Implemented conversational memory using MongoDB and source citations for trustworthy responses.</li>
                    <li>Integrated Groq LLM with an Express.js backend and React frontend.</li>
                  </ul>
                </div>

                <div>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    Hospital Management System – MERN Stack
                  </span>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    <li>Developed a full-stack application for patient registration and appointment scheduling.</li>
                    <li>Implemented role-based authentication and optimized MongoDB queries.</li>
                    <li>Designed scalable REST APIs for secure backend communication.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Responsibilities */}
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Achievements & Responsibilities
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem', fontSize: '0.86rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Award size={14} style={{ color: 'var(--accent-lime-dark)' }} />
                  <span><strong>Winner</strong> – Smart India Hackathon (SIH) 2025</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-lavender)' }} />
                  <span><strong>UI/UX Head</strong> – OysterCode Club</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-lavender)' }} />
                  <span><strong>Social Media Head</strong> – Cryptex Club</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-lavender)' }} />
                  <span><strong>Contributor</strong> – Social Shuffle Initiative</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
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
                  paddingBottom: '0.2rem',
                  fontWeight: 700
                }}
              >
                Certifications
              </h2>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>NPTEL – Machine Learning (IIT Madras, 12 Weeks)</li>
                <li>NPTEL – Java Programming (IIT Kharagpur, 12 Weeks)</li>
                <li>NPTEL – Database Management Systems (IIT Kharagpur, 8 Weeks)</li>
                <li>Google – iOS App Development Certification</li>
                <li>Infosys Springboard – Theory of Computation</li>
                <li>Infosys Springboard – Advanced HTML5 & CSS3</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
