import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, marqueeTechnologies } from '../../data/skills';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Marquee } from '../../components/Marquee/Marquee';
import { useSound } from '../../context/SoundContext';
import { Sparkles, Cpu, Code2, Layout, Server, Database, Wrench } from 'lucide-react';

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
    <section id="skills" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="02"
          label="Technical Repertoire"
          title="Engineered Tooling & Production Technologies"
          subtitle="A specialized engineering stack tested in high-stakes hackathons, computer vision research, and full-stack enterprise deployments."
        />

        {/* Animated Marquee Ticker */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Marquee items={marqueeTechnologies} speed={32} />
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
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
                className={`badge-tech ${isActive ? 'badge-accent' : ''}`}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
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

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, groupIdx) => {
              const IconComponent = CATEGORY_ICONS[group.category] || Code2;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                  className="card-editorial"
                  style={{
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--accent-primary-subtle)',
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
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
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.5
                      }}
                    >
                      {group.description}
                    </p>

                    {/* Skill Badges List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {group.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          onMouseEnter={() => {
                            playSound('hover');
                            setSelectedSkill(skill.name);
                          }}
                          onMouseLeave={() => setSelectedSkill(null)}
                          style={{
                            padding: '0.75rem 1rem',
                            backgroundColor: selectedSkill === skill.name ? 'var(--accent-primary-subtle)' : 'var(--badge-bg)',
                            border: `1px solid ${selectedSkill === skill.name ? 'var(--accent-primary-border)' : 'var(--border-hairline)'}`,
                            borderRadius: 'var(--radius-md)',
                            transition: 'all var(--transition-fast)',
                            cursor: 'default'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                              {skill.name}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--accent-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontWeight: 700
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

