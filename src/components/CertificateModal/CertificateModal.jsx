import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Download, 
  Award, 
  Calendar, 
  ShieldCheck, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const CertificateModal = ({ certificate, onClose }) => {
  const { playSound } = useSound();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!certificate) return;
    setZoomLevel(1);
    setCopied(false);

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
  }, [certificate, onClose, playSound]);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      playSound('click');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
    playSound('hover');
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
    playSound('hover');
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    playSound('click');
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
          backgroundColor: 'rgba(5, 8, 22, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(0.75rem, 2.5vw, 2rem)',
          overflowY: 'auto'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '840px',
            maxHeight: '92vh',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.1)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border-hairline)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              backgroundColor: 'var(--bg-card-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-cobalt-subtle)',
                  color: 'var(--accent-cobalt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Award size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-coral)',
                    textTransform: 'uppercase',
                    display: 'block',
                    lineHeight: 1.2
                  }}
                >
                  {certificate.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {certificate.title}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              aria-label="Close certificate preview"
              className="btn-ghost"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body: Scrollable */}
          <div
            style={{
              overflowY: 'auto',
              padding: 'clamp(1rem, 3vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {/* Certificate Preview Frame */}
            {certificate.thumbnailUrl ? (
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-hairline)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Floating zoom controls */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    backgroundColor: 'rgba(10, 17, 40, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: '20px',
                    padding: '0.25rem 0.5rem'
                  }}
                >
                  <button
                    onClick={handleZoomIn}
                    title="Zoom in"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      padding: '4px',
                      cursor: 'pointer',
                      display: 'flex'
                    }}
                  >
                    <ZoomIn size={15} />
                  </button>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      padding: '0 4px',
                      minWidth: '38px',
                      textAlign: 'center'
                    }}
                  >
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomOut}
                    title="Zoom out"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      padding: '4px',
                      cursor: 'pointer',
                      display: 'flex'
                    }}
                  >
                    <ZoomOut size={15} />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    title="Reset zoom"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      padding: '4px',
                      cursor: 'pointer',
                      display: 'flex'
                    }}
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>

                <div
                  style={{
                    width: '100%',
                    maxHeight: '380px',
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem'
                  }}
                >
                  <img
                    src={certificate.thumbnailUrl}
                    alt={certificate.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
                    }}
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: '1px dashed var(--border-hairline)',
                  backgroundColor: 'var(--bg-card-subtle)',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <Award size={40} style={{ color: 'var(--accent-cobalt)', margin: '0 auto 1rem' }} />
                <h4 style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{certificate.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{certificate.issuer}</p>
              </div>
            )}

            {/* Metadata Badges Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem'
              }}
            >
              {/* Issuer */}
              <div
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <span
                  style={{
                    display: 'block',
                    color: 'var(--text-muted)',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Issuing Body
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                  {certificate.issuer}
                </span>
              </div>

              {/* Date */}
              <div
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  <Calendar size={12} />
                  <span>Issue Period</span>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                  {certificate.date}
                </span>
              </div>

              {/* Credential ID / Score */}
              <div
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    <ShieldCheck size={12} />
                    <span>Credential ID</span>
                  </div>
                  {certificate.credentialId && (
                    <button
                      onClick={handleCopyId}
                      title="Copy Credential ID"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: copied ? 'var(--accent-lime-dark)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cobalt)', fontSize: '0.82rem' }}>
                  {certificate.credentialId || 'Verified Record'}
                  {certificate.score && (
                    <span style={{ marginLeft: '0.5rem', color: 'var(--accent-coral)', fontSize: '0.78rem' }}>
                      ({certificate.score})
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h5
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.45rem'
                }}
              >
                Curriculum & Verified Competencies
              </h5>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0
                }}
              >
                {certificate.description}
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              padding: '1rem 1.5rem',
              borderTop: '1px solid var(--border-hairline)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--bg-card-subtle)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {/* PDF Download Button */}
              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => playSound('click')}
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
              )}

              {/* Verify Link */}
              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  onClick={() => playSound('click')}
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.55rem 1rem',
                    borderColor: 'var(--border-hairline)'
                  }}
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="btn-ghost"
              style={{ fontSize: '0.82rem', padding: '0.55rem 1.25rem' }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
