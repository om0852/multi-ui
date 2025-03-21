"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_29";

const SkeletonExample29 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const CartItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-4 py-4">
      <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
      <div className="flex flex-1 justify-between">
        <div className="space-y-2">
          <Skeleton width="160px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <div className="flex items-center space-x-2">
            <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="text-right">
          <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const ShippingForm = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const PaymentSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Card Details */}
      <div className="space-y-2">
        <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const OrderSummary = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="flex justify-between">
          <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="100%" height="48px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Checkout Skeleton</h2>
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
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Light Mode */}
        <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* Shipping Form */}
          <div className="space-y-4">
            <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
            <ShippingForm />
          </div>

          {/* Payment Section */}
          <div className="space-y-4">
            <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
            <PaymentSection />
          </div>

          {/* Order Summary */}
          <OrderSummary />
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Cart Items */}
          <div className="divide-y divide-gray-700">
            <CartItem className="bg-gray-700" />
            <CartItem className="bg-gray-700" />
            <CartItem className="bg-gray-700" />
          </div>

          {/* Shipping Form */}
          <div className="space-y-4">
            <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
            <ShippingForm className="bg-gray-700" />
          </div>

          {/* Payment Section */}
          <div className="space-y-4">
            <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
            <PaymentSection className="bg-gray-700" />
          </div>

          {/* Order Summary */}
          <OrderSummary className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample29; 