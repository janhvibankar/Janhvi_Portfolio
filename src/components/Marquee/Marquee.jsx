import React from 'react';

export const Marquee = ({ items, speed = 30, pauseOnHover = true }) => {
  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%',
        padding: '1.25rem 0',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
      className={pauseOnHover ? 'marquee-container' : ''}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: '1.5rem',
          animation: `marqueeScroll ${speed}s linear infinite`
        }}
        className="marquee-track"
      >
        {items.concat(items).map((item, idx) => (
          <span
            key={idx}
            className="badge-tech"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                display: 'inline-block'
              }}
            />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

