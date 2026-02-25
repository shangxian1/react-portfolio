import projects from '../projects.json';

export default function ProjectDetail({ projectId, setView }) {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="text-white p-12">Project not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button
        onClick={() => {
          setView('home');
          window.scrollTo(0, 0);
        }}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 cursor-pointer"
      >
        ← Back to Projects
      </button>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tools?.map((tool) => (
              <span key={tool} className="px-3 py-1 bg-zinc-900 border border-white/10 rounded text-xs text-gray-300">
                {tool}
              </span>
            ))}
          </div>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Github
            </a>
          )}


        </div>

        {/* Feature Image */}
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      <hr className="border-white/5 mb-16" />
    </div>
  );
}