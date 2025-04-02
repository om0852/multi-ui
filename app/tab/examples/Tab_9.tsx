"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_9";

const TabExample9 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-rose-800 dark:text-rose-200">Animated Portfolio</h2>
      
      <Tabs defaultValue="projects" className="w-full">
        <TabsList activeTab="projects" setActiveTab={() => {}}>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="bg-white dark:bg-rose-900/40 p-6 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-rose-900 dark:text-rose-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Featured Projects
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">E-commerce Platform</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Full-stack development</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Mobile App</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Cross-platform</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>Redux</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="skills" className="bg-white dark:bg-rose-900/40 p-6 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-rose-900 dark:text-rose-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Frontend</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Web technologies</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind</span>
                </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Backend</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Server technologies</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="experience" className="bg-white dark:bg-rose-900/40 p-6 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-rose-900 dark:text-rose-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7m18 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5m18 0h-2.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293h-3.172a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 0 6.586 13H4"></path>
              </svg>
              Work Experience
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Senior Developer</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Tech Corp</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>2020-2023</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Lead Developer</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">StartupX</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>2018-2020</span>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact" className="bg-white dark:bg-rose-900/40 p-6 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-rose-900 dark:text-rose-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Information
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Email</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Get in touch</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>contact@example.com</span>
                </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 dark:text-rose-100">Social</h4>
                <p className="text-sm text-rose-700 dark:text-rose-300">Connect online</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                  <span>LinkedIn</span>
                  <span>GitHub</span>
                  <span>Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample9; 