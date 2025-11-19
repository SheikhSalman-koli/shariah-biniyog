import React, { useState } from 'react';
import { X, SlidersHorizontal, Check, Zap } from 'lucide-react';

/**
 * FilterModal component for campaign filtering.
 * @param {boolean} isOpen - Controls the visibility of the modal.
 * @param {function} onClose - Function to call to close the modal.
 */
export default function FilterModal({ isOpen, onClose }) {
    // State to hold filter selections (Example State)
    const [riskLevel, setRiskLevel] = useState([]);
    const [minAmount, setMinAmount] = useState(100);

    // If the modal is not open, return null to render nothing
    if (!isOpen) return null;
    
    // Example handler for checkbox toggles
    const handleRiskToggle = (level) => {
        setRiskLevel(prev => 
            prev.includes(level) 
                ? prev.filter(r => r !== level)
                : [...prev, level]
        );
    };

    const handleApplyFilters = () => {
        // In a real app, you would dispatch a global state update or fetch data here.
        console.log('Applying filters:', { riskLevel, minAmount });
        onClose(); // Close the modal after applying
    }

    return (
        // 1. Overlay (The Backdrop)
        // Uses the lighter opacity you selected
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose} // Allows closing the modal by clicking outside
        >
            
            {/* 2. Modal Content Box */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-sm md:max-w-md mx-4 transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // Stop click events from propagating
            >
                
                {/* Modal Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                        <SlidersHorizontal className="h-5 w-5 mr-2 text-indigo-500" /> 
                        Campaign Filters
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                
                {/* Modal Body (Content - Filter Options) */}
                <div className="p-6 space-y-6">
                    
                    {/* Filter Group 1: Risk Level */}
                    <div>
                        <p className="text-base font-semibold text-gray-700 mb-3">Filter by Risk Level</p>
                        <div className="space-y-2">
                            {['Low', 'Medium', 'High'].map(level => {
                                const isSelected = riskLevel.includes(level);
                                return (
                                    <button
                                        key={level}
                                        onClick={() => handleRiskToggle(level)}
                                        className={`w-full text-left p-3 rounded-lg border transition duration-150 flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-indigo-500 border-indigo-600 text-white shadow-md'
                                                : 'bg-white border-gray-200 text-gray-700 hover:bg-indigo-50'
                                        }`}
                                    >
                                        <span>{level} Risk</span>
                                        {isSelected && <Check className="h-5 w-5" />}
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
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
                            style={{ accentColor: '#4f46e5' }} // Custom color for the range track
                        />
                        <div className='flex justify-between text-xs text-gray-500 mt-1'>
                            <span>1K</span>
                            <span>1000K+</span>
                        </div>
                    </div>

                    {/* Filter Group 3: Status */}
                    <div>
                        <p className="text-base font-semibold text-gray-700 mb-3">Campaign Status</p>
                        <label className="flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="rounded text-indigo-600 focus:ring-indigo-500" 
                            />
                            <span className='text-gray-600'>Exclude Fully Funded Campaigns</span>
                        </label>
                    </div>

                </div>
                
                {/* Modal Footer for action buttons */}
                <div className="p-4 border-t border-gray-100 flex justify-between space-x-3">
                    <button 
                        onClick={() => { setRiskLevel([]); setMinAmount(100); }}
                        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                    >
                        Clear Filters
                    </button>
                    <button 
                        onClick={handleApplyFilters}
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center"
                    >
                        <Zap className='h-4 w-4 mr-2' />
                        Apply Filters
                    </button>
                </div>
                
            </div>
        </div>
    );
}
