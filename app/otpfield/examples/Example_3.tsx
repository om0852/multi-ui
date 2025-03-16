'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_3';

export default function Example_3() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Gift Card Code Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Redeem Gift Card</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your 12-character gift card code
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={12} onComplete={(code: string) => console.log(code)} validationRegex={/^[A-Z0-9]*$/}>
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
              <InputOTPSeparator />
              <InputOTPSlot index={8} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={9} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={10} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={11} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Example format: XXXX-XXXX-XXXX
          </p>
        </div>
      </div>

      {/* Referral Code Example */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Enter Referral Code</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your friend&apos;s referral code to get a bonus
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={6} onComplete={(code: string) => console.log(code)} validationRegex={/^[A-Z0-9]*$/}>
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
            Enter code in uppercase letters and numbers only
          </p>
        </div>
      </div>
    </div>
  );
}
