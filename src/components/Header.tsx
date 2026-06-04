import React from 'react';
import { Mail, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <a href="https://www.essnps.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img 
                src="https://www.essnps.com/wp-content/uploads/2025/07/ESSNPS%C2%AE.svg" 
                alt="ESSNPS Logo" 
                className="w-[175px] h-[44px] mr-4 object-contain"
              />
            </a>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight border-l border-gray-300 pl-4 hidden sm:block">
              WhatsApp & DM Automation
            </h1>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-gray-600">
              <a href="mailto:rfq@essnps.com" className="flex items-center hover:text-navy transition-colors">
                <Mail className="w-4 h-4 mr-1.5" />
                rfq@essnps.com
              </a>
              <a href="https://www.essnps.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-navy transition-colors">
                <Globe className="w-4 h-4 mr-1.5" />
                essnps.com
              </a>
            </div>

            <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 hidden sm:inline">System Status: Active</span>
              <span className="text-sm font-medium text-green-700 sm:hidden">Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
