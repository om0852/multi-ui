import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Card_2: React.FC<CardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-center dark:bg-black"></div>
      
      {/* Card Container */}
      <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        
        {/* Image Section */}
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            src={imageUrl}
            alt={title}
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{title}</h1>
          <h2 className="text-sm font-light text-gray-200 shadow-xl">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card_2;
