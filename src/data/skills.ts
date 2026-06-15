export type SkillIcon = {
  /** Display label shown under the icon. */
  name: string;
  /** Public URL of the logo (served from /public). */
  img: string;
  /** Optional alt text if it differs from the label. */
  alt?: string;
};

export type SkillGroup = {
  title: string;
  /** Real technologies shown as icon tiles. */
  icons: SkillIcon[];
  /** Concepts / activities without a logo, shown as text-only pill tags. */
  tags?: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming languages',
    icons: [
      {
        name: 'TypeScript / JS',
        img: '/static/images/javascript.png',
        alt: 'TypeScript / JavaScript',
      },
      { name: 'Java', img: '/static/images/javaIcon.png' },
      { name: 'C#', img: '/static/images/cSharp.png' },
      { name: 'Python', img: '/static/images/python.png' },
      { name: 'Kotlin', img: '/static/images/kotlinPicture.png' },
      { name: 'SQL', img: '/static/images/SQLPicture.svg' },
    ],
  },
  {
    title: 'Frontend & UI',
    icons: [
      { name: 'React', img: '/static/images/ReactPicture.png' },
      { name: 'React Native', img: '/static/images/ReactPicture.png' },
      { name: 'HTML', img: '/static/images/html.png' },
      { name: 'CSS', img: '/static/images/css.png' },
      { name: 'Jetpack Compose', img: '/static/images/jetpack-composePicture.png' },
      { name: 'Android Studio', img: '/static/images/Android_Studio_icon_(2023).svg.png' },
    ],
  },
  {
    title: 'Backend & APIs',
    icons: [
      { name: 'Node.js', img: '/static/images/nodePicture.png' },
      { name: 'Express', img: '/static/images/expressPicture.png' },
      { name: 'MongoDB', img: '/static/images/mongodb.png' },
    ],
    tags: ['REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Data & ML',
    icons: [
      { name: 'pandas', img: '/static/images/pandas.png' },
      { name: 'NumPy', img: '/static/images/numpy.png' },
      { name: 'Matplotlib', img: '/static/images/mathplotlib.png' },
      { name: 'scikit-learn', img: '/static/images/scikit-learn.png' },
      { name: 'Jupyter', img: '/static/images/jupyter.png', alt: 'Jupyter Notebook' },
    ],
    tags: ['Machine Learning basics'],
  },
  {
    title: 'Tools & testing',
    icons: [
      { name: 'Git', img: '/static/images/git.png' },
      { name: 'Unity', img: '/static/images/unity.png' },
    ],
    tags: ['Frontend QA', 'Unit Tests', 'Documentation'],
  },
];
