'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_8';

export default function Example_8() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Wi-Fi Password Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Wi-Fi Access</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 8-character Wi-Fi password for &quot;Guest Network&quot;
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={8} onComplete={(pwd: string) => console.log(pwd)} validationRegex={/^[A-Za-z0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={4} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={5} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={6} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={7} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Password is case-sensitive and alphanumeric only
          </p>
        </div>
      </div>

      {/* Room Access Code */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Room Access</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your 6-digit room access code
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={6} onComplete={(code: string) => console.log(code)} validationRegex={/^[0-9]*$/}>
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
            Code can be found in your check-in email
          </p>
        </div>
      </div>
    </div>
  );
}
