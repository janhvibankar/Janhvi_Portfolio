import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1400; // 1.4 seconds total
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            cursor: 'pointer'
          }}
          onClick={() => {
            setIsFinished(true);
            setTimeout(onComplete, 400);
          }}
          title="Click to skip"
        >
          {/* Top header line */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase'
              }}
            >
              [PORTFOLIO // V2.0]
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase'
              }}
            >
              INITIALIZING
            </span>
          </div>

          {/* Center Initials & Typography Reveal */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '84px',
                height: '84px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--accent-primary-border)',
                backgroundColor: 'var(--bg-card)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  letterSpacing: '-0.03em'
                }}
              >
                JB
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}
            >
              JANHVI BANKAR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.05em'
              }}
            >
              Computer Science Engineer · Systems & AI/ML
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Coordinates */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}
            >
              <span>17°04'N 75°19'E // SANGOLA, IN</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {progress}%
              </span>
            </div>

            {/* Progress track */}
            <div
              style={{
                width: '100%',
                height: '3px',
                backgroundColor: 'var(--border-hairline)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden'
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: 'var(--accent-primary)',
                  transition: 'width 0.05s ease-out'
                }}
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  opacity: 0.7
                }}
              >
                click anywhere to bypass
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

