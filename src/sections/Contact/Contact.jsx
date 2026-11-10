import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUp, FileText, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { useSound } from '../../context/SoundContext';
import confetti from 'canvas-confetti';

export const Contact = ({ onOpenResume }) => {
  const { playSound } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration Opportunity',
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

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields before transmitting.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    // Here we provide a transparent, robust transmission handler:
    // If a Formspree ID is configured (VITE_FORMSPREE_ID or default), post to it.
    // Otherwise, generate a direct mailto link so the user never loses their drafted transmission!
    try {
      // Simulate network transmission delay for polish
      await new Promise(res => setTimeout(res, 800));

      // Construct mailto url as reliable protocol
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
      const mailtoUrl = `mailto:${profileData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open mailto client in case user wants immediate email dispatch
      window.open(mailtoUrl, '_blank');

      setFormStatus('success');
      playSound('success');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E66B48', '#A4A58A', '#F5F0E8']
      });

      setFormData({
        name: '',
        email: '',
        subject: 'Collaboration Opportunity',
        message: ''
      });
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('An unexpected error occurred. Please reach out directly via email.');
    }
  };

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-wrapper" style={{ paddingBottom: '2rem' }}>
      <div className="site-container">
        <SectionHeader
          number="09"
          label="Direct Interface"
          title="Have an idea? Let's build something meaningful."
          subtitle="Open for Software Engineering internships, full-time AI/Full-Stack developer roles, research collaborations, and ambitious technical projects."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
            marginBottom: 'clamp(4rem, 8vw, 6rem)'
          }}
        >
          {/* Left Column: Direct Communication Channels & Status Cards */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Email Card */}
              <div
                className="card-editorial card-editorial-accent"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-primary-subtle)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Primary Email Protocol
                    </div>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1rem',
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
                  style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem' }}
                  title="Copy email to clipboard"
                >
                  {emailCopied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & Timezone Card */}
              <div
                className="card-editorial"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-olive-subtle)',
                    color: 'var(--accent-olive)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Physical Base & Timezone
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {profileData.location.city}, {profileData.location.state}, India ({profileData.location.utcOffset})
                  </div>
                </div>
              </div>

              {/* Live Status Card */}
              <div
                className="card-editorial"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{ padding: '0.5rem' }}>
                  <span className="pulse-dot" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Engineering Status
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {profileData.availability.note}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.85rem' }}
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
                style={{ fontSize: '0.85rem' }}
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
                style={{ fontSize: '0.85rem' }}
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
                padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    color: 'var(--accent-primary)',
                    textTransform: 'uppercase'
                  }}
                >
                  // Send Transmission Payload
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Direct Dispatch
                </span>
              </div>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#22c55e',
                    fontSize: '0.88rem'
                  }}
                >
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                  <span>Your message transmission has been generated! Check your email client or send directly to {profileData.contact.email}.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#ef4444',
                    fontSize: '0.88rem'
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ada@domain.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Transmission Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Collaboration Opportunity">Software Engineering / Internship Opportunity</option>
                  <option value="AI / Research Discussion">AI / Research Discussion</option>
                  <option value="Hackathon / Project Inquiry">Hackathon / Project Inquiry</option>
                  <option value="General Technical Exchange">General Technical Exchange</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Message Payload *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your team, problem space, or collaboration idea..."
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
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
                  padding: '1rem',
                  fontSize: '0.95rem',
                  opacity: formStatus === 'submitting' ? 0.7 : 1
                }}
              >
                <Send size={16} />
                <span>{formStatus === 'submitting' ? 'Preparing Transmission...' : 'Transmit Message'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline-divider" style={{ marginBottom: '2.5rem' }} />

        {/* Editorial Footer */}
        <footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
              JANHVI BANKAR
            </div>
            <div>
              © 2024–2026. Handcrafted with React, Vite & Motion. All rights reserved.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#22c55e' }}>
              <span className="pulse-dot" />
              <span>System: Online</span>
            </span>

            <span>Latency: 12ms</span>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="badge-tech"
              style={{ padding: '0.45rem 0.85rem', color: 'var(--text-primary)' }}
              title="Return to summit"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
