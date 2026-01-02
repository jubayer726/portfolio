import { motion } from "framer-motion";

export function ServiceCard({ title, description, cta }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md shadow-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/60"
    >
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{description}</p>
      <button
        type="button"
        className="mt-3 w-fit text-xs font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
      >
        {cta}
      </button>
    </motion.article>
  );
}


