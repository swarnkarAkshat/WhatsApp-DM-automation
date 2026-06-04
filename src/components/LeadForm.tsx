import React from 'react';
import { User, Building, MessageCircle, Phone, FileText, Loader2 } from 'lucide-react';

interface LeadFormProps {
  onGenerate: (data: Record<string, string>) => void;
  isLoading: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onGenerate, isLoading }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading) {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      onGenerate(data);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <User className="w-5 h-5 mr-2 text-navy" />
          Lead Information
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
            1. Client Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="clientName"
              name="clientName"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy sm:text-sm border py-2.5 px-3 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="e.g. John Doe"
              defaultValue="John Doe"
              disabled={isLoading}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            2. Company Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy sm:text-sm border py-2.5 px-3 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="e.g. Acme Corp"
              disabled={isLoading}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
            3. Inquiry Type
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MessageCircle className="h-4 w-4 text-gray-400" />
            </div>
            <select
              id="inquiryType"
              name="inquiryType"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy sm:text-sm border py-2.5 px-3 transition-colors appearance-none bg-white disabled:bg-gray-50 disabled:text-gray-500"
              defaultValue="RFQ Follow-up"
              disabled={isLoading}
              required
            >
              <option>RFQ Follow-up</option>
              <option>Vendor Discussion</option>
              <option>Quotation Reminder</option>
              <option>Project Update</option>
              <option>Quality Inspection Update</option>
              <option>Delivery Update</option>
              <option>General Check-in</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
            4. Product / Service Requirement
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="requirement"
              name="requirement"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy sm:text-sm border py-2.5 px-3 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="e.g. Industrial Valves"
              defaultValue="Industrial Valves"
              disabled={isLoading}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
            5. WhatsApp Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy sm:text-sm border py-2.5 px-3 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="+1 (555) 000-0000"
              disabled={isLoading}
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-all duration-200 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Waiting for ESSNPS Automation Engine...
              </>
            ) : (
              'Generate Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
