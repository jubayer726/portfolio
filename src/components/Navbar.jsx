import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar({ onToggleTheme, theme }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70 transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 to-fuchsia-500 text-xs font-bold text-white">
            JH
          </span>
          <span className="hidden text-slate-900 dark:text-slate-100 sm:inline">Jubayer&apos;s Space</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "transition",
                  isActive
                    ? "text-slate-900 dark:text-white font-medium"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-200/50 transition hover:border-brand-500/80 hover:text-brand-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-slate-900/40 dark:hover:text-white"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:brightness-110 sm:inline-block"
          >
            Say Hello
          </Link>
        </div>
      </div>
    </header>
  );
}