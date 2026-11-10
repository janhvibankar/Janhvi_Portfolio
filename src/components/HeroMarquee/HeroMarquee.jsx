import React from 'react';
import { motion } from 'framer-motion';

const PHRASES = [
  'BUILDING IDEAS',
  '✦',
  'CREATING EXPERIENCES',
  '✦',
  'EXPLORING AI',
  '✦',
  'ENGINEERING THE FUTURE',
  '✦',
  'FULL-STACK DEVELOPER',
  '✦',
  'SIH \'25 CHAMPION',
  '✦',
];

export const HeroMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '1rem 0',
        position: 'relative',
        zIndex: 2,
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      className="marquee-banner-wrapper"
    >
      <div
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          animation: 'heroMarqueeScroll 32s linear infinite',
          gap: '2rem',
        }}
        className="marquee-banner-track"
      >
        {PHRASES.concat(PHRASES).map((phrase, idx) => (
          <span
            key={idx}
            style={{
              fontFamily: phrase === '✦' ? 'serif' : 'var(--font-sans)',
              fontSize: phrase === '✦' ? '1rem' : '0.78rem',
              fontWeight: phrase === '✦' ? 400 : 700,
              letterSpacing: phrase === '✦' ? 0 : '0.1em',
              color: phrase === '✦' ? 'var(--accent-lime-dark)' : 'var(--text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            {phrase}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes heroMarqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-banner-wrapper:hover .marquee-banner-track {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
};

