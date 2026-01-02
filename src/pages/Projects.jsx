import { motion } from "framer-motion";

const projects = [
  {
    title: "Bite Share",
    type: "Fullstack",
    description:
      "A secure MERN food-sharing platform featuring JWT-based API protection and full CRUD capabilities.",
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "AppoVate Software",
    type: "Fullstack",
    description:
      "An optimized App Store experience featuring custom UI components and persistent data handling.",
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "GameHub",
    type: "Frontend",
    description:
      "A modern platform for discovering top games with authentication and smooth animations.",
    tech: ["React", "TailwindCSS", "Firebase Auth", "JavaScript", "Framer Motion"],
  },
];

export function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-12 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Featured Projects</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md shadow-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/60"
          >
            <p className="text-xs font-medium text-brand-500 dark:text-brand-300">{project.type}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}