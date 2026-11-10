import React from 'react';

export const ProjectSchematic = ({ id }) => {
  const lavenderColor = 'var(--accent-lavender)';
  const coralColor = 'var(--accent-coral)';
  const limeColor = 'var(--accent-lime-dark)';

  switch (id) {
    case 'bharatanatyam-learning-app':
    case 'bharatanatyam-mudra-detector':
      // 21-point hand landmark kinematic mesh
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          {/* Hand skeleton lines */}
          <path d="M160 170 L160 120 L110 80 L90 50" stroke={lavenderColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
          <path d="M160 120 L135 65 L125 35" stroke={lavenderColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
          <path d="M160 120 L160 55 L160 25" stroke={lavenderColor} strokeWidth="2" opacity="0.95" />
          <path d="M160 120 L185 65 L195 35" stroke={lavenderColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
          <path d="M160 120 L210 80 L230 55" stroke={lavenderColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
          {/* Kinematic Joints */}
          {[
            [160, 170], [160, 120], [110, 80], [90, 50],
            [135, 65], [125, 35], [160, 55], [160, 25],
            [185, 65], [195, 35], [210, 80], [230, 55]
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4.5" fill="var(--bg-card)" stroke={lavenderColor} strokeWidth="2" />
              <circle cx={x} cy={y} r="1.8" fill={coralColor} />
            </g>
          ))}
          {/* Labels */}
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">
            YOLO + CNN // 21-LANDMARK MEDIAPIPE TRACKING
          </text>
          <rect x="18" y="156" width="220" height="26" rx="4" fill="var(--bg-card)" stroke="var(--border-hairline)" />
          <text x="26" y="173" fill={coralColor} fontFamily="var(--font-mono)" fontSize="10" fontWeight="600">
            POSE ACCURACY: REAL-TIME EVALUATION
          </text>
        </svg>
      );

    case 'migraine-guardian':
      // Multimodal biometric & atmospheric trend
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          {/* Atmospheric curve */}
          <path d="M20 140 C 80 140, 120 70, 180 80 C 240 90, 270 40, 300 45" stroke={lavenderColor} strokeWidth="2" fill="none" />
          {/* Lifestyle trigger curve */}
          <path d="M20 70 C 80 75, 130 130, 190 140 C 250 150, 280 110, 300 120" stroke={coralColor} strokeWidth="2" strokeDasharray="4 2" fill="none" />
          {/* Risk threshold zone */}
          <rect x="180" y="30" width="120" height="140" fill={coralColor} fillOpacity="0.08" rx="6" />
          <text x="188" y="48" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="700">PREDICTIVE RISK WINDOW</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.06em">
            LIFESTYLE & WEATHER TELEMETRY INGESTION
          </text>
          <text x="18" y="180" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500">
            ADAPTIVE TRIGGER WEIGHTING // FLUTTER UI
          </text>
        </svg>
      );

    case 'rag-chatbot-migraine':
    case 'migraine-rag-chatbot':
      // Vector embeddings search pipeline
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <rect x="22" y="45" width="60" height="36" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="28" y="66" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">CHUNKING</text>
          <line x1="82" y1="63" x2="110" y2="63" stroke={lavenderColor} strokeWidth="1.5" />
          <rect x="110" y="40" width="85" height="46" rx="6" fill="var(--bg-card)" stroke={lavenderColor} strokeWidth="1.5" />
          <text x="118" y="66" fill={lavenderColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="700">VECTOR_SEARCH</text>
          <line x1="195" y1="63" x2="225" y2="63" stroke={lavenderColor} strokeWidth="1.5" />
          <rect x="225" y="45" width="70" height="36" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="233" y="66" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">GROQ_LLM</text>
          <rect x="22" y="145" width="135" height="26" rx="4" fill="var(--bg-card)" stroke={coralColor} />
          <text x="30" y="161" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">MONGODB_MEMORY [STATE]</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9">
            RAG ARCHITECTURE // GROUNDED CITATIONS
          </text>
        </svg>
      );

    case 'hospital-management-system':
      // MERN stack operations diagram
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <rect x="25" y="45" width="65" height="40" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="35" y="68" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">REACT.JS</text>
          <line x1="90" y1="65" x2="120" y2="65" stroke={lavenderColor} strokeWidth="1.5" />
          <rect x="120" y="40" width="80" height="50" rx="6" fill="var(--bg-card)" stroke={lavenderColor} strokeWidth="1.5" />
          <text x="128" y="68" fill={lavenderColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="700">EXPRESS / JWT</text>
          <line x1="200" y1="65" x2="230" y2="65" stroke={lavenderColor} strokeWidth="1.5" />
          <rect x="230" y="45" width="65" height="40" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="240" y="68" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">MONGODB</text>
          <rect x="25" y="145" width="165" height="25" rx="4" fill="var(--bg-card)" stroke={coralColor} />
          <text x="35" y="161" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">ROLE-BASED AUTH // SCHEDULING</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9">
            MERN FULL-STACK OPERATIONS SUITE
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <line x1="0" y1="100" x2="320" y2="100" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="160" y1="0" x2="160" y2="200" stroke="var(--border-hairline)" strokeWidth="1" />
          <rect x="35" y="75" width="65" height="50" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="45" y="104" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">INGEST</text>
          <line x1="105" y1="100" x2="140" y2="100" stroke={lavenderColor} strokeWidth="2" />
          <rect x="145" y="70" width="75" height="60" rx="8" fill="var(--bg-card)" stroke={lavenderColor} strokeWidth="1.5" />
          <text x="155" y="104" fill={lavenderColor} fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">COMPUTE</text>
          <line x1="225" y1="100" x2="255" y2="100" stroke={lavenderColor} strokeWidth="2" />
          <rect x="260" y="75" width="45" height="50" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="268" y="104" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">EMIT</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">
            SYSTEM ARCHITECTURE SCHEMATIC
          </text>
        </svg>
      );
  }
};
