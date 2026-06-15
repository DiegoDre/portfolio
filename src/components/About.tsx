const buttonClass =
  'inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-80 transition';

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-20 max-w-4xl"
    >
      <img
        src="/static/images/CV_Foto.png"
        alt="Diego Dreier"
        className="w-48 h-50 rounded-full object-cover shadow-md hover:scale-110"
      />
      <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl font-bold">Diego Dreier</h1>
        <p className="text-blue-500 dark:text-blue-400 font-medium mt-1">
          Media Informatics · Software Development
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          I'm a final-semester Media Informatics student at BHT Berlin with a background in software
          development. I like building things end to end, from a React or React Native frontend down
          to the Node.js backend, and seeing them actually run in front of real users. During my
          internship at donista.org I helped take a web app all the way to a published iOS and
          Android app, which taught me as much about shipping and quality as about writing code.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          More recently my interest has shifted toward AI, in particular the practical side of large
          language models. Not bolting an LLM onto everything, but working out where it genuinely
          adds value and where deterministic, predictable logic should stay in charge. I'm exploring
          this in depth in my bachelor's thesis, where I automate a workflow as deterministically as
          possible and bring in an LLM only where rule-based logic runs out, with control and
          traceability as the goal.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Mostly, I like learning by doing. When my team built a game in Unity and C# without any of
          us having touched either before, we just figured it out as we went, and the result became
          a reference project for the years after us. If something's unfamiliar, I'd rather dig into
          it on a real problem than study it from a distance.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          <a href="/static/cv/diego_dreier_cv_public.pdf" download className={buttonClass}>
            Download CV
          </a>
          <a href="#projects" className={buttonClass}>
            View Projects
          </a>
          <a href="#contact" className={buttonClass}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
