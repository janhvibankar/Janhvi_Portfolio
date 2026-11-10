export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages for application development, systems engineering, and data processing",
    skills: [
      { name: "C", context: "Procedural programming, memory pointers, data structures & low-level fundamentals", level: "Core" },
      { name: "Core Java", context: "Object-oriented design, collections framework, exception handling & multithreading", level: "Core" },
      { name: "JavaScript", context: "ES6+ asynchronous execution, event loop, React state & Node.js server runtimes", level: "Primary" }
    ]
  },
  {
    category: "Frontend & Mobile",
    description: "Modern frameworks for high-performance cross-platform mobile apps and dynamic web interfaces",
    skills: [
      { name: "React.js", context: "Component architectures, hooks, state management & reactive UI rendering", level: "Production" },
      { name: "Flutter", context: "Cross-platform mobile UI, real-time camera stream ingestion & sensor evaluation", level: "Production" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Scalable backend services, asynchronous endpoints, and microservices integration",
    skills: [
      { name: "Node.js", context: "Event-driven runtime, non-blocking I/O & server architecture", level: "Production" },
      { name: "Express.js", context: "RESTful API design, authentication middleware & route optimization", level: "Production" },
      { name: "FastAPI", context: "High-performance asynchronous Python services for ML inference and prediction", level: "Production" },
      { name: "REST APIs", context: "Resource modeling, endpoint security, payload validation & API architecture", level: "Core" }
    ]
  },
  {
    category: "AI/ML & Computer Vision",
    description: "Statistical modeling, real-time object tracking, convolutional classifiers, and model explainability",
    skills: [
      { name: "Scikit-learn", context: "Statistical modeling, predictive pipelines & feature evaluation", level: "Core" },
      { name: "YOLO", context: "Real-time bounding-box gesture recognition & edge posture detection", level: "Production" },
      { name: "CNN", context: "Convolutional neural networks for spatial image classification and feature extraction", level: "Core" },
      { name: "OpenCV", context: "Real-time video frame preprocessing, normalization & landmark capture", level: "Production" },
      { name: "MediaPipe", context: "21-point hand landmark mesh tracking & joint angle kinematics", level: "Production" },
      { name: "SHAP", context: "Feature attribution & explainable AI explanations for healthcare prediction", level: "Production" }
    ]
  },
  {
    category: "Generative AI",
    description: "Retrieval-Augmented Generation, conversational memory, and semantic search systems",
    skills: [
      { name: "RAG", context: "Retrieval-Augmented Generation architectures grounding LLMs in verified literature", level: "Production" },
      { name: "LangChain", context: "Offline document loading, text chunking & prompt composition pipelines", level: "Production" },
      { name: "Embeddings", context: "Dense semantic vector representations for similarity ranking", level: "Core" },
      { name: "Vector Search", context: "Cosine similarity search and high-dimensional vector retrieval", level: "Production" }
    ]
  },
  {
    category: "Databases",
    description: "Relational, document, and cloud-hosted NoSQL datastores for transactions and vector embeddings",
    skills: [
      { name: "MySQL", context: "ACID transactions, relational normalization (1NF–BCNF) & query indexing", level: "Core" },
      { name: "MongoDB Atlas", context: "Cloud NoSQL document modeling, vector storage & persistent conversational history", level: "Production" },
      { name: "Firebase Firestore", context: "Real-time NoSQL database for mobile check-ins and telemetry records", level: "Core" }
    ]
  },
  {
    category: "Tools",
    description: "Essential developer tooling, cloud computing runtimes, and distributed version control",
    skills: [
      { name: "Git", context: "Distributed version control, atomic commits, branching & merge workflows", level: "Daily Use" },
      { name: "GitHub", context: "Remote repository hosting, collaborative pull requests & version control", level: "Daily Use" },
      { name: "VS Code", context: "Full-stack code authoring, multi-runtime debugging & extensions", level: "Primary IDE" },
      { name: "Jupyter Notebook", context: "Interactive data analysis, exploratory ML experimentation & visualization", level: "Core" },
      { name: "Google Colab", context: "Cloud GPU-accelerated model training, dataset preprocessing & experiments", level: "Core" }
    ]
  },
  {
    category: "Core Areas",
    description: "Foundational computer science principles applied across all software architectures",
    skills: [
      { name: "OOP (Object-Oriented Programming)", context: "Encapsulation, inheritance, polymorphism, abstraction & clean design patterns", level: "Core" },
      { name: "DBMS (Database Management Systems)", context: "Normalization, indexing, concurrency control, transaction isolation & query optimization", level: "Core" }
    ]
  }
];

export const marqueeTechnologies = [
  "RAG", "LangChain", "FastAPI", "React.js", "Flutter", "Node.js",
  "YOLO", "CNN", "OpenCV", "MediaPipe", "Scikit-learn", "SHAP",
  "MongoDB Atlas", "Firebase Firestore", "MySQL", "Core Java", "JavaScript", "C"
];
