export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mradigital.studio';

export const footerServices = [
  { label: "Web Design", link: "/services/web-design" },
  { label: "Frontend Development", link: "/services/web-development" },
  { label: "Backend Development", link: "/services/web-development" },
  { label: "SEO & Marketing", link: "/services/seo-marketing" },
];

export const footerCompany = [
  { label: "Studio", link: "/studio" },
  { label: "Our Work", link: "/work" },
  { label: "Contact", link: "/contact" },
  { label: "FAQ", link: "/faq" },
  { label: "Privacy Policy", link: "/privacy" },
  { label: "Terms & Conditions", link: "/terms" },
  { label: "Sitemap", link: "/sitemap" },
];

export const socialLinks = [
  { id: "twitter", link: "https://twitter.com/mradigital", label: "Twitter" },
  { id: "linkedin", link: "https://linkedin.com/company/mradigital", label: "LinkedIn" },
  { id: "instagram", link: "https://www.instagram.com/mra_digital_studio/", label: "Instagram" },
];

export const servicesData = [
  {
    id: "web-design",
    title: "Web Design",
    surface: "feature",
    colSpan: "md:col-span-2 md:row-span-2",
    image: "/assets/cap_design2_1784919825231.webp",
    altText: "Premium Web Design Services by MRA Digital Studio",
    imageOpacity: "opacity-80",
    gradient: true,
    link: "/services/web-design",
    features: ["UI/UX Design", "Responsive Design", "Design System", "Prototyping"],
    longDescription: "Crafting visually stunning, highly intuitive digital experiences.",
    challenge: "Many businesses struggle with low conversion rates and poor user engagement because their digital touchpoints feel outdated, disjointed, or confusing to navigate. A bad user interface ultimately costs businesses potential revenue and brand trust.",
    goal: "To deliver pixel-perfect, scalable design systems and user-centric interfaces that not only look premium but also intuitively guide users toward business goals.",
    detailedFeatures: [
      { title: 'User Research & Wireframing', desc: 'Understanding user journeys to map out logical, frictionless flows.' },
      { title: 'UI/UX Design', desc: 'Creating modern, aesthetic interfaces that align perfectly with brand identity.' },
      { title: 'Design Systems', desc: 'Building scalable libraries of components to ensure brand consistency across all platforms.' },
      { title: 'Interactive Prototyping', desc: 'High-fidelity clickable mockups to visualize the product before development begins.' }
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "Illustrator"]
  },
  {
    id: "web-development",
    title: "Web Development",
    surface: "feature",
    colSpan: "md:col-span-2",
    image: "/assets/cap_dev_1784917826943.webp",
    altText: "Full-Stack Web Development Services by MRA Digital Studio",
    imageOpacity: "opacity-80",
    gradient: true,
    link: "/services/web-development",
    features: ["Frontend Development", "Backend Development"],
    longDescription: "Building robust, scalable, and high-performance digital products.",
    challenge: "Off-the-shelf templates often fail to scale, suffer from sluggish performance, and present security vulnerabilities. Growing businesses require bespoke architectures that can handle high traffic and complex custom business logic.",
    goal: "To engineer secure, blazing-fast, and highly scalable full-stack applications that power your business logic seamlessly in the background while providing an exceptional frontend experience.",
    detailedFeatures: [
      { title: 'Frontend Architecture', desc: 'Building dynamic, SPA-driven user interfaces using modern React frameworks.' },
      { title: 'Backend & APIs', desc: 'Designing secure RESTful and GraphQL APIs to handle complex data operations.' },
      { title: 'Database Design', desc: 'Structuring relational and NoSQL databases for optimal read/write performance.' },
      { title: 'Cloud Infrastructure', desc: 'Deploying robust cloud hosting solutions for maximum uptime and scalability.' }
    ],
    techStack: ["React", "Node.js", "Next.js", "MongoDB"]
  },
  {
    id: "seo-marketing",
    title: "SEO and Marketing",
    surface: "feature",
    colSpan: "md:col-span-2",
    image: "/assets/cap_seo_1784919814924.webp",
    altText: "Data-Driven SEO and Marketing Services",
    imageOpacity: "opacity-80",
    gradient: true,
    link: "/services/seo-marketing",
    features: ["On-page SEO", "Technical SEO", "Analytics & Reporting"],
    longDescription: "Driving organic growth through data-driven search optimization.",
    challenge: "A beautifully designed and developed product is useless if your target audience cannot find it. Competitors dominating search rankings can suffocate your digital presence and restrict customer acquisition.",
    goal: "To implement robust technical SEO frameworks and content strategies that skyrocket your organic search rankings, drive targeted traffic, and maximize ROI.",
    detailedFeatures: [
      { title: 'Technical SEO Audits', desc: 'Deep dive into site architecture, speed, and mobile usability.' },
      { title: 'On-Page Optimization', desc: 'Keyword targeting, meta optimizations, and semantic HTML structuring.' },
      { title: 'Performance Optimization', desc: 'Improving Core Web Vitals to satisfy both users and search engine algorithms.' },
      { title: 'Analytics & Tracking', desc: 'Setting up comprehensive data funnels to monitor conversions and user behavior.' }
    ],
    techStack: ["Google Analytics", "Ahrefs", "Semrush", "Lighthouse"]
  }
];

export const projectsData = [
  {
    id: "mra-esport",
    title: "MRA Esport",
    badge: "Case Study",
    description: "A gaming community wanted to organize online tournaments but lacked a structured platform to manage registrations and tournament operations.",
    image: "/assets/case_study_teaser_1784919840052.webp",
    altText: "MRA Esport Tournament Platform Interface",
    link: "/work/mra-esport",
    liveLink: "/#",
    
    // Detailed Case Study Fields
    client: "MRA Gaming",
    status: "Development",
    heroImage: "/assets/case_study_hero_1784917837920.webp",
    heroAltText: "MRA Esport Dashboard and Tournament Views",
    challenge: "A gaming community wanted to organize online tournaments but lacked a structured platform to manage registrations, participants, and tournament operations. Organizers were relying on fragmented tools (spreadsheets, Discord, manual payments) which created chaos as the community grew.",
    goal: "To provide a scalable, all-in-one platform that helps gaming communities organize and manage tournaments efficiently, reducing manual work and improving the player experience.",
    progress: "The platform is currently in active development. We have completed the core authentication, role-based access control, and initial tournament bracket generation algorithms. Next milestones include integrating the real-time payment processing system and launching the closed beta for selected organizers.",
    features: [
      { title: 'User Authentication', desc: 'Secure login and role management for players, organizers, and admins.' },
      { title: 'Tournament Creation', desc: 'Customizable brackets, rulesets, and scheduling for different game types.' },
      { title: 'Tournament Registration', desc: 'Seamless team and solo registration flows.' },
      { title: 'Role-Based Access Control', desc: 'Strict permissions to protect sensitive operations and tournament data.' },
      { title: 'Player Management', desc: 'Comprehensive dashboards for players to track their stats and upcoming matches.' },
      { title: 'Transaction System', desc: 'Integrated payment processing for entry fees and prize pool distribution.' },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    services: ["Web Design", "Web Development"]
  } 
];
