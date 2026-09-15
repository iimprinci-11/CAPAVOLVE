function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <main>

        <section id="home">

          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-32">

            <p className="text-sm font-semibold tracking-widest text-purple-400 sm:text-base">
              STUDENT SKILL DEVELOPMENT PLATFORM
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

              Your Degree Is A Beginning.

              <span className="mt-3 block text-purple-500">
                Your Skills Are Your Future.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">

              Learn the right skills, practice what you learn,
              build real projects and become ready for internships
              and jobs.

            </p>

            {/* Hero Buttons */}

            <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">

              <button className="rounded-lg bg-purple-600 px-8 py-3.5 font-semibold transition hover:bg-purple-700">
                Start Learning
              </button>

              <button className="rounded-lg border border-slate-700 px-8 py-3.5 font-semibold transition hover:border-purple-500">
                Explore Skills
              </button>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="px-5 sm:px-8">

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

            <Stat number="50+" title="Skills" />

            <Stat number="100+" title="Roadmaps" />

            <Stat number="500+" title="Practice Problems" />

            <Stat number="100%" title="Student Focused" />

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="px-5 py-24 sm:px-8 lg:py-32"
        >

          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}

            <div className="mx-auto mb-14 max-w-2xl text-center">

              <p className="text-sm font-semibold tracking-widest text-purple-400">
                LEARN
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Explore Skills
              </h2>

              <p className="mt-4 text-slate-400">
                Choose a skill and start your learning journey.
              </p>

            </div>


            {/* Skill Cards */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <SkillCard
                title="Web Development"
                description="Learn HTML, CSS, JavaScript, React and modern web development."
              />

              <SkillCard
                title="DSA"
                description="Master data structures and algorithms for coding interviews."
              />

              <SkillCard
                title="Programming"
                description="Learn programming fundamentals and problem solving."
              />

              <SkillCard
                title="AI & Machine Learning"
                description="Explore Python, data science, machine learning and AI."
              />

              <SkillCard
                title="Communication"
                description="Improve English, communication, presentation and confidence."
              />

              <SkillCard
                title="Career"
                description="Prepare your resume, LinkedIn, interviews and internships."
              />

            </div>

          </div>

        </section>


        {/* ================= WHY CAPAVOLVE ================= */}

        <section className="bg-slate-900 px-5 py-24 sm:px-8 lg:py-32">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-14 max-w-2xl text-center">

              <p className="text-sm font-semibold tracking-widest text-purple-400">
                WHY CAPAVOLVE?
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Learn More Than Just Theory
              </h2>

              <p className="mt-4 text-slate-400">
                Learn, practice and build skills that actually help
                you move forward.
              </p>

            </div>


            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <Feature
                title="Learn"
                description="Understand concepts through simple explanations and resources."
              />

              <Feature
                title="Practice"
                description="Solve problems and test your understanding."
              />

              <Feature
                title="Build"
                description="Create real projects using the skills you learn."
              />

              <Feature
                title="Grow"
                description="Track your progress and become career ready."
              />

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="px-5 sm:px-8">

          <div className="mx-auto max-w-4xl py-24 text-center lg:py-32">

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Don't Know What To Learn?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-400 sm:text-lg">
              Tell us your goal and we'll help you find the right
              learning path.
            </p>

            <button className="mt-9 w-full rounded-lg bg-purple-600 px-8 py-3.5 font-semibold transition hover:bg-purple-700 sm:w-auto">
              Find My Roadmap
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-5 py-10 text-center sm:px-8">

          <h2 className="text-xl font-bold">
            CAPAVOLVE
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Learn. Practice. Build. Grow.
          </p>

        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ number, title }) {

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-6 text-center sm:px-6 sm:py-8">

      <h3 className="text-2xl font-bold sm:text-3xl">
        {number}
      </h3>

      <p className="mt-2 text-sm text-slate-400 sm:text-base">
        {title}
      </p>

    </div>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ title, description }) {

  return (
    <div className="group min-h-52 rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      <button className="mt-6 text-purple-400 transition group-hover:text-purple-300">
        Explore →
      </button>

    </div>
  );
}


/* =========================================================
   FEATURE
========================================================= */

function Feature({ title, description }) {

  return (
    <div className="rounded-2xl border border-slate-800 p-7 text-center">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}


export default Home;