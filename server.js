// Local dev server for testing chat API
// Run with: node server.js

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// NVIDIA API Key from environment variable
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;

if (!NVIDIA_API_KEY) {
    console.error('❌ NVIDIA_API_KEY environment variable not set!');
    console.log('Run: set NVIDIA_API_KEY=your_key_here (Windows)');
    process.exit(1);
}

app.get('/api/chat', (req, res) => {
    res.json({ status: 'ok', message: 'Chat API is running. Send POST requests to chat.' });
});

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages required' });
        }

        console.log('Sending to NVIDIA API (Streaming)...');

        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${NVIDIA_API_KEY}`,
                'Accept': 'text/event-stream'
            },
            body: JSON.stringify({
                model: 'meta/llama-3.1-8b-instruct',
                messages: messages,
                max_tokens: 200,
                temperature: 0.7,
                top_p: 1.00,
                stream: true // Enable Streaming
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('NVIDIA Error:', error);
            return res.status(500).json({ error: 'AI service error: ' + error });
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
        console.error('Error:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

app.listen(3001, () => {
    console.log('🤖 Chat API running on http://localhost:3001');
});
