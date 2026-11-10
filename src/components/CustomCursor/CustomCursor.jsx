import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth spring physics for trailing effect
  const springX = useSpring(-100, { damping: 28, stiffness: 350 });
  const springY = useSpring(-100, { damping: 28, stiffness: 350 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFinePointer);

    if (!hasFinePointer) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
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
  }, [springX, springY]);

  if (isTouchDevice || cursorState === 'hidden') return null;

  const isPill = cursorState === 'project' || cursorState === 'explore';

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
      {/* Center pinpoint */}
      <motion.div
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorState === 'default' ? 1 : 0,
          opacity: cursorState === 'default' ? 1 : 0
        }}
        transition={{ duration: 0.1 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-coral)',
          position: 'absolute'
        }}
      />

      {/* Trailing context ring / capsule */}
      <motion.div
        animate={{
          x: mousePosition.x - (isPill ? 58 : cursorState === 'pointer' ? 22 : 16),
          y: mousePosition.y - (isPill ? 18 : cursorState === 'pointer' ? 22 : 16),
          width: isPill ? 116 : cursorState === 'pointer' ? 44 : 32,
          height: isPill ? 36 : cursorState === 'pointer' ? 44 : 32,
          borderRadius: isPill ? 18 : 999,
          backgroundColor: isPill ? 'var(--accent-sage)' : 'transparent',
          borderColor: isPill ? 'transparent' : 'var(--accent-sage)',
          borderWidth: isPill ? 0 : 1.5,
          scale: cursorState === 'pointer' ? 1.15 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.12 }}
        style={{
          borderStyle: 'solid',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#15251F',
          fontSize: '9.5px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          boxShadow: isPill ? '0 8px 24px rgba(184, 217, 178, 0.4)' : 'none'
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
