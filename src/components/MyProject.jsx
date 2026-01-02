import { Link } from "react-router-dom";

const projects = [
  {
    title: "eTution Bd",
    role: "Fullstack",
    image: "/projects/eTutionBd.jpg",
    description:
      "A secure MERN food-sharing platform featuring JWT-based API protection and full CRUD capabilities.",
    tech: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Motion",
    ],
  },
  {
    title: "Share Meal Web",
    role: "Fullstack",
    image: "/projects/share-Meal.png",
    description:
      "An optimized App Store experience featuring custom Daisy UI components and persistent data handling.",
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "WarmPaws Pet Care Servicing",
    role: "Fullstack",
    image: "/projects/WarmPaws.jpg",
    description:
      "A modern platform for discovering top games with Firebase Authentication and Framer Motion animations.",
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
  },
];

const MyProjects = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-800
              bg-white dark:bg-slate-900 shadow-md hover:shadow-xl
              transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title + Role */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full
                    bg-pink-500/10 text-pink-600 dark:bg-pink-500/20"
                  >
                    {project.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      border border-slate-300 dark:border-slate-700
                      text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-auto self-end px-5 py-2 rounded-lg text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
