import React from 'react'
import Support from '../shared/support'

export default function HomePageNav() {
  return (
     <div className="flex items-center justify-between">
          {/* Profile Circle */}
          <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
            A
          </div>
         <Support />
        </div>
  )
}
