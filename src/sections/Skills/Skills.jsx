import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, marqueeTechnologies } from '../../data/skills';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Marquee } from '../../components/Marquee/Marquee';
import { useSound } from '../../context/SoundContext';
import { Cpu, Code2, Layout, Server, Database, Wrench, X, ArrowUpRight, Sparkles } from 'lucide-react';

const CATEGORY_META = {
  'Programming Languages': { Icon: Code2, accent: 'var(--accent-lavender)', subtle: 'var(--accent-lavender-subtle)' },
  'Frontend & Mobile': { Icon: Layout, accent: 'var(--accent-coral)', subtle: 'var(--accent-coral-subtle)' },
  'Backend & APIs': { Icon: Server, accent: 'var(--accent-lavender)', subtle: 'var(--accent-lavender-subtle)' },
  'AI/ML & Computer Vision': { Icon: Cpu, accent: 'var(--accent-coral)', subtle: 'var(--accent-coral-subtle)' },
  'Generative AI': { Icon: Sparkles, accent: 'var(--accent-lavender)', subtle: 'var(--accent-lavender-subtle)' },
  'Databases': { Icon: Database, accent: 'var(--accent-coral)', subtle: 'var(--accent-coral-subtle)' },
  'Tools': { Icon: Wrench, accent: 'var(--text-secondary)', subtle: 'var(--badge-bg)' },
  'Core Areas': { Icon: Server, accent: 'var(--accent-lime-dark)', subtle: 'var(--accent-lime-subtle)' },
};

export const Skills = () => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ['All', ...skillsData.map(s => s.category)];

  const displayedGroups = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Flatten all skills for the constellation view
  const allSkills = skillsData.flatMap(g =>
    g.skills.map(s => ({ ...s, category: g.category }))
  );
  const displayedSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  const handleSkillClick = (skill) => {
    playSound('click');
    setSelectedSkill(prev => (prev?.name === skill.name ? null : skill));
  };

  return (
    <section id="skills" className="section-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="site-container">
        <SectionHeader
          number="02"
          label="Technical Skills"
          title="Core Stack &"
          serifWord="Technical Repertoire"
          subtitle="Structured competencies across programming languages, full-stack frameworks, applied AI/ML, and core computer science fundamentals."
        />

        {/* Marquee Technology Strip */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Marquee items={marqueeTechnologies} speed={28} />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const meta = CATEGORY_META[cat];
            return (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat);
                  setSelectedSkill(null);
                }}
                className="badge-tech"
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive
                    ? (meta ? meta.subtle : 'var(--accent-cobalt-subtle)')
                    : 'var(--badge-bg)',
                  borderColor: isActive
                    ? (meta ? meta.accent : 'var(--accent-cobalt)')
                    : 'var(--border-hairline)',
                  color: isActive
                    ? (meta ? meta.accent : 'var(--accent-cobalt)')
                    : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Two-pane layout: skill chips + detail panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: selectedSkill ? 'minmax(0, 1fr) 340px' : '1fr',
            gap: '2rem',
            alignItems: 'start',
            transition: 'grid-template-columns 0.4s ease',
          }}
          className="skills-layout"
        >
          {/* Skill Groups */}
          <div>
            <AnimatePresence mode="popLayout">
              {displayedGroups.map((group, groupIdx) => {
                const meta = CATEGORY_META[group.category] || { Icon: Code2, accent: 'var(--accent-cobalt)', subtle: 'var(--accent-cobalt-subtle)' };
                const { Icon } = meta;
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
                    style={{ marginBottom: '2rem' }}
                  >
                    {/* Group header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        marginBottom: '0.85rem',
                        paddingBottom: '0.6rem',
                        borderBottom: '1px solid var(--border-hairline)',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          backgroundColor: meta.subtle,
                          color: meta.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {group.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--text-muted)',
                          marginLeft: 'auto',
                        }}
                      >
                        {group.skills.length} tools
                      </span>
                    </div>

                    {/* Skill chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {group.skills.map((skill) => {
                        const isSelected = selectedSkill?.name === skill.name;
                        return (
                          <motion.button
                            key={skill.name}
                            onClick={() => handleSkillClick({ ...skill, category: group.category })}
                            onMouseEnter={() => playSound('hover')}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                              padding: '0.5rem 1rem',
                              borderRadius: 'var(--radius-full)',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.84rem',
                              fontWeight: isSelected ? 700 : 500,
                              color: isSelected ? meta.accent : 'var(--text-primary)',
                              backgroundColor: isSelected ? meta.subtle : 'var(--bg-card)',
                              border: `1.5px solid ${isSelected ? meta.accent : 'var(--border-hairline)'}`,
                              transition: 'all var(--transition-fast)',
                              cursor: 'pointer',
                              boxShadow: isSelected ? `0 0 0 3px ${meta.subtle}` : 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                            }}
                          >
                            {skill.name}
                            {isSelected && (
                              <span
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.62rem',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.04em',
                                  opacity: 0.75,
                                }}
                              >
                                {skill.level}
                              </span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Detail panel */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="card-editorial"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  position: 'sticky',
                  top: '5.5rem',
                  borderColor: (() => {
                    const m = CATEGORY_META[selectedSkill.category];
                    return m ? m.accent : 'var(--accent-cobalt)';
                  })(),
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Close */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {selectedSkill.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--badge-bg)',
                      border: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <X size={13} />
                  </button>
                </div>

                {/* Level badge */}
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    className="badge-tech"
                    style={{
                      backgroundColor: (() => {
                        const m = CATEGORY_META[selectedSkill.category];
                        return m ? m.subtle : 'var(--accent-cobalt-subtle)';
                      })(),
                      color: (() => {
                        const m = CATEGORY_META[selectedSkill.category];
                        return m ? m.accent : 'var(--accent-cobalt)';
                      })(),
                      borderColor: (() => {
                        const m = CATEGORY_META[selectedSkill.category];
                        return m ? m.accent : 'var(--accent-cobalt)';
                      })(),
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: '0.68rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {selectedSkill.level}
                  </span>
                </div>

                {/* Context */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {selectedSkill.context}
                </p>

                {/* Projects */}
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      Used in
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedSkill.projects.map((proj, i) => (
                        <span
                          key={i}
                          className="badge-tech"
                          style={{ fontSize: '0.74rem' }}
                        >
                          <ArrowUpRight size={10} />
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Click hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--text-dim)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ opacity: 0.6 }}>↑</span>
          Click any skill to explore how it was used
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
