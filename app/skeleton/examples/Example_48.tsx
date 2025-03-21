"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_48";

const SkeletonExample48 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProductGallery = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton 
        width="100%" 
        height="400px" 
        borderRadius={borderRadius} 
        className={className} 
      />
      <div className="grid grid-cols-5 gap-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton 
            key={i}
            width="100%" 
            height="80px" 
            borderRadius={borderRadius} 
            className={className} 
          />
        ))}
      </div>
    </div>
  );

  const ProductInfo = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton width="70%" height="32px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton 
                key={i}
                width="16px" 
                height="16px" 
                borderRadius={borderRadius} 
                className={className} 
              />
            ))}
          </div>
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          <span className="px-2 text-gray-400">|</span>
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex items-baseline space-x-2">
          <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton 
              key={i}
              width="48px" 
              height="48px" 
              borderRadius={borderRadius} 
              className={className} 
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton 
              key={i}
              width="60px" 
              height="36px" 
              borderRadius={borderRadius} 
              className={className} 
            />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Skeleton width="36px" height="36px" borderRadius={borderRadius} className={className} />
          <Skeleton width="36px" height="36px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="36px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="180px" height="48px" borderRadius={borderRadius} className={className} />
        <Skeleton width="180px" height="48px" borderRadius={borderRadius} className={className} />
      </div>

      <div className="space-y-2">
        <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const ProductSpecs = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="200px" height="24px" borderRadius={borderRadius} className={className} />
      
      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-1">
            <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="100%" height="20px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  const ReviewItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
          <div className="space-y-1">
            <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton 
              key={i}
              width="16px" 
              height="16px" 
              borderRadius={borderRadius} 
              className={className} 
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton width="180px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="flex items-center space-x-1">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const RelatedProduct = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <Skeleton width="100%" height="180px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80%" height="20px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton 
            key={i}
            width="14px" 
            height="14px" 
            borderRadius={borderRadius} 
            className={className} 
          />
        ))}
        <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton width="70px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize E-commerce Product Skeleton</h2>
        <div>
          <label className="block text-sm font-medium">Border Radius</label>
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          >
            <option value="0px">None</option>
            <option value="4px">Small</option>
            <option value="8px">Medium</option>
            <option value="16px">Large</option>
          </select>
        </div>
      </div>

      {/* Examples */}
      <div className="grid gap-8">
        {/* Light Mode */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-8">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2">
              <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              <span>/</span>
              <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              <span>/</span>
              <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            {/* Product Section */}
            <div className="grid gap-8 md:grid-cols-2">
              <ProductGallery />
              <ProductInfo />
            </div>
            
            {/* Specifications */}
            <ProductSpecs />
            
            {/* Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <ReviewItem key={i} />
                ))}
              </div>
              
              <div className="flex justify-center pt-4">
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>
            
            {/* Related Products */}
            <div className="space-y-4">
              <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <RelatedProduct key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2">
              <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              <span className="text-gray-400">/</span>
              <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              <span className="text-gray-400">/</span>
              <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            {/* Product Section */}
            <div className="grid gap-8 md:grid-cols-2">
              <ProductGallery className="bg-gray-700" />
              <ProductInfo className="bg-gray-700" />
            </div>
            
            {/* Specifications */}
            <ProductSpecs className="bg-gray-700" />
            
            {/* Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <ReviewItem key={i} className="bg-gray-700" />
                ))}
              </div>
              
              <div className="flex justify-center pt-4">
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>
            
            {/* Related Products */}
            <div className="space-y-4">
              <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <RelatedProduct key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample48; 