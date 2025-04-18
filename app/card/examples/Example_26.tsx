"use client";

import React from 'react';
import Card26 from '../_components/Card_26';

const Example_26 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-slate-800 to-slate-950">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Blog Cards - Variation 6
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-8">
            <Card26
              title="The Future of Web Development"
              description="Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to revolutionary frameworks."
              link="/card26"
              imageUrl="https://picsum.photos/seed/260/800/400"
              btnText="Read Article"
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            {[1, 2].map((item) => (
              <Card26
                key={item}
                title={`Top Story ${item}`}
                description="Essential insights and updates from the tech world."
                link="/card26"
                imageUrl={`https://picsum.photos/seed/${item + 261}/400/300`}
                btnText="Read More"
              />
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card26
              key={item}
              title={`Latest Post ${item}`}
              description="Stay updated with our recent articles and insights."
              link="/card26"
              imageUrl={`https://picsum.photos/seed/${item + 263}/500/300`}
              btnText="View Post"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_26; 