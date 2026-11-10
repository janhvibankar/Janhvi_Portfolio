export const projectCategories = [
  "All",
  "AI/ML",
  "Full Stack",
  "Mobile Applications",
  "Systems & IoT"
];

export const projectsData = [
  {
    id: "bharatanatyam-mudra-detector",
    title: "Bharatanatyam Mudra Detector",
    tagline: "Real-time posture & classical gesture classification with computer vision",
    shortDescription: "An AI-powered computer vision platform tracking hand gestures (Asamyutta and Samyutta Hastas) with real-time pose estimation and kinematic feedback.",
    detailedDescription: "Bharatanatyam Mudra Detector bridges classical Indian performing arts with deep learning. Utilizing YOLOv8 and lightweight convolutional architectures, it extracts hand landmarks from video streams, classifies subtle hand mudras in real-time, and computes joint angle deviations to provide immediate corrective guidance for students and practitioners.",
    category: "AI/ML",
    status: "Completed",
    featured: true,
    year: "2024",
    accentColor: "#E66B48",
    technologies: ["PyTorch", "YOLOv8", "OpenCV", "Flutter", "Python", "MediaPipe"],
    github: "https://github.com/janhvibankar/Bharatanatyam-Mudra-Detector",
    live: null,
    metrics: [
      { label: "Classification Accuracy", value: "94.2%" },
      { label: "Inference Latency", value: "< 24ms" },
      { label: "Tracked Gestures", value: "28+ Mudras" }
    ],
    myContribution: [
      "Engineered the spatial-temporal landmark extraction pipeline utilizing OpenCV and MediaPipe.",
      "Trained and fine-tuned custom YOLOv8 and CNN classifiers on an annotated dataset of 5,000+ hand poses.",
      "Integrated edge inference into a cross-platform Flutter application for smooth 30 FPS mobile evaluation."
    ],
    keyFeatures: [
      "Real-time 21-point hand landmark telemetry overlay.",
      "Dual classification for single-hand (Asamyutta) and combined (Samyutta) hastas.",
      "Immediate audio-visual deviation cues for incorrect finger placement.",
      "Historical progress tracker logging practice sessions and accuracy scores."
    ],
    challenges: [
      "Handling severe self-occlusion and rapid rotational wrist movement during fast Bharatanatyam adavus.",
      "Maintaining high frame rates on standard mobile hardware without thermal throttling."
    ],
    outcomes: [
      "Achieved 94.2% top-1 accuracy across 28 classical mudras under varied lighting conditions.",
      "Deployed lightweight ONNX runtime model decreasing model footprint by 65%."
    ],
    architecture: {
      type: "Edge Computer Vision Pipeline",
      flow: [
        "Camera Stream (30 FPS)",
        "OpenCV Preprocessing & Normalization",
        "MediaPipe Hand Mesh Landmark Extraction",
        "YOLOv8 Gesture Classifier (ONNX)",
        "Angle Deviation Math Engine",
        "Interactive Flutter UI & Audio Cues"
      ]
    }
  },
  {
    id: "migraine-guardian",
    title: "MigraineGuardian AI",
    tagline: "Predictive multimodal healthcare system forecasting migraine onset",
    shortDescription: "A clinical predictive health platform integrating biometric telemetry, atmospheric conditions, and lifestyle inputs to predict migraine attacks hours before symptoms manifest.",
    detailedDescription: "MigraineGuardian is a proactive healthcare intelligence suite designed to shift migraine management from reactive treatment to proactive prevention. By analyzing time-series physiological data (heart rate variability, sleep patterns) coupled with barometric pressure and user-reported triggers, the model forecasts risk likelihood with transparent explainability.",
    category: "AI/ML",
    status: "Completed",
    featured: true,
    year: "2024",
    accentColor: "#92977B",
    technologies: ["Scikit-learn", "FastAPI", "React", "D3.js", "SHAP", "Docker"],
    github: "https://github.com/janhvibankar/MigraineGuardian",
    live: null,
    metrics: [
      { label: "Prediction Window", value: "4-6 Hours" },
      { label: "ROC-AUC Score", value: "0.89" },
      { label: "Explainability", value: "SHAP Values" }
    ],
    myContribution: [
      "Designed the machine learning pipeline utilizing gradient boosting (XGBoost) and SHAP value explainability.",
      "Developed high-throughput REST APIs in FastAPI with automated sensor data ingestion pipelines.",
      "Built interactive clinical risk dashboards with D3.js and React visualizing trigger correlations."
    ],
    keyFeatures: [
      "Early warning alert dispatch via Push Notifications 4-6 hours prior to estimated onset.",
      "SHAP-powered 'Why This Alert?' modal highlighting prominent contributing triggers.",
      "Environmental correlation tracker interfacing with local barometric APIs.",
      "Privacy-first encrypted local biometric storage."
    ],
    challenges: [
      "Class imbalance in sporadic biometric anomaly detection.",
      "Providing actionable, clinically sound explanations rather than opaque 'black box' probabilities."
    ],
    outcomes: [
      "Demonstrated 0.89 ROC-AUC in identifying acute risk windows.",
      "Empowered patients with clear lifestyle trigger insights reducing recurrent episodes in trial studies."
    ],
    architecture: {
      type: "Event-Driven Multimodal Predictive System",
      flow: [
        "Biometric & Environmental Data Stream",
        "Feature Engineering & Aggregation",
        "XGBoost Ensemble Classifier",
        "SHAP Explainer Module",
        "FastAPI Asynchronous Gateway",
        "React + D3.js Temporal Dashboard"
      ]
    }
  },
  {
    id: "migraine-rag-chatbot",
    title: "Migraine RAG Clinical Chatbot",
    tagline: "Retrieval-Augmented Generation for grounded medical literature QA",
    shortDescription: "An intelligent clinical assistant synthesizing peer-reviewed neurology papers and clinical guidelines using vector search and Groq LLMs with zero hallucination guardrails.",
    detailedDescription: "Built to overcome generic LLM hallucinations in high-stakes health contexts, the Migraine RAG Chatbot indexes extensive neurological research, pharmacotherapy guidelines, and clinical trial outcomes. Queries retrieve dense vector chunks from Pinecone, which are then synthesized by Groq Llama 3 models with explicit academic citations.",
    category: "AI/ML",
    status: "In Development",
    featured: true,
    year: "2025",
    accentColor: "#E66B48",
    technologies: ["LangChain", "Groq API", "Pinecone", "Vector Embeddings", "Express.js", "React"],
    github: "https://github.com/janhvibankar/Migraine-RAG-Chatbot",
    live: null,
    metrics: [
      { label: "Query Retrieval Time", value: "< 450ms" },
      { label: "Indexed Papers", value: "1,200+" },
      { label: "Citation Precision", value: "98%" }
    ],
    myContribution: [
      "Architected the chunking, embedding generation, and vector indexing pipeline in Pinecone.",
      "Engineered strict hallucination guardrails requiring every claim to be grounded in retrieved literature.",
      "Built the full-stack conversational interface with streamable token responses via WebSockets."
    ],
    keyFeatures: [
      "Instant academic citations with direct DOI references on every factual statement.",
      "Query expansion and re-ranking for multi-hop clinical questions.",
      "Safety filter rejecting unverified self-diagnosis and urging professional consultation.",
      "Sub-500ms response streaming using Groq ultra-low-latency Llama 3 inference."
    ],
    challenges: [
      "Handling ambiguous symptoms and preventing dangerous diagnostic extrapolation.",
      "Minimizing vector chunk fragmentation across complex medical journal tables and appendices."
    ],
    outcomes: [
      "Eliminated unsupported claims by requiring strict vector-overlap verification.",
      "Achieved sub-500ms first-token latency with ultra-high contextual relevance."
    ],
    architecture: {
      type: "Retrieval-Augmented Generation Architecture",
      flow: [
        "Medical Corpus Preprocessing & Markdown Chunking",
        "Vector Embeddings (text-embedding-3-small)",
        "Pinecone Vector Database (HNSW Index)",
        "Hybrid Search & Cross-Encoder Re-Ranking",
        "Groq LLM Context Synthesis (Llama-3-70B)",
        "Grounded Response with DOI Footnotes"
      ]
    }
  },
  {
    id: "hospital-management-system",
    title: "MERN Hospital Operations Suite",
    tagline: "Enterprise full-stack hospital management with automated bed scheduling",
    shortDescription: "A comprehensive hospital ERP orchestrating patient admissions, ward bed allocations, pharmacy inventory, doctor appointments, and role-based medical records.",
    detailedDescription: "Designed for regional healthcare centers, this full-stack enterprise web application replaces manual paper logs with automated, real-time workflows. Features include algorithmic bed scheduling that prevents double-booking, encrypted EHR storage, pharmacy re-order alerts, and granular role-based access control for doctors, nurses, and administrators.",
    category: "Full Stack",
    status: "Completed",
    featured: false,
    year: "2024",
    accentColor: "#D9CBB9",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/janhvibankar/Hospital-Management-System",
    live: null,
    metrics: [
      { label: "Ward Capacity Tracked", value: "500+ Beds" },
      { label: "Role Portals", value: "4 Distinct Views" },
      { label: "API Endpoints", value: "38 REST Endpoints" }
    ],
    myContribution: [
      "Architected the normalized MongoDB schema supporting high-concurrency admission and discharge transactions.",
      "Implemented secure JWT authentication and role-based authorization middleware.",
      "Built the responsive React client interface with dynamic filtering, appointment calendars, and billing reports."
    ],
    keyFeatures: [
      "Real-time visual ward bed occupancy map with color-coded status.",
      "Prescription generator linked directly to central hospital pharmacy inventory.",
      "Doctor roster scheduling with collision avoidance algorithms.",
      "Exportable billing receipts and diagnostic PDF reports."
    ],
    challenges: [
      "Preventing race conditions when multiple receptionists book the same emergency ward bed simultaneously.",
      "Enforcing strict HIPAA-aligned data privacy between non-authorized staff roles."
    ],
    outcomes: [
      "Streamlined inpatient admission workflow from 25 minutes to under 3 minutes.",
      "Engineered automated inventory deduction reducing prescription dispatch lag by 40%."
    ],
    architecture: {
      type: "Layered MVC Full-Stack Architecture",
      flow: [
        "React Single Page Application",
        "Express REST Routing & Role Middleware",
        "Service Layer Business Logic",
        "MongoDB Mongoose Data Models",
        "JWT Session & Token Vault"
      ]
    }
  },
  {
    id: "smart-mobility-grid",
    title: "Smart Mobility Grid",
    tagline: "Dynamic urban transit and traffic flow optimization using sensor telemetry",
    shortDescription: "An intelligent traffic telemetry and routing platform analyzing intersection density, pedestrian movement, and emergency vehicle priority dispatch.",
    detailedDescription: "Smart Mobility Grid addresses urban congestion through decentralized sensor data fusion. By ingesting live stream data from smart cameras and GPS beacons, the platform computes dynamic signal timings, predicts bottleneck propagation, and automatically clears prioritized green corridors for emergency medical services.",
    category: "Systems & IoT",
    status: "In Development",
    featured: false,
    year: "2025",
    accentColor: "#92977B",
    technologies: ["Python", "FastAPI", "React", "Leaflet.js", "WebSockets", "Redis"],
    github: "https://github.com/janhvibankar/Smart-Mobility-Grid",
    live: null,
    metrics: [
      { label: "Telemetry Throughput", value: "10k Events/sec" },
      { label: "Simulated Delay Reduction", value: "28%" },
      { label: "Emergency Corridor Clearance", value: "< 15s" }
    ],
    myContribution: [
      "Developed the real-time telemetry ingestion pipeline using Redis Pub/Sub and WebSockets.",
      "Constructed the graph-based corridor dispatch algorithm prioritizing emergency responders.",
      "Created the interactive live operations map with Leaflet.js and custom heatmaps."
    ],
    keyFeatures: [
      "Live traffic density heatmaps updated every 500ms.",
      "Automated dynamic signal phase duration adjustments based on queuing length.",
      "One-click Emergency Corridor creation for ambulances with proactive signal preemption.",
      "Historical transit analytics and congestion forecasting models."
    ],
    challenges: [
      "Handling sporadic packet loss and jitter from edge IoT sensor telemetry.",
      "Ensuring sub-second signal dispatch to prevent traffic wave shocks."
    ],
    outcomes: [
      "Demonstrated up to 28% reduction in intersection idling times in simulated city networks.",
      "Successfully integrated sub-second corridor priority routing."
    ],
    architecture: {
      type: "Real-Time Telemetry & Routing Engine",
      flow: [
        "Edge IoT Intersection Sensors",
        "Redis Ingestion Message Broker",
        "Graph Traversal & Signal Optimizer Engine",
        "FastAPI WebSocket Server",
        "Interactive React + Leaflet Live Operations Map"
      ]
    }
  },
  {
    id: "ai-grid-failure-early-warning",
    title: "AI Grid Failure Early Warning System",
    tagline: "Predictive telemetry & anomaly forecasting for high-voltage power networks",
    shortDescription: "A national hackathon-winning AI system predicting electrical grid failures, transformer overloads, and transmission line anomalies up to 48 hours in advance.",
    detailedDescription: "Engineered as part of the Smart India Hackathon 2025, this system monitors real-time SCADA telemetry across high-voltage electrical distribution nodes. By analyzing voltage phase fluctuations, harmonic distortion, and ambient thermal conditions, deep learning anomaly detectors flag impending component breakdown and prescribe load-shedding interventions before blackouts occur.",
    category: "AI/ML",
    status: "Completed",
    featured: true,
    year: "2025",
    accentColor: "#E66B48",
    technologies: ["PyTorch", "Scikit-learn", "FastAPI", "React", "Kafka", "PostgreSQL"],
    github: "https://github.com/janhvibankar/AI-Grid-Failure-Warning",
    live: null,
    metrics: [
      { label: "Prediction Horizon", value: "24-48 Hours" },
      { label: "False Positive Rate", value: "< 3.1%" },
      { label: "Hackathon Standing", value: "SIH '25 1st Place" }
    ],
    myContribution: [
      "Led the technical architecture and predictive algorithm design for the 6-person national team.",
      "Trained temporal convolutional networks (TCN) on power-grid sensor telemetry to detect harmonic precursors.",
      "Constructed the executive grid command dashboard delivering live anomaly alerts and automated load-balancing recommendations."
    ],
    keyFeatures: [
      "Continuous predictive anomaly score calculation across all distribution substations.",
      "Automated load shedding and rerouting recommendation engine.",
      "Severity heatmaps depicting regional grid stress levels.",
      "Interactive incident replay mode allowing engineers to analyze simulated stress events."
    ],
    challenges: [
      "Differentiating between benign transient switching noise and genuine catastrophic insulation breakdown.",
      "Processing millions of high-frequency SCADA metrics under strict latency constraints."
    ],
    outcomes: [
      "Awarded Grand Winner at Smart India Hackathon 2025 by government & industry juries.",
      "Achieved 96.4% recall on historical cascading blackout datasets."
    ],
    architecture: {
      type: "Distributed SCADA Telemetry & Anomaly Neural Engine",
      flow: [
        "Substation SCADA Telemetry Streams",
        "Kafka Distributed Streaming Pipeline",
        "Feature Normalization & Wavelet Decomposition",
        "Temporal Convolutional Network (TCN) Anomaly Detector",
        "Automated Mitigation Recommendation Service",
        "React Command Center with Audio-Visual Alerts"
      ]
    }
  },
  {
    id: "pqc-secure-telemetry-gateway",
    title: "Quantum-Resistant Telemetry Gateway",
    tagline: "Post-quantum cryptographic proxy securing multi-cloud edge transmissions",
    shortDescription: "A high-security reverse proxy implementing lattice-based cryptography (Kyber & Dilithium) to safeguard sensitive industrial telemetry against future quantum decryption threats.",
    detailedDescription: "As part of ongoing research in post-quantum cryptography (PQC), this gateway acts as a hardened intermediary between field IoT sensors and multi-cloud backends. It benchmarks handshake overheads and implements hybrid TLS wrappers to guarantee forward secrecy against 'harvest now, decrypt later' state-level adversaries.",
    category: "Systems & IoT",
    status: "Active Research",
    featured: false,
    year: "2025",
    accentColor: "#92977B",
    technologies: ["Python", "C++", "Docker", "Linux", "Cryptography", "REST APIs"],
    github: "https://github.com/janhvibankar/PQC-Telemetry-Gateway",
    live: null,
    metrics: [
      { label: "Handshake Overhead", value: "< 18ms" },
      { label: "Algorithm Standard", value: "NIST PQC" },
      { label: "Key Exchange", value: "ML-KEM (Kyber)" }
    ],
    myContribution: [
      "Benchmarked lattice-based key encapsulation mechanisms across ARM and x86 edge nodes.",
      "Constructed a lightweight asynchronous reverse proxy wrapping outbound IoT telemetry packets.",
      "Formulated mitigation strategies for packet fragmentation over high-loss wireless links."
    ],
    keyFeatures: [
      "Hybrid post-quantum key encapsulation with classic elliptic curve fallback.",
      "Real-time cipher benchmark telemetry logging encryption latency and packet sizes.",
      "Zero-downtime key rotation mechanism without interrupting sensor telemetry streams.",
      "Containerized deployment profile for low-resource edge gateways."
    ],
    challenges: [
      "Mitigating the 10x larger public key and ciphertext sizes inherent to lattice cryptography.",
      "Maintaining high network throughput under severe memory constraints on embedded hardware."
    ],
    outcomes: [
      "Demonstrated reliable PQC-encrypted transmission with less than 18ms latency penalty.",
      "Formed the architectural baseline for published university research in multi-cloud security."
    ],
    architecture: {
      type: "Hardened Hybrid PQC Proxy Architecture",
      flow: [
        "Edge Telemetry Stream",
        "Lattice-Based Key Encapsulation (ML-KEM)",
        "Ephemeral Symmetric Cipher Generation (AES-256-GCM)",
        "Zero-Trust Payload Verification",
        "Multi-Cloud Backend Forwarder"
      ]
    }
  },
  {
    id: "neuropredict-eeg-classifier",
    title: "NeuroPredict: EEG Signal Feature Extractor",
    tagline: "Machine learning classifier for neurological frequency band anomaly detection",
    shortDescription: "An advanced signal processing suite transforming continuous electroencephalogram (EEG) time-series data into discrete cognitive state classifications.",
    detailedDescription: "NeuroPredict decomposes multichannel brainwave telemetry using Fast Fourier Transforms (FFT) and Wavelet Decomposition. The extracted spectral densities across Alpha, Beta, Theta, and Delta bands are passed to ensemble classifiers to detect anomalous cognitive stress and early seizure precursors with high clinical precision.",
    category: "AI/ML",
    status: "In Development",
    featured: false,
    year: "2024",
    accentColor: "#E66B48",
    technologies: ["Python", "Scikit-learn", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/janhvibankar/NeuroPredict-EEG",
    live: null,
    metrics: [
      { label: "Band Filtering", value: "4 Bands (α, β, θ, δ)" },
      { label: "Sampling Rate", value: "256 Hz" },
      { label: "Model Recall", value: "91.8%" }
    ],
    myContribution: [
      "Implemented digital Butterworth bandpass filters and continuous wavelet transforms in SciPy.",
      "Trained random forest and gradient boosted classifiers on standardized medical EEG datasets.",
      "Built interactive spectral density visualizers displaying real-time frequency distribution graphs."
    ],
    keyFeatures: [
      "Automated artifact removal eliminating eye-blink and muscle movement interference.",
      "Multi-channel frequency power ratio computation across 16 electrodes.",
      "Real-time threshold alerting for abnormal spike-and-wave discharges.",
      "Exportable clinical diagnostic reports with spectrogram visualizations."
    ],
    challenges: [
      "Eliminating high-amplitude 50/60 Hz power-line interference without corrupting adjacent neurological signals.",
      "Generalizing models across distinct patient physiologies with varying electrode contact impedance."
    ],
    outcomes: [
      "Achieved 91.8% recall in discriminating acute cognitive stress states.",
      "Reduced signal preprocessing latency to under 30 milliseconds per epoch."
    ],
    architecture: {
      type: "Biomedical Signal Processing & Classifier Pipeline",
      flow: [
        "Raw Multichannel EEG Stream (256 Hz)",
        "Bandpass Filtering & Notch Denoising",
        "Discrete Wavelet Transform (DWT) Decomposition",
        "Feature Vector Aggregation (Spectral Power)",
        "Ensemble Machine Learning Classifier",
        "Clinical Diagnostic Visualization"
      ]
    }
  },
  {
    id: "campus-scheduler-erp",
    title: "Intelligent Academic Timetable Optimizer",
    tagline: "Constraint-satisfaction algorithm automating academic schedules and room allocations",
    shortDescription: "A full-stack institutional scheduler resolving multi-dimensional faculty collisions, lab equipment dependencies, and classroom capacities.",
    detailedDescription: "Manual academic scheduling in engineering colleges suffers from severe constraint collisions. This platform combines genetic optimization algorithms with a responsive React management portal, generating optimal weekly timetables for over 2,000 students and 80 faculty members while satisfying hard room and lab constraints.",
    category: "Full Stack",
    status: "Completed",
    featured: false,
    year: "2024",
    accentColor: "#D9CBB9",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Genetic Algorithms"],
    github: "https://github.com/janhvibankar/Campus-Scheduler",
    live: null,
    metrics: [
      { label: "Students Scheduled", value: "2,000+" },
      { label: "Collision Rate", value: "0% (Zero Conflicts)" },
      { label: "Generation Speed", value: "< 4.5s" }
    ],
    myContribution: [
      "Engineered the core constraint-satisfaction heuristic in Node.js incorporating faculty preferences.",
      "Designed normalized relational schemas in MySQL enforcing referential integrity across departments.",
      "Built the intuitive drag-and-drop timetable modification interface with live collision warning indicators."
    ],
    keyFeatures: [
      "Heuristic optimization eliminating teacher and classroom schedule overlap.",
      "Role-based views for department heads, faculty members, and student cohorts.",
      "One-click PDF timetable export customized for departmental notice boards.",
      "Dynamic substitution planner recommending available faculty for planned leaves."
    ],
    challenges: [
      "Handling deeply nested shared laboratory constraints requiring specialized hardware benches.",
      "Scaling the search space efficiently to generate schedules in seconds rather than hours."
    ],
    outcomes: [
      "Reduced university semester schedule formulation time from 2 weeks of manual labor to under 5 minutes.",
      "Demonstrated 100% collision-free timetable generation across 8 engineering branches."
    ],
    architecture: {
      type: "Constraint Satisfaction Heuristic Engine",
      flow: [
        "Faculty & Classroom Constraint Parameters",
        "Genetic Search Heuristic Evaluator",
        "Fitness Scoring & Conflict Penalty Matrix",
        "Relational Storage in MySQL",
        "Interactive React Drag-and-Drop Workspace"
      ]
    }
  },
  {
    id: "aerovision-edge-inspector",
    title: "AeroVision: Drone Edge Anomaly Inspector",
    tagline: "Aerial edge intelligence platform detecting infrastructure cracks and solar panel defects",
    shortDescription: "An on-device computer vision pipeline inspecting aerial thermal and RGB imagery to flag structural anomalies on bridges, wind turbines, and solar arrays.",
    detailedDescription: "AeroVision runs directly on drone companion computers (e.g. NVIDIA Jetson). Ingesting high-definition aerial video, it runs quantized neural networks to identify hairline fractures, hot-spot thermal faults in photovoltaic cells, and corrosion, geo-tagging each defect with centimeter-accurate GPS coordinates.",
    category: "Mobile Applications",
    status: "In Development",
    featured: false,
    year: "2025",
    accentColor: "#92977B",
    technologies: ["PyTorch", "Flutter", "OpenCV", "TensorRT", "Python"],
    github: "https://github.com/janhvibankar/AeroVision",
    live: null,
    metrics: [
      { label: "Defect Detection mAP", value: "88.6%" },
      { label: "FPS on Jetson", value: "28 FPS" },
      { label: "Geo-tagging Precision", value: "RTK-level" }
    ],
    myContribution: [
      "Quantized custom convolutional neural networks for INT8 execution using TensorRT.",
      "Integrated flight telemetry logging and geo-referenced bounding box projection.",
      "Built the ground-control mobile tablet interface in Flutter displaying live mission overlays."
    ],
    keyFeatures: [
      "Real-time defect bounding boxes overlaid on live aerial video feeds.",
      "Dual-spectrum RGB and infrared thermal anomaly fusion.",
      "Automated inspection report generator with thumbnail crops and severity scores.",
      "Offline-first mobile tablet telemetry synchronization."
    ],
    challenges: [
      "Extreme camera shake, variable focal distances, and glare during high-altitude drone flights.",
      "Restricting inference power consumption within the companion computer's 15W battery envelope."
    ],
    outcomes: [
      "Maintained 28 FPS inference on embedded hardware while identifying defects down to 2mm in width.",
      "Designed an intuitive tablet interface enabling non-technical inspectors to review flight assets."
    ],
    architecture: {
      type: "Embedded Edge Vision & Telemetry Pipeline",
      flow: [
        "Drone Gimbal Video Feed (RGB / Thermal)",
        "OpenCV Image Stabilization & Crop",
        "TensorRT Quantized Neural Detector",
        "GPS & Telemetry Geo-Referencing Engine",
        "Flutter Ground Control Station Tablet UI"
      ]
    }
  }
];

