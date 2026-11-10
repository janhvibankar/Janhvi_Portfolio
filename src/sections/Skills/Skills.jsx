import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, marqueeTechnologies } from '../../data/skills';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Marquee } from '../../components/Marquee/Marquee';
import { useSound } from '../../context/SoundContext';
import { Cpu, Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const CATEGORY_ICONS = {
  "AI & Machine Learning": Cpu,
  "Programming Languages": Code2,
  "Frontend Architecture": Layout,
  "Backend & Systems": Server,
  "Database & Cloud": Database,
  "Developer Tools & DevOps": Wrench
};

export const Skills = () => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ['All', ...skillsData.map(s => s.category)];

  const displayedGroups = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="site-container">
        <SectionHeader
          number="02"
          label="Tooling & Stack"
          title="Technical Repertoire"
          serifWord="& Technologies"
          subtitle="A specialized toolkit tested across computer vision pipelines, full-stack backends, and national hackathon architectures."
        />

        {/* Marquee Technology Strip */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Marquee items={marqueeTechnologies} speed={28} />
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => {
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
                  padding: '0.45rem 1rem',
                  fontSize: '0.8rem',
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

        {/* Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, groupIdx) => {
              const IconComponent = CATEGORY_ICONS[group.category] || Code2;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: groupIdx * 0.04 }}
                  className="card-editorial"
                  style={{
                    padding: 'clamp(1.5rem, 3vw, 1.85rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--accent-sage-subtle)',
                          color: 'var(--accent-sage-dark)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent size={16} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)'
                        }}
                      >
                        {group.category}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.25rem',
                        lineHeight: 1.5
                      }}
                    >
                      {group.description}
                    </p>

                    {/* Skill List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {group.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          onMouseEnter={() => {
                            playSound('hover');
                            setSelectedSkill(skill.name);
                          }}
                          onMouseLeave={() => setSelectedSkill(null)}
                          style={{
                            padding: '0.65rem 0.85rem',
                            backgroundColor: selectedSkill === skill.name ? 'var(--accent-sage-subtle)' : 'var(--badge-bg)',
                            border: `1px solid ${selectedSkill === skill.name ? 'var(--accent-sage-border)' : 'var(--border-hairline)'}`,
                            borderRadius: 'var(--radius-sm)',
                            transition: 'all var(--transition-fast)',
                            cursor: 'default'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                              {skill.name}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--accent-coral)',
                                textTransform: 'uppercase',
                                fontWeight: 600
                              }}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            {skill.context}
                          </p>
                        </div>
                      ))}
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
