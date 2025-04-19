"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../tsx/OtpField_1";

export default function Example_1() {
  return (
    <div className="flex flex-col gap-12 p-8">
      {/* Numeric OTP Example */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Verification Code</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please enter the 6-digit verification code sent to your email.
        </p>
        <div className="flex flex-col items-center">
          <InputOTP maxLength={6} onComplete={(otp) => console.log(otp)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={1} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={2} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={4} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={5} value="" onChange={() => {}} onKeyDown={() => {}} />
            </InputOTPGroup>
          </InputOTP>
            </div>
      </div>

      {/* Alphanumeric Product Key Example */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Product Key</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Enter your 8-character product key to activate the software.
        </p>
        <div className="flex flex-col items-center">
          <InputOTP maxLength={8} onComplete={(key) => console.log(key)} validationRegex={/^[A-Z0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={1} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={2} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={3} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSeparator />
              <InputOTPSlot index={4} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={5} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={6} value="" onChange={() => {}} onKeyDown={() => {}} />
              <InputOTPSlot index={7} value="" onChange={() => {}} onKeyDown={() => {}} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            The product key can be found in your purchase confirmation email.
          </p>
        </div>
      </div>
    </div>
  );
}
