import { Link } from "react-router-dom";

function Practice() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <section className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                        Practice
                    </p>

                    <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                        Practice What You Learn
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-400">
                        Solve problems, test your understanding and identify
                        the topics where you need more practice.
                    </p>
                </section>

                {/* Stats */}
                <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Problems Solved
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Keep practicing
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Accuracy
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0%
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Based on your attempts
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Easy
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Completed
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Medium
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Completed
                        </p>
                    </div>

                </section>

                {/* Practice Categories */}
                <section className="mt-12">

                    <h2 className="text-2xl font-bold">
                        Choose What You Want To Practice
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Start with the skill you are currently learning.
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {/* DSA */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">

                            <p className="text-sm font-semibold text-purple-400">
                                DSA
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Data Structures
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Arrays, strings, linked lists, trees,
                                graphs and algorithms.
                            </p>

                            <button
                                className="mt-5 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Start Practice
                            </button>

                        </div>

                        {/* JavaScript */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">

                            <p className="text-sm font-semibold text-purple-400">
                                JAVASCRIPT
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                JavaScript Practice
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Test variables, functions, arrays, objects,
                                DOM and asynchronous JavaScript.
                            </p>

                            <Link
                                to="/learn/javascript"
                                className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Start Practice
                            </Link>

                        </div>

                        {/* HTML & CSS */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">

                            <p className="text-sm font-semibold text-purple-400">
                                FRONTEND
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                HTML & CSS
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Practice semantic HTML, layouts,
                                Flexbox, Grid and responsive design.
                            </p>

                            <Link
                                to="/learn/html-basics"
                                className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Start Practice
                            </Link>

                        </div>

                        {/* React */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500">

                            <p className="text-sm font-semibold text-purple-400">
                                REACT
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                React Practice
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Practice components, props, state, hooks,
                                routing and API integration.
                            </p>

                            <Link
                                to="/learn/react"
                                className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Start Practice
                            </Link>

                        </div>

                    </div>
                </section>

                {/* Difficulty */}
                <section className="mt-12">

                    <h2 className="text-2xl font-bold">
                        Practice By Difficulty
                    </h2>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">

                        {/* Basic */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <p className="text-sm font-semibold text-purple-400">
                                LEVEL 01
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Basic
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Build your fundamentals with simple
                                concept-based questions.
                            </p>

                            <button
                                className="mt-5 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:border-purple-500 hover:text-white"
                            >
                                Practice Basic
                            </button>

                        </div>

                        {/* Easy */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <p className="text-sm font-semibold text-purple-400">
                                LEVEL 02
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Easy
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Apply concepts to beginner-friendly
                                problems.
                            </p>

                            <button
                                className="mt-5 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:border-purple-500 hover:text-white"
                            >
                                Practice Easy
                            </button>

                        </div>

                        {/* Medium */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <p className="text-sm font-semibold text-purple-400">
                                LEVEL 03
                            </p>

                            <h3 className="mt-3 text-xl font-bold">
                                Medium
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Challenge yourself with deeper
                                problem-solving questions.
                            </p>

                            <button
                                className="mt-5 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:border-purple-500 hover:text-white"
                            >
                                Practice Medium
                            </button>

                        </div>

                    </div>
                </section>

                {/* Recommended Practice */}
                <section className="mt-12">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <h2 className="text-2xl font-bold">
                            Recommended For You
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Once you start learning, CAPAVOLVE will
                            recommend practice based on your roadmap
                            and performance.
                        </p>

                        <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-6 text-center">

                            <p className="text-sm text-slate-500">
                                No recommendations yet.
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                                Start a roadmap and complete your first
                                learning topic.
                            </p>

                            <Link
                                to="/roadmaps"
                                className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Explore Roadmaps
                            </Link>

                        </div>

                    </div>
                </section>

                {/* Stuck Section */}
                <section className="mt-12 mb-10">

                    <div className="rounded-2xl border border-purple-900 bg-purple-950/30 p-7">

                        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                            Need Help?
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            I'm Stuck
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                            Can't solve a problem or understand a concept?
                            CAPAVOLVE will help you identify what you are
                            missing and guide you toward the right concept
                            and resource.
                        </p>

                        <button
                            className="mt-5 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500"
                        >
                            Get Help
                        </button>

                    </div>

                </section>

            </div>
        </main>
    );
}

export default Practice;