
import React from 'react'
import { MessageSquare } from 'lucide-react';



export default function Support() {
    return (
        <div className='hover:text-indigo-600'>
            <button className="flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                <MessageSquare className="h-4 w-4 " />
                Support
            </button>
        </div>
    )
}
