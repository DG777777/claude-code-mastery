export default function Hero() {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wide mb-4">
            HELLO, I AM
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tight">
            김동각
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-6">
            풀스택 개발자입니다
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
            새로운 기술을 탐구하고 아이디어를 실제 서비스로 구현하는 것을 즐기며, 항상 더 나은 코드를 위해 고민하는 개발자입니다.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-block px-8 py-3 bg-green-400 hover:bg-green-500 text-black font-bold rounded-full transition transform hover:scale-105 active:scale-95 w-fit"
          >
            연락하기
          </button>
        </div>

        {/* Right Column - Image & Stats */}
        <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
          {/* Green Circle Background */}
          <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20"></div>

          <div className="relative w-80 h-96 sm:w-96 sm:h-[500px]">
            {/* Green Circle Container */}
            <div className="absolute inset-0 bg-green-400 rounded-full flex items-center justify-center overflow-hidden">
              {/* Person Image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Cards - Bottom Overlap */}
            <div className="absolute -bottom-8 left-0 right-0 flex gap-4 px-4 z-10">
              {/* Card 1 */}
              <div className="flex-1 bg-black border-2 border-green-400 rounded-2xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-green-400 mb-1">
                  3+
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Years of<br />Experience
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-black border-2 border-green-400 rounded-2xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-green-400 mb-1">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Completed<br />Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
