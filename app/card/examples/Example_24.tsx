"use client";

import React from 'react';
import Card24 from '../tsx/Card_24';

const Example_24 = () => {
  const featuredProject = {
    title: "E-Commerce Platform Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on user experience, performance, and conversion optimization. Built with Next.js and Tailwind CSS.",
    link: "/portfolio/ecommerce",
    imageUrl: "https://picsum.photos/seed/240/1200/600",
    btnText: "View Case Study"
  };

  const portfolioProjects = [
    {
      title: "Mobile Banking App",
      description: "Modern banking application with biometric authentication and real-time transactions.",
      link: "/portfolio/banking-app",
      imageUrl: "https://picsum.photos/seed/241/800/1000",
      btnText: "View Project"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights and predictive modeling.",
      link: "/portfolio/analytics",
      imageUrl: "https://picsum.photos/seed/242/800/1200",
      btnText: "Explore"
    },
    {
      title: "Social Media Platform",
      description: "Feature-rich social platform with real-time messaging and content sharing.",
      link: "/portfolio/social",
      imageUrl: "https://picsum.photos/seed/243/800/600",
      btnText: "Learn More"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management and telemedicine.",
      link: "/portfolio/healthcare",
      imageUrl: "https://picsum.photos/seed/244/800/600",
      btnText: "View Details"
    },
    {
      title: "Educational Platform",
      description: "Interactive learning platform with video courses and progress tracking.",
      link: "/portfolio/education",
      imageUrl: "https://picsum.photos/seed/245/800/1000",
      btnText: "See Project"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-blue-200 text-center mb-8 max-w-2xl mx-auto">
          Explore our latest work in web development, mobile applications, and digital experiences.
        </p>

        {/* Hero Project */}
        <div className="mb-12">
          <Card24 {...featuredProject} />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Item - Spans 2 Rows */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Card24 {...portfolioProjects[0]} />
          </div>

          {/* Tall Item - Spans 2 Rows */}
          <div className="lg:row-span-2">
            <Card24 {...portfolioProjects[1]} />
          </div>

          {/* Regular Items */}
          <div>
            <Card24 {...portfolioProjects[2]} />
          </div>
          <div>
            <Card24 {...portfolioProjects[3]} />
          </div>

          {/* Large Item - Spans 2 Columns on Small Screens */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Card24 {...portfolioProjects[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_24; 