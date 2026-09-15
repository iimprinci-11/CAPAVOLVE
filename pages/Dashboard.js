import { Link } from "react-router-dom";
import Button from "../components/Buttons";

function Dashboard() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <section className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                        Welcome back!
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Continue learning and build your skills step by step.
                    </p>
                </section>

                {/* Stats */}
                <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Overall Progress */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Overall Progress
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0%
                        </h2>

                        <div className="mt-4 h-2 rounded-full bg-slate-800">
                            <div className="h-full w-0 rounded-full bg-purple-600"></div>
                        </div>
                    </div>

                    {/* Problems Solved */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Problems Solved
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Start practicing today
                        </p>
                    </div>

                    {/* Skills Learning */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Skills Learning
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Add your first skill
                        </p>
                    </div>

                    {/* Streak */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Current Streak
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            0 days
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Start your learning streak
                        </p>
                    </div>

                </section>

                {/* Continue Learning */}
                <section className="mt-10">

                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Continue Learning
                            </h2>

                            <p className="mt-1 text-sm text-slate-400">
                                Pick up where you left off.
                            </p>
                        </div>

                        <Link
                            to="/roadmaps"
                            className="text-sm font-semibold text-purple-400 hover:text-purple-300"
                        >
                            View Roadmaps →
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                            <div>
                                <p className="text-sm text-purple-400">
                                    Frontend Development
                                </p>

                                <h3 className="mt-2 text-xl font-bold">
                                    Frontend Developer Roadmap
                                </h3>

                                <p className="mt-2 text-sm text-slate-400">
                                    Start learning HTML, CSS, JavaScript,
                                    React and modern frontend development.
                                </p>
                            </div>

                            <Link to="/roadmaps/frontend">
                                <Button>
                                    Continue
                                </Button>
                            </Link>

                        </div>

                        {/* Progress */}
                        <div className="mt-6">

                            <div className="mb-2 flex justify-between text-sm">
                                <span className="text-slate-400">
                                    Progress
                                </span>

                                <span className="text-slate-300">
                                    0%
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-slate-800">
                                <div className="h-full w-0 rounded-full bg-purple-600"></div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Today's Learning Plan */}
                <section className="mt-10">

                    <h2 className="text-2xl font-bold">
                        Today's Learning Plan
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        A simple plan to keep your learning consistent.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">

                        {/* Step 01 */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <span className="text-sm font-semibold text-purple-400">
                                Step 01
                            </span>

                            <h3 className="mt-3 text-lg font-bold">
                                Learn a Concept
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Study one topic from your current roadmap.
                            </p>

                            <div className="mt-5">
                                <Link to="/roadmaps/frontend">
                                    <Button>
                                        Start Learning
                                    </Button>
                                </Link>
                            </div>

                        </div>

                        {/* Step 02 */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <span className="text-sm font-semibold text-purple-400">
                                Step 02
                            </span>

                            <h3 className="mt-3 text-lg font-bold">
                                Practice
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Solve problems related to what you learned.
                            </p>

                            <div className="mt-5">
                                <Link
                                    to="/practice"
                                    className="text-sm font-semibold text-purple-400 hover:text-purple-300"
                                >
                                    Practice →
                                </Link>
                            </div>

                        </div>

                        {/* Step 03 */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                            <span className="text-sm font-semibold text-purple-400">
                                Step 03
                            </span>

                            <h3 className="mt-3 text-lg font-bold">
                                Build
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Apply your knowledge by building a project.
                            </p>

                            <div className="mt-5">
                                <Link
                                    to="/projects"
                                    className="text-sm font-semibold text-purple-400 hover:text-purple-300"
                                >
                                    View Projects →
                                </Link>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Skills Progress */}
                <section className="mt-10">

                    <h2 className="text-2xl font-bold">
                        Your Skills
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Track the skills you are currently learning.
                    </p>

                    <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="font-bold">
                                    Frontend Development
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    HTML • CSS • JavaScript • React
                                </p>
                            </div>

                            <span className="text-sm font-semibold text-purple-400">
                                0%
                            </span>

                        </div>

                        <div className="mt-5 h-2 rounded-full bg-slate-800">
                            <div className="h-full w-0 rounded-full bg-purple-600"></div>
                        </div>

                    </div>
                </section>

                {/* Weak Areas */}
                <section className="mt-10">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <h2 className="text-2xl font-bold">
                            Areas to Improve
                        </h2>

                        <p className="mt-2 text-slate-400">
                            As you practice, CAPAVOLVE will identify topics
                            where you need more practice.
                        </p>

                        <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-5 text-center">

                            <p className="text-sm text-slate-500">
                                No weak areas yet.
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                                Start learning and practicing to see your
                                performance here.
                            </p>

                        </div>

                    </div>
                </section>

                {/* Quick Actions */}
                <section className="mt-10 mb-10">

                    <h2 className="text-2xl font-bold">
                        Quick Actions
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Explore Skills */}
                        <Link
                            to="/skills"
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-purple-500"
                        >
                            <h3 className="font-bold">
                                Explore Skills
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Find something new to learn.
                            </p>
                        </Link>

                        {/* Roadmaps */}
                        <Link
                            to="/roadmaps"
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-purple-500"
                        >
                            <h3 className="font-bold">
                                View Roadmaps
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Follow structured learning paths.
                            </p>
                        </Link>

                        {/* Practice */}
                        <Link
                            to="/practice"
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-purple-500"
                        >
                            <h3 className="font-bold">
                                Practice Problems
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Test what you have learned.
                            </p>
                        </Link>

                        {/* Projects */}
                        <Link
                            to="/projects"
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-purple-500"
                        >
                            <h3 className="font-bold">
                                Build Projects
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Turn knowledge into real projects.
                            </p>
                        </Link>

                    </div>
                </section>

            </div>
        </main>
    );
}

export default Dashboard;