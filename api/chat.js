// Vercel Serverless Function for AI Chat
// Uses NVIDIA API with Llama 3.1 8B Instruct model
// Using Node.js Runtime for better compatibility

export const config = {
    maxDuration: 60, // Increase timeout for slower connections
};

export default async function handler(req, res) {
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
                'Accept': 'text/event-stream'
            },
            body: JSON.stringify({
                model: 'meta/llama-3.1-8b-instruct',
                messages: messages,
                max_tokens: 200,
                temperature: 0.7,
                top_p: 1.00,
                stream: true // ENABLE STREAMING
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('NVIDIA API error:', error);
            return res.status(500).json({ error: 'AI service unavailable: ' + error });
        }

        // Set headers for SSE
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.slice(6));
                        const content = data.choices[0]?.delta?.content || '';
                        if (content) {
                            res.write(content); // Write directly to response
                        }
                    } catch (e) {
                        // Ignore incomplete chunks
                    }
                }
            }
        }

        res.end();

    } catch (error) {
        console.error('Chat API error:', error);
        if (!res.headersSent) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.end();
    }
}
