const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Supercharge Your <br />
            <span className="text-purple-600">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-purple-200 text-sm sm:text-base">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border-2 border-gray-200 hover:border-purple-400 text-gray-700 hover:text-purple-600 font-medium px-7 py-3 rounded-full transition-all duration-200 text-sm sm:text-base">
              <span className="text-purple-600 text-xs">▶</span> Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full mt-8 md:mt-0">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-gray-200">
            <img
              src="/banner.png"
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
