import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'

interface HeroRobotProps {
    size?: number
}

// Prateek's context for the AI
const PRATEEK_CONTEXT = `You are Prateek's AI assistant. Answer briefly (1-2 sentences).

Prateek Gaur - AI Engineer & Full Stack Developer
Skills: LLMs, RAG, Langchain, CrewAI, Python, FastAPI, React, TypeScript, Next.js
Experience: AI apps, document analysis, chatbots, automation, RAG systems
Contact: github.com/DrDarkShadow, linkedin.com/in/prateekgaur1609

Only answer about Prateek. Be friendly and concise.`

export function HeroRobot({ size = 280 }: HeroRobotProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // Smooth spring-based eye movement
    const eyeX = useSpring(0, { stiffness: 150, damping: 12 })
    const eyeY = useSpring(0, { stiffness: 150, damping: 12 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const normalizedX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 250))
            const normalizedY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 250))

            eyeX.set(normalizedX * 5)
            eyeY.set(normalizedY * 4)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [eyeX, eyeY])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const question = input.trim()
        setInput('')
        setIsLoading(true)
        setResponse('')

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: PRATEEK_CONTEXT },
                        { role: 'user', content: question }
                    ]
                })
            })

            if (!res.ok) throw new Error('Failed')
            const data = await res.json()
            setResponse(data.message)
        } catch {
            setResponse("Oops! I'm having trouble. Try again! 🤖")
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="flex flex-col items-center">
            <motion.div
                ref={containerRef}
                className="cursor-pointer select-none"
                style={{ width: size, height: size }}
                onClick={() => setIsChatOpen(!isChatOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(16, 185, 129, 0.4))' }}
                >
                    {/* Antenna */}
                    <motion.g
                        animate={{ rotate: isChatOpen ? [-10, 10, -10] : [-3, 3, -3] }}
                        transition={{ duration: isChatOpen ? 0.5 : 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transformOrigin: '50px 25px' }}
                    >
                        <line x1="50" y1="25" x2="50" y2="8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="50" cy="6" r="5" fill="#10b981">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                        </circle>
                    </motion.g>

                    {/* Robot head */}
                    <rect x="20" y="25" width="60" height="50" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="3" />

                    {/* Face plate */}
                    <rect x="28" y="32" width="44" height="36" rx="8" fill="#0f172a" />

                    {/* Eye sockets */}
                    <rect x="32" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />
                    <rect x="54" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />

                    {/* Left pupil */}
                    <motion.g style={{ x: eyeX, y: eyeY }}>
                        <circle cx="39" cy="45" r="5" fill={isChatOpen ? "#fbbf24" : "#10b981"} />
                        <circle cx="41" cy="43" r="2" fill="white" opacity="0.8" />
                    </motion.g>

                    {/* Right pupil */}
                    <motion.g style={{ x: eyeX, y: eyeY }}>
                        <circle cx="61" cy="45" r="5" fill={isChatOpen ? "#fbbf24" : "#10b981"} />
                        <circle cx="63" cy="43" r="2" fill="white" opacity="0.8" />
                    </motion.g>

                    {/* Mouth */}
                    {isChatOpen ? (
                        <path d="M 38 58 Q 50 68 62 58" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    ) : (
                        <path d="M 40 60 Q 50 66 60 60" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    )}

                    {/* Ears */}
                    <rect x="12" y="40" width="8" height="20" rx="3" fill="#10b981" />
                    <rect x="80" y="40" width="8" height="20" rx="3" fill="#10b981" />

                    {/* Body */}
                    <rect x="30" y="75" width="40" height="20" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="2" />

                    {/* Body lights */}
                    <circle cx="42" cy="85" r="3" fill="#fbbf24">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="85" r="3" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="58" cy="85" r="3" fill="#ef4444">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </motion.div>

            {/* Click hint */}
            <p className="text-center text-sm text-gray-500 mt-2">
                {isChatOpen ? '🤖 Ask me anything!' : 'Click to chat with me! 💬'}
            </p>

            {/* Chat input - appears under robot */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="mt-4 w-full max-w-sm"
                    >
                        {/* Input box */}
                        <div className="flex gap-2 p-3 rounded-xl bg-slate-800 border border-emerald-500/50">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about Prateek..."
                                className="flex-1 bg-transparent text-white text-sm px-2 focus:outline-none placeholder-gray-500"
                                autoFocus
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? (
                                    <Loader2 size={16} className="animate-spin text-white" />
                                ) : (
                                    <Send size={16} className="text-white" />
                                )}
                            </button>
                        </div>

                        {/* Response bubble */}
                        {(response || isLoading) && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 p-3 rounded-xl bg-slate-700 text-gray-100 text-sm"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 size={14} className="animate-spin" /> Thinking...
                                    </span>
                                ) : (
                                    response
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HeroRobot
