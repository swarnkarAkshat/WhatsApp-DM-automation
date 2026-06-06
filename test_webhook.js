async function testWebhook() {
  const payload = {
    contactName: "John Doe",
    company: "ABC Manufacturing",
    industry: "Manufacturing",
    messageType: "Follow-up",
    tone: "Professional"
  };

  try {
    const response = await fetch("https://n8n.ianman.com/webhook-test/generate-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Raw N8N Response:");
    console.log(JSON.stringify(data, null, 2));

    const extractMessageDeep = (obj) => {
      if (typeof obj === 'string') return obj;
      if (!obj || typeof obj !== 'object') return null;
      
      if ('message' in obj && typeof obj.message === 'string') {
        return obj.message;
      }
      if ('text' in obj && typeof obj.text === 'string') {
        return obj.text;
      }

      for (const key of Object.keys(obj)) {
        const result = extractMessageDeep(obj[key]);
        if (result) return result;
      }
      return null;
    };

    const extracted = extractMessageDeep(data);
    console.log("\nExtracted Message:");
    console.log(extracted ? extracted : "COULD NOT EXTRACT");

  } catch (err) {
    console.error("Error:", err);
  }
}

testWebhook();
