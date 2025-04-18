"use client";

import React from 'react';
import Card27 from '../_components/Card_27';

const Example_27 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Testimonial Cards - Variation 7
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card27
            title="Client Success Story"
            description="Working with this team has transformed our business. Their expertise and dedication are unmatched in the industry."
            link="/card27"
            imageUrl="https://picsum.photos/seed/270/600/400"
            btnText="Read Full Story"
          />
          <Card27
            title="Enterprise Review"
            description="The solutions provided exceeded our expectations. A truly remarkable partnership that continues to deliver value."
            link="/card27"
            imageUrl="https://picsum.photos/seed/271/600/400"
            btnText="View Case Study"
          />
        </div>

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card27
              key={item}
              title={`Client Testimonial ${item}`}
              description="Exceptional service and outstanding results. Highly recommended for any business looking to grow."
              link="/card27"
              imageUrl={`https://picsum.photos/seed/${item + 272}/400/300`}
              btnText="Read More"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_27; 