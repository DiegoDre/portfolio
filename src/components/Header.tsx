const navLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#technologies', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-40">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <ul className="flex space-x-4 sm:space-x-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm sm:text-base hover:text-blue-500 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition ml-2"
        >
          {/* Moon icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3c.132 0 .263.003.393.008a9 9 0 11-8.385 8.385A7.5 7.5 0 1012 3z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
