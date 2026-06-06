export const generateMessage = async (payload: Record<string, string>) => {
  const response = await fetch(
    "https://n8n.ianman.com/webhook-test/generate-message",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
};
