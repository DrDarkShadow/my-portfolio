import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Loader2 } from 'lucide-react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

interface RobotChatProps {
    isOpen: boolean
    onClose: () => void
}

// Prateek's context for the AI
const PRATEEK_CONTEXT = `You are Prateek's AI assistant on his portfolio website. Answer questions about Prateek based on this information:

**About Prateek Gaur:**
- AI Engineer and Full Stack Developer based in India
- Specializes in Generative AI, LLMs, RAG architectures, and AI agents
- Experienced in building intelligent systems and scalable AI solutions

**Skills:**
- AI/ML: LLMs, RAG, Langchain, CrewAI, OpenAI, Gemini, HuggingFace
- Backend: Python, FastAPI, Node.js, Express
- Frontend: React, TypeScript, Next.js, Tailwind CSS
- Databases: PostgreSQL, MongoDB, Pinecone, ChromaDB
- Cloud: AWS, GCP, Vercel, Docker

**Experience:**
- Built multiple AI-powered applications including document analysis, chatbots, and automation tools
- Developed RAG-based systems for enterprise knowledge management
- Created AI agents using CrewAI and Langchain frameworks
- Full-stack development with modern web technologies

**Education:**
- Strong background in Computer Science and AI/ML

**Contact:**
- GitHub: github.com/DrDarkShadow
- LinkedIn: linkedin.com/in/prateekgaur1609

Be friendly, concise, and helpful. If asked something not in this context, politely say you can only answer questions about Prateek. Keep responses short (2-4 sentences max).`

export function RobotChat({ isOpen, onClose }: RobotChatProps) {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hey! 👋 I'm Prateek's AI assistant. Ask me anything about his skills, experience, or projects!" }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: userMessage }])
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: PRATEEK_CONTEXT },
                        ...messages.map(m => ({ role: m.role, content: m.content })),
                        { role: 'user', content: userMessage }
                    ]
                })
            })

            if (!response.ok) throw new Error('Failed to get response')

            const data = await response.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Oops! I'm having trouble connecting. Please try again later! 🤖"
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="fixed bottom-24 right-4 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        border: '2px solid #10b981',
                        boxShadow: '0 20px 50px rgba(16, 185, 129, 0.3)',
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-emerald-500/30">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <span className="text-xl">🤖</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">Prateek's AI</h3>
                                <p className="text-xs text-emerald-400">Ask me anything!</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X size={18} className="text-gray-400" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="h-72 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-emerald-500 text-white rounded-br-sm'
                                            : 'bg-slate-700 text-gray-100 rounded-bl-sm'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                            >
                                <div className="bg-slate-700 px-4 py-3 rounded-2xl rounded-bl-sm">
                                    <Loader2 size={16} className="animate-spin text-emerald-400" />
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-emerald-500/30">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about Prateek..."
                                className="flex-1 bg-slate-800 text-white text-sm px-4 py-2 rounded-full border border-slate-600 focus:border-emerald-500 focus:outline-none placeholder-gray-500"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} className="text-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default RobotChat
