function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
}) {
    const styles = {
        primary:
            "rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500",

        secondary:
            "rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-purple-500 hover:text-white",

        danger:
            "rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={styles[variant]}
        >
            {children}
        </button>
    );
}

export default Button;