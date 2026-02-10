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

        console.log('Sending to NVIDIA API...');

        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${NVIDIA_API_KEY}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta/llama-3.1-8b-instruct',
                messages: messages,
                max_tokens: 200, // Short, snappy responses
                temperature: 0.7, // Lower temperature for more direct answers
                top_p: 1.00,
                stream: false,
                // chat_template_kwargs: { thinking: true } // Disabled to remove "thinking" delay
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('NVIDIA Error:', error);
            return res.status(500).json({ error: 'AI service error: ' + error });
        }

        const data = await response.json();
        const aiMessage = data.choices?.[0]?.message?.content || "Couldn't generate response";

        console.log('AI Response:', aiMessage);
        res.json({ message: aiMessage });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3001, () => {
    console.log('🤖 Chat API running on http://localhost:3001');
});
