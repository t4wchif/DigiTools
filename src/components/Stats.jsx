const Stats = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];

  return (
    <section
      className="w-full py-10 sm:py-12 md:py-14"
      style={{
        background:
          'linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #d946ef 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center py-4 sm:py-6 px-2 sm:px-6 md:px-8"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-purple-200 text-xs sm:text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
