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
    title: "NewsVITa — Centralized College News & Events Portal",
    category: "frontend",
    subtitle: "University-wide media, departmental announcements & campus event hub",
    description: "A centralized campus news and event discovery portal streamlining university announcements, departmental notices, and annual fest participation. Features dynamic category filtering, fast search indexing, accessible layouts, and video media reels.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Lucide Icons",
      "Git",
      "Vercel"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/code-with-apoorv/Newsvita",
    demo: "https://newsvita.vercel.app",
    overview: "NewsVITa provides a centralized digital focal point for thousands of university students and faculty members to stay informed about hackathons, cultural festivals, sports tournaments, and official departmental circulars.",
    problem: "Campus information was previously scattered across disparate WhatsApp groups, email threads, and physical bulletin boards, leading to missed registration deadlines and poor student event turnout.",
    solution: "Engineered an intuitive, responsive web application featuring live categorized news feeds, dynamic search filters, interactive event registration forms, and video reel playback for past campus highlights.",
    architecture: "Client-Side Rendering (Vanilla ES6+ Modules with event-driven state) ↔ Responsive UI Layer (Tailwind CSS utility-first layout with fluid breakpoints) ↔ Dynamic Content Filtering & Media Assets Delivery.",
    highlights: [
      "Interactive event directory with instant real-time keyword search and category filtering tags.",
      "Integrated responsive video reel components showcasing fest recaps and cultural performances.",
      "Optimized client-side rendering achieving a 98+ Google Lighthouse performance score.",
      "Mobile-first responsive interface tested across diverse viewport sizes and devices."
    ],
    challenges: [
      "Optimizing heavy multimedia assets (high-definition event videos and photography) for instant loading on mobile networks.",
      "Building seamless client-side search filtering without external dependencies."
    ],
    learned: [
      "Mastery of modern CSS Grid/Flexbox layouts, fluid typography, and accessibility best practices (WCAG 2.1).",
      "DOM lifecycle optimization, event delegation, and modular JavaScript architecture."
    ]
  }
];
