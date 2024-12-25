"use client"
import React from 'react'
import CircularProgressBar from './_components/CircularProgressBar_10'
import WaveCircularProgressBar from './_components/CircularProgressBar_4'
import ParticleCircularProgressBar from './_components/CircularProgressBar_4'
import GradientCircularProgressBar from './_components/CircularProgressBar_5'
import TexturedCircularProgressBar from './_components/CircularProgressBar_5'
import SegmentedCircularProgressBar from './_components/CircularProgressBar_6'
import RotatingSegmentCircularProgressBar from './_components/CircularProgressBar_7'
import PulsingRadialCircularProgressBar from './_components/CircularProgressBar_8'
import RotatingProgressBar from './_components/CircularProgressBar_9'
import WaveformCircularProgressBar from './_components/CircularProgressBar_10'
import BlobCircularProgressBar from './_components/CircularProgressBar_10'
import Dashboard from './_components/CircularProgressBar_10'

const page = () => {
  return (
    <div>
{/* <WaveCircularProgressBar progress={60} size={150} waveColor="#1E90FF" backgroundColor="#F0F0F0" /> */}
{/* <ParticleCircularProgressBar progress={75} size={150} ringColor="#00BFFF" particleColor="#FF4500" backgroundColor="#EEE" /> */}
 {/* <TexturedCircularProgressBar progress={85} size={150} ringColor="#1E90FF" backgroundColor="#EEE" textureImage="https://via.placeholder.com/10" /> */}
  {/* <SegmentedCircularProgressBar progress={75} size={150} segmentColor="#FF6347" backgroundColor="#EEE" /> */}
  {/* <RotatingSegmentCircularProgressBar progress={75} size={150} segmentColor="#FFD700" backgroundColor="#EEE" /> */}
  {/* <PulsingRadialCircularProgressBar progress={80} size={150} progressColor="#FFD700" backgroundColor="#EEE" /> */}
{/* <RotatingProgressBar progress={75} size={150} progressColor="#00BFFF" backgroundColor="#EEE" /> */}
      <CircularProgressBar value={75} max={100} size={120} strokeWidth={10} />
{/* <Dashboard/>m */}
    </div>
  )
}

export default page
