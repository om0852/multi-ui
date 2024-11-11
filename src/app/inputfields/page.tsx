"use client"
import React from 'react'
import InputField from './_components/InputField_1'

const Page = () => {
  return (
    <div className='p-[10vh]'>
      <InputField label='Email' value='' onChange={()=>2+2} />
    </div>
  )
}

export default Page
