export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce 플랫폼',
      description: '모던한 UI/UX를 갖춘 전자상거래 플랫폼. 실시간 재고 관리 및 결제 시스템 통합.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: '태스크 관리 앱',
      description: '팀 협업을 위한 직관적인 태스크 관리 도구. 실시간 동기화 및 알림 기능.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: '데이터 대시보드',
      description: '대규모 데이터를 시각화하는 분석 대시보드. 실시간 차트 및 필터링 기능.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            포트폴리오
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition transform hover:-translate-y-2 duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium text-sm transition text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium text-sm transition text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
