// Vercel Serverless Function for AI Chat
// Uses HuggingFace Router with Mistral model

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { messages } = req.body

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array required' })
        }

        const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.HF_TOKEN}`
            },
            body: JSON.stringify({
                model: 'mistralai/Mistral-7B-Instruct-v0.2:featherless-ai',
                messages: messages,
                max_tokens: 200,
                temperature: 0.7
            })
        })

        if (!response.ok) {
            const error = await response.text()
            console.error('HuggingFace API error:', error)
            return res.status(500).json({ error: 'AI service unavailable' })
        }

        const data = await response.json()
        const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response."

        return res.status(200).json({ message: aiMessage })
    } catch (error) {
        console.error('Chat API error:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}
