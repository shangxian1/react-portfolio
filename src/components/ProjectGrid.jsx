import projects from '../data/projects.json';

export default function ProjectGrid({ setView }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-xl text-white font-medium mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <div 
            key={i} 
            onClick={() => {
                setView(p.id);
                window.scrollTo(0, 0);
            }}
            className="group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden bg-zinc-900 border border-white/5 rounded-sm mb-4">
              <img src={`${import.meta.env.BASE_URL}${p.image}`} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white text-xl font-medium">{p.title}</h3>
            <p className="text-white text-sm mt-1">{p.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}