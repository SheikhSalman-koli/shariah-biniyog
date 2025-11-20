'use client'




import { ArrowRight, Clock, MinusCircle, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const onGoing = [
    {
        id: 2343,
        companyName: "Green Harvest Farms",
        tagline: "Sustainable Organic Produce",
        description: "Funding the expansion of hydroponic systems for year-round vegetable production.",
        annualizedReturn: 14,
        daysLeft: 15,
        riskGrade: "A",
        logoSrc: "/drill.jpg",
        projectedReturn: "35,000*",
        projectedMonths: 9,
    },
    {
        id: 43454,
        companyName: "Digital Edge Agency",
        tagline: "Creative Marketing Solutions",
        description: "Capital injection to hire specialized AI/ML engineers for a new product line.",
        annualizedReturn: 24,
        daysLeft: 7,
        riskGrade: "C",
        logoSrc: "/plasType.jpeg",
        projectedReturn: "82,500*",
        projectedMonths: 12,
    },
    {
        id: 45657,
        companyName: "Metro Cafe Chain",
        tagline: "Premium Coffee & Bakery",
        description: "Securing funds for the opening of three new high-traffic location franchises.",
        annualizedReturn: 18,
        daysLeft: 30,
        riskGrade: "B",
        logoSrc: "/veriusType.jpeg",
        projectedReturn: "48,700*",
        projectedMonths: 6,
    },
    {
        id: 577,
        companyName: "Local Logistics Hub",
        tagline: "Last-Mile Delivery Network",
        description: "Investing in new electric vehicle fleet for eco-friendly, efficient urban delivery.",
        annualizedReturn: 16,
        daysLeft: 19,
        riskGrade: "A",
        logoSrc: "/wire.jpeg",
        projectedReturn: "95,100*",
        projectedMonths: 18,
    },
    {
        id: 6768,
        companyName: "Artisan Textile Mills",
        tagline: "Handmade Woven Fabrics",
        description: "Supporting working capital and raw material procurement for the peak season.",
        annualizedReturn: 19,
        daysLeft: 4,
        riskGrade: "C",
        logoSrc: "/rod-cutting.jpg",
        projectedReturn: "61,200*",
        projectedMonths: 7,
    }
]


export default function OnGoingCamp() {

    // riskGradeColor
    const getRiskGradeColors = (grade) => {
        switch (grade.toUpperCase()) {
            case 'A': return 'bg-green-500 text-white';
            case 'B': return 'bg-red-500 text-white'; 
            case 'C': return 'bg-yellow-500 text-white';
            default: return 'bg-gray-200 text-gray-700';
        }
    };
    // increment and decrement state
    const [amount, setAmount] = useState(5)
    const convertToHazar = amount*1000
 

    return (
        <div className="max-w-xl mx-auto px-4 pt-4 ">
            <div className="space-y-4 mb-5">
                {onGoing.map(camp => {
                    const riskColors = getRiskGradeColors(camp?.riskGrade)
                    return (
                        <div
                            key={camp.id}
                            className='bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition duration-300'
                        >
                            {/* Header Section: Company Name & Days Left */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-sm md:text-xl font-bold text-gray-800">{camp.companyName}</h2>
                                    <p className="text-[10px] md:text-sm text-gray-500">{camp.tagline}</p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm font-medium  px-2 py-1 rounded-full">
                                    <Clock className="h-4 w-4 mr-1 text-indigo-500" />
                                    <span>{camp.daysLeft} days Left</span>
                                </div>
                            </div>

                            {/* Main Content: Description, Annualized Return, Logo, Risk Grade */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1 pr-4">
                                    <p className="text-gray-700 text-sm md:text-base mb-3 leading-snug">
                                        {camp.description}
                                    </p>
                                    <p className="text-xl font-bold text-gray-800">
                                        {camp.annualizedReturn}% <span className="text-gray-500 text-base font-medium">annualized</span>
                                    </p>
                                </div>

                                {/* Logo and Risk Grade Block */}
                                <div className="flex flex-col items-center justify-center w-20 h-20 relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                                    {/* Company Logo - Placeholder or actual image */}
                                    {camp.logoSrc ? (
                                        <Image
                                            width={120}
                                            height={160}
                                            src={camp.logoSrc}
                                            alt={`${camp.companyName}`}
                                            className="w-full h-full object-cover p-1"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-indigo-600 bg-indigo-50">
                                            {camp.companyName[0]}
                                        </div>
                                    )}

                                    {/* Risk Grade Overlay - Now using dynamic risk colors and consistent styling */}
                                    <div className="absolute bottom-0 left-0 w-full h-8 flex flex-col justify-end items-center">
                                        <span className="text-xs text-gray-600 font-medium mb-0.5">RISK GRADE</span>
                                        <div className={`w-full py-0.5 text-center text-sm font-bold ${riskColors}`}>
                                            {camp?.riskGrade}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Campaign Details Button - Now consistent with primary Indigo color */}
                            <button
                                // onClick={() => handleDetailsClick(camp.companyName)}
                                className="w-full py-2 md:py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center mb-4"
                            >
                                Campaign Details <ArrowRight className="ml-2 h-5 w-5" />
                            </button>

                            {/* Projected Return */}
                            <p className="text-center text-gray-600 text-sm">
                                Get up to ৳<span className="font-bold text-base text-gray-800">{camp.projectedReturn}</span> in {camp.projectedMonths} months
                            </p>
                        </div>
                    )
                })}
            </div>

            {/* increment and decrement button */}
            <div className='sticky bottom-12 w-full max-w-xl mx-auto bg-white border-t-4 border border-indigo-500 rounded-t-2xl z-20 px-3 py-4 space-y-3'>
                <p className='text-center text-sm text-gray-800'>The amount you would like to invest?</p>
            <div className='grid grid-cols-3 gap-4 mg:gap-8'>
                {/* decrement */}
                <button 
                disabled={amount === 5}
                onClick={()=> setAmount(amount - 10)}
                className={`flex justify-center items-center gap-2 rounded-3xl text-white px-3 py-1 hover:bg-indigo-700 ${amount === 5 ? 'cursor-not-allowed bg-indigo-300': 'bg-indigo-600'} `}>
                    <MinusCircle size={15}/>
                    10K
                </button>
                {/* shower button */}
                <button className='rounded-full border-2 border-indigo-600 bg-indigo-50 text-indigo-700 font-extrabold text-xl shadow-inner'>
                    <span className='text-xl'>{amount}K</span>
                </button>
                {/* increment */}
                <button 
                onClick={()=> setAmount(amount + 10)}
                className='flex justify-center items-center gap-2 rounded-3xl bg-indigo-600 text-white px-3 py-1 hover:bg-indigo-700'>
                    <PlusCircle size={15}/>
                    10K
                </button>
            </div>

                <p className='text-center text-sm text-gray-800'>৳{convertToHazar}</p>
            </div>
        </div>
    )
}
