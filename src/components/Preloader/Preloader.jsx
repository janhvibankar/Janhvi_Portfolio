import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Quick, elegant transition: ~850ms total
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 450);
    }, 850);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => {
            setIsFinished(true);
            setTimeout(onComplete, 200);
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
          title="Click to enter"
        >
          {/* Top subtle identifier */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)'
              }}
            >
              PORTFOLIO // V2
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--accent-coral)'
              }}
            >
              2025–2026
            </span>
          </div>

          {/* Center: Expressive Serif Initials & Title */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{ marginBottom: '1rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1
                }}
              >
                Janhvi Bankar
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em'
              }}
            >
              Computer Science Engineer & Creative Developer
            </motion.p>
          </div>

          {/* Bottom hint */}
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
