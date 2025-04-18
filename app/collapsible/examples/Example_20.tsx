"use client"

import React, { useState } from 'react';
import Collapsible_20 from '../_components/Collapsible_20';
import { FaDiagramProject, FaListCheck, FaUserGroup, FaCircleCheck, FaClock, FaCircleXmark } from 'react-icons/fa6';

const Example_20: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projectSections = [
    {
      title: "Project Overview",
      icon: <FaDiagramProject className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Website Redesign</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Complete overhaul of company website with modern design and improved user experience
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <div className="text-sm text-gray-500">Start Date</div>
                <div className="font-medium">Jan 15, 2024</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <div className="text-sm text-gray-500">Deadline</div>
                <div className="font-medium">Mar 30, 2024</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Progress</h4>
              <span className="text-sm text-gray-500">65%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: '65%' }}></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <div className="font-medium">15</div>
                <div className="text-gray-500">Total Tasks</div>
              </div>
              <div>
                <div className="font-medium text-green-500">8</div>
                <div className="text-gray-500">Completed</div>
              </div>
              <div>
                <div className="font-medium text-yellow-500">7</div>
                <div className="text-gray-500">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Tasks",
      icon: <FaListCheck className="text-purple-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "Design System", assignee: "Sarah", status: "completed", dueDate: "Feb 1" },
            { title: "Homepage Layout", assignee: "Mike", status: "in-progress", dueDate: "Feb 15" },
            { title: "User Testing", assignee: "John", status: "pending", dueDate: "Mar 1" },
            { title: "Content Migration", assignee: "Lisa", status: "in-progress", dueDate: "Mar 15" }
          ].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                {task.status === 'completed' && <FaCircleCheck className="text-green-500" />}
                {task.status === 'in-progress' && <FaClock className="text-yellow-500" />}
                {task.status === 'pending' && <FaCircleXmark className="text-gray-400" />}
                <div>
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Assigned to {task.assignee}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Due {task.dueDate}
              </div>
            </div>
          ))}
          <button className="w-full text-center text-purple-500 hover:text-purple-600 text-sm font-medium">
            View All Tasks
          </button>
        </div>
      )
    },
    {
      title: "Team Members",
      icon: <FaUserGroup className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Sarah Johnson", role: "Lead Designer", tasks: 4, avatar: "SJ" },
              { name: "Mike Chen", role: "Frontend Dev", tasks: 3, avatar: "MC" },
              { name: "John Smith", role: "UX Researcher", tasks: 2, avatar: "JS" },
              { name: "Lisa Wong", role: "Content Writer", tasks: 3, avatar: "LW" }
            ].map((member, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  {member.tasks} active tasks
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Team Performance</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tasks Completed</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>On-time Delivery</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaDiagramProject className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Project Management
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
          {projectSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_20
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className={`${
                    index === 0 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4' : 'space-y-3 sm:space-y-4'
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