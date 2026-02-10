// Vercel Serverless Function for AI Chat
// Uses NVIDIA API with Llama 3.1 8B Instruct model

export const config = {
    runtime: 'edge', // Edge runtime is better for streaming
    regions: ['iad1'], // Optional: Specify region close to users
};

export default async function handler(req) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: 'Messages array required' }), { status: 400 });
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
            return new Response(JSON.stringify({ error: 'AI service unavailable: ' + error }), { status: 500 });
        }

        // Create a transform stream to process the SSE chunks
        const stream = new ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                try {
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
                                        controller.enqueue(new TextEncoder().encode(content));
                                    }
                                } catch (e) {
                                    console.error('Error parsing chunk', e);
                                }
                            }
                        }
                    }
                } finally {
                    controller.close();
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
