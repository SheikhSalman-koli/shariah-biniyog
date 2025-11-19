
import React from 'react'
import LowRiskCards from './LowRiskCards'

export default function FirstTime() {

  const LowRiskCampings = [
    {
      id: 123,
      image: '/rod-cutting.jpg',
      title: 'Rod Cutter',
      anualizedReturn: '12%',
      duration: '3',
      grade: 'B'
    },
    {
      id: 124,
      image: '/drill.jpg',
      title: 'Drill Mechine',
      anualizedReturn: '8%',
      duration: '6',
      grade: 'B+'
    },
    {
      id: 125,
      image: '/plasType.jpeg',
      title: 'Electronic Store',
      anualizedReturn: '11%',
      duration: '4',
      grade: 'B'
    },
    {
      id: 126,
      image: '/wire.jpeg',
      title: 'Wire House',
      anualizedReturn: '16%',
      duration: '8',
      grade: 'B+'
    },
    {
      id: 127,
      image: '/veriusType.jpeg',
      title: 'Verious  Electronic Shpo',
      anualizedReturn: '14%',
      duration: '6',
      grade: 'B+'
    }
  ]

  return (
    <div className='w-full max-w-xl mx-auto'>
      <h4 className='pl-3 font-bold'>First Time?</h4>
      <p className='pl-3 mb-3 text-sm text-gray-700'>Expolre Low Risk Campaings</p>

      <LowRiskCards
        data={LowRiskCampings}
      />

    </div>
  )
}
