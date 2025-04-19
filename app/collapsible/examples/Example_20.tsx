"use client"

import React, { useState } from 'react';
import Collapsible_20 from '../tsx/Collapsible_20';
import { FaListCheck, FaUsers, FaFlag, FaChartBar, FaCircleCheck, FaCircleXmark, FaClock } from 'react-icons/fa6';

const Example_20: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projectSections = [
    {
      title: "Project Overview",
      icon: <FaListCheck className="text-blue-500" />,
      content: (
        <div className="space-y-3 md:space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg">
            <h4 className="text-sm md:text-base font-medium mb-2">E-commerce Platform Redesign</h4>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                <p className="text-sm md:text-base font-medium">Jan 15, 2024</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Due Date</p>
                <p className="text-sm md:text-base font-medium">Mar 30, 2024</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-medium mb-2">Progress Overview</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span>Overall Progress</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div>
                  <div className="text-green-500 text-sm md:text-base font-bold">12</div>
                  <div className="text-xs md:text-sm text-gray-500">Completed</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-sm md:text-base font-bold">8</div>
                  <div className="text-xs md:text-sm text-gray-500">In Progress</div>
                </div>
                <div>
                  <div className="text-red-500 text-sm md:text-base font-bold">4</div>
                  <div className="text-xs md:text-sm text-gray-500">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team Members",
      icon: <FaUsers className="text-purple-500" />,
      content: (
        <div className="space-y-2 md:space-y-3">
          {[
            { name: "Sarah Johnson", role: "Project Manager", avatar: "SJ", status: "online" },
            { name: "Mike Chen", role: "Lead Developer", avatar: "MC", status: "busy" },
            { name: "Emma Wilson", role: "UI/UX Designer", avatar: "EW", status: "offline" },
            { name: "Alex Thompson", role: "Backend Developer", avatar: "AT", status: "online" }
          ].map((member, i) => (
            <div key={i} className="flex items-center justify-between p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs md:text-sm font-medium">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                    member.status === 'online' ? 'bg-green-500' :
                    member.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></div>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-medium">{member.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                </div>
              </div>
              <button className="text-xs md:text-sm text-blue-500 hover:text-blue-600">
                Message
              </button>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Milestones",
      icon: <FaFlag className="text-red-500" />,
      content: (
        <div className="space-y-2 md:space-y-4">
          {[
            { title: "Design Phase", status: "completed", date: "Feb 1, 2024", progress: 100 },
            { title: "Frontend Development", status: "in-progress", date: "Feb 15, 2024", progress: 60 },
            { title: "Backend Integration", status: "pending", date: "Mar 1, 2024", progress: 0 }
          ].map((milestone, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm md:text-base font-medium flex items-center gap-1 md:gap-2">
                    {milestone.status === 'completed' ? (
                      <FaCircleCheck className="text-green-500 text-xs md:text-sm" />
                    ) : milestone.status === 'in-progress' ? (
                      <FaClock className="text-yellow-500 text-xs md:text-sm" />
                    ) : (
                      <FaCircleXmark className="text-red-500 text-xs md:text-sm" />
                    )}
                    {milestone.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Due: {milestone.date}</p>
                </div>
                <div className="text-xs md:text-sm font-medium">
                  {milestone.progress}%
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-3 md:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-full md:max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-8">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold flex items-center gap-2 md:gap-3">
            <FaChartBar className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-base md:text-xl`} />
            Project Management
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-2 md:space-y-4">
          {projectSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-base md:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_20
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className={`${
                    index === 0 
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4' 
                      : 'space-y-2 md:space-y-4'
                  }`}>
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_20>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_20; 