import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 lg:px-64 py-16">
      <h2 className="text-center text-4xl font-semibold mb-4">Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        A selection of university, internship and personal projects. Some are public on GitHub,
        others remain private.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
