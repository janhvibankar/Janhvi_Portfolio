import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu } from 'lucide-react';
import { Github } from '../Icons';
import { useSound } from '../../context/SoundContext';

export const ProjectModal = ({ project, onClose }) => {
  const { playSound } = useSound();

  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose, playSound]);

  if (!project) return null;

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
            maxWidth: '840px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--badge-bg)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              zIndex: 10
            }}
          >
            <X size={18} />
          </button>

          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            <span className="badge-tech badge-sage">{project.category}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: project.status === 'Completed' ? 'var(--accent-sage-dark)' : 'var(--accent-coral)',
                fontWeight: 600
              }}
            >
              • {project.status}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Year: {project.year}
            </span>
          </div>

          {/* Title & Tagline */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              marginBottom: '0.35rem',
              paddingRight: '2rem'
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--accent-coral)',
              marginBottom: '1.75rem',
              fontWeight: 500
            }}
          >
            {project.tagline}
          </p>

          {/* Metric Highlights Strip */}
          {project.metrics && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.75rem',
                marginBottom: '2rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-card-subtle)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-hairline)'
              }}
            >
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.65rem'
              }}
            >
              // Architecture & Overview
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {project.detailedDescription}
            </p>
          </div>

          {/* System Architecture Flow Diagram */}
          {project.architecture && (
            <div
              style={{
                marginBottom: '2rem',
                padding: '1.25rem',
                backgroundColor: 'var(--code-bg)',
                border: '1px solid var(--code-border)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-coral)',
                  marginBottom: '0.85rem',
                  fontWeight: 600
                }}
              >
                <Cpu size={15} />
                <span>DATA FLOW & PIPELINE: {project.architecture.type}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}
              >
                {project.architecture.flow.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--badge-bg)',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        color: 'var(--accent-coral)',
                        fontWeight: 700
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Engineering Contribution */}
          {project.myContribution && (
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.65rem'
                }}
              >
                // Key Contributions
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.myContribution.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-sage-dark)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features & Challenges Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.6rem'
                }}
              >
                Features & Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-coral)' }}>•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.6rem'
                }}
              >
                Challenges Solved
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {project.challenges.map((c, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                    <AlertTriangle size={14} style={{ color: 'var(--accent-coral)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Used */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.65rem'
              }}
            >
              Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.technologies.map((t, idx) => (
                <span key={idx} className="badge-tech" style={{ fontSize: '0.75rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Bottom Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--border-hairline)',
              paddingTop: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
                >
                  <Github size={15} />
                  <span>View Repository</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
                >
                  <ExternalLink size={15} />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="btn-ghost"
              style={{ fontSize: '0.85rem' }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
