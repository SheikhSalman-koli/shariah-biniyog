'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import '@splidejs/react-splide/css';
import React from 'react'

export default function LowRiskCards({data}) {
  return (
    <div>
         <Splide
        options={{
          type: 'loop',
          perPage: 1,
          gap: '20px',
          autoplay: true,
          speed: 400,
          focus: 'center', // Keep focus center for a nice transition effect
          trimSpace: false,
          pagination: false,
          arrows: false,
          drag: true,
          // --- THE KEY CHANGES ARE HERE ---
          // 1. Setting padding on the right to reveal the next slide.
          // I'm using '25%' which roughly reveals 1/3 to 1/4 of the next card.
          // You might need to adjust this percentage based on your card width (280px).
          padding: {
            right: '25%',
            left: '0', // Keep the left side clean, or set it to '25%' to center the active card nicely
          },
          // 2. Ensuring the slides are not constrained by the track size.
          // autoWidth: true is also a great option if all cards are the same width.
          width: '100%',

          // Optional: Responsive settings for smaller padding on tiny screens
          breakpoints: {
            640: {
              padding: { right: '15%' }, // Less padding on very small screens
            },
          }
        }}
      >
        {data.map(campaing => (
          <SplideSlide
            key={campaing?.id}
          >
            <div className="rounded-xl border border-indigo-100 h-full ">
             <div className='relative'>
               <Image
                width={280}
                height={170}
                className="h-[170px] w-full object-cover rounded-t-xl"
                src={campaing?.image}
                alt={campaing?.title}
              />
              <div className='absolute bottom-3 left-3 flex rounded-sm overflow-hidden bg-white/0'>
                 <p className='bg-white text-gray-700 col-span-2 px-1 pt-1 text-[6px]'>RISK <br /> GRADE</p>
                 <p className='bg-orange-400 text-white col-span-1 px-1 pt-1 text-sm'>{campaing?.grade}</p>
              </div>
             </div>
              <div className='p-2'>
                <p className='text-sm'>{campaing?.title}</p>
                <p className='text-sm'><span className='font-bold text-base'>{campaing?.anualizedReturn}</span> annualized return</p>
                <p className='text-sm'><span className='font-bold text-base'>{campaing?.duration}</span> Months</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
