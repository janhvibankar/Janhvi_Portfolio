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
        marginBottom: 'clamp(2.25rem, 4vw, 3.5rem)',
        position: 'relative'
      }}
    >
      {/* Category indicator / Chapter Tag */}
      {(number || label) && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.3rem 0.85rem 0.3rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--badge-bg)',
            border: '1px solid var(--border-hairline)',
            marginBottom: '1rem',
          }}
        >
          {number && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--accent-cobalt)',
                backgroundColor: 'var(--accent-cobalt-subtle)',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.04em',
              }}
            >
              {number}
            </span>
          )}
          {label && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                color: 'var(--text-secondary)',
              }}
            >
              {label}
            </span>
          )}
        </motion.div>
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
        <div style={{ maxWidth: '820px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4.2vw, 3.1rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: subtitle ? '0.75rem' : 0
            }}
          >
            {title}
            {serifWord && (
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--accent-cobalt)',
                  marginLeft: '0.45rem',
                  letterSpacing: '0',
                }}
              >
                {serifWord}
              </span>
            )}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '640px',
                marginTop: '0.4rem',
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
