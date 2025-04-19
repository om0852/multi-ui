import React from 'react'
import { CenterSlideLink } from './tsx/Link_3'

export default function Example() {
    return (
      <div className="space-y-4">
        <CenterSlideLink className='w-[20vh]' href="/home" underlineColor="bg-blue-500">
          Home
        </CenterSlideLink>
        <CenterSlideLink href="/about" underlineColor="bg-green-500">
          About Us
        </CenterSlideLink>
        <CenterSlideLink href="/contact" underlineColor="bg-red-500">
          Contact
        </CenterSlideLink>
      </div>
    )
  }
  