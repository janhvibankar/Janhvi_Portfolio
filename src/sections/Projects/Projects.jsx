import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, projectCategories } from '../../data/projects';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProjectSchematic } from '../../components/ProjectSchematic';
import { useSound } from '../../context/SoundContext';

export const Projects = ({ onSelectProject }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const isAll = activeCategory === 'All';
  const flagshipProjects = isAll ? filtered.slice(0, 3) : filtered.slice(0, 2);
  const compactProjects = isAll ? filtered.slice(3) : filtered.slice(2);

  // Carousel drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.pageX);
    setScrollStartX(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const delta = e.pageX - dragStartX;
    carouselRef.current.scrollLeft = scrollStartX - delta;
  };

  const handleMouseUp = () => setIsDragging(false);

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
    playSound('click');
  };

  // Accent per project index
  const ACCENTS = [
    { border: 'var(--accent-cobalt-border)', badge: 'badge-cobalt', glow: 'var(--shadow-cobalt)' },
    { border: 'var(--accent-lime-border)', badge: 'badge-lime', glow: 'var(--shadow-lime)' },
    { border: 'var(--accent-coral-border)', badge: 'badge-coral', glow: '0 12px 36px rgba(255,120,94,0.2)' },
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="03"
          label="Exhibition"
          title="Curated Engineering"
          serifWord="Works & Systems"
          subtitle="Machine learning architectures, distributed backends, and full-stack systems designed for real-world impact."
        />

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '3rem' }}>
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { playSound('click'); setActiveCategory(cat); }}
                className="badge-tech"
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-cobalt-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-cobalt)' : 'var(--border-hairline)',
                  color: isActive ? 'var(--accent-cobalt)' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            FLAGSHIP EDITORIAL SHOWCASES
            ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '5rem' }}>
          {flagshipProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const accent = ACCENTS[idx % ACCENTS.length];

            return (
              <motion.article
                key={`flagship-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-editorial flagship-card-grid"
                data-cursor="project"
                onClick={() => { playSound('click'); onSelectProject(project); }}
                style={{
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-xl)',
                  display: 'grid',
                  gridTemplateColumns: isReversed
                    ? 'minmax(0, 1fr) minmax(0, 1.3fr)'
                    : 'minmax(0, 1.3fr) minmax(0, 1fr)',
                  gap: 'clamp(1.5rem, 4vw, 3rem)',
                  alignItems: 'center',
                  borderColor: accent.border,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: accent.glow,
                  borderColor: 'var(--accent-cobalt-border)',
                }}
              >
                {/* Number label */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.75rem',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '4rem',
                    color: 'var(--border-hairline)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Text content */}
                <div style={{ order: isReversed ? 2 : 1, position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className={`badge-tech ${accent.badge}`} style={{ fontSize: '0.68rem' }}>
                      <Sparkles size={10} />
                      FEATURED
                    </span>
                    <span className="badge-tech" style={{ fontSize: '0.72rem' }}>{project.category}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: project.status === 'Completed' ? 'var(--accent-lime-dark)' : 'var(--accent-coral)',
                        fontWeight: 600,
                      }}
                    >
                      • {project.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.03em',
                      marginBottom: '0.3rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--accent-coral)',
                      marginBottom: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                      maxWidth: '560px',
                    }}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 3)}, 1fr)`,
                        gap: '0.65rem',
                        marginBottom: '1.25rem',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-hairline)',
                      }}
                    >
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '1.3rem',
                              fontWeight: 800,
                              color: 'var(--text-primary)',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {m.value}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.64rem',
                              color: 'var(--text-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {project.technologies.slice(0, 6).map((t, ti) => (
                      <span key={ti} className="badge-tech" style={{ fontSize: '0.7rem' }}>{t}</span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="badge-tech" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span className="btn-primary" style={{ fontSize: '0.84rem', padding: '0.65rem 1.4rem' }}>
                      <span>Inspect Architecture</span>
                      <ArrowUpRight size={14} />
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-secondary"
                        style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}
                      >
                        <ExternalLink size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Schematic visual */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--code-bg)',
                    aspectRatio: '4/3',
                  }}
                >
                  <ProjectSchematic id={project.id} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================
            HORIZONTAL COMPACT CAROUSEL
            ======================================================== */}
        {compactProjects.length > 0 && (
          <div>
            {/* Carousel header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.2rem',
                  }}
                >
                  More Projects &{' '}
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  >
                    Prototypes
                  </span>
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Drag to explore — additional systems and development repositories
                </p>
              </div>
              {/* Nav buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <button
                  onClick={() => scrollCarousel(-1)}
                  className="badge-tech"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollCarousel(1)}
                  className="badge-tech"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable carousel */}
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                display: 'flex',
                gap: '1.25rem',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                cursor: isDragging ? 'grabbing' : 'grab',
                paddingBottom: '1rem',
                WebkitOverflowScrolling: 'touch',
              }}
              className="hide-scrollbar"
            >
              <AnimatePresence mode="popLayout">
                {compactProjects.map((project, idx) => (
                  <motion.div
                    key={`compact-${project.id}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="card-editorial"
                    data-cursor="project"
                    onClick={() => { if (!isDragging) { playSound('click'); onSelectProject(project); } }}
                    style={{
                      padding: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '300px',
                      minWidth: '310px',
                      maxWidth: '310px',
                      flexShrink: 0,
                    }}
                    whileHover={{ y: -4, borderColor: 'var(--accent-cobalt-border)', boxShadow: 'var(--shadow-cobalt)' }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <span className="badge-tech" style={{ fontSize: '0.68rem' }}>{project.category}</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: project.status === 'Completed' ? 'var(--accent-lime-dark)' : 'var(--accent-coral)',
                            fontWeight: 600,
                          }}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.3rem',
                          lineHeight: 1.25,
                        }}
                      >
                        {project.title}
                      </h4>

                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--accent-coral)',
                          marginBottom: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        {project.tagline}
                      </p>

                      <p
                        style={{
                          fontSize: '0.84rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '1rem',
                        }}
                      >
                        {project.shortDescription}
                      </p>
                    </div>

                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
                        {project.technologies.slice(0, 4).map((t, ti) => (
                          <span key={ti} className="badge-tech" style={{ fontSize: '0.68rem' }}>{t}</span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="badge-tech" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderTop: '1px solid var(--border-hairline)',
                          paddingTop: '0.75rem',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                          {project.year}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: 'var(--accent-cobalt)',
                          }}
                        >
                          View <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 900px) {
          .flagship-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
