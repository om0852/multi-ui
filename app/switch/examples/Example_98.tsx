"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_98";

const SwitchExample98 = () => {
  const [autoComplete, setAutoComplete] = useState(true);
  const [syntaxHighlighting, setSyntaxHighlighting] = useState(true);
  const [codeFormatting, setCodeFormatting] = useState(false);
  const [errorChecking, setErrorChecking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Code Editor Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your coding experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Complete */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Complete
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoComplete
                    ? "Enable code suggestions"
                    : "Manual code entry"}
                </p>
              </div>
              <Switch
                checked={autoComplete}
                onChange={setAutoComplete}
              />
            </div>
            {autoComplete && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Intelligent code completion
              </div>
            )}
          </div>

          {/* Syntax Highlighting */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Syntax Highlighting
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {syntaxHighlighting
                    ? "Color-coded syntax"
                    : "Plain text view"}
                </p>
              </div>
              <Switch
                checked={syntaxHighlighting}
                onChange={setSyntaxHighlighting}
              />
            </div>
            {syntaxHighlighting && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Enhanced code readability
              </div>
            )}
          </div>

          {/* Code Formatting */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Code Formatting
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {codeFormatting
                    ? "Auto-format code"
                    : "Manual formatting"}
                </p>
              </div>
              <Switch
                checked={codeFormatting}
                onChange={setCodeFormatting}
              />
            </div>
            {codeFormatting && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Consistent code style
              </div>
            )}
          </div>

          {/* Error Checking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Error Checking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {errorChecking
                    ? "Real-time error detection"
                    : "Basic error checking"}
                </p>
              </div>
              <Switch
                checked={errorChecking}
                onChange={setErrorChecking}
              />
            </div>
            {errorChecking && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Instant error feedback
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Code Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoComplete ? "Auto complete on" : "Manual entry"}</p>
              <p>• {syntaxHighlighting ? "Syntax highlighting on" : "Plain text"}</p>
              <p>• {codeFormatting ? "Auto formatting on" : "Manual formatting"}</p>
              <p>• {errorChecking ? "Error checking on" : "Basic checking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample98; 