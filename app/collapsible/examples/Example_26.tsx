"use client"

import React, { useState } from 'react';
import Collapsible_26 from '../_components/Collapsible_26';
import { FaGraduationCap, FaBook, FaCode, FaLaptopCode, FaChartLine } from 'react-icons/fa6';

const Example_26: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const courseSections = [
    {
      title: "Introduction to Web Development",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <FaBook className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Course Overview</h4>
              <p className="text-sm">Introduction to the course structure, expectations, and learning outcomes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Setting Up Your Environment</h4>
              <p className="text-sm">Installing necessary software and configuring your development environment.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Basic HTML & CSS</h4>
              <p className="text-sm">Understanding the fundamentals of web markup and styling.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "JavaScript Fundamentals",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Variables and Data Types</h4>
              <p className="text-sm">Understanding JavaScript variables, primitive types, and objects.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Functions and Scope</h4>
              <p className="text-sm">Working with functions, parameters, and understanding variable scope.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Arrays and Objects</h4>
              <p className="text-sm">Manipulating complex data structures in JavaScript.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Frontend Frameworks",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Introduction to React</h4>
              <p className="text-sm">Understanding components, props, and state in React applications.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">State Management</h4>
              <p className="text-sm">Working with Context API, Redux, and other state management solutions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Building a Complete Application</h4>
              <p className="text-sm">Putting it all together to create a full-featured web application.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Career Development",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <FaChartLine className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Building Your Portfolio</h4>
              <p className="text-sm">Creating projects that showcase your skills to potential employers.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaChartLine className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Interview Preparation</h4>
              <p className="text-sm">Common technical interview questions and how to approach them.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaChartLine className="text-indigo-500 mt-1" />
            <div>
              <h4 className="font-medium">Networking and Job Search</h4>
              <p className="text-sm">Strategies for finding and securing your first web development role.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaGraduationCap className="text-indigo-500" />
            Web Development Bootcamp
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {courseSections.map((section, index) => (
            <Collapsible_26
              key={index}
              title={section.title}
              defaultOpen={index === 0}
            >
              {section.content}
            </Collapsible_26>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_26; 