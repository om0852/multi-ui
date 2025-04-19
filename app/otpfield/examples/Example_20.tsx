'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../tsx/OtpField_20';

export default function Example_20() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Subscription Activation</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your subscription activation code
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={19} 
            onComplete={(code: string) => console.log(code)}
            validationRegex={/^[A-Z0-9]*$/}
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
              <InputOTPSeparator />
              <InputOTPSlot 
                index={16}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={17}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={18}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <div className='flex flex-col items-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This code can only be used once
              </p>
            </div>
            <div className='flex gap-4'>
              <button className='text-sm text-blue-500 hover:underline flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Invoice
              </button>
              <button className='text-sm text-blue-500 hover:underline flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
