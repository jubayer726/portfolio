import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { CheckCircle } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl shadow-lg"
          />

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              About the Project
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-xl"
                >
                  <CheckCircle className="text-green-400 mt-1" size={18} />
                  <p className="text-sm text-slate-200">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-slate-800 rounded-2xl p-6 space-y-6 h-fit">
          <div>
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-pink-500 text-xs">
                {project.role}
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-600 text-xs">
                {project.level}
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs
                  bg-slate-700 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <a
              href={project.live}
              target="_blank"
              className="block text-center bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg"
            >
              Live Demo
            </a>
            <a
              href={project.frontend}
              target="_blank"
              className="block text-center border border-slate-600 py-2 rounded-lg"
            >
              Frontend Code
            </a>
            <a
              href={project.backend}
              target="_blank"
              className="block text-center border border-slate-600 py-2 rounded-lg"
            >
              Backend Code
            </a>
          </div>

          {/* Meta */}
          <div className="text-xs text-slate-400 flex justify-between">
            <span>Created: {project.created}</span>
            <span>Updated: {project.updated}</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ProjectDetails;
