import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  number,
  label,
  title,
  subtitle,
  serifWord,
  action,
  align = 'left'
}) => {
  return (
    <div
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        position: 'relative'
      }}
    >
      {/* Category indicator */}
      {(number || label) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '0.75rem'
          }}
        >
          {number && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--accent-coral)'
              }}
            >
              {number}
            </span>
          )}
          {number && label && <span style={{ color: 'var(--border-strong)' }}>/</span>}
          {label && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)'
              }}
            >
              {label}
            </span>
          )}
        </div>
      )}

      {/* Main heading */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: subtitle ? '0.65rem' : 0
            }}
          >
            {title}
            {serifWord && (
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginLeft: '0.35rem'
                }}
              >
                {serifWord}
              </span>
            )}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '620px'
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {action && (
          <div style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};
