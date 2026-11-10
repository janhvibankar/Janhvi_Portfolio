import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundManager } from '../utils/sound';

const SoundContext = createContext({
  soundEnabled: false,
  toggleSound: () => {},
  playSound: () => {}
});

export const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('jb_portfolio_sound');
    if (saved === 'true') {
      setSoundEnabled(true);
      soundManager.enabled = true;
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      soundManager.enabled = next;
      localStorage.setItem('jb_portfolio_sound', String(next));
      if (next) soundManager.playToggle();
      return next;
    });
  };

  const playSound = (name) => {
    if (!soundEnabled) return;
    if (name === 'click') soundManager.playClick();
    else if (name === 'hover') soundManager.playHover();
    else if (name === 'success') soundManager.playSuccess();
    else if (name === 'toggle') soundManager.playToggle();
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);

