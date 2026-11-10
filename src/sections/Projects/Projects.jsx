import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { Github } from '../../components/Icons';
import { projectsData, projectCategories } from '../../data/projects';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const Projects = ({ onSelectProject }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="03"
          label="Project Exhibition"
          title="Digital Gallery & Systems Portfolio"
          subtitle="A curated exhibition of engineering projects spanning deep learning, computer vision, distributed backends, and predictive industrial platforms."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
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
                className={`badge-tech ${isActive ? 'badge-accent' : ''}`}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-primary-subtle)' : 'var(--badge-bg)',
                  borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-hairline)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Exhibition Gallery: Asymmetrical & Alternating Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="card-editorial card-editorial-accent project-card-hover"
                  data-cursor="project"
                  onClick={() => {
                    playSound('click');
                    onSelectProject(project);
                  }}
                  style={{
                    padding: 'clamp(1.75rem, 4vw, 3rem)',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    alignItems: 'center'
                  }}
                >
                  {/* Text Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span className="badge-tech badge-accent">{project.category}</span>
                      <span
                        className="badge-tech"
                        style={{
                          color: project.status === 'Completed' ? '#22c55e' : 'var(--accent-primary)',
                          borderColor: project.status === 'Completed' ? 'rgba(34,197,94,0.3)' : 'var(--accent-primary-border)'
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: project.status === 'Completed' ? '#22c55e' : 'var(--accent-primary)',
                            display: 'inline-block'
                          }}
                        />
                        {project.status}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {project.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        marginBottom: '0.5rem',
                        lineHeight: 1.2
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '1rem',
                        fontWeight: 500
                      }}
                    >
                      {project.tagline}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span key={tIdx} className="badge-tech" style={{ fontSize: '0.72rem' }}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="badge-tech" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Action Trigger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span
                        className="btn-primary"
                        style={{
                          padding: '0.55rem 1.25rem',
                          fontSize: '0.82rem',
                          gap: '0.4rem'
                        }}
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight size={14} />
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        Click card for full details
                      </span>
                    </div>
                  </div>

                  {/* Visual / Blueprint Schematic Card */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      backgroundColor: 'var(--bg-card-muted)',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '260px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Architectural Watermark Pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-15%',
                        right: '-10%',
                        fontFamily: 'var(--font-display)',
                        fontSize: '8rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        opacity: 0.03,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        lineHeight: 1
                      }}
                    >
                      0{idx + 1}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.12em',
                          color: 'var(--accent-primary)',
                          textTransform: 'uppercase'
                        }}
                      >
                        [SYS-ID // 0{idx + 1}]
                      </span>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--badge-bg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-primary)'
                        }}
                      >
                        <Cpu size={17} />
                      </div>
                    </div>

                    {/* Metrics Banner */}
                    <div style={{ margin: '1.5rem 0', position: 'relative', zIndex: 1 }}>
                      {project.metrics && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          {project.metrics.slice(0, 2).map((m, mIdx) => (
                            <div
                              key={mIdx}
                              style={{
                                padding: '0.75rem',
                                backgroundColor: 'var(--badge-bg)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-hairline)'
                              }}
                            >
                              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {m.value}
                              </div>
                              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Flow pill */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        borderTop: '1px solid var(--border-hairline)',
                        paddingTop: '0.85rem',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <span>Pipeline: {project.architecture ? project.architecture.type : 'Modular System'}</span>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>0{idx + 1} / 0{filteredProjects.length}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
