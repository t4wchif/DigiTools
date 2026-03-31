import { UserPlus, ShoppingBag, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Account',
    description:
      'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: ShoppingBag,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
];

const Steps = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm sm:text-base px-4 sm:px-0">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative hover:shadow-lg transition-all duration-300 group"
              >
                <span className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-purple-600 text-white text-xs font-bold w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </span>

                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 group-hover:bg-purple-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-purple-600 group-hover:text-white transition-colors duration-300 sm:hidden"
                  />
                  <Icon
                    size={32}
                    className="text-purple-600 group-hover:text-white transition-colors duration-300 hidden sm:block"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
