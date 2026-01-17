import React from 'react'
import Marquee from 'react-fast-marquee'

export default function LatestNews() {
  return (
    <div className='flex gap-5 mx-auto w-10/12 bg-base-200 p-3 rounded-lg'>
        <div className="btn btn-secondary text-base-100 px-3 py-2">Latest</div>
        <Marquee className='flex gap-10' pauseOnHover={true}><p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </p> <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </p></Marquee>
    </div>
  )
}
