// Vercel Serverless Function for AI Chat
// Uses NVIDIA API with Llama 3.1 8B Instruct model
// Using Node.js Runtime for better compatibility

export const config = {
    maxDuration: 60, // Increase timeout for slower connections
};

export default async function handler(req, res) {
    // Add OPTIONS handler for CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Allow', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    // Add GET handler for browser checks
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'ok', message: 'Chat API is running. Send POST requests to chat.' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array required' });
        }

        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta/llama-3.1-8b-instruct',
                messages: messages,
                max_tokens: 200,
                temperature: 0.7,
                top_p: 1.00,
                stream: false // DISABLED STREAMING
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('NVIDIA API error:', error);
            return res.status(500).json({ error: 'AI service unavailable: ' + error });
        }

        const data = await response.json();
        const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

        return res.status(200).json({ message: aiMessage });

    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
