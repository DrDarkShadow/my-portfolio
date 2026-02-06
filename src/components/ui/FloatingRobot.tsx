import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'
import { RobotChat } from './RobotChat'

export function FloatingRobot() {
    const [isVisible, setIsVisible] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const { scrollY } = useScroll()

    // Smooth cursor following
    const cursorX = useSpring(0, { stiffness: 50, damping: 20 })
    const cursorY = useSpring(0, { stiffness: 50, damping: 20 })

    // Eye tracking (faster response)
    const eyeX = useSpring(0, { stiffness: 200, damping: 15 })
    const eyeY = useSpring(0, { stiffness: 200, damping: 15 })

    // Transform scroll to size (shrink as you scroll)
    const robotScale = useTransform(scrollY, [0, 300], [1, 0.7])
    const robotOpacity = useTransform(scrollY, [0, 100], [0, 1])

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (y) => {
            setIsVisible(y > 50)
        })

        const handleMouseMove = (e: MouseEvent) => {
            if (isChatOpen) return // Don't move when chat is open

            const targetX = Math.min(Math.max(e.clientX - window.innerWidth + 120, -40), 15)
            const targetY = Math.min(Math.max(e.clientY - window.innerHeight + 120, -40), 15)
            cursorX.set(targetX)
            cursorY.set(targetY)

            const centerX = window.innerWidth - 60
            const centerY = window.innerHeight - 60
            const normalizedX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 200))
            const normalizedY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 200))
            eyeX.set(normalizedX * 4)
            eyeY.set(normalizedY * 3)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            unsubscribe()
        }
    }, [cursorX, cursorY, eyeX, eyeY, scrollY, isChatOpen])

    if (!isVisible) return null

    return (
        <>
            <motion.div
                className="fixed z-50 cursor-pointer"
                style={{
                    right: 20,
                    bottom: 20,
                    x: isChatOpen ? 0 : cursorX,
                    y: isChatOpen ? 0 : cursorY,
                    scale: robotScale,
                    opacity: robotOpacity,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                <motion.div
                    animate={isChatOpen ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        className="drop-shadow-lg"
                        style={{ filter: `drop-shadow(0 4px 12px rgba(16, 185, 129, ${isChatOpen ? 0.6 : 0.4}))` }}
                    >
                        {/* Antenna */}
                        <motion.g
                            animate={{ rotate: isChatOpen ? [-10, 10, -10] : [-5, 5, -5] }}
                            transition={{ duration: isChatOpen ? 0.5 : 2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ transformOrigin: '50px 25px' }}
                        >
                            <line x1="50" y1="25" x2="50" y2="10" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="50" cy="8" r="5" fill="#10b981">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur={isChatOpen ? "0.5s" : "1s"} repeatCount="indefinite" />
                            </circle>
                        </motion.g>

                        {/* Robot head */}
                        <rect x="20" y="25" width="60" height="50" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="3" />

                        {/* Face plate */}
                        <rect x="28" y="32" width="44" height="36" rx="8" fill="#0f172a" />

                        {/* Eye sockets */}
                        <rect x="32" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />
                        <rect x="54" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />

                        {/* Left eye */}
                        <motion.circle
                            cx="39"
                            cy="45"
                            r="4"
                            fill={isChatOpen ? "#fbbf24" : "#10b981"}
                            style={{ x: eyeX, y: eyeY }}
                        >
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                        </motion.circle>

                        {/* Right eye */}
                        <motion.circle
                            cx="61"
                            cy="45"
                            r="4"
                            fill={isChatOpen ? "#fbbf24" : "#10b981"}
                            style={{ x: eyeX, y: eyeY }}
                        >
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                        </motion.circle>

                        {/* Mouth - happy when chat open */}
                        {isChatOpen ? (
                            <path d="M 38 58 Q 50 68 62 58" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                        ) : (
                            <>
                                <rect x="35" y="58" width="30" height="6" rx="2" fill="#0a0a0a" />
                                <rect x="37" y="59.5" width="5" height="3" rx="1" fill="#10b981" opacity="0.6">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite" />
                                </rect>
                                <rect x="44" y="59.5" width="12" height="3" rx="1" fill="#10b981" opacity="0.9">
                                    <animate attributeName="opacity" values="0.6;1;0.6" dur="0.7s" repeatCount="indefinite" />
                                </rect>
                                <rect x="58" y="59.5" width="5" height="3" rx="1" fill="#10b981" opacity="0.6">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" repeatCount="indefinite" />
                                </rect>
                            </>
                        )}

                        {/* Ears */}
                        <rect x="12" y="40" width="8" height="20" rx="3" fill="#10b981" />
                        <rect x="80" y="40" width="8" height="20" rx="3" fill="#10b981" />

                        {/* Body */}
                        <rect x="35" y="75" width="30" height="15" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />

                        {/* Body lights */}
                        <circle cx="42" cy="82" r="3" fill="#fbbf24">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="50" cy="82" r="3" fill="#10b981">
                            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="58" cy="82" r="3" fill="#ef4444">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </motion.div>

                {/* Click hint */}
                {!isChatOpen && (
                    <motion.div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        Chat with me! 💬
                    </motion.div>
                )}
            </motion.div>

            {/* Chat popup */}
            <RobotChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    )
}

export default FloatingRobot
