const Stats = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];

  return (
    <section
      className="w-full py-14"
      style={{
        background:
          'linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #d946ef 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 text-center py-8 md:py-0 px-8">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-purple-200 text-sm font-medium tracking-wide uppercase">
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
