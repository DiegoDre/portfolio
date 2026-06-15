import type { Project } from '../data/projects';
import Tag from './Tag';

const linkClass =
  'inline-block text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition';

function cardClass(project: Project): string {
  const base =
    'bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
  // Hint interactivity (pointer cursor) when the card actually links somewhere.
  return project.links?.length ? `${base} cursor-pointer` : base;
}

// Full, static class names so Tailwind's content scanner never purges them.
// (Template-built classes like `object-${fit}` are invisible to the scanner.)
const fitClass: Record<NonNullable<Project['image']['fit']>, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
};
const positionClass: Record<NonNullable<Project['image']['position']>, string> = {
  top: 'object-top',
};

function Cover({ image }: { image: Project['image'] }) {
  const fit = fitClass[image.fit ?? 'cover'];
  if (image.framed) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-gray-900">
        <img src={image.src} alt={image.alt} loading="lazy" className={`w-full h-full ${fit}`} />
      </div>
    );
  }
  const position = image.position ? positionClass[image.position] : '';
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={`w-full h-48 ${fit} ${position}`.trim()}
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const links = project.links ?? [];
  return (
    <div className={cardClass(project)}>
      <Cover image={project.image} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {project.note && (
          <span className="inline-block text-sm font-medium text-gray-500 dark:text-gray-400">
            {project.note}
          </span>
        )}

        {links.length === 1 && (
          <a href={links[0].href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {links[0].label}
          </a>
        )}

        {links.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
