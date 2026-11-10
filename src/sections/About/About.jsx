import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, GraduationCap, MapPin, Award, BookOpen, Code2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

export const About = () => {
  const { playSound } = useSound();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('narrative'); // 'narrative' | 'manifest'

  const handleCopyJson = () => {
    playSound('click');
    navigator.clipboard.writeText(JSON.stringify(profileData.identityJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="01"
          label="About The Engineer"
          title="Architecting Intelligence at the Edge of Systems"
          subtitle="Merging full-stack software engineering rigor with applied machine learning and real-world industrial impact."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Editorial Narrative & Core Principles */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem'
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                I am a Computer Science undergraduate at <strong style={{ color: 'var(--text-primary)' }}>Rajarambapu Institute of Technology (RIT)</strong> with an academic record of <strong style={{ color: 'var(--accent-primary)' }}>8.37 CPI</strong>. My engineering work is grounded in solving tangible, real-world problems through robust distributed backends and high-performance Edge AI architectures.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Winning the prestigious <strong style={{ color: 'var(--text-primary)' }}>Smart India Hackathon 2025</strong> reinforced my dedication to complex industrial systems. Whether tracking fine-grained motor gestures in classical dance with custom computer vision pipelines or forecasting electrical grid failures across high-voltage SCADA telemetry, I focus on systems that operate reliably under strict latency and computational constraints.
              </p>
              <p>
                Beyond code, I believe in community and design culture. Serving as the <strong style={{ color: 'var(--text-primary)' }}>UI/UX Head at OysterCode Club</strong> has honed my ability to bridge software architecture and intuitive human experience.
              </p>
            </motion.div>

            {/* Quick Metadata Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem' }}>
                  <GraduationCap size={18} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Degree</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  B.Tech CSE
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  RIT, Maharashtra
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-olive)', marginBottom: '0.4rem' }}>
                  <MapPin size={18} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Origin</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  Sangola, India
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  UTC +5:30 (IST)
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem' }}>
                  <Award size={18} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Hackathon</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  SIH '25 Champion
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  National 1st Place
                </div>
              </div>
            </div>

            {/* Numerical Stats Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.5rem'
              }}
              className="about-stats-grid"
            >
              {profileData.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 700,
                      color: idx === 0 ? 'var(--accent-primary)' : 'var(--text-primary)',
                      lineHeight: 1
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Identity & Architectural Frame */}
          <div>
            {/* Visual Frame & Tabs */}
            <div
              className="card-editorial"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-hairline)'
              }}
            >
              {/* Window Title Bar */}
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderBottom: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    developer_identity.json
                  </span>
                </div>

                <button
                  onClick={handleCopyJson}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: copied ? 'var(--accent-primary)' : 'var(--text-muted)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1px solid var(--border-hairline)'
                  }}
                  title="Copy JSON"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Surface */}
              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--code-bg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  overflowX: 'auto'
                }}
              >
                <pre style={{ margin: 0 }}>
                  <code>{`{
  "engineer": "${profileData.fullName}",
  "institution": "${profileData.education.institution}",
  "discipline": "${profileData.education.degree}",
  "cpi": ${profileData.education.cpi},
  "location": "${profileData.location.city}, ${profileData.location.state}, India",
  "domains": [
    "Edge AI & Computer Vision",
    "Predictive Telemetry & Smart Grids",
    "Full-Stack Web (MERN / FastAPI)",
    "Post-Quantum Cryptography Architectures"
  ],
  "honors": [
    "Smart India Hackathon 2025 Grand Winner",
    "UI/UX Head @ OysterCode Club"
  ],
  "status": "ready_to_build"
}`}</code>
                </pre>
              </div>

              {/* Editorial Profile Frame Footer */}
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-card)',
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-primary-subtle)',
                    border: '1px solid var(--accent-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}
                >
                  JB
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    Engineering Manifesto
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    "Turn complex engineering constraints into reliable, elegant systems."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

