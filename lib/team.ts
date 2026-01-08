export type TeamMember = {
  name: string
  role: string
  expertise: string
  image?: string
  social?: {
    linkedin?: string
    github?: string
    email?: string
  }
  isLeadership?: boolean
}

export type TeamValue = {
  title: string
  description: string
  icon: string // Icon name from lucide-react
}

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Alex Robertson',
    role: 'Founder & CEO',
    expertise: 'Visionary leader with expertise in digital transformation, AI strategy, and business growth.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'alex@auroranexus.com',
    },
  },
  {
    name: 'Sophia Bennett',
    role: 'Chief Technology Officer (CTO)',
    expertise: 'Expert in scalable architectures, cloud solutions, and enterprise systems.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'sophia@auroranexus.com',
    },
  },
  {
    name: 'Daniel Hughes',
    role: 'Head of Engineering',
    expertise: 'Leads software, web, and mobile teams with a focus on performance, security, and scalability.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'daniel@auroranexus.com',
    },
  },
  {
    name: 'Emily Carter',
    role: 'Head of Design (UI/UX)',
    expertise: 'Crafts intuitive, user-centered experiences across web and mobile platforms.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'emily@auroranexus.com',
    },
  },
]

export const coreTeam: TeamMember[] = [
  {
    name: 'Liam Johnson',
    role: 'Senior Software Engineer',
    expertise: 'Specialist in custom applications, integrations, and backend systems.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Aisha Khan',
    role: 'AI & Automation Engineer',
    expertise: 'Expert in RAG chatbots, machine learning models, and intelligent workflows.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Cloud Architect',
    expertise: 'Designs secure, scalable cloud infrastructure for high-growth businesses.',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'DevOps Engineer',
    expertise: 'Automates pipelines and ensures fast, reliable software delivery.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Noah Patel',
    role: 'Full Stack Developer',
    expertise: 'Builds modern, high-performance web applications.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Olivia Martinez',
    role: 'Mobile App Developer',
    expertise: 'Creates seamless, user-friendly iOS & Android applications.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emma Thompson',
    role: 'UI/UX Designer',
    expertise: 'Designs engaging interfaces that drive user adoption and conversions.',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'David Brown',
    role: 'Graphic Designer',
    expertise: 'Creates brand identities, marketing visuals, and creative assets.',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Zara Ahmed',
    role: 'SEO & Digital Marketing Specialist',
    expertise: 'Boosts visibility, traffic, and conversions with data-driven strategies.',
    social: {
      linkedin: '#',
    },
  },
]

export const teamValues: TeamValue[] = [
  {
    title: 'Innovation First',
    description: 'We constantly explore new technologies and creative approaches.',
    icon: 'Lightbulb',
  },
  {
    title: 'Client-Focused',
    description: 'Your success is our priority in every decision we make.',
    icon: 'Users',
  },
  {
    title: 'Quality-Driven',
    description: 'We never compromise on performance, security, or usability.',
    icon: 'Award',
  },
  {
    title: 'Collaboration',
    description: 'We believe the best solutions are built together.',
    icon: 'Handshake',
  },
  {
    title: 'Continuous Learning',
    description: 'Our team stays ahead through learning and experimentation.',
    icon: 'GraduationCap',
  },
]

