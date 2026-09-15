import { Link } from "react-router-dom";

function Login() {
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
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Continue your learning journey.
                        </p>
                    </div>

                    {/* Login Form */}
                    <form className="mt-8 space-y-5">

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
                            <div className="mb-2 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-slate-300"
                                >
                                    Password
                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="text-sm text-purple-400 hover:text-purple-300"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-500"
                        >
                            Login
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-slate-800"></div>

                        <span className="text-sm text-slate-500">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    {/* Signup */}
                    <p className="text-center text-sm text-slate-400">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-semibold text-purple-400 hover:text-purple-300"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </main>
    );
}

export default Login;