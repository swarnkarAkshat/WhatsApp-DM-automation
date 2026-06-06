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
          <div className="flex-1 flex flex-col bg-[#efeae2] rounded-xl p-6 relative overflow-hidden shadow-inner border border-gray-200">
            {/* Subtle Chat Background Pattern (optional, using simple CSS) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/r2q893L13_r.png')] bg-repeat z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex w-full justify-end">
              <div className="bg-[#d9fdd3] text-[#111b21] max-w-[85%] rounded-lg rounded-tr-none px-4 py-3 shadow-sm relative text-[15px] leading-relaxed whitespace-pre-wrap">
                {/* Tail for bubble */}
                <div className="absolute top-0 -right-[8px] w-0 h-0 border-t-[10px] border-t-[#d9fdd3] border-r-[10px] border-r-transparent"></div>
                
                {message}
                
                <div className="flex justify-end mt-1 space-x-1 items-center">
                  <span className="text-[11px] text-gray-500 font-medium">Just now</span>
                  <svg viewBox="0 0 16 15" width="16" height="15" className="fill-blue-500 opacity-80">
                    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.72a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                  </svg>
                </div>
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
