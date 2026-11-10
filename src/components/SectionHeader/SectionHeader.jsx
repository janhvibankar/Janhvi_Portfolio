import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  number,
  label,
  title,
  subtitle,
  action,
  align = 'split'
}) => {
  return (
    <div
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        position: 'relative'
      }}
    >
      {/* Top technical badge/index */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.75rem'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            letterSpacing: '0.1em'
          }}
        >
          {number ? `// ${number}` : '// SECTION'}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)'
          }}
        >
          {label}
        </span>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'var(--border-hairline)',
            maxWidth: '120px'
          }}
        />
      </div>

      {/* Main heading row */}
      <div
        style={{
          display: 'flex',
          flexDirection: align === 'split' ? 'column' : 'column',
          justifyContent: 'space-between',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          gap: '1.25rem'
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: subtitle ? '0.75rem' : 0
            }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
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
          <div style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

