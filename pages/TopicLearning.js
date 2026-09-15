import { Link, useParams } from "react-router-dom";

const topicData = {
    "html-basics": {
        title: "HTML Basics",
        description: "Learn the fundamentals of HTML and how webpages are structured.",

        topics: [
            "HTML Structure",
            "Headings",
            "Paragraphs",
            "Links",
            "Images",
            "Lists",
            "Tables",
            "Forms",
        ],

        projects: [
            "Personal Profile Page",
            "Resume Website",
            "Simple Portfolio",
        ],

        interview: [
            "What is HTML?",
            "What is semantic HTML?",
            "What is the difference between div and span?",
            "What are HTML forms?",
        ],
    },

    "semantic-html": {
        title: "Semantic HTML",
        description: "Learn how to create meaningful and accessible HTML structures.",

        topics: [
            "header",
            "nav",
            "main",
            "section",
            "article",
            "aside",
            "footer",
            "Accessibility",
        ],

        projects: [
            "Semantic Blog Page",
            "Accessible Portfolio",
        ],

        interview: [
            "What is semantic HTML?",
            "Why are semantic elements important?",
            "What is the difference between section and div?",
        ],
    },

    "css-basics": {
        title: "CSS Basics",
        description: "Learn how CSS is used to style and design webpages.",

        topics: [
            "CSS Syntax",
            "Selectors",
            "Colors",
            "Units",
            "Box Model",
            "Margin",
            "Padding",
            "Borders",
        ],

        projects: [
            "Styled Profile Card",
            "Landing Page",
            "Product Card",
        ],

        interview: [
            "What is CSS?",
            "What is the CSS box model?",
            "Difference between margin and padding?",
            "What are CSS selectors?",
        ],
    },

    "flexbox": {
        title: "Flexbox",
        description: "Learn how to create flexible one-dimensional layouts with CSS.",

        topics: [
            "Flex Container",
            "Flex Direction",
            "Justify Content",
            "Align Items",
            "Flex Wrap",
            "Gap",
            "Flex Grow",
            "Flex Shrink",
        ],

        projects: [
            "Responsive Navbar",
            "Pricing Cards",
            "Responsive Gallery",
        ],

        interview: [
            "What is Flexbox?",
            "Difference between justify-content and align-items?",
            "What is flex-direction?",
        ],
    },

    "grid": {
        title: "CSS Grid",
        description: "Learn how to create powerful two-dimensional layouts using CSS Grid.",

        topics: [
            "Grid Container",
            "Grid Columns",
            "Grid Rows",
            "Gap",
            "Grid Areas",
            "Responsive Grid",
        ],

        projects: [
            "Dashboard Layout",
            "Photo Gallery",
            "Product Grid",
        ],

        interview: [
            "What is CSS Grid?",
            "Difference between Grid and Flexbox?",
            "What are grid-template-columns?",
        ],
    },

    "javascript": {
        title: "JavaScript",
        description:
            "Learn JavaScript from fundamentals to asynchronous programming and APIs.",

        topics: [
            "Variables",
            "Data Types",
            "Operators",
            "Conditions",
            "Loops",
            "Functions",
            "Arrays",
            "Objects",
            "DOM",
            "Events",
            "Fetch API",
            "Promises",
            "Async / Await",
        ],

        projects: [
            "Calculator",
            "To-Do List",
            "Weather App",
            "Quiz App",
        ],

        interview: [
            "What is JavaScript?",
            "Difference between let, var and const?",
            "What is a closure?",
            "What is the DOM?",
            "What is a Promise?",
        ],
    },

    "git-basics": {
        title: "Git Basics",
        description:
            "Learn version control and the basic Git commands used by developers.",

        topics: [
            "Git Installation",
            "Repository",
            "git init",
            "git add",
            "git commit",
            "git status",
            "git log",
            "Branches",
        ],

        projects: [
            "Create Your First Git Repository",
            "Push a Project to GitHub",
        ],

        interview: [
            "What is Git?",
            "What is version control?",
            "What is a Git repository?",
            "What is a commit?",
        ],
    },

    "github": {
        title: "GitHub",
        description:
            "Learn how developers store, share and collaborate on projects using GitHub.",

        topics: [
            "Repositories",
            "Remote Repository",
            "Push",
            "Pull",
            "Clone",
            "Branches",
            "Pull Requests",
        ],

        projects: [
            "Upload Your Portfolio",
            "Collaborative GitHub Project",
        ],

        interview: [
            "What is GitHub?",
            "Difference between Git and GitHub?",
            "What is a pull request?",
            "What is a branch?",
        ],
    },

    react: {
        title: "React",
        description:
            "Learn component-based frontend development using React.",

        topics: [
            "Components",
            "JSX",
            "Props",
            "State",
            "Hooks",
            "useState",
            "useEffect",
            "React Router",
            "API Integration",
        ],

        projects: [
            "Todo App",
            "Movie App",
            "Food Delivery App",
            "Student Dashboard",
        ],

        interview: [
            "What is React?",
            "What are components?",
            "What are props?",
            "What is state?",
            "What is useEffect?",
        ],
    },

    "tailwind-css": {
        title: "Tailwind CSS",
        description:
            "Learn utility-first CSS and build modern responsive interfaces.",

        topics: [
            "Utility Classes",
            "Spacing",
            "Colors",
            "Typography",
            "Flexbox",
            "Grid",
            "Responsive Design",
            "Hover States",
        ],

        projects: [
            "Landing Page",
            "Dashboard UI",
            "Responsive Portfolio",
        ],

        interview: [
            "What is Tailwind CSS?",
            "What is utility-first CSS?",
            "Why use Tailwind CSS?",
        ],
    },

    typescript: {
        title: "TypeScript",
        description:
            "Learn how TypeScript adds static typing to JavaScript.",

        topics: [
            "Basic Types",
            "Arrays",
            "Objects",
            "Functions",
            "Interfaces",
            "Type Aliases",
            "Generics",
            "TypeScript with React",
        ],

        projects: [
            "TypeScript Todo App",
            "Typed React Application",
        ],

        interview: [
            "What is TypeScript?",
            "Difference between JavaScript and TypeScript?",
            "What are interfaces?",
            "What are generics?",
        ],
    },
};

