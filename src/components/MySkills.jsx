import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPython,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs size={32} />,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <SiReact size={32} className="text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss size={32} className="text-sky-400" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript size={32} className="text-yellow-400" />,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: <SiHtml5 size={32} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <SiCss3 size={32} className="text-blue-500" />,
  },

  // Backend and Database
  {
    name: "Node.js",
    category: "Backend and Database",
    icon: <SiNodedotjs size={32} className="text-green-500" />,
  },
  {
    name: "Express.js",
    category: "Backend and Database",
    icon: <SiExpress size={32} />,
  },
  {
    name: "MongoDB",
    category: "Backend and Database",
    icon: <SiMongodb size={32} className="text-green-400" />,
  },
  {
    name: "MySQL",
    category: "Backend and Database",
    icon: <SiMysql size={32} className="text-blue-400" />,
  },

  // Tools & Others
  {
    name: "Git & GitHub",
    category: "Tools & Others",
    icon: <SiGit size={32} className="text-orange-500" />,
  },
  {
    name: "Python",
    category: "Tools & Others",
    icon: <SiPython size={32} className="text-blue-400" />,
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend and Database",
  "Tools & Others",
];

const MySkills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          My Skills
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md border text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-slate-600 hover:bg-slate-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills by Category */}
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => {
            const categorySkills = filteredSkills.filter(
              (skill) => skill.category === cat
            );

            if (categorySkills.length === 0) return null;

            return (
              <div key={cat} className="mb-14">
                {/* Category Title */}
                <h3 className="text-xl font-semibold mb-6">
                  {cat}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="rounded-xl p-6 text-center border
              bg-white text-slate-800 border-slate-200 font-bold flex flex-col justify-center items-center gap-4
              hover:shadow-lg hover:-translate-y-1 transition-all
              dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800"
                    >
                      {skill.icon}
                      <p className="text-sm">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default MySkills;
