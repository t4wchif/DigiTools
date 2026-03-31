import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: 0,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    button: 'Get Started Free',
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: 29,
    badge: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    button: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: 99,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    button: 'Contact Sales',
  },
];

const Pricing = () => {
  const [activePlan, setActivePlan] = useState('Pro');

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map(plan => {
            const isActive = activePlan === plan.name;
            return (
              <div
                key={plan.name}
                onClick={() => setActivePlan(plan.name)}
                className={`relative rounded-2xl p-8 cursor-pointer transition-all duration-300 flex flex-col ${
                  isActive
                    ? 'bg-purple-600 shadow-2xl shadow-purple-300 scale-105'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${isActive ? 'text-purple-200' : 'text-gray-500'}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-extrabold ${isActive ? 'text-white' : 'text-gray-900'}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${isActive ? 'text-purple-200' : 'text-gray-400'}`}
                  >
                    /Month
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm ${isActive ? 'text-purple-100' : 'text-gray-600'}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : 'bg-purple-100'}`}
                      >
                        <Check
                          size={12}
                          className={
                            isActive ? 'text-white' : 'text-purple-600'
                          }
                        />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg'
                      : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-200'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
