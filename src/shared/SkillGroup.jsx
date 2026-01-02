export function SkillGroup({ title, skills }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md shadow-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/60">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-700 dark:text-slate-200">
        {skills.map((s) => (
          <span key={s} className="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800/80">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}


