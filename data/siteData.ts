export type NavItem = {
  label: string;
  href: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  date: string;
  detail?: string;
};

export type NewsItem = {
  date: string;
  text: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  note?: string;
  description: string;
  links: {
    pdf?: string;
    doi?: string;
    project?: string;
    bibtex?: string;
    code?: string;
    video?: string;
  };
};

export type Project = {
  title: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Award = {
  title: string;
  year: string;
};

export type LeadershipItem = {
  title: string;
  date: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Zhuohao Chen",
  title: "Incoming Ph.D. Student | XR & HCI Researcher",
  affiliation: "M.S., Computer Graphics Technology, Purdue University",
  tagline:
    "I design and study adaptive XR systems that support perception, attention, and interaction in mobile mixed-reality environments.",
  email: "chen5299@purdue.edu",
  profileImage: "/profile.jpg",
  profileImageAlt:
    "Profile photo placeholder for Zhuohao Chen. Replace with a professional headshot.",
  tags: ["XR", "HCI", "Mixed Reality", "Adaptive Interfaces", "Behavioral Sensing", "Unity", "User Studies"]
};

export const links = {
  // TODO: Replace placeholder social/profile links with the final public URLs.
  github: "#",
  googleScholar: "https://scholar.google.com/citations?user=yTMzhhEAAAAJ&hl=zh-CN",
  linkedIn: "https://www.linkedin.com/in/cisco-chen/",
  // TODO: Add Zhuohao_Chen_CV.pdf to the public folder when the final CV is ready.
  cv: "/Zhuohao_Chen_CV.pdf"
};

export const bio =
  "I am an incoming Ph.D. student in Computer Science with a research background in Extended Reality and Human-Computer Interaction. My work focuses on adaptive AR/MR interfaces, behavioral sensing, mobile mixed reality, and user-centered XR system design. I am particularly interested in how XR systems can sense user behavior, adapt interface presentation, and support perception, attention, and safety during physically situated tasks.";

export const education: EducationItem[] = [
  {
    degree: "M.S. Computer Graphics Technology",
    institution: "Purdue University",
    date: "May 2026",
    detail: "GPA: 4.0/4.0"
  },
  {
    degree: "B.Eng. Computer Science and Technology",
    institution: "Changsha University of Science and Technology",
    date: "June 2024"
  }
];

export const researchInterests = [
  "Adaptive AR/MR Interfaces",
  "Human-Computer Interaction",
  "Mobile and Wearable Computing",
  "Behavioral Sensing in XR",
  "Context-Aware Interfaces",
  "Spatial Perception in Mixed Reality",
  "Accessibility and Perceptual Augmentation"
];

export const news: NewsItem[] = [
  // { date: "Sep 2026", text: "Starting my Ph.D. program in Computer Science at University of British Columbia." },
  {
    date: "May 2026",
    text: "Completed my M.S. in Computer Graphics Technology at Purdue University."
  },
  {
    date: "2026",
    text: "Paper accepted to the 4th Workshop on Locomotion and Wayfinding in XR at IEEE VR 2026."
  },
  {
    date: "2025",
    text: "Systematic review on generative AI for game character creation published in IEEE Transactions on Games, Early Access."
  },
  {
    date: "2023",
    text: "Research on predictive displays in spatial time-delay environments published at HCI International."
  }
];

export const publications: Publication[] = [
  {
    title: "Exploring Perception and Avoidance Behavior toward Real and Virtual Humans in Outdoor Mixed Reality",
    authors: "<strong>Zhuohao Chen*</strong>, Zihan Wu*, and Christos Mousas",
    venue: "Proceedings of the 4th Workshop on Locomotion and Wayfinding in XR (Low-XR) at IEEE VR 2026",
    year: "2026",
    status: "Published / Accepted",
    note: "*Co-first authors",
    description:
      "This study aims to investigate behavioral differences in participants' perception of virtual and real humans, as well as their performance on avoidance tasks, in an outdoor mixed-reality (MR) environment. A within-group study (N=24) was conducted, comprising two tasks. In Task 1, at a viewing distance of 6 meters, participants' perceptual differences were examined with respect to recognition response time, perceived realism, and distance estimation for human targets. In Task 2, participants performed an avoidance task, during which their avoidance movement behaviors were compared using metrics including trajectory length, task completion time, average speed, side-by-side distance, minimum distance, and avoidance direction. These findings provide empirical support for extending MR applications from indoor settings to outdoor mobile scenarios, such as mobility assistance, path navigation, and collaborative training. The results highlight several factors essential for advancing MR systems toward safer and more generalizable outdoor applications, including the need to improve the realism of virtual humans, to provide larger interpersonal distances in navigation scenarios, to introduce lightweight calibration for distancesensitive tasks, and to account for the slight temporal latency that occurs when virtual entities appear.",
    links: {
      doi: "https://ieeexplore.ieee.org/abstract/document/11489720",
      video: "https://www.youtube.com/watch?v=qaATRSP8Ve4"
    }
  },
  {
    title:
      "A Systematic Review of Generative AI on Game Character Creation: Applications, Challenges, and Future Trends",
    authors:
      "Zihan Wu, <strong>Zhuohao Chen</strong>, Donghan Zhu, Christos Mousas, and Dominic Kao",
    venue: "IEEE Transactions on Games, Early Access",
    year: "2025",
    status: "Published / Early Access",
    description:
      "In this paper, we review the impact of generative artificial intelligence (AI) on game character creation. We critically examine the application of AI-driven computer graphics (AICG) technology across the character creation workflow, including concept generation, clothing design, modeling, props, cultural embedding, personality traits, and behaviors. Our research identifies potential applications, challenges, and future trends of these technologies in game development. Furthermore, it explores how AI and large language models (LLMs) can streamline workflows, automate asset generation, and reduce technical barriers in character creation. In this systematic review, we provide valuable insights for AI developers, game designers, and researchers.",
    links: {
      doi: "https://ieeexplore.ieee.org/document/10979443"
    }
  },
  {
    title: "Visual Design for Predictive Display in Spatial Time-Delay Environments Considering Workload",
    authors: "J. Yan, J. Sun, T. Tang, and <strong>Zhuohao Chen</strong>",
    venue: "International Conference on Human-Computer Interaction, Springer",
    year: "2023",
    status: "Published",
    description:
      "Time delay is an inherent technical feature that cannot be eliminated during space robot teleoperation and can significantly impact operator workload. In this paper, based on predictive display technology, we investigate the change of operator workload during teleoperation by image prediction graphical interface and virtual reality prediction graphical interface. By constructing a virtual simulation experiment platform for a remote operation system, 20 participants were tested and analyzed in a fetch-place experiment; TAM, NASA-TLX, and AB-directed questionnaires were distributed for subjective measurements to understand the personal perceptions and visual preferences of the participants on their workloads, and to investigate the applicability of the predictive display technology to reduce the operator’s cognitive load. The results showed that the subjective and objective performance of the virtual reality predictive graphical interface (VR-PGI) was higher than that of the image predictive graphical interface (I-PGI) in the fetch-place operation scenario. It was found that the operator’s workload did not change significantly with the increase of spatial time delay in the predictive graphical interface, which proved the practicality of applying the predictive graphical interface to the spatial teleoperation scenario.",
    links: {
      doi: "https://dl.acm.org/doi/10.1007/978-3-031-35696-4_24"
    }
  },
  {
    title: "Research and Design of Chinese Cookie Model with Chun Character based on OpenSCAD",
    authors: "<strong>Zhuohao Chen</strong>",
    venue: "CONF-CDS 2023",
    year: "2023",
    status: "Accepted",
    description:
      "A computational design project using OpenSCAD to create a parametric Chinese \"Chun\" character cookie model for cultural and educational applications.",
    links: {
      doi: "https://www.researchgate.net/publication/382370818_Research_and_design_of_Chinese_cookie_model_with_chun_character_based_on_OpenSCAD"

    }
  }
];

export const projects: Project[] = [
  {
    title: "Outdoor Mixed Reality Perception and Avoidance",
    tags: ["Meta Quest 3", "Mixed Reality", "Spatial Perception", "User Study", "Cognitive Load"],
    description:
      "Investigated perception, avoidance behavior, and psychological equivalence of real and virtual obstacles or humans in outdoor mixed-reality environments. The project involved controlled experiments, movement analysis, reaction-time measures, spatial presence, and cognitive-load assessment.",
    image: "/OutdoorPerception.png",
    imageAlt: "Abstract outdoor mixed reality scene placeholder"
  },
  {
    title: "Generative AI for Game Character Creation",
    tags: ["Generative AI", "Game Design", "Character Design", "Literature Review", "PRISMA"],
    description:
      "Conducted a systematic review of 72 studies on generative AI in game character design. Contributed to statistical tables, visual classification frameworks, LaTeX formatting, and manuscript development.",
    image: "/AICharacter.jpg",
    imageAlt: "Abstract game character creation workflow placeholder"
  },
  {
    title: "Predictive Display in Spatial Time-Delay Environments",
    tags: ["HCI", "Predictive Display", "VR-PGI", "I-PGI", "Workload", "Experiment Design"],
    description:
      "Studied predictive display technologies for remote interaction under spatial time delays. Assisted in experimental design, participant recruitment, and data collection using a virtual simulation platform.",
    image: "/PredictiveDisplay.jpg",
    imageAlt: "Abstract predictive display interface placeholder"
  },
  {
    title: "Parametric Chinese Cookie Model with OpenSCAD",
    tags: ["OpenSCAD", "Computational Design", "Parametric Modeling", "Cultural Design"],
    description:
      "Designed and implemented a generative 3D modeling approach to create a Chinese \"Chun\" character cookie model using OpenSCAD.",
    image: "/OpenscadChun.jpg",
    imageAlt: "Abstract parametric 3D modeling placeholder"
  },
  {
    title: "Interactive VR Museum System",
    tags: ["Unity", "HTC Vive", "Virtual Reality", "Interaction Design", "Usability"],
    description:
      "Developed an interactive VR museum system using Unity and HTC Vive. Implemented immersive environment features and user interaction logic to support usability studies.",
    image: "/VRMuseum.webp",
    imageAlt: "Abstract virtual reality museum placeholder"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["C", "C++", "Java", "Python", "C#", "JavaScript/TypeScript"]
  },
  {
    category: "XR / Game Development",
    items: ["Unity", "Unreal Engine", "OpenGL", "GLSL", "HTC Vive", "Meta Quest 3", "HoloLens 2"]
  },
  {
    category: "3D / Design",
    items: ["Blender", "OpenSCAD", "3D Modeling", "Parametric Modeling"]
  },
  {
    category: "Research",
    items: [
      "Human-Computer Interaction",
      "User Studies",
      "Experimental Design",
      "Behavioral Data Collection",
      "Literature Review",
      "PRISMA",
      "Survey Design"
    ]
  },
  {
    category: "Tools",
    items: ["Git", "LaTeX", "Overleaf", "Python Data Analysis Tools"]
  },
  {
    category: "Languages",
    items: ["Mandarin Chinese: Native", "English: Fluent"]
  }
];

export const awards: Award[] = [
  { title: "Second Prize, China National Undergraduate Ruikang Robot Developer Competition", year: "2023" },
  { title: "Third Prize, Hunan Region, 24th China Robotics and AI Competition", year: "2022" },
  { title: "Second Prize, China Undergraduate Computer Design Competition", year: "2022" },
  { title: "Third Prize, Education Platform Track, China Undergraduate Computer Design Competition", year: "2022" },
  { title: "Third Prize, China Undergraduate Innovation and Entrepreneurship Competition", year: "2022" },
  { title: "First Prize, 3rd \"Yuanguang Cup\" Game Creation Competition, CSUST", year: "2022" }
];

export const leadership: LeadershipItem[] = [
  {
    title: "Leader, Game Development Club, CSUST",
    date: "July 2022 - September 2023",
    description:
      "Organized weekly workshops on Unity and C#, coordinated peer-learning sessions, and mentored junior members in game design and programming."
  },
  {
    title: "Founder & Initiator, \"Yuanguang Cup\" Game Creation Competition, CSUST",
    date: "November 2022 - December 2022",
    description:
      "Founded the university's first student-led game design competition, coordinated with faculty and student organizations, and recruited over 50 participants."
  }
];
