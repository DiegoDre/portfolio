import { Fragment } from 'react';
import { skillGroups } from '../data/skills';
import Tag from './Tag';

const gridClass =
  'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6';

export default function Skills() {
  return (
    <section id="technologies" className="container mx-auto px-4 sm:px-6 lg:px-64 my-16">
      <h2 className="text-center text-4xl font-semibold mb-4">Technologies &amp; Skills</h2>

      {skillGroups.map((group, i) => {
        const isLast = i === skillGroups.length - 1;
        const hasTags = !!group.tags?.length;
        return (
          <Fragment key={group.title}>
            <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>

            <div className={hasTags ? gridClass : `${gridClass} mb-12`}>
              {group.icons.map((icon, j) => (
                <div key={`${icon.name}-${j}`} className="flex flex-col items-center p-2">
                  <div className="relative w-16 sm:w-20 md:w-24 aspect-square">
                    <img
                      src={icon.img}
                      alt={icon.alt ?? icon.name}
                      loading="lazy"
                      className="absolute w-full h-full rounded-full shadow-md object-contain bg-white dark:bg-gray-700 p-2"
                    />
                  </div>
                  <span className="mt-2 font-semibold text-center text-sm sm:text-base">
                    {icon.name}
                  </span>
                </div>
              ))}
            </div>

            {hasTags && (
              <div
                className={isLast ? 'flex flex-wrap gap-2 mt-4' : 'flex flex-wrap gap-2 mt-4 mb-12'}
              >
                {group.tags!.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </Fragment>
        );
      })}
    </section>
  );
}
