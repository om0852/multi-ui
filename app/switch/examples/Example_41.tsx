"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_41";

const SwitchExample41 = () => {
  const [autoTranslate, setAutoTranslate] = useState(true);
  const [spellCheck, setSpellCheck] = useState(true);
  const [altText, setAltText] = useState(false);
  const [rtlSupport, setRtlSupport] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Language Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Configure language and accessibility preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Translation */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Translation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoTranslate
                    ? "Translate foreign content automatically"
                    : "Show original language only"}
                </p>
              </div>
              <Switch
                value={autoTranslate}
                onChange={setAutoTranslate}
              />
            </div>
            {autoTranslate && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Translates to your preferred language
              </div>
            )}
          </div>

          {/* Spell Check */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Spell Check
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {spellCheck
                    ? "Check spelling while typing"
                    : "No spell checking"}
                </p>
              </div>
              <Switch
                value={spellCheck}
                onChange={setSpellCheck}
              />
            </div>
            {spellCheck && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Multi-language spell checking
              </div>
            )}
          </div>

          {/* Alt Text */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Image Alt Text
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {altText
                    ? "Show image descriptions"
                    : "Hide image descriptions"}
                </p>
              </div>
              <Switch
                value={altText}
                onChange={setAltText}
              />
            </div>
            {altText && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Enhanced accessibility
              </div>
            )}
          </div>

          {/* RTL Support */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  RTL Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {rtlSupport
                    ? "Right-to-left layout enabled"
                    : "Left-to-right layout"}
                </p>
              </div>
              <Switch
                value={rtlSupport}
                onChange={setRtlSupport}
              />
            </div>
            {rtlSupport && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Optimized for RTL languages
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="mb-3 text-sm font-medium text-yellow-900 dark:text-yellow-100">
              Language Configuration
            </h4>
            <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>• {autoTranslate ? "Auto translation on" : "Manual translation"}</p>
              <p>• {spellCheck ? "Spell checking active" : "No spell check"}</p>
              <p>• {altText ? "Alt text visible" : "Alt text hidden"}</p>
              <p>• {rtlSupport ? "RTL mode enabled" : "LTR mode only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample41; 