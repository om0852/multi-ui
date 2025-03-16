'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_2';

export default function Example_2() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Phone Number Verification Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Phone Verification</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 4-digit code sent to your phone number +1 (***) ***-5678
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={4} onComplete={(otp: string) => console.log(otp)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Code expires in <span className='font-medium'>05:00</span>
          </p>
        </div>
      </div>

      {/* Authentication Code Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>2FA Authentication</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 6-digit code from your authenticator app
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={6} onComplete={(key: string) => console.log(key)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={4} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={5} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Code refreshes in <span className='font-medium'>25 seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
}
