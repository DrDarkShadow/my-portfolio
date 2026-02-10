// Local dev server for testing chat API
// Run with: node --env-file=.env server.js

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Environment Variables
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'gaur.prateek.1609@gmail.com';

if (!NVIDIA_API_KEY) {
    console.error('❌ NVIDIA_API_KEY environment variable not set!');
    process.exit(1);
}

// GET Handler
app.get('/api/chat', (req, res) => {
    res.json({ status: 'ok', message: 'Chat API is running.' });
});

// POST Chat Handler
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
                max_tokens: 200,
                temperature: 0.7,
                top_p: 1.00,
                stream: false
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

// POST Contact Handler
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        console.log(`📧 Sending email from ${name} (${email})...`);

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: CONTACT_EMAIL,
                subject: `New Message from ${name}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
                        ${message}
                    </blockquote>
                `
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Resend API Error:', error);
            // Don't leak API error to client, just say failed
            return res.status(500).json({ error: 'Failed to send email' });
        }

        const data = await response.json();
        console.log('✅ Email sent:', data.id);
        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('Handler Error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3001, () => {
    console.log('🤖 Chat API running on http://localhost:3001');
});
