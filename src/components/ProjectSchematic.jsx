import React from 'react';

export const ProjectSchematic = ({ id }) => {
  const sageColor = 'var(--accent-sage)';
  const coralColor = 'var(--accent-coral)';

  switch (id) {
    case 'bharatanatyam-mudra-detector':
      // 21-point hand landmark kinematic mesh
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          {/* Hand skeleton lines */}
          <path d="M160 170 L160 120 L110 80 L90 50" stroke={sageColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <path d="M160 120 L135 65 L125 35" stroke={sageColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <path d="M160 120 L160 55 L160 25" stroke={sageColor} strokeWidth="2" opacity="0.9" />
          <path d="M160 120 L185 65 L195 35" stroke={sageColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <path d="M160 120 L210 80 L230 55" stroke={sageColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          {/* Kinematic Joints */}
          {[
            [160, 170], [160, 120], [110, 80], [90, 50],
            [135, 65], [125, 35], [160, 55], [160, 25],
            [185, 65], [195, 35], [210, 80], [230, 55]
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="var(--bg-card)" stroke={sageColor} strokeWidth="2" />
              <circle cx={x} cy={y} r="1.5" fill={coralColor} />
            </g>
          ))}
          {/* Labels */}
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">
            YOLOV8.POSE // 21-LANDMARK KINEMATICS
          </text>
          <text x="18" y="180" fill={coralColor} fontFamily="var(--font-mono)" fontSize="10" fontWeight="500">
            CONFIDENCE: 94.2% [CORRECT_GESTURE]
          </text>
        </svg>
      );

    case 'ai-grid-failure-early-warning':
      // SCADA telemetry electrical wave & node topology
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <line x1="20" y1="100" x2="300" y2="100" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="160" y1="20" x2="160" y2="180" stroke="var(--border-hairline)" strokeWidth="1" />
          {/* Harmonic wave */}
          <path
            d="M20 100 Q 50 40, 80 100 T 140 100 T 200 40 T 230 160 T 260 70 T 300 100"
            stroke={sageColor}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Alert point */}
          <circle cx="230" cy="160" r="7" fill="none" stroke={coralColor} strokeWidth="2" />
          <circle cx="230" cy="160" r="3" fill={coralColor} />
          {/* Substation nodes */}
          <rect x="40" y="30" width="48" height="22" rx="4" fill="var(--bg-card)" stroke="var(--border-strong)" strokeWidth="1" />
          <text x="49" y="45" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">NODE_A</text>
          <rect x="235" y="30" width="48" height="22" rx="4" fill="var(--bg-card)" stroke={coralColor} strokeWidth="1" />
          <text x="242" y="45" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">ALERT_B</text>
          <text x="18" y="180" fill={coralColor} fontFamily="var(--font-mono)" fontSize="10" fontWeight="500">
            SCADA TELEMETRY // 48H ANOMALY HORIZON
          </text>
        </svg>
      );

    case 'migraine-guardian':
      // Multimodal biometric & atmospheric trend
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          {/* Barometric curve */}
          <path d="M20 140 C 80 140, 120 70, 180 80 C 240 90, 270 40, 300 45" stroke={sageColor} strokeWidth="2" fill="none" />
          {/* HRV curve */}
          <path d="M20 70 C 80 75, 130 130, 190 140 C 250 150, 280 110, 300 120" stroke={coralColor} strokeWidth="2" strokeDasharray="4 2" fill="none" />
          {/* Risk threshold zone */}
          <rect x="180" y="30" width="120" height="140" fill={coralColor} fillOpacity="0.08" rx="4" />
          <text x="188" y="50" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">HIGH RISK WINDOW (4-6H)</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.06em">
            BIOMETRICS & BAROMETRIC CORRELATION
          </text>
          <text x="18" y="180" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10">
            AUC: 0.89 // SHAP EXPLAINABILITY
          </text>
        </svg>
      );

    case 'migraine-rag-chatbot':
      // Vector embeddings search pipeline
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <rect x="25" y="45" width="55" height="35" rx="4" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="35" y="66" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">DOC_CHUNKS</text>
          <line x1="85" y1="62" x2="115" y2="62" stroke={sageColor} strokeWidth="1.5" />
          <rect x="120" y="40" width="80" height="45" rx="6" fill="var(--bg-card)" stroke={sageColor} strokeWidth="1.5" />
          <text x="128" y="66" fill={sageColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">PINECONE_HNSW</text>
          <line x1="205" y1="62" x2="235" y2="62" stroke={sageColor} strokeWidth="1.5" />
          <rect x="240" y="45" width="55" height="35" rx="4" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="248" y="66" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">GROQ_LLM</text>
          <rect x="160" y="145" width="135" height="25" rx="4" fill="var(--bg-card)" stroke={coralColor} />
          <text x="170" y="161" fill={coralColor} fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">GROUNDED_CITATIONS [DOI]</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9">
            RAG ARCHITECTURE // MEDICAL QA
          </text>
        </svg>
      );

    default:
      // Generic clean system architecture schematic
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" rx="8" fill="var(--code-bg)" />
          <line x1="0" y1="100" x2="320" y2="100" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="160" y1="0" x2="160" y2="200" stroke="var(--border-hairline)" strokeWidth="1" />
          <rect x="35" y="75" width="65" height="50" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="45" y="104" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">INGEST</text>
          <line x1="105" y1="100" x2="140" y2="100" stroke={sageColor} strokeWidth="2" />
          <rect x="145" y="70" width="75" height="60" rx="8" fill="var(--bg-card)" stroke={sageColor} strokeWidth="1.5" />
          <text x="155" y="104" fill={sageColor} fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">COMPUTE</text>
          <line x1="225" y1="100" x2="255" y2="100" stroke={sageColor} strokeWidth="2" />
          <rect x="260" y="75" width="45" height="50" rx="6" fill="var(--bg-card)" stroke="var(--border-strong)" />
          <text x="268" y="104" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">EMIT</text>
          <text x="18" y="28" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">
            SYSTEM ARCHITECTURE SCHEMATIC
          </text>
        </svg>
      );
  }
};
