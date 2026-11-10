import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Calendar, 
  ArrowUpRight, 
  Download, 
  ExternalLink,
  Sparkles,
  Filter
} from 'lucide-react';
import { certificatesData, certificateCategories } from '../data/certificates';
import { useSound } from '../context/SoundContext';

const ACCENTS = [
  { badge: 'badge-cobalt', border: 'var(--accent-cobalt)', bg: 'var(--accent-cobalt-subtle)', text: 'var(--accent-cobalt)' },
  { badge: 'badge-lime', border: 'var(--accent-lime-dark)', bg: 'var(--accent-lime-subtle)', text: 'var(--accent-lime-dark)' },
  { badge: 'badge-coral', border: 'var(--accent-coral)', bg: 'var(--accent-coral-subtle)', text: 'var(--accent-coral)' },
];

export const CertificationsPage = ({ onBackToHome, onSelectCertificate }) => {
  const { playSound } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter(cert => {
      const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.badge.toLowerCase().includes(query) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(query)) ||
        cert.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div 
      className="certifications-page"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Navigation Bar / Return Link */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <button
            onClick={() => {
              playSound('click');
              onBackToHome();
            }}
            className="btn-ghost"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.86rem',
              padding: '0.55rem 1.1rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge-tech badge-cobalt" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}>
              <ShieldCheck size={13} />
              <span>{certificatesData.length} Verified Credentials</span>
            </span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div style={{ maxWidth: '840px', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-coral)',
              marginBottom: '0.85rem'
            }}
          >
            <Sparkles size={14} />
            <span>Academic & Professional Accreditations</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)'
            }}
          >
            Certifications &amp; <span className="text-serif" style={{ color: 'var(--accent-cobalt)', fontStyle: 'italic', fontWeight: 400 }}>Achievements</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '680px'
            }}
          >
            A curated registry of official qualifications spanning applied machine learning, 
            relational database systems, software testing, full-stack architecture, and cloud foundations 
            awarded by IIT Madras, IIT Kharagpur, Infosys Springboard, and Cisco Networking Academy.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '3rem',
            padding: '1.5rem',
            backgroundColor: 'var(--bg-card-subtle)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-hairline)'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by certificate title, issuer (IIT, Infosys, Cisco), or technology..."
              style={{
                width: '100%',
                padding: '0.85rem 2.8rem 0.85rem 2.8rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.92rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                transition: 'border-color var(--transition-fast)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', marginRight: '0.5rem' }}>
              <Filter size={14} />
              <span>CATEGORY:</span>
            </div>
            {certificateCategories.map((category) => {
              const isActive = activeCategory === category;
              const count = category === 'All' 
                ? certificatesData.length 
                : certificatesData.filter(c => c.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => {
                    playSound('click');
                    setActiveCategory(category);
                  }}
                  className="badge-tech"
                  style={{
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? 'var(--accent-cobalt-subtle)' : 'var(--bg-primary)',
                    borderColor: isActive ? 'var(--accent-cobalt)' : 'var(--border-hairline)',
                    color: isActive ? 'var(--accent-cobalt)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span>{category}</span>
                  <span 
                    style={{ 
                      marginLeft: '0.4rem', 
                      opacity: 0.65, 
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)' 
                    }}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <span>Showing {filteredCertificates.length} of {certificatesData.length} certificates</span>
          {activeCategory !== 'All' && (
            <span>Filtered by: <strong style={{ color: 'var(--accent-cobalt)' }}>{activeCategory}</strong></span>
          )}
        </div>

        {/* Certificate Cards Grid */}
        {filteredCertificates.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert, idx) => {
                const accent = ACCENTS[idx % ACCENTS.length];
                const isHovered = hoveredId === cert.id;

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="card-editorial"
                    data-cursor="explore"
                    onClick={() => {
                      playSound('click');
                      onSelectCertificate(cert);
                    }}
                    onMouseEnter={() => {
                      playSound('hover');
                      setHoveredId(cert.id);
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      borderRadius: 'var(--radius-lg)',
                      borderColor: isHovered ? accent.border : 'var(--border-hairline)',
                      boxShadow: isHovered ? `0 16px 36px ${accent.bg}` : 'none',
                      transition: 'all var(--transition-normal)',
                      backgroundColor: 'var(--bg-card)'
                    }}
                  >
                    {/* Thumbnail banner preview */}
                    <div
                      style={{
                        position: 'relative',
                        height: '190px',
                        backgroundColor: 'var(--bg-card-subtle)',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}
                    >
                      {cert.thumbnailUrl ? (
                        <img
                          src={cert.thumbnailUrl}
                          alt={cert.title}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            transition: 'transform 0.4s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                      ) : (
                        <div style={{ textAlign: 'center', color: accent.text }}>
                          <Award size={48} style={{ opacity: 0.8 }} />
                        </div>
                      )}

                      {/* Top floating tags */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          left: '0.75rem',
                          right: '0.75rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          pointerEvents: 'none'
                        }}
                      >
                        <span className={`badge-tech ${accent.badge}`} style={{ fontSize: '0.7rem' }}>
                          {cert.badge}
                        </span>
                        {cert.score && (
                          <span 
                            style={{ 
                              backgroundColor: 'rgba(10, 17, 40, 0.85)', 
                              backdropFilter: 'blur(4px)',
                              color: 'var(--accent-coral)',
                              border: '1px solid var(--border-hairline)',
                              borderRadius: '4px',
                              padding: '2px 8px',
                              fontSize: '0.68rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700
                            }}
                          >
                            {cert.score}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between', 
                          marginBottom: '0.5rem',
                          gap: '0.5rem'
                        }}
                      >
                        <span 
                          style={{ 
                            fontFamily: 'var(--font-mono)', 
                            fontSize: '0.72rem', 
                            color: accent.text, 
                            fontWeight: 600,
                            letterSpacing: '0.04em'
                          }}
                        >
                          {cert.issuer}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                          <Calendar size={11} />
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.08rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.6rem',
                          lineHeight: 1.35
                        }}
                      >
                        {cert.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.84rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                          marginBottom: '1rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          flex: 1
                        }}
                      >
                        {cert.description}
                      </p>

                      {/* Card Bottom Meta */}
                      <div 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          paddingTop: '0.85rem',
                          borderTop: '1px solid var(--border-hairline)',
                          marginTop: 'auto'
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: 'var(--text-muted)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: '160px'
                          }}
                        >
                          {cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified'}
                        </span>

                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            color: accent.text
                          }}
                        >
                          <span>View Certificate</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty search state */
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--bg-card-subtle)',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed var(--border-hairline)'
            }}
          >
            <Award size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              No certificates match your query
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              No records found for "{searchQuery}" in category "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

