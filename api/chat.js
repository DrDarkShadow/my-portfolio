// Vercel Serverless Function for AI Chat
// Uses NVIDIA API with Moonshot Kimi model

export const config = {
    maxDuration: 60, // Increase timeout for "thinking" model
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { messages } = req.body

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array required' })
        }

        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                model: 'moonshotai/kimi-k2.5',
                messages: messages,
                max_tokens: 256, // Reduced for speed
                temperature: 0.7, // Lower temperature for more direct answers
                top_p: 1.00,
                stream: false,
                // chat_template_kwargs: { thinking: true } // Disabled to remove "thinking" delay
            })
        })

        if (!response.ok) {
            const error = await response.text()
            console.error('NVIDIA API error:', error)
            return res.status(500).json({ error: 'AI service unavailable: ' + error })
        }

        const data = await response.json()
        const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response."

        return res.status(200).json({ message: aiMessage })
    } catch (error) {
        console.error('Chat API error:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}
