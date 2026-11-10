import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { projectsData, projectCategories } from '../../data/projects';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProjectSchematic } from '../../components/ProjectSchematic';
import { useSound } from '../../context/SoundContext';

export const Projects = ({ onSelectProject }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by category
  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // If "All" is active, show top 3-4 as flagship showcases, and remainder as compact gallery
  const isAll = activeCategory === 'All';
  const flagshipProjects = isAll ? filtered.slice(0, 3) : filtered.slice(0, 2);
  const compactProjects = isAll ? filtered.slice(3) : filtered.slice(2);

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="03"
          label="Exhibition"
          title="Curated Engineering Works"
          serifWord="& Digital Systems"
          subtitle="A selection of machine learning architectures, distributed backends, and full-stack systems designed for real-world impact."
        />

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '3rem'
          }}
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat);
                }}
                className={`badge-tech ${isActive ? 'badge-sage' : ''}`}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 500,
                  backgroundColor: isActive ? 'var(--accent-sage-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-sage)' : 'var(--border-hairline)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            FLAGSHIP PROJECT SHOWCASES (Top 3-4 Featured Projects)
            =================================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4.5rem' }}>
          {flagshipProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={`flagship-${project.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55 }}
                className="card-editorial card-editorial-accent"
                data-cursor="project"
                onClick={() => {
                  playSound('click');
                  onSelectProject(project);
                }}
                style={{
                  padding: 'clamp(2rem, 5vw, 3.25rem)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-xl)',
                  display: 'grid',
                  gridTemplateColumns: isReversed ? 'minmax(0, 1fr) minmax(0, 1.25fr)' : 'minmax(0, 1.25fr) minmax(0, 1fr)',
                  gap: 'clamp(2rem, 5vw, 3.5rem)',
                  alignItems: 'center'
                }}
              >
                {/* Text Content */}
                <div style={{ order: isReversed ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                    <span className="badge-tech badge-sage" style={{ fontSize: '0.72rem' }}>
                      <Sparkles size={11} />
                      FEATURED EXHIBIT
                    </span>
                    <span className="badge-tech">{project.category}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: project.status === 'Completed' ? 'var(--accent-sage-dark)' : 'var(--accent-coral)',
                        fontWeight: 600
                      }}
                    >
                      • {project.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.025em',
                      marginBottom: '0.35rem',
                      lineHeight: 1.2
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-coral)',
                      marginBottom: '1rem',
                      fontWeight: 500
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem',
                      maxWidth: '620px'
                    }}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-hairline)'
                      }}
                    >
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className="badge-tech" style={{ fontSize: '0.72rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <span
                    className="btn-primary"
                    style={{ fontSize: '0.86rem', padding: '0.7rem 1.5rem' }}
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                {/* Visual Schematic Blueprint Preview */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--code-bg)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <ProjectSchematic id={project.id} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================================
            MORE PROJECTS GALLERY (Compact & Filterable)
            =================================================================== */}
        {compactProjects.length > 0 && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.35rem'
                }}
              >
                More Projects & Prototypes
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Additional systems, research initiatives, and development repositories.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.75rem'
              }}
            >
              <AnimatePresence mode="popLayout">
                {compactProjects.map((project, idx) => (
                  <motion.div
                    key={`compact-${project.id}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="card-editorial card-editorial-accent"
                    data-cursor="project"
                    onClick={() => {
                      playSound('click');
                      onSelectProject(project);
                    }}
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2rem)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '320px'
                    }}
                  >
                    <div>
                      {/* Card Top */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                        <span className="badge-tech badge-sage" style={{ fontSize: '0.7rem' }}>
                          {project.category}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: project.status === 'Completed' ? 'var(--accent-sage-dark)' : 'var(--accent-coral)',
                            fontWeight: 600
                          }}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.35rem',
                          lineHeight: 1.25
                        }}
                      >
                        {project.title}
                      </h4>

                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: 'var(--accent-coral)',
                          marginBottom: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {project.tagline}
                      </p>

                      <p
                        style={{
                          fontSize: '0.88rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '1.25rem'
                        }}
                      >
                        {project.shortDescription}
                      </p>
                    </div>

                    <div>
                      {/* Tech tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                        {project.technologies.slice(0, 4).map((t, tIdx) => (
                          <span key={tIdx} className="badge-tech" style={{ fontSize: '0.7rem' }}>
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="badge-tech" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
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
                          paddingTop: '0.85rem'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {project.year}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: 'var(--accent-coral)'
                          }}
                        >
                          <span>View Details</span>
                          <ArrowUpRight size={14} />
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
        @media (max-width: 900px) {
          .card-editorial-accent {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
