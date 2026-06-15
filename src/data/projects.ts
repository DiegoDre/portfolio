export type ProjectImage = {
  src: string;
  alt: string;
  /** object-fit; defaults to 'cover'. */
  fit?: 'cover' | 'contain';
  /** object-position helper. */
  position?: 'top';
  /** Render inside a centered, padded frame (used for logos / diagrams). */
  framed?: boolean;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  image: ProjectImage;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  /** Plain status note shown instead of a link (e.g. work in progress). */
  note?: string;
};

export const projects: Project[] = [
  {
    title: 'Bachelor Thesis: LLM-based Workflow Automation',
    image: {
      src: '/static/images/thesis-card-v2.svg',
      alt: 'Deterministic automation pipeline with an LLM reasoning node at its center',
      fit: 'cover',
      framed: true,
    },
    description:
      'Bachelor thesis in progress: exploring the conception and evaluation of a workflow-based automation process that combines deterministic rule logic with LLM-supported semantic subtasks to reduce manual effort in processing imported affiliate merchant data. The goal is to keep the LLM a controlled tool — stepping in only where rule-based logic reaches its limits — so the overall process stays controllable and traceable.',
    tags: [
      'Large Language Models',
      'Workflow Automation',
      'Rule-based Logic',
      'Semantic Processing',
      'Affiliate Merchant Data',
      'Process Evaluation',
    ],
    note: 'Bachelor thesis in progress — final semester',
  },
  {
    title: 'donista.org Mobile App — React Native Production App',
    image: { src: '/static/images/donista.jpg', alt: 'donista.org', fit: 'contain', framed: true },
    description:
      'During my internship at donista.org, a Berlin-based startup connecting online shopping with social impact through affiliate-based donations, I built a native mobile application for Android and iOS with React Native based on an existing React web application. The app is now in production and available in both the Apple App Store and Google Play Store. My work also involved frontend QA and documentation.',
    tags: [
      'React Native',
      'TypeScript',
      'React',
      'Mobile Development',
      'iOS',
      'Android',
      'Frontend QA',
      'Documentation',
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/de/app/donista-org/id6739247332' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=org.donista.donista',
      },
    ],
  },
  {
    title: 'CareLog (MERN): Authenticated Record Management',
    image: { src: '/static/images/WebAppPicture.png', alt: 'CareLog MERN application' },
    description:
      'Developed a MERN-based record management application with JWT authentication, role-based access control concepts, protected frontend routes, backend validation, and error handling. Focused on secure user flows, API integration, and a maintainable frontend/backend structure.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'JWT Authentication',
      'Backend Integration',
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/DiegoDre/carelog' }],
  },
  {
    title: 'Reddit Political Mentions Analysis',
    image: {
      src: '/static/images/RedditScraperPicture.png',
      alt: 'Reddit Political Mentions Analysis',
    },
    description:
      'Built a Python-based data pipeline using the Reddit API to collect, clean, aggregate, and visualize political mention data. Focused on API-based data collection, preprocessing, exploratory analysis, and visualization.',
    tags: [
      'Python',
      'Reddit API',
      'Data Analysis',
      'pandas',
      'NumPy',
      'Matplotlib',
      'API Data Collection',
    ],
    links: [{ label: 'View Project', href: '/static/projects/RedditScraper.html' }],
  },
  {
    title: 'Implementing Classic Machine Learning Algorithms',
    image: {
      src: '/static/images/machine-learning-card-v2.svg',
      alt: 'Classification scatter plot with a decision boundary and a k-nearest-neighbours query point',
    },
    description:
      'Implemented and compared basic machine learning algorithms such as k-nearest neighbors, linear regression, logistic regression, decision trees, and Naive Bayes as part of university coursework.',
    tags: [
      'Python',
      'scikit-learn',
      'Machine Learning',
      'kNN',
      'Regression',
      'Decision Trees',
      'Naive Bayes',
    ],
  },
  {
    title: 'Hellfall — 2D Combat Platformer Game',
    image: {
      src: '/static/images/Hellfall.png',
      alt: 'Hellfall 2D Combat Platformer Game',
      position: 'top',
    },
    description:
      'Developed a 2D combat platformer in a six-person team, learning Unity and C# from scratch for this project. The project strengthened my ability to quickly learn unfamiliar technologies, collaborate with Git-based workflows, and contribute pragmatically across different areas of development.',
    tags: ['Unity', 'C#', 'Team Project', 'Git', 'Game Development'],
    links: [{ label: 'View Project', href: 'https://diego0360.itch.io/hellfall' }],
  },
  {
    title: 'BillSplitter',
    image: { src: '/static/images/BillSplitterPicture.png', alt: 'BillSplitter App' },
    description:
      'A small Android app to split restaurant bills including tip across multiple people. Built in Kotlin with Jetpack Compose, using SharedPreferences for persistence.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    links: [{ label: 'View Project', href: '/static/projects/BillSplitterDoc.pdf' }],
  },
];
