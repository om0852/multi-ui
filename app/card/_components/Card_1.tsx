import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_1: React.FC<CardProps> = ({ title, description, link, imageUrl,btnText }) => {
  return (
    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
      {/* Image Section */}
      <img
        className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        src={imageUrl}
        alt={title}
      />

      {/* Overlay Shadow */}
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      
      {/* Gradient and Text Section */}
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        {/* Title */}
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">{title}</p>
        </div>
        
        {/* Description */}
        <div className="absolute w-full flex place-content-center mt-20">
          <p className="font-sans text-center w-4/5 text-white mt-5">{description}</p>
        </div>
        
        {/* Button Link */}
        <div className="absolute left-1/4 bottom-4">
          <Link href={link}  className="bg-white text-black font-bold rounded-lg h-10 w-48 flex items-center justify-center">
              {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card_1;
