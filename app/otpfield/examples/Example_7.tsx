'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_7';

export default function Example_7() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Payment Confirmation Code */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Payment Confirmation</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 6-digit code sent to your mobile number +1 (***) ***-1234
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
            Code expires in <span className='font-medium text-blue-500'>02:59</span>
          </p>
        </div>
      </div>

      {/* Transaction Amount Confirmation */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Confirm Amount</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the last 4 digits of the transaction amount to confirm
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={4} onComplete={(amount: string) => console.log(amount)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Example: For $1,234.56, enter 3456
          </p>
        </div>
      </div>
    </div>
  );
}
