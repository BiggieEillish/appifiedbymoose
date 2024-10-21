import React from 'react';
import { RocketLaunchIcon, TrophyIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const plans = [
    {
      icon: RocketLaunchIcon, // Heroicons for 'Free' plan
      title: 'Free',
      features: ['Easy Installations', 'Unlimited support', 'Unique Elements'],
      price: '0',
      period: '/Month',
    },
    {
      icon: TrophyIcon, // Heroicons for 'Medium' plan
      title: 'Medium',
      features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
      price: '49',
      period: '/Month',
    },
    {
      icon: ChartPieIcon, // Heroicons for 'Business' plan
      title: 'Business',
      features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
      price: '99',
      period: '/Month',
    },
  ];

  return (
    <section className="py-16" id="price_page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold">Pricing Plan</h5>
          <h3 className="text-3xl font-bold text-gray-900">Our Awesome Pricing Plan</h3>
          <div className="my-8"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 mb-8">
              <div className="price-box border rounded-lg p-6 text-center shadow-lg">
                <div className="price-header mb-4">
                  <div className="price-icon text-4xl text-blue-500 mb-4 flex justify-center items-center">
                    <plan.icon className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold uppercase">{plan.title}</h4>
                </div>
                <div className="price-body my-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-rate text-4xl font-bold my-6">
                  <sup className="text-lg">$</sup>
                  <span>{plan.price}</span>
                  <small className="text-lg">{plan.period}</small>
                </div>
                <div className="price-footer">
                  <a
                    href="#"
                    className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                  >
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
