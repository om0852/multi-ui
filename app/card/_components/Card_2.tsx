import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_2: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 [perspective:1000px] group">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{title}</h3>
            <p className="text-white text-sm sm:text-base text-center mb-4">{description}</p>
            <Link 
              href={link} 
              className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_2;
