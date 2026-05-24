export default function About() {
  const about = [
    "안녕하세요, 풀스택 개발자 김동각입니다.",
    "사용자 경험을 중심으로 프론트엔드부터 백엔드까지 개발합니다.",
    "새로운 기술을 탐구하고 아이디어를 실제 서비스로 구현하는 것을 즐깁니다.",
    "항상 더 나은 코드를 위해 고민하며 성장하는 개발자입니다."
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            소개
          </span>
        </h2>

        <div className="space-y-4 text-lg sm:text-xl text-slate-300 leading-relaxed">
          {about.map((line, idx) => (
            <p key={idx} className="flex items-start">
              <span className="text-indigo-400 mr-4">▸</span>
              <span>{line}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
