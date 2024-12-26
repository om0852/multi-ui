import React from 'react'
// import NumericClock from './_components/Clock_7'
// import Clock3 from './_components/Clock_3'
import DigitalClock from './_components/Clock_13'
import FlipClock from './_components/Clock_14'
import AnalogClock from './_components/Clock_19'
// import AnalogClock from './_components/Clock_8'
// import EnhancedAnalogClock from './_components/Clock_10'
// import EnhancedSquareClock from './_components/Clock_11'
// import EnhancedCircularClock from './_components/Clock_12'

const Page = () => (
    <div className='h-[10vh]'>
        {/* <NumericClock /> */}
        {/* <Clock3/>
         */}

{/* <FlipClock size="small" />
<FlipClock size="medium" />

      <FlipClock
        size="large"
        containerClassName="h-screen bg-black flex justify-center items-center"
        digitClassName="text-yellow-400"
        labelClassName="text-red-500"
      />         */}
      <AnalogClock  />
<AnalogClock   />

       {/* <AnalogClock size={300} borderColor="border-blue-500" /> */}
         {/* <EnhancedAnalogClock/> */}
         {/* <EnhancedSquareClock/> */}
         </div>
)

export default Page
