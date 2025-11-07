export const projects = [
  {
    id: 1,
    title: "Fundamental Analysis Application",
    shortDescription:
      "AI-powered web app to automate multi-year fundamental analysis of listed companies.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React.js",
      "Docker",
      "Git",
      "GitHub",
    ],
    // UPDATED: 'description' is now 'descriptionPoints'
    descriptionPoints: [
      "Developed an AI-powered web application to automate multi-year fundamental analysis of listed companies, including Piotroski F-Score and key financial ratios, potentially reducing manual analysis time by 60%.",
      "Provides faster, data-driven investment decisions with structured, consistent AI-powered analysis across large datasets.",
      "Implemented a scoring engine with dynamic visual indicators and actionable insights.",
      "Built modular, secure RESTful APIs with full CRUD functionality, user authentication, data validation, and error-handling.",
      "Ensured reliability with manual, unit, integration, and end-to-end testing for financial data and reporting pipelines.",
    ],
    demoUrl: "#", // Add your demo link
    imageUrl: "/projects/fundamental.png",
    currentStatus:
      "In Development: The core backend APIs and scoring engine are complete. Currently working on AI and Backend Testing.",
    architectureImageUrl: "/projects/fundamentalarch.png", // Add your architecture image
  },
  {
    id: 2,
    title: "RAG-Powered QnA Application",
    shortDescription:
      "AI platform for context-aware question answering from uploaded documents using RAG.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "ChromaDB",
      "LangChain",
      "React.js",
      "Docker",
      "Git",
      "GitHub",
    ],
    // UPDATED: 'description' is now 'descriptionPoints'
    descriptionPoints: [
      "Built an AI-driven platform enabling context-aware question answering from uploaded documents using a Retrieval-Augmented Generation (RAG) system.",
      "Handles multiple document types with high accuracy.",
      "Implemented document chunking, embeddings generation, and retrieval pipelines for real-time responses, with chat history tracking and pronoun resolution.",
      "Designed modular backend APIs for ingestion, storage, and retrieval of documents with an interactive chat interface.",
      "Leveraged advanced AI frameworks for improved semantic search, answer accuracy, and enterprise-grade scalability.",
    ],
    demoUrl: "#", // Add your demo link
    imageUrl: "/projects/rag.png",
    currentStatus:
      "Functional Prototype: The document ingestion, embedding, and retrieval pipelines are fully functional. I am currently working on scaling the solution and improving the chat history management, pronoun resolution and context management..",
    architectureImageUrl: "/projects/ragarch.png", // Add your architecture image
  },
  {
    id: 3,
    title: "Digitown Application",
    shortDescription:
      "Multi-module mobile app digitizing town-level public services.",
    techStack: [
      "Dart",
      "Flutter",
      "Firebase",
      "Firestore",
      "RESTful APIs",
      "Git",
      "GitHub",
    ],
    // UPDATED: 'description' is now 'descriptionPoints'
    descriptionPoints: [
      "Developed a multi-module mobile application digitizing town-level public services for over 300 residents, enhancing civic engagement, operational efficiency, and public service management.",
      "Delivered modules for hospital appointments, palliative care, payments, blood bank, and transport scheduling.",
      "Features a GPS-enabled driver app with real-time tracking and cloud synchronization.",
      "Integrated Razorpay payments, real-time notifications, and secure backend services, ensuring high availability, data integrity, and system scalability.",
      "Improved user adoption and workflow efficiency through responsive UI/UX design and modular architecture.",
    ],
    demoUrl: "#", // Add your demo link
    imageUrl: "/projects/digitown.png",
    currentStatus:
      "Completed: The application was fully developed, tested, and deployed, serving over 300 residents. All core modules are stable and functional.",
    architectureImageUrl: "/projects/digitownarch.png", // Add your architecture image
  },
  {
    id: 4,
    title: " E-Commerce Website",
    shortDescription:
      "An e-commerce platform with product listings and checkout.",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Git",
      "GitHub",
    ],
    // UPDATED: 'description' is now 'descriptionPoints'
    descriptionPoints: [
      "Built a fully functional e-commerce website featuring product listings, shopping cart, and checkout flow.",
      "Implemented basic authentication, dynamic product pages, and responsive UI using Bootstrap.",
      "Backend built with Node.js, Express, and MongoDB, with secure CRUD operations for products and user data.",
      "This project showcases full-stack integration and modern web development practices.",
    ],
    demoUrl: "#", // Add your demo link
    imageUrl: "/projects/ecommerce.png",
    currentStatus:
      "Learning Project: This was a foundational project. The core features are implemented, but it is not deployed or intended for production use.",
    architectureImageUrl: "/projects/ecommercearch.png", // Add your architecture image
  },
];
