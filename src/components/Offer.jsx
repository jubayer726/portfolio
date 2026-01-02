import { ServiceCard } from "../shared/ServiceCard";

const Offer = () => {
  return (
    <div>
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          What I Offer
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="UI/UX & Web Design"
            description="I create modern, user-centric designs in Figma that prioritize accessibility and user experience."
            cta="Start a Project"
          />
          <ServiceCard
            title="Full-stack React Development"
            description="I build fast, SEO-friendly, and responsive applications using React, Next.js, and the MERN stack."
            cta="View My Work"
          />
          <ServiceCard
            title="MERN Backend Solutions"
            description="I develop secure, scalable backends using Node.js, Express, and MongoDB with clean REST APIs."
            cta="Check My Code"
          />
        </div>
      </section>
    </div>
  );
};

export default Offer;