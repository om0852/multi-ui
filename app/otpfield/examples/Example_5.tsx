'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../tsx/OtpField_5';

export default function Example_5() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* PIN Code Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Create PIN</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Set up a 4-digit PIN to secure your account
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={4} onComplete={(pin: string) => console.log(pin)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Use numbers only (0-9)
          </p>
        </div>
      </div>

      {/* Confirm PIN Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Confirm PIN</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Re-enter your PIN to confirm
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={4} onComplete={(pin: string) => console.log(pin)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Make sure both PINs match
          </p>
        </div>
      </div>
    </div>
  );
}
