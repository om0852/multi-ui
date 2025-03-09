"use client"

import React, { useState } from 'react';
import Collapsible_25 from '../_components/Collapsible_25';
import { FaCalendar, FaCheck, FaHourglassHalf, FaClock, FaUsers, FaFile } from 'react-icons/fa6';

const Example_25: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projectPhases = [
    {
      title: "Project Planning",
      status: "Completed",
      dates: "Jan 5 - Jan 20, 2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaUsers className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">Team Formation</h4>
              <p className="text-sm">Assembled cross-functional team of 8 members including designers, developers, and QA specialists.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaFile className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">Requirements Gathering</h4>
              <p className="text-sm">Conducted stakeholder interviews and created detailed requirements documentation.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">Timeline Development</h4>
              <p className="text-sm">Created project roadmap with key milestones and delivery dates.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Design Phase",
      status: "Completed",
      dates: "Jan 21 - Feb 15, 2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaFile className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">User Research</h4>
              <p className="text-sm">Conducted user interviews and created personas to guide design decisions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaFile className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">Wireframing</h4>
              <p className="text-sm">Created low-fidelity wireframes for key user flows and interfaces.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaFile className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">UI Design</h4>
              <p className="text-sm">Developed high-fidelity mockups and design system components.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaUsers className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-medium">Design Review</h4>
              <p className="text-sm">Conducted stakeholder review sessions and incorporated feedback.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Development Phase",
      status: "In Progress",
      dates: "Feb 16 - Apr 10, 2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <div>
              <h4 className="font-medium">Frontend Development</h4>
              <p className="text-sm">Building responsive UI components and implementing user flows.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs mt-1">75% Complete</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <div>
              <h4 className="font-medium">Backend Development</h4>
              <p className="text-sm">Implementing API endpoints and database architecture.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs mt-1">60% Complete</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaHourglassHalf className="text-yellow-500 mt-1" />
            <div>
              <h4 className="font-medium">Integration</h4>
              <p className="text-sm">Connecting frontend and backend systems.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-xs mt-1">30% Complete</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Testing Phase",
      status: "Upcoming",
      dates: "Apr 11 - Apr 25, 2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaHourglassHalf className="text-gray-400 mt-1" />
            <div>
              <h4 className="font-medium">Unit Testing</h4>
              <p className="text-sm">Testing individual components and functions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaHourglassHalf className="text-gray-400 mt-1" />
            <div>
              <h4 className="font-medium">Integration Testing</h4>
              <p className="text-sm">Testing interactions between components and systems.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaHourglassHalf className="text-gray-400 mt-1" />
            <div>
              <h4 className="font-medium">User Acceptance Testing</h4>
              <p className="text-sm">Final validation with stakeholders and end users.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>;
      case 'In Progress':
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span>;
      case 'Upcoming':
        return <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Upcoming</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaCalendar className="text-purple-500" />
            Project Timeline
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
          {projectPhases.map((phase, index) => (
            <Collapsible_25
              key={index}
              title={`${phase.title} - ${phase.status} (${phase.dates})`}
              defaultOpen={index === 0}
            >
              {phase.content}
            </Collapsible_25>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_25; 