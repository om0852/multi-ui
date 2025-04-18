"use client";

import React from 'react';
import Card22 from '../_components/Card_22';

const Example_22 = () => {
  const featuredCourse = {
    title: "Complete Web Development Bootcamp",
    description: "Master full-stack web development with this comprehensive course covering modern technologies and best practices.",
    link: "/courses/web-dev-bootcamp",
    imageUrl: "https://picsum.photos/seed/220/1200/400",
    btnText: "Enroll Now"
  };

  const popularCourses = [
    {
      title: "React & Next.js Masterclass",
      description: "Build modern web applications with React and Next.js framework.",
      link: "/courses/react-nextjs",
      imageUrl: "https://picsum.photos/seed/221/800/600",
      btnText: "Learn More"
    },
    {
      title: "Node.js Backend Development",
      description: "Create scalable backend services with Node.js and Express.",
      link: "/courses/nodejs",
      imageUrl: "https://picsum.photos/seed/222/800/600",
      btnText: "Start Learning"
    },
    {
      title: "Advanced TypeScript",
      description: "Deep dive into TypeScript features and advanced patterns.",
      link: "/courses/typescript",
      imageUrl: "https://picsum.photos/seed/223/800/600",
      btnText: "Explore"
    }
  ];

  const upcomingCourses = [
    {
      title: "Cloud Architecture",
      description: "Learn cloud architecture patterns and best practices for scalable applications.",
      link: "/courses/cloud",
      imageUrl: "https://picsum.photos/seed/224/800/600",
      btnText: "Join Waitlist"
    },
    {
      title: "DevOps Engineering",
      description: "Master DevOps tools and practices for modern development workflows.",
      link: "/courses/devops",
      imageUrl: "https://picsum.photos/seed/225/800/600",
      btnText: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-emerald-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Courses
        </h2>
        <p className="text-emerald-200 text-center mb-8 max-w-2xl mx-auto">
          Advance your career with our comprehensive courses taught by industry experts.
        </p>

        {/* Featured Course - Full Width */}
        <div className="mb-12">
          <Card22 {...featuredCourse} />
        </div>

        {/* Popular Courses - 3 Column Grid */}
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-100 mb-6">
          Popular Courses
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularCourses.map((course, index) => (
            <div key={index} className="h-full">
              <Card22 {...course} />
            </div>
          ))}
        </div>

        {/* Upcoming Courses - 2 Column Grid */}
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-100 mb-6">
          Coming Soon
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {upcomingCourses.map((course, index) => (
            <div key={index} className="h-full">
              <Card22 {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_22; 