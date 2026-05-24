export default function Skills() {
  const skills = {
    Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    Backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    DevOps: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Nginx']
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            기술 스택
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <div
              key={category}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30 hover:bg-indigo-600/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
