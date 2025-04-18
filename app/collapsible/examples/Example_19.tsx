"use client"

import React, { useState } from 'react';
import Collapsible_19 from '../_components/Collapsible_19';
import { FaNewspaper, FaMicrochip, FaChartLine, FaClock, FaUser, FaHeart, FaComment, FaShare } from 'react-icons/fa6';

const Example_19: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const newsSections = [
    {
      title: "Top Stories",
      icon: <FaNewspaper className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Global Climate Summit Reaches Historic Agreement",
              summary: "World leaders commit to ambitious carbon reduction targets in landmark deal",
              author: "Sarah Johnson",
              time: "2 hours ago",
              category: "World",
              engagement: { likes: 1245, comments: 328, shares: 512 }
            },
            {
              title: "Breakthrough in Quantum Computing Research",
              summary: "Scientists achieve major milestone in quantum supremacy",
              author: "Michael Chen",
              time: "4 hours ago",
              category: "Science",
              engagement: { likes: 892, comments: 156, shares: 423 }
            },
            {
              title: "Major Economic Policy Shift Announced",
              summary: "Central bank unveils new measures to combat inflation",
              author: "David Wilson",
              time: "6 hours ago",
              category: "Economy",
              engagement: { likes: 756, comments: 234, shares: 189 }
            }
          ].map((story, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                    {story.category}
                  </span>
                  <span>&bull;</span>
                  <FaClock className="text-gray-400" />
                  <span>{story.time}</span>
                </div>
                <h4 className="font-medium">{story.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {story.summary}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-400" />
                    <span className="text-sm text-gray-500">{story.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-blue-500">
                      <FaHeart />
                      <span>{story.engagement.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500">
                      <FaComment />
                      <span>{story.engagement.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500">
                      <FaShare />
                      <span>{story.engagement.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Technology News",
      icon: <FaMicrochip className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              title: "AI Model Achieves Human-Level Performance",
              company: "TechCorp AI",
              time: "1 hour ago",
              impact: "High",
              category: "Artificial Intelligence"
            },
            {
              title: "New Smartphone Features Revolutionary Display",
              company: "MobileTech Inc.",
              time: "3 hours ago",
              impact: "Medium",
              category: "Consumer Tech"
            },
            {
              title: "Major Security Vulnerability Patched",
              company: "CyberSec Solutions",
              time: "5 hours ago",
              impact: "Critical",
              category: "Cybersecurity"
            }
          ].map((news, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{news.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {news.company}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      news.impact === 'High' 
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                        : news.impact === 'Critical'
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      {news.impact} Impact
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {news.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Business Updates",
      icon: <FaChartLine className="text-green-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              company: "Global Tech Corp",
              news: "Quarterly Earnings Exceed Expectations",
              change: "+5.2%",
              value: "$245.67",
              trend: "up"
            },
            {
              company: "EcoEnergy Solutions",
              news: "Major Renewable Energy Contract Signed",
              change: "+3.8%",
              value: "$78.45",
              trend: "up"
            },
            {
              company: "RetailGiant Inc.",
              news: "Restructuring Plans Announced",
              change: "-2.1%",
              value: "$156.89",
              trend: "down"
            }
          ].map((update, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{update.company}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {update.news}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${
                    update.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {update.change}
                  </div>
                  <div className="text-sm text-gray-500">
                    {update.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center text-sm text-gray-500">
            Market data delayed by 15 minutes
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaNewspaper className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            News Feed
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
          {newsSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_19
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_19>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_19; 