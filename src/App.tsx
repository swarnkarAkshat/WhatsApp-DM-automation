import { useState } from 'react';
import { Header } from './components/Header';
import { LeadForm } from './components/LeadForm';
import { MessagePreview } from './components/MessagePreview';
import { Footer } from './components/Footer';
import { generateMessage } from './services/messageService';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);

  const handleGenerate = async (data: Record<string, string>) => {
    setIsLoading(true);
    setGeneratedMessage(null);

    try {
      const response = await generateMessage(data);
      
      // Helper function to deeply search for a "message" key
      const extractMessageDeep = (obj: any): string | null => {
        if (typeof obj === 'string') return obj; // If it's just a string, return it
        if (!obj || typeof obj !== 'object') return null;
        
        if ('message' in obj && typeof obj.message === 'string') {
          return obj.message;
        }
        if ('text' in obj && typeof obj.text === 'string') {
          return obj.text;
        }

        // Recursively check all values
        for (const key of Object.keys(obj)) {
          const result = extractMessageDeep(obj[key]);
          if (result) return result;
        }
        return null;
      };

      const extractedMessage = extractMessageDeep(response);

      if (extractedMessage) {
        setGeneratedMessage(extractedMessage);
      } else {
        setGeneratedMessage(JSON.stringify(response, null, 2));
      }
    } catch (error) {
      console.error('Error generating message:', error);
      setGeneratedMessage('Failed to connect to automation workflow.\n\nPlease try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column: Form */}
          <div className="flex flex-col">
            <LeadForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>

          {/* Right Column: Message Preview */}
          <div className="flex flex-col h-full min-h-[400px]">
            <MessagePreview isLoading={isLoading} message={generatedMessage} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
