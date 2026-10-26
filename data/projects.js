export const projects = [
  {
    id: 1,
    number: "01",
    featured: true,
    title: "CloudCart — Cloud-Native E-Commerce Platform",
    category: "fullstack",
    subtitle: "Enterprise full-stack e-commerce application built with Spring Boot 3 & Angular 17",
    description: "A full-stack, distributed e-commerce platform built with a Java Spring Boot backend and Angular frontend. Implements stateless JWT authentication, role-based access control (RBAC), catalog filtering, persistent cart/wishlist management, and MySQL database persistence with JPA/Hibernate.",
    technologies: [
      "Java 17/21",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "Angular 17/19",
      "TypeScript",
      "MySQL",
      "Hibernate / JPA",
      "Docker",
      "REST APIs"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/code-with-apoorv/Cloud-ecommerce-platform",
    demo: "https://cloud-ecommerce-platform.vercel.app",
    overview: "CloudCart was designed from the ground up to demonstrate enterprise architectural principles in modern cloud-native web engineering. It decouples high-frequency frontend operations from backend persistence layers with secure token-based authentication.",
    problem: "Traditional monolithic shopping platforms suffer from tight coupling, insecure session stores, sluggish page loads, and fragile state synchronization between client and database layers.",
    solution: "Architected a decoupled microservices-ready full stack: Spring Boot 3 handling business logic, transaction boundaries, and secure JWT authentication filters; connected to an optimized MySQL schema with Hibernate caching. Angular delivers a high-speed, dynamic SPA user experience with reactive form validations.",
    architecture: "Frontend (Angular SPA with standalone components & RxJS state streams) ↔ RESTful API Gateway (Spring Boot 3 + Spring Security + JWT Filter) ↔ Data Access Layer (Spring Data JPA / Hibernate ORM) ↔ Persistence Layer (MySQL relational database with indexed search).",
    highlights: [
      "Secured user authentication and authorization using Spring Security 6 and stateless JWT tokens.",
      "Multi-criteria product discovery engine with category filtering, keyword search, and dynamic sorting.",
      "Persistent user wishlist and shopping cart with real-time price calculations and tax estimation.",
      "Clean DTO architecture preventing data leakage and ensuring type-safe REST payloads.",
      "Automated DB migration and relational indexing for sub-millisecond query retrieval."
    ],
    challenges: [
      "Managing stateless token refreshing and seamless expiration handling across browser tabs.",
      "Optimizing complex multi-table joins in Hibernate to eliminate the N+1 query problem.",
      "Designing responsive shopping UI components with synchronized global state across header cart badges and checkout steps."
    ],
    learned: [
      "Deep understanding of Spring Security filter chains and security context propagation.",
      "Advanced Angular state management using Signals, RxJS Observables, and HTTP Interceptors.",
      "Relational schema normalization, database transaction isolation levels, and ACID guarantees in enterprise Java."
    ]
  },
  {
    id: 2,
    number: "02",
    featured: true,
    title: "V-PLAY — Real-Time Tennis Analytics System",
    category: "ai",
    subtitle: "Automated sports analytics, player tracking & ball trajectory prediction platform",
    description: "An intelligent computer vision and deep learning sports platform utilizing YOLOv8 and PyTorch to detect and track tennis players, rackets, and balls from broadcast match footage. Features court line regression, homography transformation, and post-match tactical heatmap generation.",
    technologies: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "OpenCV",
      "ResNet-50",
      "Computer Vision",
      "NumPy",
      "Homography",
      "Matplotlib"
    ],
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/code-with-apoorv/V-PLAY",
    demo: null,
    overview: "V-PLAY transforms raw broadcast tennis videos into actionable tactical intelligence for coaches and athletes. It tracks high-velocity tennis ball movements and calculates precise court bounce coordinates in real-time.",
    problem: "Professional tennis tracking systems (like Hawk-Eye) require dozens of synchronized high-speed cameras costing hundreds of thousands of dollars, making advanced performance metrics inaccessible to amateur and collegiate players.",
    solution: "Developed an AI-driven single-camera tracking pipeline using custom-trained YOLOv8 models for player and racket detection, combined with a convolutional neural network (CNN) for fast-moving tennis ball trajectory estimation and perspective transformation onto a 2D court model.",
    architecture: "Video Ingestion Pipeline (OpenCV frame extraction) → Object Detection & Multi-Object Tracking (YOLOv8 + ByteTrack) → Ball Trajectory Regression (Custom CNN / Kalman Filtering) → Court Keypoint Detection & Homography (ResNet-50) → Analytics Engine (Heatmaps, Rally Speeds, Shot Distribution).",
    highlights: [
      "High-precision tracking of tennis ball trajectories at speeds exceeding 150 km/h with bounce point estimation.",
      "Automated court line detection and 4-point perspective transformation to project 3D camera angles onto 2D court coordinates.",
      "Generated player positioning heatmaps, stamina expenditure estimations, and match summary metrics.",
      "Real-time visual overlay engine rendering trajectory arcs, bounding boxes, and velocity stats on broadcast video."
    ],
    challenges: [
      "Handling ball occlusion, motion blur, and false positives in high-speed rallies against crowded stadium backgrounds.",
      "Computing real-time perspective homography matrices dynamically when broadcast camera angles pan and zoom.",
      "Optimizing inference batching to sustain high frame-rate processing on standard GPU hardware."
    ],
    learned: [
      "End-to-end computer vision pipeline design from data annotation to model inference optimization.",
      "Mathematical principles of geometric homography, matrix transformations, and spatial mapping.",
      "PyTorch model training, fine-tuning, loss function tuning for small-object detection in video streams."
    ]
  },
  {
    id: 3,
    number: "03",
    featured: true,
    title: "NewsVita — Campus Media & Event Intelligence Platform",
    category: "fullstack",
    subtitle: "Full-stack university event registration, RSVP engine & multimedia portal",
    description: "A full-stack campus event and announcement intelligence portal. Replaces fragmented social media notices with a centralized platform featuring Role-Based Access Control (RBAC), atomic seat capacity tracking, live RSVP registration, automated digital QR admit passes, and high-definition event media archives.",
    technologies: [
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT Auth",
      "Bcrypt",
      "REST APIs",
      "JavaScript ES6+",
      "Tailwind CSS",
      "HTML5"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/code-with-apoorv/Newsvita",
    demo: "https://newsvita.vercel.app",
    overview: "NewsVita provides a centralized digital focal point for university students and club organizers to discover campus hackathons, fests, and workshops, reserve tickets with instant seat verification, and download official entry admit passes.",
    problem: "Campus event notices were previously scattered across ephemeral WhatsApp groups, while student registrations relied on disorganized manual forms prone to overbooking and lacking entry verification.",
    solution: "Engineered a production-ready full-stack application: Express.js REST API handling JWT authentication and atomic seat reservations; connected to an ACID-compliant relational SQL schema; paired with a responsive Tailwind CSS client delivering live seat counters and digital QR passes.",
    architecture: "Client Layer (Responsive HTML5/Tailwind SPA with async fetch & JWT session storage) ↔ RESTful API Layer (Express.js router + JWT auth middleware + atomic reservation engine) ↔ Persistence Layer (Relational SQLite schema with transaction integrity).",
    highlights: [
      "Role-Based Access Control (RBAC) with secure Bcrypt password hashing and stateless JWT authentication.",
      "Atomic seat reservation logic preventing concurrency race conditions and overbooking during high-traffic bursts.",
      "Automated digital admit pass generation with unique reference tokens and printable SVG QR verification codes.",
      "Full CRUD REST API endpoints for event scheduling, student registration, and RSVP cancellations.",
      "Categorized campus media archive with responsive video reel player and keyboard-accessible lightbox."
    ],
    challenges: [
      "Preventing race conditions when multiple concurrent students attempt to reserve the final remaining seat for a popular event.",
      "Designing a clean, lightweight relational schema with foreign key integrity without heavy external database daemons."
    ],
    learned: [
      "RESTful API design best practices, HTTP status semantics, and secure token lifecycle management.",
      "ACID relational transaction handling, atomic SQL updates, and data consistency.",
      "Connecting vanilla JavaScript client applications to backend REST services using the Fetch API."
    ]
  }
];
