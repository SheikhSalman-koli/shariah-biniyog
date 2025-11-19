
import React from 'react'
import { MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';



export default function Support() {
    const pathName = usePathname()
    return (
        <div className='hover:text-indigo-600'>
            {
                pathName === '/' ?
                  <button className="flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                <MessageSquare className={`h-4 w-4 `} />
                Support
            </button>
             :
               <button 
               title='Support'
               className="flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                <MessageSquare 
                className={`h-4 w-4 `} />
            </button>
            }
          
        </div>
    )
}
