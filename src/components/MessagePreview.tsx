import React from 'react';
import { MessageCircle, Copy, Send, Info, Loader2 } from 'lucide-react';

interface MessagePreviewProps {
  isLoading: boolean;
  message: string | null;
}

export const MessagePreview: React.FC<MessagePreviewProps> = ({ isLoading, message }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-navy" />
          Generated WhatsApp Message
        </h2>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <Loader2 className="w-10 h-10 text-navy mb-4 animate-spin" />
            <p className="text-navy font-semibold text-lg">Generating message...</p>
            <p className="text-gray-500 font-medium mt-2">Waiting for ESSNPS Automation Engine...</p>
          </div>
        ) : !message ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <Info className="w-10 h-10 text-gray-400 mb-3" />
            <p className="text-gray-500 font-medium">No message generated yet.</p>
            <p className="text-gray-400 text-sm mt-1 max-w-[250px]">
              Submit the form and wait for the automation workflow response.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="bg-white rounded-lg p-7 shadow-sm border border-slate-200 mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-navy"></div>
              <div className="text-slate-800 whitespace-pre-wrap text-[15px] leading-relaxed">
                {message}
              </div>
            </div>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-gray-100 flex gap-3">
          <button
            type="button"
            disabled={!message || isLoading}
            className="flex-1 flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Message
          </button>
          <button
            type="button"
            disabled={!message || isLoading}
            className="flex-1 flex items-center justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
