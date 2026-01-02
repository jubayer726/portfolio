export function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-12 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Contact</h2>
      <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p>Sylhet, Bangladesh</p>
          <p>
            Email:{" "}
            <a
              href="mailto:jubayerahmed726@gmail.com"
              className="text-brand-500 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
            >
              jubayerahmed726@gmail.com
            </a>
          </p>
          <p>Phone: +8801739987333</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-md shadow-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/60"
        >
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="message" className="text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-1 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:brightness-110"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}