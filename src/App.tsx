import { useState } from 'react';
import { Header } from './components/Header';
import { LeadForm } from './components/LeadForm';
import { MessagePreview } from './components/MessagePreview';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);

  const handleGenerate = async (data: Record<string, string>) => {
    setIsLoading(true);
    setGeneratedMessage(null);

    try {
      const response = await fetch('/api/webhook/generate-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      let msg = text;

      try {
        const json = JSON.parse(text);
        if (Array.isArray(json) && json.length > 0) {
          msg = json[0].message || json[0].text || json[0].output || text;
        } else if (json && typeof json === 'object') {
          msg = json.message || json.text || json.output || text;
        }
      } catch (e) {
        console.warn("JSON parse failed, attempting regex extraction.");
      }

      // Aggressive fallback: if the string still looks like the raw n8n JSON output, extract it
      if (typeof msg === 'string' && msg.includes('"message"')) {
        const match = msg.match(/"message"\s*:\s*"([\s\S]*?)"(?=\s*}|\s*,)/);
        if (match) {
          msg = match[1];
        }
      }

      // Crucial: Replace literal '\n' characters from the raw string with actual newlines
      // so that whitespace-pre-wrap can render them as real paragraphs.
      if (typeof msg === 'string') {
        msg = msg.replace(/\\n/g, '\n').replace(/\\"/g, '"');
      }

      setGeneratedMessage(msg);
    } catch (error) {
      console.error('Error generating message:', error);
      setGeneratedMessage('An error occurred while communicating with the automation engine. Please try again.');
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
