import { Link } from "react-router-dom";

const roadmaps = [
    {
        id: 1,
        title: "Frontend Developer",
        description:
            "Learn how to build modern, responsive and interactive websites.",
        topics: [
            "Internet",
            "HTML",
            "CSS",
            "JavaScript",
            "Git & GitHub",
            "React",
            "Tailwind CSS",
            "Testing",
            "Web Security",
        ],
        level: "Beginner → Advanced",
    },
    {
        id: 2,
        title: "Backend Developer",
        description:
            "Learn servers, APIs, databases, authentication and backend development.",
        topics: [
            "Internet",
            "Node.js",
            "Express",
            "APIs",
            "Databases",
            "Authentication",
            "Security",
        ],
        level: "Beginner → Advanced",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        description:
            "Learn frontend and backend skills needed to build complete applications.",
        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "Database",
            "Authentication",
        ],
        level: "Beginner → Advanced",
    },
    {
        id: 4,
        title: "Data Analyst",
        description:
            "Learn data analysis, SQL, visualization and business intelligence.",
        topics: [
            "Excel",
            "SQL",
            "Python",
            "Pandas",
            "Statistics",
            "Power BI",
            "Data Visualization",
        ],
        level: "Beginner → Advanced",
    },
    {
        id: 5,
        title: "AI & Machine Learning",
        description:
            "Build the foundation required to learn machine learning and modern AI.",
        topics: [
            "Python",
            "NumPy",
            "Pandas",
            "Statistics",
            "Machine Learning",
            "Deep Learning",
            "Generative AI",
        ],
        level: "Beginner → Advanced",
    },
    {
        id: 6,
        title: "DevOps",
        description:
            "Learn cloud, Linux, containers, CI/CD and modern DevOps practices.",
        topics: [
            "Linux",
            "Git",
            "Cloud",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Monitoring",
        ],
        level: "Beginner → Advanced",
    },
];

function Roadmaps() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Hero */}
                <section className="mb-16 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
                        CAPAVOLVE Roadmaps
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Choose Your
                        <span className="text-purple-500">
                            {" "}Learning Path
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Follow a structured roadmap, learn the right skills,
                        practice what you learn and build real projects.
                    </p>
                </section>

                {/* Roadmaps */}
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {roadmaps.map((roadmap) => (
                        <div
                            key={roadmap.id}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500"
                        >
                            <div className="mb-5 flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                                    {roadmap.id}
                                </div>

                                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                                    Roadmap
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold">
                                {roadmap.title}
                            </h2>

                            <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                                {roadmap.description}
                            </p>

                            <div className="mt-5">
                                <p className="mb-3 text-sm font-semibold text-slate-200">
                                    What you'll learn
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {roadmap.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 border-t border-slate-800 pt-5">
                                <p className="mb-4 text-sm text-slate-500">
                                    Level:{" "}
                                    <span className="text-slate-300">
                                        {roadmap.level}
                                    </span>
                                </p>

                                <Link
                                    to={
                                        roadmap.title === "Frontend Developer"
                                            ? "/roadmaps/frontend"
                                            : "#"
                                    }
                                    className="block rounded-xl bg-purple-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-purple-500"
                                >
                                    View Roadmap
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Bottom section */}
                <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center md:p-12">
                    <h2 className="text-3xl font-bold">
                        Don't know what to learn?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-400">
                        CAPAVOLVE will help you choose a roadmap based on your
                        goal, current skills and career direction.
                    </p>

                    <Link
                        to="/"
                        className="mt-7 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        Explore CAPAVOLVE
                    </Link>
                </section>

            </div>
        </main>
    );
}

export default Roadmaps;