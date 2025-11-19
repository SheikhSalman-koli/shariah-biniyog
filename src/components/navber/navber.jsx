
import React from 'react'
import { Search } from 'lucide-react';
import Support from '../shared/support';

export default function Navber() {
  return (
      <header className="w-full max-w-xl mx-auto bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          
          {/* Profile Circle */}
          <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
            A
          </div>

           {/* Search Input */}
          {/* <div className="relative grow mx-4">
            <input
              type="text"
              placeholder="Search Campaigns, Guides..."
              className="w-full p-2 pl-10 border border-gray-200 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div> */}

          {/* Support Link */}
         <Support />
        </div>
      </header>
  )
}


 