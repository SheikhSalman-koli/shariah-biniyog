import React, { useState } from 'react';
import { X, SlidersHorizontal, Check, Zap, Hash } from 'lucide-react';

export default function FilterModal({ isOpen, onClose }) {
    // State to hold filter selections. 
    // riskLevel is now a single string for radio-style selection.
    const [riskLevel, setRiskLevel] = useState('All'); 
    const [minAmount, setMinAmount] = useState(100);

    // If the modal is not open, return null to render nothing
    if (!isOpen) return null;
    
    // Handler for single radio-style selection
    const handleRiskSelect = (level) => {
        setRiskLevel(level);
    };

    const handleApplyFilters = () => {
        // In a real app, you would dispatch a global state update or fetch data here.
        console.log('Applying filters:', { riskLevel, minAmount });
        onClose(); // Close the modal after applying
    }
    
    const handleClearFilters = () => {
        setRiskLevel('All'); // Reset to default/All
        setMinAmount(100);
    }

    const riskOptions = ['All', 'Low', 'Medium', 'High'];

    return (
        // 1. Overlay (The Backdrop)
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center transition-opacity duration-300"
            onClick={onClose} // Allows closing the modal by clicking outside
        >
            
            {/* 2. Modal Content Box */}
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md mx-4 transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // Stop click events from propagating
            >
                
                {/* Modal Header */}
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                        <SlidersHorizontal className="h-5 w-5 mr-2 text-indigo-500" /> 
                        Campaign Filters
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                
                {/* Modal Body (Content - Filter Options) */}
                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                    
                    {/* Filter Group 1: Risk Level (Radio Selection) */}
                    <div>
                        <p className="text-base font-semibold text-gray-700 mb-3">Filter by Risk Level (Single Select)</p>
                        <div className="space-y-2">
                            {riskOptions.map(level => {
                                const isSelected = riskLevel === level;
                                const levelIcon = level === 'All' ? Hash : Check;
                                
                                return (
                                    <button
                                        key={level}
                                        onClick={() => handleRiskSelect(level)}
                                        className={`w-full text-left p-3 rounded-xl border-2 transition duration-150 flex items-center justify-between font-medium ${
                                            isSelected
                                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm'
                                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span>{level} Risk</span>
                                        {/* Icon for visual feedback of selection */}
                                        {isSelected ? (
                                            <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                                <Check className="h-3 w-3" />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Filter Group 2: Minimum Investment Amount */}
                    <div>
                        <label htmlFor="minAmount" className="text-base font-semibold text-gray-700 mb-3 block">
                            Min. Investment: BDT {minAmount}K
                        </label>
                        <input
                            id="minAmount"
                            type="range"
                            min="1"
                            max="1000"
                            step="1"
                            value={minAmount}
                            onChange={(e) => setMinAmount(e.target.value)}
                            className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer range-lg"
                            style={{ accentColor: '#4f46e5' }} // Custom color for the range track
                        />
                        <div className='flex justify-between text-xs text-gray-500 mt-1'>
                            <span>1K</span>
                            <span>1000K+</span>
                        </div>
                    </div>

                    {/* Filter Group 3: Status (Checkbox) */}
                    <div>
                        <p className="text-base font-semibold text-gray-700 mb-3">Campaign Status</p>
                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition cursor-pointer">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300" 
                            />
                            <span className='text-gray-700 font-medium'>Exclude Fully Funded Campaigns</span>
                        </label>
                    </div>

                </div>
                
                {/* Modal Footer for action buttons */}
                <div className="p-5 border-t border-gray-100 flex justify-between space-x-3">
                    <button 
                        onClick={handleClearFilters}
                        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition shadow-sm border border-red-200"
                    >
                        Clear Filters
                    </button>
                    <button 
                        onClick={handleApplyFilters}
                        className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition flex items-center"
                    >
                        <Zap className='h-4 w-4 mr-2' />
                        Apply Filters
                    </button>
                </div>
                
            </div>
        </div>
    );
}