'use client'

import React from 'react'
import HomePageNav from './HomePageNav'
import { usePathname } from 'next/navigation'
import InvestNav from './InvestNav'

export default function Navber() {

  const pathName = usePathname()

  return (
      <header className="w-full max-w-xl mx-auto bg-white shadow-md sticky top-0 z-10">
        {/* home page navber */}
        {pathName === '/' && <HomePageNav />}
       
        {/* invest navber */}
        {pathName === '/invest' && <InvestNav />}
      </header>
  )
}


 