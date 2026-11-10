import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { playSound } = useSound();

  const handleToggle = () => {
    playSound('toggle');
    toggleTheme();
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--badge-bg)',
        border: '1px solid var(--border-hairline)',
        color: 'var(--text-primary)',
        transition: 'all var(--transition-fast)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="btn-theme-toggle"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {isDark ? (
          <Sun size={17} style={{ color: 'var(--accent-lime-dark)' }} />
        ) : (
          <Moon size={17} style={{ color: 'var(--accent-coral)' }} />
        )}
      </motion.div>
    </button>
  );
};

