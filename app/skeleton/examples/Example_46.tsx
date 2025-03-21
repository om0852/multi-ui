"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_46";

const SkeletonExample46 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const AccountCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
          <div className="space-y-1">
            <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80px" height="12px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="space-y-1">
        <Skeleton width="140px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const TransactionItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="140px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <div className="text-right">
        <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const BudgetCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center justify-between">
        <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const InsightCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="140px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const SpendingChart = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton width="160px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Skeleton width="12px" height="12px" borderRadius="9999px" className={className} />
            <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Skeleton width="12px" height="12px" borderRadius="9999px" className={className} />
            <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Skeleton width="12px" height="12px" borderRadius="9999px" className={className} />
            <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Banking & Finance Skeleton</h2>
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
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
              </div>
            </div>
            
            {/* Accounts */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <AccountCard />
                <AccountCard />
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-200" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-200" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-200" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-200" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              </div>
            </div>
            
            {/* Transactions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="divide-y divide-gray-100">
                {[...Array(5)].map((_, i) => (
                  <TransactionItem key={i} />
                ))}
              </div>
            </div>
            
            {/* Budgets */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
              </div>
            </div>
            
            {/* Insights and Spending */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Insights */}
              <div className="space-y-4">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-4">
                  <InsightCard />
                  <InsightCard />
                </div>
              </div>
              
              {/* Spending Chart */}
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <SpendingChart />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
              </div>
            </div>
            
            {/* Accounts */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <AccountCard className="bg-gray-700" />
                <AccountCard className="bg-gray-700" />
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-700" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-700" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-700" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              </div>
              <div className="space-y-2 text-center">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="mx-auto bg-gray-700" />
                <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              </div>
            </div>
            
            {/* Transactions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="divide-y divide-gray-700">
                {[...Array(5)].map((_, i) => (
                  <TransactionItem key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
            
            {/* Budgets */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <BudgetCard className="bg-gray-700" />
                <BudgetCard className="bg-gray-700" />
                <BudgetCard className="bg-gray-700" />
              </div>
            </div>
            
            {/* Insights and Spending */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Insights */}
              <div className="space-y-4">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-4">
                  <InsightCard className="bg-gray-700" />
                  <InsightCard className="bg-gray-700" />
                </div>
              </div>
              
              {/* Spending Chart */}
              <div className="rounded-lg border border-gray-700 p-4">
                <SpendingChart className="bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample46; 