import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold"
                        >
                            CAPAVOLVE
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                            Learn the right skills, practice what you learn,
                            build real projects and grow your career.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-semibold">
                            Platform
                        </h3>

                        <div className="mt-4 space-y-3">
                            <Link
                                to="/skills"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Skills
                            </Link>

                            <Link
                                to="/roadmaps"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Roadmaps
                            </Link>

                            <Link
                                to="/resources"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Resources
                            </Link>

                            <Link
                                to="/practice"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Practice
                            </Link>
                        </div>
                    </div>

                    {/* Learning */}
                    <div>
                        <h3 className="font-semibold">
                            Learning
                        </h3>

                        <div className="mt-4 space-y-3">
                            <Link
                                to="/roadmaps/frontend"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Frontend Development
                            </Link>

                            <Link
                                to="/learn/javascript"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                JavaScript
                            </Link>

                            <Link
                                to="/learn/react"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                React
                            </Link>

                            <Link
                                to="/learn/git-basics"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Git & GitHub
                            </Link>
                        </div>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="font-semibold">
                            Account
                        </h3>

                        <div className="mt-4 space-y-3">
                            <Link
                                to="/login"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Login
                            </Link>

                            <Link
                                to="/dashboard"
                                className="block text-sm text-slate-400 hover:text-white"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 CAPAVOLVE. All rights reserved.
                    </p>

                    <p>
                        Learn. Practice. Build. Grow.
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;