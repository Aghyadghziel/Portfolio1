import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aghyad",
  lastName: "Ghziel",
  name: `Aghyad Ghziel`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Tbilisi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Russian", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between ideas and code
</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">     Aghyad Ghziel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
Portfolio
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Aghyad, a fullstack developer with over 7 years of experience crafting scalable web applications and interactive user experiences. In my free time, I build personal projects and explore new technologies.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
     I am a full-stack software engineer building scalable, high-quality web applications. I specialize in creating reliable backend systems and intuitive frontend interfaces, turning complex requirements into efficient, maintainable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bagel Labs — Remote",
        timeframe: "Jan 2024 — Sep 2025",
        role: "Senior Fullstack Developer",
        achievements: [
          <>
      Worked as a Full Stack Developer with frontend leadership responsibility on a SaaS platform focused on AI model fine-tuning and subscription-based access to advanced image and video models (including VEO 3, Flux, and others).
          </>,
          <>
    Built secure authentication and authorization using NextAuth.js with OAuth (Google, GitHub) and role-based access control
          </>,
          <>
ntegrated Stripe for subscription management, billing workflows, and transaction handling

Designed and implemented model deployment and fine-tuning workflows with real-time status monitoring
          </>,
          <>
  Developed scalable data and file management systems for dataset uploads, processing, and validation
          </>,
          <>
Built a full admin console for user management, system monitoring, and operational control
          </>,
          <>
Integrated AWS services (S3, DynamoDB) to support cloud infrastructure
          </>,
          <>
Collaborated closely with backend, product, and design teams in a fully remote environment
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Alpha Factory - Remote",
        timeframe: "aug 2025 — Dec 2025",
        role: "Fullstack Developer",
        achievements: [
          <>
        Built a full-stack collaboration platform connecting influencers, designers, and video editors into a unified workflow.
          </>,
          <>
       Developed influencer workflows for submitting video content and requesting editing and thumbnail design
          </>,
          <>
     Built dashboards for designers and editors to manage requests, revisions, and deliveries
          </>,
          <>
    Integrated PayPal and cryptocurrency payments for secure project-based transactions
          </>,
          <>
Implemented a comprehensive admin panel for platform moderation, user management, and dispute handling
          </>,
          <>
     Designed secure file upload and storage pipelines for large video assets
          </>,
          <>
Used Prisma for database modeling and structured data storage
          </>,
          <>
Delivered a responsive, role-based UI with Next.js and React
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/image-02.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kazan Federal University",
        description: <>Bachelor of Science in Computer Science.</>,
      },
      {
        name: "Fullstack Development Focus",
        description: <>Completed professional online courses in Fullstack Web Development (React, Node.js, Express, SQL/NoSQL, Tailwind CSS).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & UI",
        description: (
          <>Building modern, accessible, and scalable user interfaces with React, Next.js, and TypeScript. Expertise in component architecture and UI libraries like Radix UI and Tailwind CSS.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
      },
      {
        title: "Backend & Infrastructure",
        description: (
          <>Developing robust backend systems with Node.js and Express. Experience with Prisma ORM, AWS services (S3, DynamoDB), and implementing secure authentication and payment solutions including NextAuth.js, Stripe, PayPal, and cryptocurrency payments.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express",
            icon: "express",
          },
          {
            name: "Prisma",
            icon: "prisma",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Stripe",
            icon: "stripe",
          },
          {
            name: "PayPal",
            icon: "paypal",
          },
        ],
      },
      {
        title: "Design & Prototyping",
        description: (
          <>Rapid prototyping and design-to-code workflows in Figma. Strong focus on developer–designer collaboration to bridge the gap between design and implementation.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
