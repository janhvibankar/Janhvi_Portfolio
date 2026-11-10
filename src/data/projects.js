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
    tagline: "Real-time Bharatanatyam mudra recognition and practice assistance",
    shortDescription: "A real-time learning application featuring Bharatanatyam gesture recognition and practice assistance, powered by YOLO/CNN, OpenCV, MediaPipe, and cross-platform Flutter integration.",
    detailedDescription: "Awarded 1st place in the Smart India Hackathon (SIH) 2025, this project bridges classical Indian cultural dance with computer vision. The system captures live video feeds, extracts 21-point hand landmarks using MediaPipe and OpenCV, and runs YOLO/CNN classifiers on a custom curated dataset to evaluate dance gesture accuracy in real time with immediate visual feedback inside a Flutter application.",
    category: "Applied AI/ML",
    status: "Completed (SIH '25 Winner)",
    featured: true,
    year: "2024 – 2025",
    accentColor: "var(--accent-coral)",
    technologies: ["YOLO", "CNN", "OpenCV", "MediaPipe", "Flutter", "Custom Dataset"],
    github: "https://github.com/janhvibankar/Bharatanatyam-Mudra-Detector",
    live: null,
    metrics: [
      { label: "Recognition", value: "Real-Time YOLO/CNN" },
      { label: "Telemetry", value: "MediaPipe 21-Pt" },
      { label: "Recognition Standing", value: "SIH '25 Winner" }
    ],
    myContribution: [
      "Developed a learning application featuring real-time Bharatanatyam mudra recognition and practice assistance.",
      "Implemented gesture recognition using YOLO/CNN, OpenCV and MediaPipe, with a custom dataset and Flutter application integration.",
      "Designed real-time feedback to assess dance gesture accuracy."
    ],
    keyFeatures: [
      "Real-time Bharatanatyam mudra recognition and practice assistance.",
      "Computer vision pipeline combining YOLO/CNN, OpenCV, and MediaPipe.",
      "Custom curated and annotated classical dance gesture dataset.",
      "Interactive Flutter mobile application providing real-time gesture accuracy feedback."
    ],
    challenges: [
      "Handling rotational wrist movement and self-occlusions during rapid dance movements.",
      "Achieving low-latency inference on mobile devices for smooth real-time evaluation."
    ],
    outcomes: [
      "Secured 1st prize at the national Smart India Hackathon (SIH) 2025 Grand Finale.",
      "Successfully created an accessible digital assistant for classical Indian dance learners."
    ],
    architecture: {
      type: "Computer Vision & Mobile Pipeline",
      flow: [
        "Live Camera Stream",
        "OpenCV Image Processing",
        "MediaPipe Landmark Extraction",
        "YOLO / CNN Classification",
        "Accuracy Assessment Engine",
        "Flutter Practice Feedback UI"
      ]
    }
  },
  {
    id: "migraine-guardian",
    title: "MigraineGuardian — AI Migraine Risk Prediction System",
    tagline: "Daily risk prediction using lifestyle indicators, weather telemetry & SHAP explainability",
    shortDescription: "An AI-based risk prediction system forecasting daily migraine risk from lifestyle indicators (sleep, stress, hydration, mood, screen time), weather features, a FastAPI ML service, Firebase Firestore, and an integrated RAG chatbot.",
    detailedDescription: "MigraineGuardian is an early warning health intelligence platform that analyzes multivariable lifestyle and environmental triggers to forecast daily migraine risk levels. It features an asynchronous FastAPI ML service, predictive models incorporating weather metrics, Firebase Firestore for check-ins, SHAP-based feature importance explanations, and an integrated RAG chatbot for document-grounded healthcare advice.",
    category: "Applied AI/ML",
    status: "Ongoing",
    featured: true,
    year: "2024 – 2025",
    accentColor: "var(--accent-lavender)",
    technologies: ["FastAPI", "Python", "SHAP", "Firebase Firestore", "React.js", "Node.js/Express", "Flutter"],
    github: "https://github.com/janhvibankar/MigraineGuardian",
    live: null,
    metrics: [
      { label: "Backend Service", value: "FastAPI ML" },
      { label: "Explainability", value: "SHAP Values" },
      { label: "Datastore", value: "Firebase Firestore" }
    ],
    myContribution: [
      "Developing a daily migraine risk prediction system using lifestyle indicators, including sleep, stress, hydration, mood and screen time.",
      "Built a FastAPI-based ML service and evaluated experimental prediction models incorporating weather features.",
      "Integrated Firebase Firestore for user check-ins and weather records, with React and Node.js/Express for the application backend.",
      "Implemented SHAP-based explanations and integrated a RAG chatbot for document-grounded healthcare information."
    ],
    keyFeatures: [
      "Daily risk prediction tracking sleep, stress, hydration, mood, and screen time.",
      "FastAPI microservice running predictive models trained with localized weather features.",
      "Firebase Firestore integration for user daily check-in logs and historical weather records.",
      "SHAP-powered visual explanations alongside an integrated RAG chatbot for grounded guidance."
    ],
    challenges: [
      "Balancing multidimensional lifestyle factors with fluctuating atmospheric parameters.",
      "Providing transparent, explainable predictions to give users actionable preventive insights."
    ],
    outcomes: [
      "Built a functional predictive pipeline combining lifestyle and environmental risk indicators.",
      "Delivered transparent SHAP attribution helping users identify their top personal triggers."
    ],
    architecture: {
      type: "Multimodal ML & Healthcare Service",
      flow: [
        "Lifestyle & Sleep Check-In Data",
        "Weather Telemetry Synchronization",
        "FastAPI Machine Learning Service",
        "SHAP Feature Attribution Explainer",
        "Firebase Firestore Datastore",
        "React & Flutter Healthcare Interface"
      ]
    }
  },
  {
    id: "rag-chatbot-migraine",
    title: "RAG Chatbot — MigraineGuardian Module",
    tagline: "RAG pipeline with LangChain, MongoDB Atlas vector storage & Groq / Google AI",
    shortDescription: "A specialized clinical RAG assistant utilizing LangChain for offline document loading and chunking, MongoDB Atlas for vector storage and 6-message conversational history, and Groq LLM / Google AI API integration.",
    detailedDescription: "Designed as an integrated knowledge module for MigraineGuardian, this conversational system grounds responses in verified medical literature. It leverages LangChain for offline document ingestion, semantic chunking, and embedding generation, uses MongoDB Atlas for vector storage and conversational memory (tracking the six most recent messages for context), and connects to Groq LLM and Google AI APIs via a Node.js/Express backend and React frontend.",
    category: "Applied AI/ML",
    status: "Completed",
    featured: true,
    year: "2025",
    accentColor: "var(--accent-coral)",
    technologies: ["RAG", "LangChain", "MongoDB Atlas", "Groq LLM", "Google AI API", "Node.js/Express", "React.js"],
    github: "https://github.com/janhvibankar/Migraine-RAG-Chatbot",
    live: null,
    metrics: [
      { label: "Vector Datastore", value: "MongoDB Atlas" },
      { label: "Memory Window", value: "6 Recent Msgs" },
      { label: "Inference", value: "Groq & Google AI" }
    ],
    myContribution: [
      "Developed a RAG pipeline with LangChain-based offline document loading, chunking, embeddings and vector retrieval.",
      "Integrated MongoDB Atlas for vector storage and persistent conversational history, with the six most recent messages used to provide context for response generation.",
      "Integrated Groq LLM inference and Google AI API services with a Node.js/Express backend and React frontend."
    ],
    keyFeatures: [
      "LangChain-based document ingestion, semantic chunking, and dense embedding retrieval.",
      "MongoDB Atlas vector search and conversational memory tracking the 6 most recent dialogue turns.",
      "Dual inference capability leveraging Groq LLM ultra-fast inference and Google AI API services.",
      "Responsive React interface with streaming grounded citations and conversation persistence."
    ],
    challenges: [
      "Preserving semantic boundaries across complex clinical guidelines during chunking.",
      "Maintaining stateful conversational context while keeping response latency sub-second."
    ],
    outcomes: [
      "Eliminated hallucinated healthcare advice through bounded retrieval contexts.",
      "Achieved fast, conversational medical question-answering with verifiable citations."
    ],
    architecture: {
      type: "RAG & Conversational Memory Pipeline",
      flow: [
        "Offline Clinical Literature Ingestion",
        "LangChain Chunking & Embeddings",
        "MongoDB Atlas Vector Store & Index",
        "6-Message Conversational Memory Context",
        "Groq LLM & Google AI API Inference",
        "Node.js/Express Backend & React Frontend"
      ]
    }
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System — MERN Stack",
    tagline: "Full-stack healthcare operations platform with role-based auth & optimized MongoDB queries",
    shortDescription: "A comprehensive MERN-stack full-stack application for patient registration and appointment scheduling, featuring role-based authentication, optimized MongoDB queries, and secure REST APIs.",
    detailedDescription: "Built to streamline healthcare administrative workflows, this full-stack web application orchestrates patient registration, doctor appointment bookings, and medical records. It implements robust role-based authentication, optimized MongoDB indexing for rapid data retrieval, and modular REST APIs built with Express.js and Node.js.",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    year: "2024",
    accentColor: "var(--accent-lavender)",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role-Based Auth"],
    github: "https://github.com/janhvibankar/Hospital-Management-System",
    live: null,
    metrics: [
      { label: "Stack", value: "MERN Stack" },
      { label: "Authentication", value: "Role-Based Auth" },
      { label: "Query Optimization", value: "MongoDB Indexed" }
    ],
    myContribution: [
      "Developed a full-stack application for patient registration and appointment scheduling.",
      "Implemented role-based authentication and optimized MongoDB queries to improve data retrieval performance.",
      "Designed REST APIs for secure backend communication."
    ],
    keyFeatures: [
      "Patient registration and conflict-free appointment scheduling interface.",
      "Role-based authentication protecting sensitive administrative and clinical portals.",
      "Optimized MongoDB indexing and schema design for high-throughput queries.",
      "Modular, documented RESTful APIs powering secure client-server communication."
    ],
    challenges: [
      "Optimizing query performance across large mock patient records and scheduling collections.",
      "Enforcing strict role-based route guards and token verification middleware."
    ],
    outcomes: [
      "Built a reliable, scalable healthcare administration application.",
      "Demonstrated measurable retrieval latency improvements through query optimization."
    ],
    architecture: {
      type: "MERN Stack MVC Architecture",
      flow: [
        "React.js Client Interface",
        "Express REST Routing & Role-Based Auth",
        "Controller Logic Layer",
        "Optimized MongoDB Mongoose Schemas",
        "Secure Token-Based API Session Vault"
      ]
    }
  }
];
