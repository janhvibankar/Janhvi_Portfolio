import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar, ShieldCheck } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const CertificateModal = ({ certificate, onClose }) => {
  const { playSound } = useSound();

  useEffect(() => {
    if (!certificate) return;
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
            maxWidth: '640px',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)'
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

          {/* Certificate Header Frame */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-card-subtle)',
              padding: '2rem 1.5rem',
              marginBottom: '1.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cobalt-subtle)',
                color: 'var(--accent-cobalt)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}
            >
              <Award size={28} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--accent-coral)',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                fontWeight: 500
              }}
            >
              Verified Technical Credential
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem'
              }}
            >
              {certificate.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Issued by {certificate.issuer}
            </p>
          </div>

          {/* Details Metadata */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-card-subtle)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                <Calendar size={12} />
                <span>ISSUE PERIOD</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                {certificate.date}
              </div>
            </div>

            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-card-subtle)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                <ShieldCheck size={12} />
                <span>CREDENTIAL ID</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.86rem' }}>
                {certificate.credentialId}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
            {certificate.description}
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.15rem' }}>
            {certificate.verifyUrl ? (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.86rem' }}
              >
                <span>Verify Credential</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="badge-tech badge-cobalt">Verified Credential</span>
            )}

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