function TopicLearning() {
    const { topicName } = useParams();

    const topic = topicData[topicName];

    if (!topic) {
        return (
            <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl font-bold">
                        Topic not found
                    </h1>

                    <p className="mt-3 text-slate-400">
                        This learning topic has not been added yet.
                    </p>

                    <Link
                        to="/roadmaps/frontend"
                        className="mt-6 inline-block text-purple-400 hover:text-purple-300"
                    >
                        ← Back to Frontend Roadmap
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <div className="mx-auto max-w-5xl">

                {/* Back */}
                <Link
                    to="/roadmaps/frontend"
                    className="text-sm text-purple-400 hover:text-purple-300"
                >
                    ← Back to Frontend Roadmap
                </Link>

                {/* Header */}
                <section className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                        Learn
                    </p>

                    <h1 className="mt-3 text-4xl font-bold md:text-5xl">
                        {topic.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                        {topic.description}
                    </p>
                </section>

                {/* Progress */}
                <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">
                                Topic Progress
                            </p>

                            <h2 className="mt-1 text-2xl font-bold">
                                0% Complete
                            </h2>
                        </div>

                        <p className="text-sm text-slate-500">
                            0 / {topic.topics.length} topics
                        </p>
                    </div>

                    <div className="mt-5 h-3 rounded-full bg-slate-800">
                        <div className="h-full w-0 rounded-full bg-purple-600"></div>
                    </div>
                </section>

                {/* What to learn */}
                <section className="mt-10">
                    <h2 className="text-2xl font-bold">
                        What You'll Learn
                    </h2>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {topic.topics.map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-sm font-bold text-purple-400">
                                    {index + 1}
                                </span>

                                <span className="text-slate-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold">
                        Free Learning Resources
                    </h2>

                    <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-slate-400">
                            Free videos, documentation and learning resources
                            will be added here.
                        </p>
                    </div>
                </section>

                {/* Projects */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold">
                        Projects
                    </h2>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {topic.projects.map((project) => (
                            <div
                                key={project}
                                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                            >
                                <h3 className="font-semibold">
                                    {project}
                                </h3>

                                <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">
                                    View Project
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interview */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold">
                        Interview Questions
                    </h2>

                    <div className="mt-5 space-y-3">
                        {topic.interview.map((question, index) => (
                            <div
                                key={question}
                                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                            >
                                <p className="text-slate-300">
                                    <span className="font-bold text-purple-400">
                                        Q{index + 1}.
                                    </span>{" "}
                                    {question}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Complete */}
                <section className="mt-12 text-center">
                    <button className="rounded-xl bg-purple-600 px-8 py-3 font-semibold hover:bg-purple-500">
                        Mark Topic as Complete
                    </button>
                </section>

            </div>
        </main>
    );
}

export default TopicLearning;