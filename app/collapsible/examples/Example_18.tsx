"use client"

import React, { useState } from 'react';
import Collapsible_18 from '../_components/Collapsible_18';
import { FaBriefcase, FaBuilding, FaLocationDot, FaClock, FaBookmark} from 'react-icons/fa6';

const Example_18: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const jobSections = [
    {
      title: "Featured Jobs",
      icon: <FaBriefcase className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Senior Frontend Developer",
              company: "TechCorp Inc.",
              location: "San Francisco, CA",
              salary: "$120k - $150k",
              type: "Full-time",
              posted: "2 days ago"
            },
            {
              title: "Product Manager",
              company: "InnovateLabs",
              location: "New York, NY",
              salary: "$110k - $140k",
              type: "Full-time",
              posted: "3 days ago"
            },
            {
              title: "UX Designer",
              company: "DesignStudio",
              location: "Remote",
              salary: "$90k - $120k",
              type: "Contract",
              posted: "1 day ago"
            }
          ].map((job, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{job.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <FaBuilding />
                    <span>{job.company}</span>
                    <span>&bull;</span>
                    <FaLocationDot />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button className="text-blue-500 hover:text-blue-600">
                    <FaBookmark />
                  </button>
                  <div className="text-sm text-gray-500 mt-2">
                    {job.posted}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Recent Applications",
      icon: <FaClock className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              role: "Backend Developer",
              company: "CloudTech Solutions",
              status: "Under Review",
              applied: "1 week ago",
              stage: "Technical Interview"
            },
            {
              role: "DevOps Engineer",
              company: "ServerPro",
              status: "Rejected",
              applied: "2 weeks ago",
              stage: "Final Round"
            },
            {
              role: "Full Stack Developer",
              company: "WebStack Inc.",
              status: "Accepted",
              applied: "3 weeks ago",
              stage: "Offer Extended"
            }
          ].map((application, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{application.role}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {application.company}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      application.status === 'Accepted' 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                        : application.status === 'Rejected'
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {application.status}
                    </span>
                    <span className="text-xs text-gray-500">&bull;</span>
                    <span className="text-xs text-gray-500">{application.stage}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {application.applied}
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Saved Jobs",
      icon: <FaBookmark className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Mobile App Developer",
              company: "AppWorks",
              location: "Austin, TX",
              deadline: "5 days left",
              matches: 8
            },
            {
              title: "Data Scientist",
              company: "DataCorp",
              location: "Boston, MA",
              deadline: "1 week left",
              matches: 6
            },
            {
              title: "Cloud Architect",
              company: "CloudSys",
              location: "Seattle, WA",
              deadline: "3 days left",
              matches: 9
            }
          ].map((job, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{job.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <FaBuilding />
                    <span>{job.company}</span>
                    <span>&bull;</span>
                    <FaLocationDot />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500">
                      {job.matches} skills match
                    </span>
                    <span className="text-gray-500">&bull;</span>
                    <span className="text-red-500">{job.deadline}</span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  <FaBookmark />
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaBriefcase className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Job Board
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
          {jobSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_18
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_18>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_18; 