'use client'

import React from 'react'
import { MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';



export default function Support() {
    const pathName = usePathname()

    const clientPhoneNumber = '8801309831316'
    const rowMessage = "Hello, I am interested in the investment opportunity. Can you provide more details?"
    const encodedMessage = rowMessage
    const whatsAppLink = `https://wa.me/${clientPhoneNumber}?text=${encodedMessage}`

    const handleChat =()=>{
        window.open(whatsAppLink, '_blank')
    }

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
               onClick={handleChat}
               title='Support'
               className="flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                <MessageSquare 
                className={`h-4 w-4 `} />
            </button>
            }
          
        </div>
    )
}
