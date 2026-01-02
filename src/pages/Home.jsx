import { motion } from "framer-motion";
import Offer from "../components/Offer";
import MySkills from "../components/MySkills";
import MyProjects from "../components/MyProject";


export function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-12 space-y-16">
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-500 dark:text-brand-400">
            Fullstack Developer
          </p>
          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Hey there, I am
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl"
            >
              Jubayer Hossain
            </motion.h1>
            <p className="text-base text-slate-700 dark:text-slate-300 sm:text-lg">
              I build modern, scalable, and user-centric web applications using
              the MERN stack and React ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:brightness-110"
            >
              Say Hello
            </a>
            <a
              href="mailto:jubayerahmed726@gmail.com"
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500/80 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100"
            >
              Email Me
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
            <span>📍 Bangladesh</span>
            <span>📧 jubayerahmed726@gmail.com</span>
            <span>📱 +8801739987333</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-52 w-52 overflow-hidden rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 shadow-2xl shadow-slate-200/60 dark:border-slate-700/70 dark:from-slate-900 dark:to-slate-800 dark:shadow-black/60 sm:h-64 sm:w-64"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.15),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.55),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.45),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-end rounded-full">
              <img
                src="https://i.postimg.cc/FzTr6D42/JUBAYER_Photo.jpg"
                alt=""
                className=""
              />
              {/* <p className="text-xs uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300"></p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Jubayer&apos;s Space
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Fullstack React & MERN Developer
              </p> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Offer />
      <MySkills />
      <MyProjects />
    </main>
  );
}