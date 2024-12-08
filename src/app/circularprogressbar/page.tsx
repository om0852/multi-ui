import React from 'react'
import CircularProgressBar from './_components/CircularProgressBar'

const page = () => {
  return (
    <div>
       <CircularProgressBar progress={75} size={120} strokeWidth={4} color="#FF6347" backgroundColor="#ddd" animationDuration={10} />

    </div>
  )
}

export default page
