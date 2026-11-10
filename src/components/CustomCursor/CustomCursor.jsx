import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFinePointer);

    if (!hasFinePointer) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const exploreTarget = target.closest('[data-cursor="explore"]');
      const interactive = target.closest('a, button, input, select, textarea, [role="button"], [data-cursor="pointer"]');

      if (projectCard) {
        setCursorState('project');
        setCursorText('VIEW PROJECT');
      } else if (exploreTarget) {
        setCursorState('explore');
        setCursorText('EXPLORE');
      } else if (interactive) {
        setCursorState('pointer');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setCursorState('hidden');
    };

    const handleMouseEnter = () => {
      setCursorState('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice || cursorState === 'hidden') return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform'
      }}
    >
      {/* Center dot */}
      <motion.div
        animate={{
          x: mousePosition.x - (cursorState === 'default' ? 4 : 0),
          y: mousePosition.y - (cursorState === 'default' ? 4 : 0),
          scale: cursorState === 'pointer' ? 0 : (cursorState === 'project' || cursorState === 'explore' ? 0 : 1),
          opacity: cursorState === 'default' ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-primary)',
          position: 'absolute'
        }}
      />

      {/* Outer context ring / pill */}
      <motion.div
        animate={{
          x: mousePosition.x - (cursorState === 'project' || cursorState === 'explore' ? 60 : cursorState === 'pointer' ? 24 : 18),
          y: mousePosition.y - (cursorState === 'project' || cursorState === 'explore' ? 20 : cursorState === 'pointer' ? 24 : 18),
          width: cursorState === 'project' || cursorState === 'explore' ? 120 : cursorState === 'pointer' ? 48 : 36,
          height: cursorState === 'project' || cursorState === 'explore' ? 40 : cursorState === 'pointer' ? 48 : 36,
          borderRadius: cursorState === 'project' || cursorState === 'explore' ? 20 : 999,
          backgroundColor: cursorState === 'project' || cursorState === 'explore' ? 'var(--accent-primary)' : 'transparent',
          borderColor: cursorState === 'project' || cursorState === 'explore' ? 'transparent' : 'var(--accent-primary)',
          borderWidth: cursorState === 'project' || cursorState === 'explore' ? 0 : 1.5,
          scale: cursorState === 'pointer' ? 1.15 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.15 }}
        style={{
          borderStyle: 'solid',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '10px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          boxShadow: cursorState === 'project' || cursorState === 'explore' ? '0 8px 24px rgba(230,107,72,0.35)' : 'none'
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ whiteSpace: 'nowrap' }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

