/**
 * Content configuration for Salaah – The Mentor Community
 * ABES Engineering College, Ghaziabad
 * 
 * Truthful, neutral community information without invented statistics,
 * fake names, or unverified claims.
 */

export const siteConfig = {
  name: "Salaah – The Mentor Community",
  tagline: "The Mentor Community",
  institution: "ABES Engineering College",
  institutionEstd: "2000",
  institutionUrl: "https://www.abes.ac.in/",
  campusImageUrl: "/campus.webp",
  campusLiveUrl: "https://www.abes.ac.in/assets/HomePage/About%20ABES.webp",
  address: "19th KM Stone, NH-09, Vijay Nagar, Ghaziabad, Uttar Pradesh 201009",
  contactEmail: "salaah@abes.ac.in",
  SUBMISSION_URL: "https://forms.gle/salaah-mentor-community",
};

export const campusViews = [
  {
    id: "main",
    name: "Main Campus",
    title: "ABES Engineering College Main Campus & Lawn",
    url: "/campus.webp",
    externalSourceUrl: "https://www.abes.ac.in/assets/HomePage/About%20ABES.webp",
    caption: "Iconic red-brick academic blocks & lush campus grounds on NH-09",
  },
  {
    id: "techfest",
    name: "TechFest",
    title: "ABES Engineering College TechFest & Innovation Arena",
    url: "/campus-techfest.webp",
    externalSourceUrl: "https://www.abes.ac.in/assets/HomePage/Explore%20&%20Get%20Engaged/TechFest.webp",
    caption: "Annual technical fest and student domain innovation arena",
  },
  {
    id: "clubs",
    name: "Student Life",
    title: "ABES Engineering College Student Clubs & Community",
    url: "/campus-clubs.webp",
    externalSourceUrl: "https://www.abes.ac.in/assets/HomePage/Explore%20&%20Get%20Engaged/Clubs.webp",
    caption: "Vibrant student community, cultural circles, and peer learning",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Programs", href: "#programs" },
  { label: "Connect", href: "#connect" },
];

export const heroContent = {
  badge: "ABES Engineering College • Student Mentorship Community",
  headlinePrefix: "Guidance, Growth & Peer Support Through",
  headlineAccent: "सलाह",
  headlineSuffix: "",
  subtext:
    "Salaah is the student-led mentorship community at ABES Engineering College. We foster collaborative learning, domain exploration, and senior-junior guidance across engineering disciplines.",
  primaryCta: {
    label: "Join the Community",
    href: siteConfig.SUBMISSION_URL,
    isExternal: true,
  },
  secondaryCta: {
    label: "Explore Departments",
    href: "#departments",
    isExternal: false,
  },
  highlights: [
    { label: "Focus", value: "Peer Mentorship" },
    { label: "Structure", value: "6 Domain Wings" },
    { label: "Eligibility", value: "All Batches" },
  ],
};

export const aboutContent = {
  sectionTitle: "About Salaah",
  sectionSubtitle: "Peer Mentorship Grounded in Shared Learning",
  story:
    "Named after the Devanagari philosophy of 'सलाह' (constructive counsel and guidance), Salaah serves as a collaborative platform at ABES Engineering College where senior students assist juniors with academic navigation, technical domain roadmaps, project collaboration, and campus life.",
  mission: {
    title: "Our Mission",
    description:
      "To provide an open, accessible space for peer mentorship, technical skill development, and cross-department collaboration for students across all engineering branches.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To cultivate a culture of reciprocal learning at ABES Engineering College where knowledge is shared freely and every student receives direction on their academic and career journey.",
  },
  pillars: [
    {
      title: "Peer-to-Peer Guidance",
      description: "Direct guidance from senior students who share practical insights on coursework, projects, and domain paths.",
    },
    {
      title: "Technical Exploration",
      description: "Collaborative learning sessions across software development, design, cloud fundamentals, and core engineering.",
    },
    {
      title: "Collaborative Culture",
      description: "An inclusive environment focused on team building, communication, and mutual academic support.",
    },
  ],
  stats: [
    { id: "departments", label: "Specialized Wings", target: 6, suffix: "", description: "Coordinated domains driving community initiatives" },
    { id: "years", label: "Academic Years", target: 4, suffix: "", description: "Mentorship open across 1st to 4th year students" },
    { id: "pillars", label: "Core Pillars", target: 3, suffix: "", description: "Peer guidance, domain skills, and teamwork" },
    { id: "community", label: "College Community", target: 1, suffix: "", description: "Student-driven ecosystem at ABES EC" },
  ],
};

export const departments = [
  {
    id: "tech-ops",
    name: "Technical Operations",
    iconName: "FaCode",
    leadTag: "Development & Engineering",
    description:
      "Coordinates technical learning sessions, peer coding circles, and open-source explorations across web, mobile, and software engineering domains.",
    initiatives: ["Peer Code Reviews", "Domain Roadmaps", "Collaborative Projects"],
    accentColor: "#8B1A1A",
  },
  {
    id: "design",
    name: "Design & Creative",
    iconName: "FaPalette",
    leadTag: "UI/UX & Visual Media",
    description:
      "Creates visual assets, brand identity materials, and user interfaces while introducing students to design thinking, UI/UX tools, and digital layout.",
    initiatives: ["Design Workflows", "Visual Guidelines", "Interface Principles"],
    accentColor: "#5E1010",
  },
  {
    id: "content",
    name: "Content & Editorial",
    iconName: "FaPenNib",
    leadTag: "Technical Writing & Documentation",
    description:
      "Drafts community documentation, technical summaries, and event communication to keep members informed and engaged.",
    initiatives: ["Technical Documentation", "Session Summaries", "Resource Guides"],
    accentColor: "#8B1A1A",
  },
  {
    id: "pr-outreach",
    name: "PR & Outreach",
    iconName: "FaBullhorn",
    leadTag: "Communications & Relations",
    description:
      "Manages campus communications, coordinates with student bodies, and facilitates community outreach activities within the college.",
    initiatives: ["Campus Announcements", "Inter-Department Collabs", "Guest Interactions"],
    accentColor: "#5E1010",
  },
  {
    id: "management",
    name: "Management & Logistics",
    iconName: "FaTasks",
    leadTag: "Operations & Coordination",
    description:
      "Oversees session scheduling, venue arrangements, and logistics support to ensure smooth operation of community meets.",
    initiatives: ["Session Scheduling", "Venue Coordination", "Member Operations"],
    accentColor: "#8B1A1A",
  },
  {
    id: "social-media",
    name: "Social Media & Marketing",
    iconName: "FaShareAlt",
    leadTag: "Digital Presence & Updates",
    description:
      "Maintains official announcements, updates, and learning highlights across student communication channels.",
    initiatives: ["Activity Highlights", "Community Updates", "Digital Communication"],
    accentColor: "#5E1010",
  },
];

export const programs = [
  {
    id: "prog-1",
    title: "Peer Mentorship Track",
    category: "Mentorship",
    tag: "Continuous",
    description:
      "Structured pairing between seniors and juniors based on academic interests, programming tracks, and career exploration.",
    metrics: "Senior-to-Junior Guidance",
  },
  {
    id: "prog-2",
    title: "Domain Learning Sessions",
    category: "Technical",
    tag: "Workshops",
    description:
      "Interactive sessions covering modern web development, programming languages, database fundamentals, and developer tools.",
    metrics: "Hands-On Practice",
  },
  {
    id: "prog-3",
    title: "Freshers Orientation",
    category: "Campus Life",
    tag: "Induction",
    description:
      "Introductory sessions for first-year engineers introducing college academic resources, developer clubs, and learning pathways.",
    metrics: "Annual Orientation",
  },
  {
    id: "prog-4",
    title: "Collaborative Project Circles",
    category: "Projects",
    tag: "Collaborative",
    description:
      "Multi-disciplinary student teams working together to apply coursework concepts into practical software and hardware projects.",
    metrics: "Cross-Domain Teams",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: "FaLinkedin",
    handle: "salaah-abes",
    url: "https://www.linkedin.com/school/abes-engineering-college/",
    description: "Connect for professional updates and student initiatives.",
  },
  {
    name: "Instagram",
    icon: "FaInstagram",
    handle: "@salaah.abes",
    url: "https://instagram.com/abesec_official",
    description: "Updates on sessions, meetups, and campus activities.",
  },
  {
    name: "WhatsApp Community",
    icon: "FaWhatsapp",
    handle: "Salaah Updates",
    url: siteConfig.SUBMISSION_URL,
    description: "Official channel for session announcements and notices.",
  },
  {
    name: "Official Email",
    icon: "FaEnvelope",
    handle: siteConfig.contactEmail,
    url: `mailto:${siteConfig.contactEmail}`,
    description: "Reach the community coordinators for queries and collaborations.",
  },
];

export const footerLinks = {
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Departments", href: "#departments" },
    { label: "Programs", href: "#programs" },
    { label: "Connect", href: "#connect" },
  ],
  departments: [
    { label: "Technical Operations", href: "#departments" },
    { label: "Design & Creative", href: "#departments" },
    { label: "Content & Editorial", href: "#departments" },
    { label: "PR & Outreach", href: "#departments" },
    { label: "Management & Logistics", href: "#departments" },
    { label: "Social Media", href: "#departments" },
  ],
};
