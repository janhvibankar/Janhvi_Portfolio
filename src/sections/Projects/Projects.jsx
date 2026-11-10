import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Present all 4 primary featured projects prominently as flagship editorial cards
  const flagshipProjects = filtered;
  const compactProjects = [];

  // Carousel drag handlers (if compact projects are added)
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

  // Accent cycling for projects
  const ACCENTS = [
    { border: 'var(--accent-lavender-border)', badge: 'badge-lavender', glow: 'var(--shadow-cobalt)', text: 'var(--accent-lavender)' },
    { border: 'var(--accent-coral-border)', badge: 'badge-coral', glow: '0 12px 36px rgba(255,107,107,0.22)', text: 'var(--accent-coral)' },
    { border: 'var(--accent-lime-border)', badge: 'badge-lime', glow: 'var(--shadow-lime)', text: 'var(--accent-lime-dark)' },
    { border: 'var(--accent-lavender-border)', badge: 'badge-lavender', glow: 'var(--shadow-cobalt)', text: 'var(--accent-lavender)' },
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="03"
          label="Featured Projects"
          title="Featured Engineering"
          serifWord="Works & Applications"
          subtitle="Real-world full-stack systems, computer vision gesture recognition, and applied AI applications designed for real impact."
        />

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.75rem' }}>
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { playSound('click'); setActiveCategory(cat); }}
                className="badge-tech"
                style={{
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-lavender-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-lavender)' : 'var(--border-hairline)',
                  color: isActive ? 'var(--accent-lavender)' : 'var(--text-secondary)',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '2rem' }}>
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
                  borderColor: 'var(--accent-lavender-border)',
                }}
              >
                {/* Number Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.75rem',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '4.5rem',
                    color: 'var(--border-hairline)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Text Content */}
                <div style={{ order: isReversed ? 2 : 1, position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                    <span className={`badge-tech ${accent.badge}`} style={{ fontSize: '0.68rem' }}>
                      <Sparkles size={10} />
                      FEATURED
                    </span>
                    <span className="badge-tech" style={{ fontSize: '0.72rem' }}>{project.category}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: project.status.includes('Completed') ? 'var(--accent-lime-dark)' : 'var(--accent-coral)',
                        fontWeight: 600,
                      }}
                    >
                      • {project.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.025em',
                      marginBottom: '0.35rem',
                      lineHeight: 1.18,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-coral)',
                      marginBottom: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.94rem',
                      lineHeight: 1.68,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                      maxWidth: '560px',
                    }}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Metrics Panel */}
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
                              fontSize: '1.2rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              letterSpacing: '-0.015em',
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

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.4rem' }}>
                    {project.technologies.slice(0, 6).map((t, ti) => (
                      <span key={ti} className="badge-tech" style={{ fontSize: '0.7rem' }}>{t}</span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="badge-tech" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span className="btn-primary" style={{ fontSize: '0.84rem', padding: '0.65rem 1.4rem' }}>
                      <span>View Project Details</span>
                      <ArrowUpRight size={14} />
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-secondary"
                        style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}
                      >
                        <ExternalLink size={13} />
                        <span>GitHub Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Schematic Architectural Visual */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border-hairline)',
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flagship-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
