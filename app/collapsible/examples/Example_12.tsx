"use client"

import React, { useState } from 'react';
import Collapsible_12 from '../tsx/Collapsible_12';
import { FaGraduationCap, FaBook, FaChartLine, FaClock, FaStar, FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

const Example_12: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const educationSections = [
    {
      title: "Current Courses",
      icon: <FaGraduationCap className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Web Development Fundamentals",
              instructor: "Dr. Sarah Miller",
              progress: 75,
              nextLesson: "JavaScript Events"
            },
            {
              title: "Data Science Basics",
              instructor: "Prof. John Chen",
              progress: 45,
              nextLesson: "Statistical Analysis"
            },
            {
              title: "UI/UX Design Principles",
              instructor: "Lisa Thompson",
              progress: 90,
              nextLesson: "User Testing"
            }
          ].map((course, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{course.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Instructor: {course.instructor}
                  </p>
                </div>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
                <div 
                  className="bg-purple-500 h-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Next: {course.nextLesson}
              </p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Progress Tracking",
      icon: <FaChartLine className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-500">85%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Average Score</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-500">12</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-500">4</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">In Progress</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Recent Achievements</h4>
            <div className="space-y-3">
              {[
                { title: "Perfect Score", description: "100% on JavaScript Quiz", date: "2 days ago" },
                { title: "Course Completed", description: "HTML & CSS Basics", date: "1 week ago" },
                { title: "Milestone Reached", description: "50 Hours of Study", date: "2 weeks ago" }
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaStar className="text-yellow-500 mt-1" />
                  <div>
                    <h5 className="font-medium">{achievement.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Study Resources",
      icon: <FaBook className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "JavaScript Documentation", type: "Reference", status: "available" },
            { title: "Data Structures eBook", type: "Book", status: "downloaded" },
            { title: "Design Patterns Video", type: "Video", status: "in-progress" },
            { title: "Algorithm Practice Set", type: "Exercise", status: "pending" }
          ].map((resource, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  {resource.status === 'available' && <FaBook className="text-blue-500" />}
                  {resource.status === 'downloaded' && <FaCircleCheck className="text-green-500" />}
                  {resource.status === 'in-progress' && <FaClock className="text-yellow-500" />}
                  {resource.status === 'pending' && <FaCircleXmark className="text-red-500" />}
                </div>
                <div>
                  <h4 className="font-medium">{resource.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{resource.type}</p>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600">
                Access
              </button>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaGraduationCap className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            Learning Dashboard
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
          {educationSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_12
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
                </Collapsible_12>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_12; 