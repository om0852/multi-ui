"use client"

import React, { useState } from 'react';
import Collapsible_5 from '../tsx/Collapsible_5';
import { FaFolder, FaFile, FaStar, FaHardDrive, FaImage, FaFileCode, FaFilePdf, FaFileWord } from 'react-icons/fa6';

const Example_5: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const explorerSections = [
    {
      title: "Recent Files",
      icon: <FaFile className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Project Proposal.docx", type: "word", date: "2 hours ago", size: "2.5 MB" },
            { name: "Presentation.pdf", type: "pdf", date: "Yesterday", size: "5.1 MB" },
            { name: "styles.css", type: "code", date: "2 days ago", size: "45 KB" }
          ].map((file, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 gap-2 sm:gap-0">
              <div className="flex items-center gap-3">
                {file.type === "word" && <FaFileWord className="text-blue-500" />}
                {file.type === "pdf" && <FaFilePdf className="text-red-500" />}
                {file.type === "code" && <FaFileCode className="text-green-500" />}
                <div>
                  <h4 className="font-medium dark:text-white">{file.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Modified {file.date}</p>
                </div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-8 sm:ml-0">{file.size}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Storage",
      icon: <FaHardDrive className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
              <div>
                <h4 className="font-medium dark:text-white">Storage Usage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">75.5 GB of 100 GB used</p>
              </div>
              <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">75.5%</span>
            </div>
            <div className="w-full bg-purple-200 dark:bg-purple-800 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full" style={{ width: '75.5%' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { type: "Images", size: "32.5 GB", icon: <FaImage className="text-pink-500" /> },
              { type: "Documents", size: "15.2 GB", icon: <FaFile className="text-blue-500" /> },
              { type: "Code", size: "8.8 GB", icon: <FaFileCode className="text-green-500" /> },
              { type: "Other", size: "19 GB", icon: <FaFolder className="text-yellow-500" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                {item.icon}
                <div>
                  <h4 className="font-medium dark:text-white">{item.type}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Favorites",
      icon: <FaStar className="text-yellow-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Documents", type: "folder", items: 15 },
            { name: "Projects", type: "folder", items: 8 },
            { name: "Images", type: "folder", items: 24 }
          ].map((folder, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 gap-2 sm:gap-0">
              <div className="flex items-center gap-3">
                <FaFolder className="text-yellow-500" />
                <h4 className="font-medium dark:text-white">{folder.name}</h4>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-8 sm:ml-0">{folder.items} items</span>
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
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaFolder className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            File Explorer
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
          {explorerSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-3 sm:mt-4 mr-2 sm:mr-3">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_5
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_5; 