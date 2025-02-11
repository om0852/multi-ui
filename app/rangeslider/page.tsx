import React from 'react'
import RangeSlider from './_components/RangeSlider_5'

const page = () => {
  return (
    <div>
            <RangeSlider
        min={0}
        max={100}
        step={1}
        defaultValue={25}
      />

    </div>
  )
}

export default page
