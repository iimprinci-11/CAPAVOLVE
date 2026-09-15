import { Link } from "react-router-dom";

function Signup() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">

            <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">

                <div className="w-full rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

                    {/* Header */}
                    <div className="text-center">

                        <Link
                            to="/"
                            className="text-2xl font-bold text-white"
                        >
                            CAPAVOLVE
                        </Link>

                        <h1 className="mt-8 text-3xl font-bold">
                            Create Account
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Start your learning journey with CAPAVOLVE.
                        </p>

                    </div>

                    {/* Form */}
                    <form className="mt-8 space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-slate-300"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-300"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-slate-300"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-slate-300"
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-500"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login */}
                    <p className="mt-7 text-center text-sm text-slate-400">
                        Already have an account?{" "}

                        <Link
                            to="/login"
                            className="font-semibold text-purple-400 hover:text-purple-300"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Signup;