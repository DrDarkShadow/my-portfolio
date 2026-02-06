// Local dev server for testing chat API
// Run with: node server.js

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Token from environment variable
const HF_TOKEN = process.env.HF_TOKEN;

if (!HF_TOKEN) {
    console.error('❌ HF_TOKEN environment variable not set!');
    console.log('Run: set HF_TOKEN=your_token_here (Windows)');
    process.exit(1);
}

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages required' });
        }

        console.log('Sending to HuggingFace...');

        const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HF_TOKEN}`
            },
            body: JSON.stringify({
                model: 'mistralai/Mistral-7B-Instruct-v0.2:featherless-ai',
                messages: messages,
                max_tokens: 200,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('HF Error:', error);
            return res.status(500).json({ error: 'AI service error' });
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
