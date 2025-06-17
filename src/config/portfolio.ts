export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'marketing';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'marketing' | 'tools';
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Njikam Nganzie Moustapha",
  title: "Développeur Full Stack & Consultant Digital",
  subtitle: "Créateur d'expériences numériques exceptionnelles",
  bio: "Passionné par le développement web et le design, je crée des solutions digitales innovantes qui allient performance technique et expérience utilisateur remarquable. Spécialisé dans les technologies modernes, j'accompagne les entreprises dans leur transformation numérique.",
  location: "Douala, Cameroun",
  email: "njikammoustapha67@gmail.com",
  phone: "+237 693 10 95 28",
  avatar: "/assets/images/avatar.jpg"
};

export const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    url: "https://wa.me/237693109528",
    icon: "whatsapp",
    color: "#25D366"
  },
  {
    name: "Telegram",
    url: "https://t.me/njikammoustapha",
    icon: "telegram",
    color: "#0088cc"
  },
  {
    name: "GitHub",
    url: "https://github.com/njikammoustapha",
    icon: "github",
    color: "#333"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/njikammoustapha",
    icon: "facebook",
    color: "#1877F2"
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@njikammoustapha",
    icon: "tiktok",
    color: "#000"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/njikammoustapha",
    icon: "instagram",
    color: "#E4405F"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec paiement intégré et gestion d'inventaire",
    image: "/assets/images/projects/ecommerce.webp",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "web",
    featured: true
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Application mobile de banque numérique avec sécurité avancée",
    image: "/assets/images/projects/banking.webp",
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://example.com",
    category: "mobile",
    featured: true
  },
  {
    id: "3",
    title: "Brand Identity Design",
    description: "Identité visuelle complète pour startup tech",
    image: "/assets/images/projects/branding.webp",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    category: "design",
    featured: false
  },
  {
    id: "4",
    title: "Digital Marketing Campaign",
    description: "Campagne marketing multi-canal avec ROI de 300%",
    image: "/assets/images/projects/marketing.webp",
    technologies: ["Google Ads", "Facebook Ads", "Analytics"],
    category: "marketing",
    featured: true
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "typescript" },
  { name: "Next.js", level: 88, category: "frontend", icon: "nextjs" },
  { name: "Vue.js", level: 85, category: "frontend", icon: "vue" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "tailwind" },
  
  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Python", level: 85, category: "backend", icon: "python" },
  { name: "MongoDB", level: 88, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 82, category: "backend", icon: "postgresql" },
  
  // Design
  { name: "Figma", level: 90, category: "design", icon: "figma" },
  { name: "Adobe Creative Suite", level: 85, category: "design", icon: "adobe" },
  { name: "UI/UX Design", level: 88, category: "design", icon: "design" },
  
  // Marketing
  { name: "Google Ads", level: 85, category: "marketing", icon: "google" },
  { name: "SEO/SEM", level: 88, category: "marketing", icon: "seo" },
  { name: "Social Media", level: 90, category: "marketing", icon: "social" },
  
  // Tools
  { name: "Git", level: 92, category: "tools", icon: "git" },
  { name: "Docker", level: 80, category: "tools", icon: "docker" },
  { name: "AWS", level: 75, category: "tools", icon: "aws" }
];

export const services: Service[] = [
  {
    title: "Développement Web",
    description: "Sites web et applications web modernes, rapides et sécurisés",
    icon: "code",
    features: [
      "Applications React/Vue.js",
      "Sites e-commerce",
      "APIs REST/GraphQL",
      "Optimisation performance"
    ],
    price: "À partir de 500€"
  },
  {
    title: "Design UI/UX",
    description: "Interfaces utilisateur intuitives et expériences mémorables",
    icon: "design",
    features: [
      "Maquettes Figma",
      "Prototypage interactif",
      "Design system",
      "Tests utilisateurs"
    ],
    price: "À partir de 300€"
  },
  {
    title: "Maintenance & Support",
    description: "Maintenance technique et support continu de vos projets",
    icon: "support",
    features: [
      "Mises à jour sécurité",
      "Monitoring 24/7",
      "Sauvegardes automatiques",
      "Support technique"
    ],
    price: "À partir de 100€/mois"
  },
  {
    title: "Marketing Digital",
    description: "Stratégies digitales pour booster votre visibilité en ligne",
    icon: "marketing",
    features: [
      "Campagnes Google/Facebook Ads",
      "Optimisation SEO",
      "Content marketing",
      "Analytics & reporting"
    ],
    price: "À partir de 200€/mois"
  }
];
