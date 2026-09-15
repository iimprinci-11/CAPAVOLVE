import { useParams, Link } from "react-router-dom";

function SkillDetails() {
    const { skillName } = useParams();

    const skills = {
        "web-development": {
            title: "Web Development",
            description:
                "Learn how to build modern websites and web applications from frontend fundamentals to full-stack development.",
            level: "Beginner → Advanced",
            topics: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Databases",
            ],
        },

        "dsa": {
            title: "Data Structures & Algorithms",
            description:
                "Build strong problem-solving skills and prepare for coding interviews with Data Structures and Algorithms.",
            level: "Beginner → Advanced",
            topics: [
                "Arrays",
                "Strings",
                "Linked Lists",
                "Stacks & Queues",
                "Trees",
                "Graphs",
                "Dynamic Programming",
            ],
        },

        "programming": {
            title: "Programming",
            description:
                "Learn programming fundamentals, logic, problem solving and object-oriented programming.",
            level: "Beginner → Advanced",
            topics: [
                "Programming Basics",
                "Variables & Data Types",
                "Functions",
                "Loops",
                "Arrays",
                "OOP",
            ],
        },

        "ai-ml": {
            title: "AI & Machine Learning",
            description:
                "Learn the fundamentals of Artificial Intelligence, Machine Learning and modern AI technologies.",
            level: "Beginner → Advanced",
            topics: [
                "Python",
                "NumPy",
                "Pandas",
                "Statistics",
                "Machine Learning",
                "Deep Learning",
                "Generative AI",
            ],
        },

        "data-analytics": {
            title: "Data & Analytics",
            description:
                "Learn how to collect, clean, analyze and visualize data to make better decisions.",
            level: "Beginner → Advanced",
            topics: [
                "Excel",
                "SQL",
                "Python",
                "Pandas",
                "Data Visualization",
                "Power BI",
            ],
        },

        "cloud-devops": {
            title: "Cloud & DevOps",
            description:
                "Learn cloud computing, deployment, Linux, containers and DevOps practices.",
            level: "Beginner → Advanced",
            topics: [
                "Cloud Fundamentals",
                "AWS",
                "Linux",
                "Docker",
                "Kubernetes",
                "CI/CD",
            ],
        },

        "cybersecurity": {
            title: "Cybersecurity",
            description:
                "Learn the fundamentals of protecting systems, networks and applications from security threats.",
            level: "Beginner → Advanced",
            topics: [
                "Networking",
                "Linux",
                "Web Security",
                "OWASP",
                "Cryptography",
                "Ethical Hacking",
            ],
        },

        "communication": {
            title: "Communication",
            description:
                "Improve your speaking, writing, presentation and professional communication skills.",
            level: "Beginner → Advanced",
            topics: [
                "Spoken English",
                "Grammar",
                "Vocabulary",
                "Public Speaking",
                "Presentation",
                "Professional Communication",
            ],
        },

        "career": {
            title: "Career Development",
            description:
                "Build the skills needed to find internships, jobs and professional opportunities.",
            level: "Beginner → Advanced",
            topics: [
                "Resume",
                "ATS",
                "LinkedIn",
                "Networking",
                "Internships",
                "Job Search",
            ],
        },

        "startup": {
            title: "Startup",
            description:
                "Learn how to turn ideas into products and understand the fundamentals of building a startup.",
            level: "Beginner → Advanced",
            topics: [
                "Problem Finding",
                "Idea Validation",
                "Market Research",
                "MVP",
                "Marketing",
                "Business Model",
            ],
        },

        "ui-ux": {
            title: "UI / UX",
            description:
                "Learn how to design useful, accessible and beautiful digital experiences.",
            level: "Beginner → Advanced",
            topics: [
                "UI Design",
                "UX Fundamentals",
                "Figma",
                "Wireframing",
                "Prototyping",
                "Design Systems",
            ],
        },

        "professional-skills": {
            title: "Professional Skills",
            description:
                "Develop the skills that help you work effectively in teams and professional environments.",
            level: "Beginner → Advanced",
            topics: [
                "Teamwork",
                "Leadership",
                "Time Management",
                "Critical Thinking",
                "Problem Solving",
                "Workplace Skills",
            ],
        },
    };

    const skill = skills[skillName];

    if (!skill) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Skill Not Found
                    </h1>

                    <p className="mt-4 text-slate-400">
                        The skill you are looking for does not exist.
                    </p>

                    <Link
                        to="/skills"
                        className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
                    >
                        Back to Skills
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Hero */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-6xl">

                    <Link
                        to="/skills"
                        className="text-sm text-purple-400 hover:text-purple-300"
                    >
                        ← Back to Skills
                    </Link>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-purple-400">
                        Skill Development
                    </p>

                    <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                        {skill.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                        {skill.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                        <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                            Beginner Friendly
                        </span>

                        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                            Free Resources
                        </span>

                        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                            Projects
                        </span>

                    </div>

                </div>
            </section>


            {/* Main */}
            <section className="px-6 pb-20">

                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

                    {/* Main Content */}
                    <div className="space-y-8 lg:col-span-2">

                        {/* About */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <h2 className="text-2xl font-bold">
                                About This Skill
                            </h2>

                            <p className="mt-4 leading-7 text-slate-400">
                                Follow a structured learning path designed
                                for students. Learn concepts, practice what
                                you learn and build real projects along the way.
                            </p>

                        </div>


                        {/* Topics */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <h2 className="text-2xl font-bold">
                                What You'll Learn
                            </h2>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                {skill.topics.map((topic, index) => (
                                    <div
                                        key={topic}
                                        className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                                    >
                                        <p className="text-sm text-purple-400">
                                            0{index + 1}
                                        </p>

                                        <h3 className="mt-2 font-semibold">
                                            {topic}
                                        </h3>
                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Roadmap */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <h2 className="text-2xl font-bold">
                                Learning Roadmap
                            </h2>

                            <div className="mt-6 space-y-4">

                                {skill.topics.map((topic, index) => (
                                    <div
                                        key={topic}
                                        className="flex gap-4 rounded-xl border border-slate-800 p-5"
                                    >

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-sm font-bold text-purple-400">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {topic}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-400">
                                                Learn the fundamentals and
                                                practice this topic.
                                            </p>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Resources */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <h2 className="text-2xl font-bold">
                                Free Resources
                            </h2>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                <div className="rounded-xl bg-slate-800 p-5">
                                    <p className="text-sm text-purple-400">
                                        VIDEO
                                    </p>

                                    <h3 className="mt-2 font-semibold">
                                        Learn through Videos
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-400">
                                        Curated free video resources for
                                        learning this skill.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-800 p-5">
                                    <p className="text-sm text-purple-400">
                                        NOTES
                                    </p>

                                    <h3 className="mt-2 font-semibold">
                                        Quick Revision Notes
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-400">
                                        Short notes to help you revise
                                        important concepts.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Sidebar */}
                    <div className="lg:sticky lg:top-8 lg:self-start">

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <h2 className="text-xl font-bold">
                                Start Learning
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                Follow the roadmap, practice regularly and
                                build projects to improve your skills.
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500">
                                Start Learning
                            </button>


                            <div className="mt-6 space-y-4 border-t border-slate-800 pt-5">

                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">
                                        Topics
                                    </span>

                                    <span className="font-semibold">
                                        {skill.topics.length}
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">
                                        Projects
                                    </span>

                                    <span className="font-semibold">
                                        10+
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">
                                        Level
                                    </span>

                                    <span className="text-right font-semibold">
                                        {skill.level}
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default SkillDetails;