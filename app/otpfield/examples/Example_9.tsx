'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_9';

export default function Example_9() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Flight Booking Reference */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Flight Booking</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your 6-character booking reference
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={6} onComplete={(ref: string) => console.log(ref)} validationRegex={/^[A-Z0-9]*$/}>
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
            Found on your booking confirmation email
          </p>
        </div>
      </div>

      {/* Seat Assignment */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Seat Number</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your assigned seat number
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={3} onComplete={(seat: string) => console.log(seat)} validationRegex={/^[A-Z0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Format: Row number + Seat letter (e.g., 12A)
          </p>
        </div>
      </div>
    </div>
  );
}
