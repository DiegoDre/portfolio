import type { ReactNode } from 'react';

/** Small pill label used for skills and project tags. */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
      {children}
    </span>
  );
}
