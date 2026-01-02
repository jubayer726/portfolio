"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./index.css");
var Navbar_1 = require("./components/Navbar");
function App() {
    var _a = (0, react_1.useState)("dark"), theme = _a[0], setTheme = _a[1];
    (0, react_1.useEffect)(function () {
        var stored = window.localStorage.getItem("theme");
        if (stored) {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        }
        else {
            document.documentElement.classList.add("dark");
        }
    }, []);
    (0, react_1.useEffect)(function () {
        document.documentElement.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);
    var toggleTheme = function () {
        setTheme(function (prev) { return (prev === "dark" ? "light" : "dark"); });
    };
    return (<div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl dark:bg-brand-600/40"/>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-3xl dark:bg-fuchsia-600/30"/>
      </div>

      <Navbar_1.Navbar onToggleTheme={toggleTheme} theme={theme}/>

      <react_router_dom_1.Outlet />

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 text-xs text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-slate-900 dark:text-slate-200">Jubayer Hossain</p>
            <p className="text-slate-600 dark:text-slate-400">Full-stack Web Developer</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Portfolio Projects</span>
            <span>React · MERN · Ongoing</span>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <p>Quick Links</p>
            <p className="text-slate-500">Home · About · Contact · Projects</p>
          </div>
        </div>
      </footer>
    </div>);
}
exports.default = App;
