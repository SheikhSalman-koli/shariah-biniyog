
import React from 'react'
import {ChevronRight, Facebook, HelpCircle, Star, TrendingUp} from 'lucide-react';
import FirstTime from '../components/home/FirstTime';
import TopBanner from '../components/home/TopBanner';


export default function Home() {

  return (
     <main className="w-full max-w-xl mx-auto p-4 pb-6 space-y-8">
        <TopBanner />
        
        {/* First Time */}
        <FirstTime />
  
        {/* Explore Campaigns Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between border border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Explore New Opportunities</h3>
            <p className="text-sm text-gray-500 mt-1">See 3+ Campaign Campaigns in progress.</p>
          </div>
          <button className="flex items-center justify-center h-10 w-10 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300">
            <TrendingUp className="h-5 w-5" />
          </button>
        </div>

        {/*  Explore Campaigns Section with Action Button Group --- */}
        <div className="space-y-3">
          <ActionLink 
            icon={Star} 
            title="Leave us a Review" 
            href="/review-page" 
            iconColor="text-yellow-500"
          />
          <ActionLink 
            icon={HelpCircle} 
            title="Ask a Question" 
            href="/faq-support" 
            iconColor="text-indigo-500"
          />
          <ActionLink 
            icon={Facebook} 
            title="facebook.com/sharia.io" 
            href="https://www.facebook.com/sharia.io" 
            external={true}
            iconColor="text-blue-600"
          />
        </div>
        
      </main>
  );
}

// / Helper Component for the three new Action Links
const ActionLink = ({ icon: Icon, title, href, external = false, iconColor = 'text-gray-500' }) => (
  <a 
    href={href} 
    target={external ? "_blank" : "_self"} 
    rel={external ? "noopener noreferrer" : ""}
    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-100 
               hover:bg-gray-50 transition duration-150 group"
  >
    {/* Icon and Title Group */}
    <div className="flex items-center space-x-4">
      <div className={`p-2 rounded-full ${iconColor} bg-gray-50 border border-gray-200`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
        {title}
      </span>
    </div>

    {/* Chevron Right (The arrow >) */}
    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-transform duration-150" />
  </a>
);