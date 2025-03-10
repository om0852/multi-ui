"use client"

import React, { useState } from 'react';
import Collapsible_50 from '../_components/Collapsible_50';
import { FaHashtag, FaHeart, FaComment, FaShare, FaChartLine, FaUsers, FaGlobe, FaRocket } from 'react-icons/fa6';

const Example_50: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const socialSections = [
    {
      title: "Trending Posts",
      icon: <FaChartLine className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">John Doe</span>
                  <span className="text-gray-500 text-sm">@johndoe</span>
                  <span className="text-gray-500 text-sm">• 2h ago</span>
                </div>
                <p className="mt-2">Just launched our new website! Check it out at example.com <FaRocket className="inline" /></p>
                <div className="mt-3 flex items-center gap-6">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                    <FaHeart />
                    <span>2.5K</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                    <FaComment />
                    <span>482</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
                    <FaShare />
                    <span>1.2K</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                TS
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Tech Startup</span>
                  <span className="text-gray-500 text-sm">@techstartup</span>
                  <span className="text-gray-500 text-sm">• 4h ago</span>
                </div>
                <p className="mt-2">We&apos;re hiring! Looking for talented developers to join our team. #techjobs</p>
                <div className="mt-3 flex items-center gap-6">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                    <FaHeart />
                    <span>1.8K</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                    <FaComment />
                    <span>324</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
                    <FaShare />
                    <span>956</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Popular Hashtags",
      icon: <FaHashtag className="text-purple-500" />,
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-500 font-medium">#techjobs</span>
              <span className="text-sm text-gray-500">24.5K posts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-500 font-medium">#startup</span>
              <span className="text-sm text-gray-500">18.2K posts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-500 font-medium">#innovation</span>
              <span className="text-sm text-gray-500">15.7K posts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-500 font-medium">#technology</span>
              <span className="text-sm text-gray-500">12.9K posts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '55%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Engagement Analytics",
      icon: <FaChartLine className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <div className="text-center">
                <h4 className="text-sm text-gray-500 mb-1">Total Followers</h4>
                <p className="text-2xl font-bold text-blue-500">125.4K</p>
                <span className="text-xs text-green-500">+12% this week</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <div className="text-center">
                <h4 className="text-sm text-gray-500 mb-1">Post Engagement</h4>
                <p className="text-2xl font-bold text-purple-500">24.8%</p>
                <span className="text-xs text-green-500">+5% this week</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <div className="text-center">
                <h4 className="text-sm text-gray-500 mb-1">Total Reach</h4>
                <p className="text-2xl font-bold text-green-500">450.2K</p>
                <span className="text-xs text-red-500">-3% this week</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <h4 className="font-medium mb-4">Engagement by Time</h4>
            <div className="h-40 flex items-end justify-between gap-2">
              {[65, 40, 35, 20, 45, 75, 90, 85, 60, 45, 30, 25].map((height, i) => (
                <div key={i} className="flex-1">
                  <div 
                    className="bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-center mt-2 text-gray-500">
                    {`${i + 1}${i + 1 === 12 ? 'PM' : 'AM'}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Audience Demographics",
      icon: <FaUsers className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <h4 className="font-medium mb-3">Age Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>18-24</span>
                    <span className="text-gray-500">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>25-34</span>
                    <span className="text-gray-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>35-44</span>
                    <span className="text-gray-500">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>45+</span>
                    <span className="text-gray-500">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <h4 className="font-medium mb-3">Top Locations</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-blue-500" />
                    <span>United States</span>
                  </div>
                  <span className="text-gray-500">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-green-500" />
                    <span>United Kingdom</span>
                  </div>
                  <span className="text-gray-500">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-purple-500" />
                    <span>Canada</span>
                  </div>
                  <span className="text-gray-500">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-yellow-500" />
                    <span>Australia</span>
                  </div>
                  <span className="text-gray-500">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaChartLine className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Social Media Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {socialSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_50
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_50>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_50; 