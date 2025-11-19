import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function TopBanner() {
  return (
    <div className="relative w-full max-w-xl mx-auto bg-[url('/top-banner.jpg')] bg-gray-400 h-[150px] bg-cover bg-center rounded-2xl p-5">
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        <div className='relative text-white flex justify-between'>
            <div>
                <p>FAINANCED</p>
                <p>983 million+</p>
            </div>
            <div>
                <p>REPAID</p>
                <p>345 million+</p>
            </div>
            <div>
                <p>INVESTMENT</p>
                <p>800+</p>
            </div>
        </div>
        <div className='relative h-16 flex justify-end items-end text-white'>
            <button className='flex gap-1 items-center text-sm'>
                See Completed Campaings
                <ArrowRight size={15}/>
            </button>
        </div>
        <div></div>
    </div>
  )
}
