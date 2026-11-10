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
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCopyEmail = () => {
    playSound('click');
    navigator.clipboard.writeText(profileData.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
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
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Formspree dispatch failed');
      } else {
        await new Promise(r => setTimeout(r, 600));
        const sub = encodeURIComponent(`[Portfolio] ${formData.subject} - from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:${profileData.contact.email}?subject=${sub}&body=${body}`, '_blank');
      }

      setFormStatus('success');
      playSound('success');
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.72 },
        colors: ['#D9F36A', '#6258E8', '#FF785E', '#F7F3EA'],
      });
      setFormData({ name: '', email: '', subject: 'Project Discussion', message: '' });
    } catch {
      setFormStatus('error');
      setErrorMessage('Failed to send. Please write directly to ' + profileData.contact.email);
    }
  };

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-secondary)',
    border: '1.5px solid var(--border-hairline)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color var(--transition-fast)',
  };

  return (
    <section id="contact" className="section-wrapper" style={{ paddingBottom: '2rem' }}>
      <div className="site-container">
        {/* Big editorial headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)', textAlign: 'center', position: 'relative' }}
        >
          {/* Background decorative text */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(5rem, 12vw, 10rem)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--border-hairline)',
              pointerEvents: 'none',
              userSelect: 'none',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Hello
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-coral)',
              marginBottom: '1rem',
              position: 'relative',
            }}
          >
            07 / Contact
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              position: 'relative',
            }}
          >
            Have an idea?{' '}
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--accent-cobalt)',
              }}
            >
              Let's build
            </span>
            <br />
            something great.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
              margin: '1.25rem auto 0',
              position: 'relative',
            }}
          >
            Open for Software Engineering internships, full-time AI / Full-Stack roles, research collaborations, and ambitious technical projects.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
            marginBottom: 'clamp(3rem, 5vw, 4rem)',
          }}
          className="contact-grid"
        >
          {/* Left: channels */}
          <div>
            {/* Email card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="card-editorial"
              style={{ padding: '1.35rem 1.5rem', marginBottom: '1rem' }}
              data-cursor="copy"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-cobalt-subtle)',
                      color: 'var(--accent-cobalt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '0.15rem',
                      }}
                    >
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="badge-tech"
                  style={{
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.72rem',
                    backgroundColor: emailCopied ? 'var(--accent-lime-subtle)' : undefined,
                    borderColor: emailCopied ? 'var(--accent-lime-dark)' : undefined,
                    color: emailCopied ? 'var(--accent-lime-dark)' : undefined,
                    flexShrink: 0,
                  }}
                >
                  {emailCopied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{emailCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="card-editorial"
              style={{ padding: '1.1rem 1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-coral-subtle)',
                  color: 'var(--accent-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MapPin size={16} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.15rem',
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {profileData.location.city}, {profileData.location.state}, India
                </div>
              </div>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.45 }}
              className="card-editorial"
              style={{ padding: '1.1rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
            >
              <span className="pulse-dot" style={{ marginLeft: '0.4rem' }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.15rem',
                  }}
                >
                  Current Status
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {profileData.availability.note}
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {[
                { href: profileData.contact.github, Icon: Github, label: 'GitHub' },
                { href: profileData.contact.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.84rem', padding: '0.65rem 1.2rem' }}
                  onClick={() => playSound('click')}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </a>
              ))}
              <button
                onClick={() => { playSound('click'); onOpenResume(); }}
                className="btn-secondary"
                style={{ fontSize: '0.84rem', padding: '0.65rem 1.2rem' }}
              >
                <FileText size={15} />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-editorial"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                borderRadius: 'var(--radius-xl)',
                borderColor: 'var(--accent-cobalt-border)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-cobalt)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  // Send a Message
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Direct Transmission
                </span>
              </div>

              {/* Success */}
              {formStatus === 'success' && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--accent-lime-subtle)',
                    border: '1px solid var(--accent-lime-border)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: 'var(--accent-lime-dark)',
                    fontSize: '0.88rem',
                  }}
                >
                  <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                  <span>Message dispatched successfully! I'll get back to you shortly.</span>
                </div>
              )}

              {/* Error */}
              {formStatus === 'error' && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--accent-coral-subtle)',
                    border: '1px solid var(--accent-coral-border)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: 'var(--accent-coral)',
                    fontSize: '0.88rem',
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.85rem',
                  marginBottom: '0.85rem',
                }}
              >
                {[
                  { name: 'name', label: 'Your Name *', placeholder: 'Jane Doe', type: 'text' },
                  { name: 'email', label: 'Your Email *', placeholder: 'jane@example.com', type: 'email' },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.35rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              {/* Topic */}
              <div style={{ marginBottom: '0.85rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Topic
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
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
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your idea, role, or question..."
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', opacity: formStatus === 'submitting' ? 0.7 : 1 }}
              >
                <Send size={15} />
                <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="hairline-divider" style={{ marginBottom: '2rem' }} />

        {/* Footer */}
        <footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                display: 'block',
                marginBottom: '0.1rem',
              }}
            >
              Janhvi Bankar
            </span>
            <span>© 2025–2026. Handcrafted with React & Vite. All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-lime-dark)' }}>
              <span className="pulse-dot" />
              <span>Available for opportunities</span>
            </span>
            <button
              onClick={scrollToTop}
              className="badge-tech"
              style={{ padding: '0.4rem 0.85rem' }}
              title="Back to top"
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
        input:focus, textarea:focus, select:focus {
          border-color: var(--accent-cobalt) !important;
          box-shadow: 0 0 0 3px var(--accent-cobalt-subtle);
        }
      `}</style>
    </section>
  );
};
