import { Link } from "react-router-dom";

function Skills() {
    const skills = [
        {
            title: "Programming",
            description:
                "Learn programming fundamentals, languages and problem solving.",
            path: "/skills/programming",
        },
        {
            title: "Web Development",
            description:
                "Build modern websites and web applications.",
            path: "/skills/web-development",
        },
        {
            title: "DSA",
            description:
                "Master data structures and algorithms for coding interviews.",
            path: "/skills/dsa",
        },
        {
            title: "AI & Machine Learning",
            description:
                "Learn artificial intelligence, machine learning and GenAI.",
            path: "/skills/ai-ml",
        },
        {
            title: "Data & Analytics",
            description:
                "Learn SQL, Excel, Python, visualization and data analysis.",
            path: "/skills/data-analytics",
        },
        {
            title: "Cloud & DevOps",
            description:
                "Learn cloud computing, Linux, Docker, Kubernetes and DevOps.",
            path: "/skills/cloud-devops",
        },
        {
            title: "Cybersecurity",
            description:
                "Learn networking, web security and cybersecurity fundamentals.",
            path: "/skills/cybersecurity",
        },
        {
            title: "Communication",
            description:
                "Improve English, speaking, presentation and communication skills.",
            path: "/skills/communication",
        },
        {
            title: "Career",
            description:
                "Learn resume building, LinkedIn, networking and job searching.",
            path: "/skills/career",
        },
        {
            title: "Startup",
            description:
                "Learn idea validation, MVP building, marketing and business basics.",
            path: "/skills/startup",
        },
        {
            title: "UI / UX",
            description:
                "Learn UI design, UX principles, Figma and user experience.",
            path: "/skills/ui-ux",
        },
        {
            title: "Professional Skills",
            description:
                "Develop leadership, teamwork, productivity and workplace skills.",
            path: "/skills/professional-skills",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}
            <section className="px-6 pb-12 pt-16">
                <div className="mx-auto max-w-6xl">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
                        CAPAVOLVE
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Explore Skills
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                        Discover the skills that can help you build your
                        career, prepare for internships and create real-world
                        projects.
                    </p>

                    {/* Search */}
                    <div className="mt-8 max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search for a skill..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
                        />
                    </div>

                </div>
            </section>


            {/* Skills */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">
                            Skill Categories
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Choose a category and start learning step by step.
                        </p>
                    </div>


                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {skills.map((skill) => (
                            <Link
                                key={skill.path}
                                to={skill.path}
                        className="group"
                            >
                                <SkillCategory
                                    title={skill.title}
                                    description={skill.description}
                                />
                            </Link>
                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}


/* Skill Card */

function SkillCategory({ title, description }) {
    return (
        <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-500 group-hover:bg-slate-800">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-lg font-bold text-purple-400">
                {title.charAt(0)}
            </div>

            <h3 className="text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
                {description}
            </p>

            <div className="mt-6 flex items-center text-sm font-semibold text-purple-400">
                Explore Skill
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </div>

        </div>
    );
}

export default Skills;