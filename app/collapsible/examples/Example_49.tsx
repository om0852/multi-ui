"use client"

import React, { useState } from 'react';
import Collapsible_49 from '../_components/Collapsible_49';
import { FaListCheck, FaCircleCheck, FaCircleXmark, FaClock, FaUserGroup } from 'react-icons/fa6';

const Example_49: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const taskSections = [
    {
      title: "Today's Tasks",
      icon: <FaListCheck className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              5 of 8 tasks completed
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '62.5%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircleCheck className="text-green-500" />
              <span className="flex-1 line-through text-gray-500">Review project requirements</span>
              <span className="text-xs text-gray-500">9:00 AM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircleCheck className="text-green-500" />
              <span className="flex-1 line-through text-gray-500">Team standup meeting</span>
              <span className="text-xs text-gray-500">10:00 AM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <FaCircleXmark className="text-gray-400" />
              <span className="flex-1">Client presentation</span>
              <span className="text-xs text-gray-500">2:00 PM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircleCheck className="text-green-500" />
              <span className="flex-1 line-through text-gray-500">Update documentation</span>
              <span className="text-xs text-gray-500">11:30 AM</span>
            </div>
          </div>

          <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add New Task
          </button>
        </div>
      )
    },
    {
      title: "Project Milestones",
      icon: <FaListCheck className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">Phase 1: Planning</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed on October 15</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">JD</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">AM</div>
                    </div>
                    <span className="text-xs text-gray-500">2 team members</span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">Phase 2: Development</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed on November 5</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">JD</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">AM</div>
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">RK</div>
                    </div>
                    <span className="text-xs text-gray-500">3 team members</span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">Phase 3: Testing</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">In Progress - Due November 20</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">TS</div>
                      <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">PL</div>
                    </div>
                    <span className="text-xs text-gray-500">2 team members</span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">Phase 4: Deployment</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Scheduled for December 1</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">JD</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">AM</div>
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">RK</div>
                      <div className="w-6 h-6 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs">+2</div>
                    </div>
                    <span className="text-xs text-gray-500">5 team members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team Workload",
      icon: <FaUserGroup className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">JD</div>
                <div>
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-sm text-gray-500">Lead Developer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Tasks</span>
                  <span className="text-blue-500">4 active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs text-gray-500">80% capacity</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">AM</div>
                <div>
                  <h4 className="font-medium">Alice Miller</h4>
                  <p className="text-sm text-gray-500">UI Designer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Tasks</span>
                  <span className="text-purple-500">3 active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-gray-500">60% capacity</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">RK</div>
                <div>
                  <h4 className="font-medium">Robert King</h4>
                  <p className="text-sm text-gray-500">Backend Developer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Tasks</span>
                  <span className="text-green-500">2 active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-gray-500">40% capacity</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">TS</div>
                <div>
                  <h4 className="font-medium">Tom Smith</h4>
                  <p className="text-sm text-gray-500">QA Engineer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Tasks</span>
                  <span className="text-yellow-500">5 active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs text-gray-500">90% capacity</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Upcoming Deadlines",
      icon: <FaClock className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Due Today</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-red-700 dark:text-red-300">Client Presentation</span>
                <span className="text-sm text-red-600 dark:text-red-400">2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-700 dark:text-red-300">Team Progress Report</span>
                <span className="text-sm text-red-600 dark:text-red-400">5:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Due This Week</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-yellow-700 dark:text-yellow-300">Phase 3 Testing</span>
                <span className="text-sm text-yellow-600 dark:text-yellow-400">Nov 20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-700 dark:text-yellow-300">UI Design Review</span>
                <span className="text-sm text-yellow-600 dark:text-yellow-400">Nov 22</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Due Next Week</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-700 dark:text-blue-300">Documentation Update</span>
                <span className="text-sm text-blue-600 dark:text-blue-400">Nov 27</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 dark:text-blue-300">Sprint Planning</span>
                <span className="text-sm text-blue-600 dark:text-blue-400">Nov 29</span>
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
            <FaListCheck className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Task Management
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
          {taskSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_49
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_49>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_49; 