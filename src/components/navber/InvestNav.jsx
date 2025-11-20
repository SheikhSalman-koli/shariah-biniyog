

import { Check, TextAlignJustify } from 'lucide-react'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import Support from '../shared/support'
import FilterModal from '../invest/modals/FilterModal'

const riskOptions = [
  { label: 'All Risk Levels', value: 'All' },
  { label: 'Closing Soon', value: 'closing soon' },
  { label: 'Long Term', value: 'long term' },
  { label: 'Short Term', value: 'short term' },
  { label: 'Low Risk (A)', value: 'A' },
  { label: 'Medium Risk (B)', value: 'B' },
  { label: 'High Risk (C)', value: 'C' },
];

export default function InvestNav() {
  const [showFilter, setShowFilter] = useState(false)
  const [selectedRisk, setSelectedRisk] = useState('All');

  // Handler for the radio selection
  // const handleRiskSelect = useCallback((value) => {
  //     setSelectedRisk(value);
  //     // setShowFilter(false); 
  // }, []);https://youtu.be/IF00hz-6_3g?si=LP4-jSQJczY4ItnG


  return (
    <div className='relative p-4'>

      <div className='flex justify-between items-center'>
        <p className='text-sm'><span className='font-bold text-base'>5 Ongoing</span> Campaigns</p>
        <div className='flex gap-3 items-center'>
          <button
            onClick={() => setShowFilter(!showFilter)}
          >
            <TextAlignJustify />
          </button>
          <Link href='https://youtu.be/IF00hz-6_3g?si=LP4-jSQJczY4ItnG' className='border border-gray-300 px-1.5 rounded-sm text-base'>Risk ?</Link>
          <Support />
        </div>
      </div>

      {/* filter dropdown */}
      <div
        className={`${showFilter ? 'block' : 'hidden'} absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg -z-40 origin-top-right ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-2 " role="menu" aria-orientation="vertical" aria-labelledby="filter-menu-button">
          <p className='text-sm font-semibold text-gray-700 px-2 pt-1 pb-2'>Select Risk Grade:</p>

          {riskOptions.map((option) => (
            <div
              key={option?.value}
              className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-indigo-50 transition duration-150"
              onClick={() => setSelectedRisk(option.value)}
            >
              {/* Visual Radio Button (Tailwind Custom Styling) */}
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition duration-150 ${selectedRisk === option.value
                  ? 'border-indigo-600 bg-indigo-600'
                  : 'border-gray-300 bg-white'
                }`}>
                {selectedRisk === option.value && <Check className="w-3 h-3 text-white" />}
              </div>

              {/* Label */}
              <span className={`text-sm font-medium ${selectedRisk === option.value ? 'text-indigo-700' : 'text-gray-700'}`}>
                {option.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
