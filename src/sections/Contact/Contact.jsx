import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUp, FileText, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useSound } from '../../context/SoundContext';
import confetti from 'canvas-confetti';

export const Contact = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Discussion',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    playSound('click');
    navigator.clipboard.writeText(profileData.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playSound('click');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    try {
      // Check if Formspree endpoint is configured via environment variable
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error('Formspree dispatch failed');
      } else {
        // Transparent polished fallback: construct and open direct mailto protocol
        await new Promise(res => setTimeout(res, 600));
        const subjectEncoded = encodeURIComponent(`[Portfolio] ${formData.subject} - from ${formData.name}`);
        const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:${profileData.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`, '_blank');
      }

      setFormStatus('success');
      playSound('success');
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#B8D9B2', '#E98570', '#DDDCCF', '#F4F3EC']
      });

      setFormData({
        name: '',
        email: '',
        subject: 'Project Discussion',
        message: ''
      });
    } catch {
      setFormStatus('error');
      setErrorMessage('Failed to send. Please write directly to ' + profileData.contact.email);
    }
  };

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-wrapper" style={{ paddingBottom: '2.5rem' }}>
      <div className="site-container">
        <SectionHeader
          number="07"
          label="Contact"
          title="Have an idea?"
          serifWord="Let's build something meaningful."
          subtitle="Open for Software Engineering internships, full-time AI/Full-Stack roles, research collaborations, and ambitious technical projects."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
            marginBottom: 'clamp(3.5rem, 6vw, 5rem)'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Communication Channels */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {/* Email Card */}
              <div
                className="card-editorial card-editorial-accent"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-sage-subtle)',
                      color: 'var(--accent-sage-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '0.96rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="badge-tech"
                  style={{ padding: '0.35rem 0.7rem', fontSize: '0.74rem' }}
                  title="Copy email to clipboard"
                >
                  {emailCopied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div
                className="card-editorial"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-coral-subtle)',
                    color: 'var(--accent-coral)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    {profileData.location.city}, {profileData.location.state}, India
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <div
                className="card-editorial"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <div style={{ padding: '0.4rem' }}>
                  <span className="pulse-dot" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Current Status
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    {profileData.availability.note}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                onClick={() => playSound('click')}
              >
                <Github size={15} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                onClick={() => playSound('click')}
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onOpenResume();
                }}
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
              >
                <FileText size={15} />
                <span>Inspect Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Transmission Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="card-editorial card-editorial-accent"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.08em',
                    color: 'var(--accent-coral)',
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}
                >
                  // Send a Message
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Direct Transmission
                </span>
              </div>

              {/* Status alerts */}
              {formStatus === 'success' && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--accent-sage-subtle)',
                    border: '1px solid var(--accent-sage-border)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: 'var(--accent-sage-dark)',
                    fontSize: '0.88rem'
                  }}
                >
                  <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                  <span>Message dispatched successfully! I will get back to you shortly.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(233,133,112,0.15)',
                    border: '1px solid rgba(233,133,112,0.4)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: 'var(--accent-coral)',
                    fontSize: '0.88rem'
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email inputs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem'
                  }}
                >
                  Topic
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0.95rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Project Discussion">Engineering / Internship Opportunity</option>
                  <option value="AI / Research Collaboration">AI / Research Collaboration</option>
                  <option value="Hackathon / Project">Hackathon / Technical Project</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem'
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your idea, role, or question..."
                  rows={4}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 0.95rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    resize: 'vertical',
                    lineHeight: 1.6
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '0.94rem',
                  opacity: formStatus === 'submitting' ? 0.7 : 1
                }}
              >
                <Send size={15} />
                <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline-divider" style={{ marginBottom: '2rem' }} />

        {/* Editorial Footer */}
        <footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                display: 'block',
                marginBottom: '0.15rem'
              }}
            >
              Janhvi Bankar
            </span>
            <span>
              © 2025–2026. Handcrafted with React & Vite. All rights reserved.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-sage-dark)' }}>
              <span className="pulse-dot" />
              <span>Available for opportunities</span>
            </span>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="badge-tech"
              style={{ padding: '0.4rem 0.8rem', color: 'var(--text-primary)' }}
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </footer>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
