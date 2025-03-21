"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_91";

const SwitchExample91 = () => {
  const [autoReports, setAutoReports] = useState(true);
  const [competitorTracking, setCompetitorTracking] = useState(true);
  const [sentimentAnalysis, setSentimentAnalysis] = useState(false);
  const [dataExport, setDataExport] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Analytics Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your social media analytics
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Reports */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Reports
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoReports
                    ? "Weekly performance reports"
                    : "Manual report generation"}
                </p>
              </div>
              <Switch
                checked={autoReports}
                onChange={setAutoReports}
              />
            </div>
            {autoReports && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Reports generated every Monday
              </div>
            )}
          </div>

          {/* Competitor Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Competitor Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {competitorTracking
                    ? "Monitor competitor metrics"
                    : "Focus on own metrics only"}
                </p>
              </div>
              <Switch
                checked={competitorTracking}
                onChange={setCompetitorTracking}
              />
            </div>
            {competitorTracking && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Track 5 competitor accounts
              </div>
            )}
          </div>

          {/* Sentiment Analysis */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sentiment Analysis
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sentimentAnalysis
                    ? "Analyze comment sentiment"
                    : "Basic engagement metrics"}
                </p>
              </div>
              <Switch
                checked={sentimentAnalysis}
                onChange={setSentimentAnalysis}
              />
            </div>
            {sentimentAnalysis && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • AI-powered sentiment tracking
              </div>
            )}
          </div>

          {/* Data Export */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Data Export
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {dataExport
                    ? "Export data in multiple formats"
                    : "View data in app only"}
                </p>
              </div>
              <Switch
                checked={dataExport}
                onChange={setDataExport}
              />
            </div>
            {dataExport && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Export to CSV, Excel, and PDF
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Analytics Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoReports ? "Auto reports on" : "Manual reports"}</p>
              <p>• {competitorTracking ? "Competitor tracking on" : "Own metrics only"}</p>
              <p>• {sentimentAnalysis ? "Sentiment analysis on" : "Basic metrics only"}</p>
              <p>• {dataExport ? "Data export enabled" : "In-app viewing only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample91; 