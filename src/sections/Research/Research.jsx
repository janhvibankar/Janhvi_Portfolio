import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Scale, Network, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

export const Research = () => {
  return (
    <section id="research" className="section-wrapper">
      <div className="site-container">
        <SectionHeader
          number="04"
          label="Academic Research"
          title="Intelligent Workload Scheduling for PQC Multi-Cloud Architectures"
          subtitle="Investigating latency-aware reinforcement learning and predictive load-shifting for post-quantum cryptographic container clusters."
        />

        <div
          className="card-editorial"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-card-muted)',
            border: '1px solid var(--border-hairline)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* Pillar 1 */}
            <div
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hairline)',
                borderTop: '3px solid var(--accent-primary)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-primary-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <Cpu size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                AI-Driven Scheduling
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Reinforcement learning models that continuously evaluate network jitter, CPU queues, and egress costs to assign containerized workloads optimally across heterogeneous clouds.
              </p>
            </div>

            {/* Pillar 2 */}
            <div
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hairline)',
                borderTop: '3px solid var(--accent-olive)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-subtle)',
                  color: 'var(--accent-olive)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                PQC Integration
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Post-Quantum Cryptographic secure communication protocols. Evaluating lattice-based key encapsulation mechanisms to future-proof multi-cloud data in transit.
              </p>
            </div>

            {/* Pillar 3 */}
            <div
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hairline)',
                borderTop: '3px solid var(--accent-sand)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-sand-subtle)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <Scale size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Predictive Balancing
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Time-series forecasting models anticipating traffic spikes and proactive multi-cloud load shifting before SLA violations or packet drop cascades take place.
              </p>
            </div>
          </div>

          {/* Research Footer Summary */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid var(--border-hairline)',
              paddingTop: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Network size={16} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Affiliation: RIT Department of Computer Science & Engineering
              </span>
            </div>

            <span className="badge-tech badge-accent">
              Active Research Initiative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

