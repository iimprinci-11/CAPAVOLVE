import { Link } from "react-router-dom";

const stages = [
    {
        number: "01",
        title: "Internet & Web Fundamentals",
        description:
            "Understand how the web works before starting frontend development.",
        topics: [
            "How the Internet Works",
            "HTTP & HTTPS",
            "DNS",
            "Domain Names",
            "Web Hosting",
            "Browsers",
        ],
    },
    {
        number: "02",
        title: "HTML",
        description:
            "Learn how to structure websites using semantic HTML.",
        topics: [
            "HTML Basics",
            "Semantic HTML",
            "Forms",
            "Form Validation",
            "Accessibility",
            "SEO Basics",
        ],
    },
    {
        number: "03",
        title: "CSS",
        description:
            "Learn how to style websites and create responsive layouts.",
        topics: [
            "CSS Basics",
            "Selectors",
            "Box Model",
            "Flexbox",
            "Grid",
            "Responsive Design",
            "Media Queries",
        ],
    },
    {
        number: "04",
        title: "JavaScript",
        description:
            "Learn programming fundamentals and make websites interactive.",
        topics: [
            "Variables",
            "Data Types",
            "Functions",
            "Arrays",
            "Objects",
            "DOM",
            "Events",
            "Fetch API",
            "Async JavaScript",
        ],
    },
    {
        number: "05",
        title: "Git & GitHub",
        description:
            "Learn version control and how developers collaborate on projects.",
        topics: [
            "Git Basics",
            "Repositories",
            "Commit",
            "Branch",
            "Merge",
            "GitHub",
            "Pull Requests",
        ],
    },
    {
        number: "06",
        title: "Package Managers & Tools",
        description:
            "Understand the tools used to build and manage modern frontend projects.",
        topics: [
            "npm",
            "package.json",
            "Dependencies",
            "Node.js Basics",
            "Build Tools",
            "ESLint",
            "Prettier",
        ],
    },
    {
        number: "07",
        title: "Frontend Framework",
        description:
            "Learn a modern frontend framework and build component-based applications.",
        topics: [
            "React",
            "Components",
            "Props",
            "State",
            "Hooks",
            "React Router",
            "API Integration",
        ],
    },
    {
        number: "08",
        title: "CSS Frameworks",
        description:
            "Learn tools that help you build modern interfaces faster.",
        topics: [
            "Tailwind CSS",
            "Responsive UI",
            "Reusable Components",
            "Design Systems",
        ],
    },
    {
        number: "09",
        title: "Testing",
        description:
            "Learn how to check that your frontend application works correctly.",
        topics: [
            "Unit Testing",
            "Integration Testing",
            "End-to-End Testing",
            "Vitest",
            "Jest",
            "Playwright",
        ],
    },
    {
        number: "10",
        title: "Web Security",
        description:
            "Understand common frontend security concepts.",
        topics: [
            "HTTPS",
            "CORS",
            "CSP",
            "Authentication",
            "Authorization",
            "OWASP Basics",
        ],
    },
    {
        number: "11",
        title: "TypeScript",
        description:
            "Add static typing to JavaScript applications.",
        topics: [
            "Types",
            "Interfaces",
            "Functions",
            "Objects",
            "Generics",
            "React with TypeScript",
        ],
    },
    {
        number: "12",
        title: "Advanced Frontend",
        description:
            "Move toward production-level frontend development.",
        topics: [
            "Performance",
            "Accessibility",
            "SSR",
            "Next.js",
            "Progressive Web Apps",
            "Browser APIs",
            "Web Performance",
        ],
    },
];

/*
    Topics that already have learning pages.

    Topics not yet connected are displayed as disabled
    until their learning page is created.
*/
const topicLinks = {
    // Internet & Web Fundamentals
    "How the Internet Works": "internet",
    "HTTP & HTTPS": "http-https",
    DNS: "dns",
    "Domain Names": "domain-names",
    "Web Hosting": "web-hosting",
    Browsers: "browsers",

    // HTML
    "HTML Basics": "html-basics",
    "Semantic HTML": "semantic-html",

    // CSS
    "CSS Basics": "css-basics",
    Flexbox: "flexbox",
    Grid: "grid",

    // JavaScript
    Variables: "javascript",
    "Data Types": "javascript",
    Functions: "javascript",
    Arrays: "javascript",
    Objects: "javascript",
    DOM: "javascript",
    Events: "javascript",
    "Fetch API": "javascript",
    "Async JavaScript": "javascript",

    // Git
    "Git Basics": "git-basics",
    GitHub: "github",

    // React
    React: "react",

    // Tailwind
    "Tailwind CSS": "tailwind-css",

    // TypeScript
    Types: "typescript",
    Interfaces: "typescript",
    Generics: "typescript",
    "React with TypeScript": "typescript",
};

function FrontendRoadmap() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <section className="mb-14">
                    <Link
                        to="/roadmaps"
                        className="text-sm text-purple-400 transition hover:text-purple-300"
                    >
                        ← Back to Roadmaps
                    </Link>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-purple-400">
                        Frontend Developer Roadmap
                    </p>

                    <h1 className="mt-3 text-4xl font-bold md:text-5xl">
                        Become a Frontend Developer
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                        Follow the roadmap from web fundamentals to advanced
                        frontend development. Learn each concept, practice it,
                        build projects and prepare for interviews.
                    </p>
                </section>

                {/* Progress */}
                <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">
                                Your Progress
                            </p>

                            <h2 className="mt-1 text-2xl font-bold">
                                0% Complete
                            </h2>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-slate-500">
                                0 / {stages.length} stages
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-0 rounded-full bg-purple-600"></div>
                    </div>
                </section>

                {/* Roadmap Stages */}
                <section className="space-y-6">
                    {stages.map((stage) => (
                        <div
                            key={stage.number}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500 md:p-8"
                        >
                            <div className="flex flex-col gap-5 md:flex-row">

                                {/* Stage Number */}
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-600/10 text-lg font-bold text-purple-400">
                                    {stage.number}
                                </div>

                                {/* Stage Content */}
                                <div className="flex-1">

                                    {/* Stage Title */}
                                    <h2 className="text-2xl font-bold">
                                        {stage.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-2 text-slate-400">
                                        {stage.description}
                                    </p>

                                    {/* Topics */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {stage.topics.map((topic) => {
                                            const link = topicLinks[topic];

                                            /*
                                                If the topic has a learning page,
                                                make it clickable.
                                            */
                                            if (link) {
                                                return (
                                                    <Link
                                                        key={topic}
                                                        to={`/learn/${link}`}
                                                        className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:bg-purple-600 hover:text-white"
                                                    >
                                                        {topic}
                                                    </Link>
                                                );
                                            }

                                            /*
                                                Topics without a learning page
                                                are temporarily disabled.
                                            */
                                            return (
                                                <span
                                                    key={topic}
                                                    className="cursor-not-allowed rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-500"
                                                    title="Learning page coming soon"
                                                >
                                                    {topic}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex flex-wrap gap-3">

                                        <button
                                            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold transition hover:bg-purple-500"
                                        >
                                            Learn
                                        </button>

                                        <button
                                            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                                        >
                                            Practice
                                        </button>

                                        <button
                                            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                                        >
                                            Projects
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Bottom CTA */}
                <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

                    <h2 className="text-3xl font-bold">
                        Ready to start?
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-slate-400">
                        Start from the first stage and move forward step by
                        step. You don't need to learn everything at once.
                    </p>

                    <button className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500">
                        Start Roadmap
                    </button>

                </section>

            </div>
        </main>
    );
}

export default FrontendRoadmap;