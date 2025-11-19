import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
        projectedReturn: "৳35,000*",
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
        projectedReturn: "৳82,500*",
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
        projectedReturn: "৳48,700*",
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
        projectedReturn: "৳95,100*",
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
        projectedReturn: "৳61,200*",
        projectedMonths: 7,
    }
]


export default function OnGoingCamp() {

    // Determine background and text color for risk grade
    // const getRiskGradeColors = (grade) => {
    //     switch (grade.toUpperCase()) {
    //         case 'A': return 'bg-green-500 text-white';
    //         case 'B': return 'bg-red-500 text-white'; // As per image for 'B'
    //         case 'C': return 'bg-yellow-500 text-white';
    //         default: return 'bg-gray-200 text-gray-700';
    //     }
    // };

    // const riskColors = getRiskGradeColors(riskGrade);

    return (
        <div>
            {
                onGoing.map(camp => {
                    return (
                        <div
                            key={camp?.id}
                            className='border border-indigo-50 mb-3 rounded-md p-2'
                        >
                            {/* Header Section: Company Name & Days Left */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{camp?.companyName}</h2>
                                    <p className="text-sm text-gray-500">{camp?.tagline}</p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm font-medium">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{camp?.daysLeft} days Left</span>
                                </div>
                            </div>

                            {/* Main Content: Description, Annualized Return, Logo, Risk Grade */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1 pr-4">
                                    <p className="text-gray-700 text-base mb-3 leading-snug">
                                        {camp?.description}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-800">
                                        {camp?.annualizedReturn}% <span className="text-gray-500 text-lg font-medium">annualized</span>
                                    </p>
                                </div>

                                {/* Logo and Risk Grade Block */}
                                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                                    {/* Company Logo - Placeholder or actual image */}
                                    {camp?.logoSrc ? (
                                        <Image
                                            src={camp?.logoSrc}
                                            alt={`${camp?.companyName}`}
                                            width={200}
                                            height={100}
                                            className="w-16 h-13 object-cover p-1"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-indigo-600 bg-indigo-50">
                                            A
                                        </div>
                                    )}

                                    {/* Risk Grade Overlay */}
                                    <div className=' bottom-3 left-3 flex rounded-sm overflow-hidden bg-white/0'>
                                        <p className='bg-white text-gray-700 col-span-2 px-1 pt-1 text-[7px]'>RISK <br /> GRADE</p>
                                        <p className='bg-orange-400 text-white col-span-1 px-1 pt-1 text-sm'>{camp?.riskGrade}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Campaign Details Button */}
                            <button
                                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition duration-300 flex items-center justify-center mb-4"
                            >
                                Campaign Details <ArrowRight className="ml-2 h-5 w-5" />
                            </button>

                            {/* Projected Return */}
                            <p className="text-center text-gray-600 text-sm">
                                Get up to <span className="font-bold text-lg text-gray-800">{camp?.projectedReturn}</span> in {camp?.projectedMonths} months
                            </p>

                        </div>
                    )
                })
            }

        </div>
    )
}
