'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../tsx/OtpField_14';

export default function Example_14() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Gift Card Activation</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 16-digit code from your gift card
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={16} 
            onComplete={(code: string) => console.log(code)}
            validationRegex={/^[0-9]*$/}
          >
            <InputOTPGroup>
              <InputOTPSlot 
                index={0}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={1}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={2}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={3}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSeparator />
              <InputOTPSlot 
                index={4}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={5}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={6}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={7}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSeparator />
              <InputOTPSlot 
                index={8}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={9}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={10}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={11}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSeparator />
              <InputOTPSlot 
                index={12}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={13}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={14}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={15}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            The code is located on the back of your gift card
          </p>
        </div>
      </div>
    </div>
  );
}
