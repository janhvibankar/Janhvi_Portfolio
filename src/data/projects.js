export const projectCategories = [
  "All",
  "Applied AI/ML",
  "Full Stack",
  "Mobile Apps"
];

export const projectsData = [
  {
    id: "bharatanatyam-learning-app",
    title: "AI-Based Bharatanatyam Learning App",
    tagline: "Real-time gesture recognition & classical dance pose accuracy evaluation",
    shortDescription: "An AI-powered classical dance learning platform that evaluates hand mudras and posture accuracy in real time using YOLO, CNNs, and MediaPipe landmark tracking inside a cross-platform Flutter app.",
    detailedDescription: "Developed as the winning project for Smart India Hackathon 2025, this platform bridges classical Indian cultural art with modern computer vision. Using a custom dataset curated with OpenCV and MediaPipe, the application tracks 21-point hand telemetry from mobile camera streams and runs lightweight YOLO and CNN classifiers to evaluate posture accuracy in real time, delivering immediate corrective visual cues for dance students.",
    category: "Applied AI/ML",
    status: "Completed (SIH '25 Winner)",
    featured: true,
    year: "2024 – 2025",
    accentColor: "var(--accent-coral)",
    technologies: ["Flutter", "YOLO", "CNN", "OpenCV", "MediaPipe", "Python"],
    github: "https://github.com/janhvibankar/Bharatanatyam-Mudra-Detector",
    live: null,
    metrics: [
      { label: "Classification", value: "Real-Time Mudras" },
      { label: "Telemetry", value: "21-Pt Landmarks" },
      { label: "Hackathon Standing", value: "SIH '25 Winner" }
    ],
    myContribution: [
      "Built the real-time gesture recognition system combining YOLO object detection and CNN feature extractors.",
      "Engineered the spatial-temporal landmark extraction pipeline utilizing OpenCV and MediaPipe.",
      "Created a custom annotated dataset of classical single and double-hand mudras (Asamyutta and Samyutta Hastas).",
      "Developed the responsive cross-platform Flutter application integrated with backend APIs for real-time visual feedback."
    ],
    keyFeatures: [
      "Real-time 21-point hand landmark telemetry overlay on mobile camera feeds.",
      "Dual classification for single-hand (Asamyutta) and combined (Samyutta) mudras.",
      "Real-time pose deviation math engine calculating angular finger alignment.",
      "Practice mode with accuracy score logging and corrective visual indicators."
    ],
    challenges: [
      "Managing occlusions and rapid rotational hand transitions during fast adavu sequences.",
      "Optimizing mobile inference latency to maintain smooth frame rates on consumer smartphones."
    ],
    outcomes: [
      "Awarded 1st Place National Champion at Smart India Hackathon 2025.",
      "Built a functional Flutter application enabling dancers to self-evaluate without specialized sensors."
    ],
    architecture: {
      type: "Edge Computer Vision & Mobile Pipeline",
      flow: [
        "Live Mobile Camera Stream",
        "OpenCV Preprocessing & Normalization",
        "MediaPipe Hand Mesh Landmark Extraction",
        "YOLO & CNN Gesture Classification",
        "Pose Accuracy Angle Evaluation Engine",
        "Flutter Interface with Corrective Visual Cues"
      ]
    }
  },
  {
    id: "migraine-guardian",
    title: "MigraineGuardian — AI Risk Prediction System",
    tagline: "Multimodal healthcare platform forecasting migraine risk before symptoms manifest",
    shortDescription: "An AI-based early warning system that predicts daily migraine risk levels by synthesizing lifestyle patterns, weather conditions, adaptive trigger weighting, and health data visualization with chatbot assistance.",
    detailedDescription: "MigraineGuardian is an ongoing proactive healthcare platform designed to shift migraine care from reactive treatment to timely prevention. By processing time-series lifestyle logs alongside localized atmospheric factors (barometric pressure, temperature, humidity), the machine learning models calculate personalized risk likelihood with adaptive trigger weighting and preventive recommendations.",
    category: "Applied AI/ML",
    status: "Ongoing",
    featured: true,
    year: "2024 – 2025",
    accentColor: "var(--accent-lavender)",
    technologies: ["Machine Learning", "Python", "Flutter", "Adaptive Weighting", "Predictive Analytics"],
    github: "https://github.com/janhvibankar/MigraineGuardian",
    live: null,
    metrics: [
      { label: "Project State", value: "Active Development" },
      { label: "Inputs", value: "Lifestyle + Weather" },
      { label: "Analytics", value: "Adaptive Weighting" }
    ],
    myContribution: [
      "Constructing the machine learning risk prediction model incorporating adaptive trigger weighting.",
      "Designing the cross-platform Flutter mobile interface featuring intuitive health data visualizers.",
      "Integrating localized weather and barometric telemetry APIs into the daily risk computation pipeline.",
      "Developing an interactive preventive chatbot assistant for lifestyle trigger guidance."
    ],
    keyFeatures: [
      "Daily personalized migraine risk score forecasting acute risk windows.",
      "Adaptive trigger weighting that tunes sensitivity based on individual user history.",
      "Flutter-based health telemetry dashboard visualizing longitudinal trigger trends.",
      "Integrated chatbot assistance providing preventive recommendations and symptom logging."
    ],
    challenges: [
      "Capturing idiosyncratic, non-linear trigger interactions that differ widely between individuals.",
      "Designing clear, actionable risk visualization without inducing unnecessary patient anxiety."
    ],
    outcomes: [
      "Engineered an adaptive framework that personalizes trigger impact over 14-day observation cycles.",
      "Demonstrated reliable early warning indications combining atmospheric and self-reported inputs."
    ],
    architecture: {
      type: "Predictive Analytics & Mobile Architecture",
      flow: [
        "User Lifestyle Logs & Sleep Metrics",
        "Weather & Atmospheric Telemetry Ingestion",
        "Feature Engineering & Adaptive Trigger Weighting",
        "Predictive Machine Learning Risk Model",
        "Flutter Healthcare Dashboard & Alert Notifications",
        "Preventive Chatbot Guidance Module"
      ]
    }
  },
  {
    id: "rag-chatbot-migraine",
    title: "RAG Chatbot — Literature & Memory Module",
    tagline: "Retrieval-Augmented Generation assistant with vector search & MongoDB memory",
    shortDescription: "A specialized RAG-powered clinical knowledge assistant featuring document ingestion, text chunking, vector embeddings, MongoDB conversational memory, and Groq LLM integration with an Express backend and React frontend.",
    detailedDescription: "Engineered as an advanced intelligence module for MigraineGuardian, this conversational system overcomes generic LLM hallucinations. It ingests peer-reviewed clinical documents, generates dense vector embeddings, and performs similarity searches to ground responses in verified medical literature. The system incorporates persistent conversational memory in MongoDB and leverages Groq high-speed LLM inference.",
    category: "Applied AI/ML",
    status: "Completed",
    featured: true,
    year: "2025",
    accentColor: "var(--accent-coral)",
    technologies: ["RAG Architecture", "Groq LLM", "MongoDB", "Express.js", "React.js", "Vector Embeddings"],
    github: "https://github.com/janhvibankar/Migraine-RAG-Chatbot",
    live: null,
    metrics: [
      { label: "Latency", value: "Sub-Second Groq" },
      { label: "Memory", value: "MongoDB State" },
      { label: "Grounding", value: "Vector Retrieval" }
    ],
    myContribution: [
      "Designed and developed the end-to-end RAG pipeline: document ingestion, semantic chunking, and embedding generation.",
      "Implemented persistent conversational memory stored in MongoDB to maintain multi-turn dialogue context.",
      "Engineered strict grounding prompts and source citation formatting for trustworthy, verifiable responses.",
      "Built the full-stack architecture with an Express.js backend and a responsive React frontend interface."
    ],
    keyFeatures: [
      "Grounded responses with contextual source citations extracted from indexed documentation.",
      "Conversational multi-turn history persisted in MongoDB with session management.",
      "High-throughput, ultra-low latency response generation utilizing Groq LLM integration.",
      "Clean, modern React chat interface with streaming message bubbles and clear reference tags."
    ],
    challenges: [
      "Structuring text chunks to preserve complete clinical context without fragmentation.",
      "Ensuring the chatbot strictly refrains from diagnostic claims while offering educational literature references."
    ],
    outcomes: [
      "Eliminated ungrounded assertions through strict context-bounded prompt templates.",
      "Achieved responsive, sub-second generation times with rich multi-turn conversational recall."
    ],
    architecture: {
      type: "RAG & Full-Stack Architecture",
      flow: [
        "Medical Corpus Ingestion & Semantic Chunking",
        "Vector Embeddings Generation & Vector Index",
        "Context Retrieval & Cosine Similarity Ranking",
        "Groq LLM Inference with Strict Grounding Prompt",
        "Conversational Memory Synchronization in MongoDB",
        "Express REST Gateway & React Chat Interface"
      ]
    }
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System — MERN Stack",
    tagline: "Full-stack enterprise application for patient records, scheduling & role-based portals",
    shortDescription: "A comprehensive MERN-stack web application orchestrating patient registration, appointment scheduling, role-based authentication, and optimized MongoDB query operations through secure RESTful APIs.",
    detailedDescription: "Designed to modernize hospital operations, this full-stack web application delivers reliable workflows for administrators, medical staff, and patients. It replaces manual scheduling with automated appointment booking, features role-based access control (RBAC), and manages patient records, doctor availability, and billing through optimized MongoDB queries and scalable Express REST APIs.",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    year: "2024",
    accentColor: "var(--accent-lavender)",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    github: "https://github.com/janhvibankar/Hospital-Management-System",
    live: null,
    metrics: [
      { label: "Architecture", value: "Full MERN Stack" },
      { label: "Security", value: "Role-Based RBAC" },
      { label: "APIs", value: "Scalable REST" }
    ],
    myContribution: [
      "Developed the full-stack application architecture from relational MongoDB data modeling to the React client.",
      "Implemented role-based authentication and secure session middleware using JWT.",
      "Engineered optimized MongoDB queries and indexing strategies for fast patient record retrieval.",
      "Designed and documented RESTful API endpoints for patient registration, appointments, and doctor rosters."
    ],
    keyFeatures: [
      "Intuitive patient registration and appointment scheduling with conflict prevention.",
      "Granular role-based portals for administrators, doctors, and hospital receptionists.",
      "Secure REST APIs with token authorization and request payload validation.",
      "Searchable medical record vault with dynamic filtering and status updating."
    ],
    challenges: [
      "Preventing booking collisions during simultaneous appointment submissions across departments.",
      "Enforcing strict data boundary separation between non-medical administrative staff and clinical records."
    ],
    outcomes: [
      "Delivered a complete, functioning healthcare management portal with zero scheduling collisions.",
      "Optimized query response times to under 100ms across high-volume mock patient databases."
    ],
    architecture: {
      type: "MERN Stack MVC Architecture",
      flow: [
        "React.js Single Page Application Interface",
        "Express.js REST Routing & Role-Based Auth Middleware",
        "Business Logic & Controller Layer",
        "MongoDB Mongoose Data Schemas & Indexed Queries",
        "JWT Token Vault for Secure State Management"
      ]
    }
  }
];
