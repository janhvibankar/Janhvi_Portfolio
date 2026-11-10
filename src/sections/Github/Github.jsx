import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { Github } from '../../components/Icons';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';

const FALLBACK_REPOS = [
  {
    name: "Janhvi_Portfolio",
    description: "Creative Developer & Editorial Engineering Portfolio featuring Vite, React, and interactive systems.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/janhvibankar/Janhvi_Portfolio"
  },
  {
    name: "Bharatanatyam-Mudra-Detector",
    description: "Real-time posture correction & classical hand gesture recognition using YOLOv8, OpenCV, and Flutter.",
    language: "Python",
    stars: 3,
    forks: 1,
    url: "https://github.com/janhvibankar"
  },
  {
    name: "MigraineGuardian",
    description: "Predictive multimodal healthcare analytics forecasting migraine onset using physiological markers.",
    language: "Python",
    stars: 2,
    forks: 0,
    url: "https://github.com/janhvibankar"
  },
  {
    name: "Hospital-Management-System",
    description: "Full-stack MERN hospital ERP with automated bed scheduling and doctor-patient role portals.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/janhvibankar"
  }
];

export const GithubSection = () => {
  const { playSound } = useSound();
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        const userRes = await fetch('https://api.github.com/users/janhvibankar');
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) setProfile(userData);
        }

        const repoRes = await fetch('https://api.github.com/users/janhvibankar/repos?sort=updated&per_page=6');
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          if (isMounted && Array.isArray(repoData) && repoData.length > 0) {
            setRepos(repoData.map(r => ({
              name: r.name,
              description: r.description || "Open source software project.",
              language: r.language || "Code",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url
            })));
          }
        }
      } catch {
        // Use verified fallback repositories gracefully on rate limit / offline
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGithubData();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="github" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="08"
          label="Open Source & Codebase"
          title="GitHub Telemetry & Development Activity"
          subtitle="Real-time public repositories, open-source codebases, and systems architectures authored by Janhvi Bankar."
          action={
            <a
              href="https://github.com/janhvibankar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.88rem' }}
              onClick={() => playSound('click')}
            >
              <Github size={16} />
              <span>Visit @janhvibankar</span>
              <ExternalLink size={14} />
            </a>
          }
        />

        {/* Profile Stats Card */}
        <div
          className="card-editorial"
          style={{
            padding: '1.5rem clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            backgroundColor: 'var(--bg-card-muted)',
            border: '1px solid var(--border-hairline)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'var(--badge-bg)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0
              }}
            >
              <Terminal size={24} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                janhvibankar
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Computer Science Undergraduate · Active Builder
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profile?.public_repos || '10+'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Repositories
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-hairline)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profile?.followers || 'Active'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Network
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-hairline)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                SIH '25
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Champion
              </div>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {repos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-editorial card-editorial-accent"
              onMouseEnter={() => playSound('hover')}
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '190px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                    <BookOpen size={16} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: '1rem'
                  }}
                >
                  {repo.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: repo.language === 'Python' ? '#3572A5' : repo.language === 'JavaScript' ? '#f1e05a' : 'var(--accent-primary)'
                    }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Star size={12} /> {repo.stars}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <GitFork size={12} /> {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
