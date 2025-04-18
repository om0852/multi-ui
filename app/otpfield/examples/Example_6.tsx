'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_6';

export default function Example_6() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Wallet Address Verification */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Verify Wallet Address</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the first and last 4 characters of your wallet address to confirm
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={8} onComplete={(code: string) => console.log(code)} validationRegex={/^[A-Za-z0-9]*$/}>
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
            Example: If your address is 0x1234...5678, enter 1234-5678
          </p>
        </div>
      </div>

      {/* Network ID Verification */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Network ID</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 5-digit network identifier
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={5} onComplete={(id: string) => console.log(id)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={4} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Find this in your network configuration settings
          </p>
        </div>
      </div>
    </div>
  );
}
