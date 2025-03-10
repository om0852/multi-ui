"use client"

import React, { useState } from 'react';
import Collapsible_5 from '../_components/Collapsible_5';
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
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center gap-3">
                {file.type === "word" && <FaFileWord className="text-blue-500" />}
                {file.type === "pdf" && <FaFilePdf className="text-red-500" />}
                {file.type === "code" && <FaFileCode className="text-green-500" />}
                <div>
                  <h4 className="font-medium">{file.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Modified {file.date}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{file.size}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Favorites",
      icon: <FaStar className="text-yellow-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Documents", type: "folder", items: "15 items" },
            { name: "Projects", type: "folder", items: "8 items" },
            { name: "Images", type: "folder", items: "124 items" }
          ].map((folder, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center gap-3">
                <FaFolder className="text-yellow-500" />
                <div>
                  <h4 className="font-medium">{folder.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{folder.items}</p>
                </div>
              </div>
              <button className="text-yellow-500">
                <FaStar />
              </button>
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
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Storage Used: 75%</span>
              <span className="text-sm text-gray-500">75 GB of 100 GB</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaFileCode className="text-blue-500" />
                <span className="font-medium">Documents</span>
              </div>
              <div className="text-2xl font-bold">25 GB</div>
              <div className="text-sm text-gray-500">42 files</div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaImage className="text-green-500" />
                <span className="font-medium">Images</span>
              </div>
              <div className="text-2xl font-bold">35 GB</div>
              <div className="text-sm text-gray-500">1,240 files</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Storage Tips</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>&bull; Clean up downloads folder</li>
              <li>&bull; Remove unused applications</li>
              <li>&bull; Empty trash bin</li>
            </ul>
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
            <FaFolder className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            File Explorer
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
          {explorerSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
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