"use client"

import React, { useState } from 'react';
import Collapsible_10 from '../_components/Collapsible_10';
import { FaHeart, FaComment, FaShare, FaHashtag, FaUserPlus, FaCircleUser, FaPersonRunning, FaBowlFood, FaSun } from 'react-icons/fa6';

const Example_10: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const socialSections = [
    {
      title: "Popular Posts",
      icon: <FaHeart className="text-red-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              user: "Sarah Johnson",
              avatar: "SJ",
              content: "Just finished my first marathon! ",
              icon: <FaPersonRunning className="text-blue-500" />,
              likes: 245,
              comments: 42,
              shares: 12,
              time: "2 hours ago"
            },
            {
              user: "Mike Chen",
              avatar: "MC",
              content: "New recipe alert! ",
              icon: <FaBowlFood className="text-orange-500" />,
              likes: 189,
              comments: 56,
              shares: 23,
              time: "4 hours ago"
            },
            {
              user: "Emma Wilson",
              avatar: "EW",
              content: "Beautiful sunset at the beach today ",
              icon: <FaSun className="text-yellow-500" />,
              likes: 312,
              comments: 28,
              shares: 15,
              time: "6 hours ago"
            }
          ].map((post, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                  {post.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{post.user}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.time}</p>
                </div>
              </div>
              <p>{post.content} {post.icon}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <button className="flex items-center gap-1 hover:text-red-500">
                  <FaHeart />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                  <FaComment />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-green-500">
                  <FaShare />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Trending Topics",
      icon: <FaHashtag className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { tag: "TechNews", posts: "12.5K posts" },
            { tag: "HealthyLiving", posts: "8.2K posts" },
            { tag: "TravelDiaries", posts: "6.7K posts" },
            { tag: "FoodieLife", posts: "5.9K posts" }
          ].map((topic, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center gap-2">
                <FaHashtag className="text-blue-500" />
                <span className="font-medium">{topic.tag}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{topic.posts}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Friend Suggestions",
      icon: <FaUserPlus className="text-green-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Alex Thompson", mutual: 12, avatar: "AT" },
            { name: "Lisa Wang", mutual: 8, avatar: "LW" },
            { name: "David Kim", mutual: 15, avatar: "DK" }
          ].map((friend, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-medium">
                  {friend.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{friend.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{friend.mutual} mutual friends</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Follow
              </button>
            </div>
          ))}
          <button className="w-full text-center text-blue-500 hover:text-blue-600 text-sm font-medium">
            View More Suggestions
          </button>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaCircleUser className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Social Feed
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {socialSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_10
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_10>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_10; 