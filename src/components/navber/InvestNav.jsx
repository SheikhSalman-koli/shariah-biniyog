

import { TextAlignJustify } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Support from '../shared/support'
import FilterModal from '../invest/modals/FilterModal'


export default function InvestNav() {
    const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='flex justify-between items-center'>
        <p className='text-sm'><span className='font-bold text-base'>5 Ongoing</span> Campaigns</p>
        <div className='flex gap-3 items-center'>
            <button
            onClick={()=> setShowFilter(true)}
            >
                <TextAlignJustify />
            </button>
            <Link href='/' className='border border-gray-300 px-1.5 rounded-sm text-base'>Risk ?</Link>
            <Support />
        </div>
        {
            showFilter && <FilterModal 
              onClose={()=>setShowFilter(false)}
              isOpen={showFilter}
            />
        }
    </div>
  )
}
