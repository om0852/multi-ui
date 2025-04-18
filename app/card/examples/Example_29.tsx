"use client";

import React from 'react';
import Card29 from '../_components/Card_29';

const Example_29 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Pricing Cards - Variation 9
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Basic Plan",
              description: "Perfect for individuals and small projects",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/290/400/400",
              btnText: "Start Free Trial"
            },
            {
              title: "Pro Plan",
              description: "Ideal for growing businesses and teams",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/291/400/400",
              btnText: "Choose Pro"
            },
            {
              title: "Enterprise Plan",
              description: "Advanced features for large organizations",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/292/400/400",
              btnText: "Contact Sales"
            }
          ].map((plan, index) => (
            <Card29
              key={index}
              {...plan}
            />
          ))}
        </div>

        {/* Additional Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Student Plan",
              description: "Special pricing for students and educators",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/293/400/400",
              btnText: "Verify Status"
            },
            {
              title: "Startup Plan",
              description: "Tailored for early-stage companies",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/294/400/400",
              btnText: "Learn More"
            },
            {
              title: "Non-Profit Plan",
              description: "Special rates for non-profit organizations",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/295/400/400",
              btnText: "Apply Now"
            },
            {
              title: "Custom Plan",
              description: "Build your own custom solution",
              link: "/card29",
              imageUrl: "https://picsum.photos/seed/296/400/400",
              btnText: "Get Quote"
            }
          ].map((plan, index) => (
            <Card29
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_29; 