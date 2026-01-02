import { SkillGroup } from "../shared/SkillGroup";

export function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-12 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">My Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillGroup
          title="Frontend"
          skills={["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]}
        />
        <SkillGroup
          title="Backend & Database"
          skills={["Node.js", "Express.js", "MongoDB", "MySQL"]}
        />
        <SkillGroup
          title="Tools & Others"
          skills={["Git & GitHub", "Python", "REST APIs"]}
        />
      </div>
    </main>
  );
}