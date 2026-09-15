import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border-b border-slate-800 bg-slate-950">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-white"
                >
                    CAPAVOLVE
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <Link
                        to="/"
                        className="text-sm text-slate-300 hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        to="/skills"
                        className="text-sm text-slate-300 hover:text-white"
                    >
                        Skills
                    </Link>

                    <Link
                        to="/roadmaps"
                        className="text-sm text-slate-300 hover:text-white"
                    >
                        Roadmaps
                    </Link>

                    <Link
                    to="/dashboard"
                    className="text-sm text-slate-300 hover:text-white"
                    >
                   Dashboard
                   </Link>

                    <Link
                        to="/resources"
                        className="text-sm text-slate-300 hover:text-white"
                    >
                        Resources
                    </Link>

                    <Link
                        to="/practice"
                        className="text-sm text-slate-300 hover:text-white"
                    >
                        Practice
                    </Link>

                </div>

                {/* Login */}
                <Link
                    to="/login"
                    className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500"
                >
                    Login
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;