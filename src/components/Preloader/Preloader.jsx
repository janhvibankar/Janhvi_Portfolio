import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Ultra-snappy branded entrance: ~550ms
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 350);
    }, 550);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => {
            setIsFinished(true);
            setTimeout(onComplete, 150);
          }}
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
          title="Click to enter immediately"
        >
          {/* Top header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)'
              }}
            >
              PORTFOLIO // 2025–2026
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--accent-coral)'
              }}
            >
              SIH '25 WINNER
            </span>
          </div>

          {/* Center Monogram & Name */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ marginBottom: '0.75rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 7.5vw, 5.5rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1
                }}
              >
                Janhvi Pradip Bankar
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--accent-lavender)',
                letterSpacing: '0.04em'
              }}
            >
              Software Developer · Full-Stack & Applied AI/ML
            </motion.p>
          </div>

          {/* Bottom subtle hint */}
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                opacity: 0.7
              }}
            >
              click to bypass
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
