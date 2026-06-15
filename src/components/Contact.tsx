export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 max-w-xl">
      <h2 className="text-center text-4xl font-semibold mb-12">Contact</h2>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 text-center space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a question or an opportunity?
          <br />
          I'd be glad to hear from you:
        </p>
        <a
          href="mailto:diegodre00@gmail.com"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          ✉️ diegodre00@gmail.com
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/DiegoDre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
