import { ServiceCard } from "../shared/ServiceCard";

export function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-12 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">What I Offer</h2>
      <div className="grid gap-5 md:grid-cols-3">
        <ServiceCard
          title="UI/UX & Web Design"
          description="I create modern, user-centric designs that prioritize accessibility and clean visual hierarchy."
          cta="Start a Project"
        />
        <ServiceCard
          title="Full-stack React Development"
          description="I build fast, SEO-friendly, and responsive applications using React and Next.js."
          cta="View My Work"
        />
        <ServiceCard
          title="MERN Backend Solutions"
          description="I develop secure, scalable backends with Node.js, Express, and MongoDB."
          cta="Check My Code"
        />
      </div>
    </main>
  );
}