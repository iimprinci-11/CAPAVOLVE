import { Link } from "react-router-dom";

function Resources() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <section className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                        Resources
                    </p>

                    <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                        Learn From The Best Free Resources
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-400">
                        Find free videos, notes, documentation, practice
                        resources and learning material for your skills.
                    </p>
                </section>

                {/* Search */}
                <section className="mb-10">
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
                    />
                </section>

                {/* Categories */}
                <section>
                    <h2 className="text-2xl font-bold">
                        Explore Resources
                    </h2>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Web Development */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">
                            <p className="text-sm font-semibold text-purple-400">
                                WEB DEVELOPMENT
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Frontend Development
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                HTML, CSS, JavaScript, React and modern
                                frontend development resources.
                            </p>

                            <Link
                                to="/skills/web-development"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Explore →
                            </Link>
                        </div>

                        {/* DSA */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">
                            <p className="text-sm font-semibold text-purple-400">
                                DSA
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Data Structures & Algorithms
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Learn concepts, watch tutorials and practice
                                coding problems.
                            </p>

                            <Link
                                to="/skills/dsa"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Explore →
                            </Link>
                        </div>

                        {/* Programming */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">
                            <p className="text-sm font-semibold text-purple-400">
                                PROGRAMMING
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Programming Languages
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Free resources for C, C++, Java, Python,
                                JavaScript and more.
                            </p>

                            <Link
                                to="/skills/programming"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Explore →
                            </Link>
                        </div>

                        {/* AI */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">
                            <p className="text-sm font-semibold text-purple-400">
                                AI & DATA
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                AI & Machine Learning
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Explore Python, ML, data science, GenAI and
                                useful AI learning resources.
                            </p>

                            <Link
                                to="/skills/ai"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Explore →
                            </Link>
                        </div>

                    </div>
                </section>

                {/* Resource Types */}
                <section className="mt-12">

                    <h2 className="text-2xl font-bold">
                        Resource Types
                    </h2>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <h3 className="text-lg font-bold">
                                Video Courses
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Curated free YouTube playlists and lectures
                                from useful educators.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <h3 className="text-lg font-bold">
                                Notes & Documentation
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Short notes, documentation and explanations
                                to revise concepts quickly.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <h3 className="text-lg font-bold">
                                Practice Resources
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Coding problems, quizzes and exercises to
                                test your understanding.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Popular Resources */}
                <section className="mt-12">

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Popular Resources
                            </h2>

                            <p className="mt-1 text-sm text-slate-400">
                                Resources students commonly need.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {/* JavaScript */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <span className="text-sm font-semibold text-purple-400">
                                JavaScript
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                JavaScript Fundamentals
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Variables, functions, arrays, objects, DOM,
                                asynchronous JavaScript and APIs.
                            </p>

                            <Link
                                to="/learn/javascript"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Start Learning →
                            </Link>
                        </div>

                        {/* React */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <span className="text-sm font-semibold text-purple-400">
                                React
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                React Development
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Components, props, state, hooks, routing and
                                API integration.
                            </p>

                            <Link
                                to="/learn/react"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Start Learning →
                            </Link>
                        </div>

                        {/* Git */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                            <span className="text-sm font-semibold text-purple-400">
                                Git & GitHub
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                Git & GitHub Basics
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Learn repositories, commits, branches,
                                GitHub and collaborative development.
                            </p>

                            <Link
                                to="/learn/git-basics"
                                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
                            >
                                Start Learning →
                            </Link>
                        </div>

                    </div>
                </section>

                {/* Important Note */}
                <section className="mt-12 mb-10">
                    <div className="rounded-2xl border border-purple-900 bg-purple-950/30 p-6">

                        <h2 className="text-xl font-bold">
                            Learn Smarter, Not Randomly
                        </h2>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                            CAPAVOLVE will organize resources according to
                            your roadmap so you don't have to spend hours
                            searching for what to learn next.
                        </p>

                    </div>
                </section>

            </div>
        </main>
    );
}

export default Resources;