import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface AIAvatarProps {
    size?: number
    className?: string
}

export function AIAvatar({ size = 240, className = '' }: AIAvatarProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHappy, setIsHappy] = useState(false)

    // Smooth spring-based eye movement
    const mouseX = useSpring(0, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(0, { stiffness: 150, damping: 15 })

    // Transform mouse position to eye movement
    const leftEyeX = useTransform(mouseX, [-1, 1], [-6, 6])
    const leftEyeY = useTransform(mouseY, [-1, 1], [-4, 4])
    const rightEyeX = useTransform(mouseX, [-1, 1], [-6, 6])
    const rightEyeY = useTransform(mouseY, [-1, 1], [-4, 4])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            // Normalize to -1 to 1 range
            const normalizedX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 300))
            const normalizedY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 300))

            mouseX.set(normalizedX)
            mouseY.set(normalizedY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onMouseEnter={() => setIsHappy(true)}
            onMouseLeave={() => setIsHappy(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(16, 185, 129, 0.3))' }}
            >
                {/* Background glow */}
                <defs>
                    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="faceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="cheekGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
                    </linearGradient>
                </defs>

                {/* Outer glow circle */}
                <circle cx="100" cy="100" r="98" fill="url(#bgGlow)" />

                {/* Main face - yellow emoji style */}
                <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="url(#faceGradient)"
                    stroke="#d97706"
                    strokeWidth="3"
                />

                {/* Highlight on face */}
                <ellipse
                    cx="70"
                    cy="70"
                    rx="25"
                    ry="15"
                    fill="white"
                    opacity="0.3"
                    transform="rotate(-20 70 70)"
                />

                {/* Left cheek blush */}
                <ellipse
                    cx="45"
                    cy="115"
                    rx="18"
                    ry="10"
                    fill="url(#cheekGradient)"
                />

                {/* Right cheek blush */}
                <ellipse
                    cx="155"
                    cy="115"
                    rx="18"
                    ry="10"
                    fill="url(#cheekGradient)"
                />

                {/* Left eye white */}
                <ellipse
                    cx="70"
                    cy="90"
                    rx="22"
                    ry="25"
                    fill="white"
                    stroke="#92400e"
                    strokeWidth="2"
                />

                {/* Right eye white */}
                <ellipse
                    cx="130"
                    cy="90"
                    rx="22"
                    ry="25"
                    fill="white"
                    stroke="#92400e"
                    strokeWidth="2"
                />

                {/* Left pupil - animated */}
                <motion.g style={{ x: leftEyeX, y: leftEyeY }}>
                    <circle cx="70" cy="92" r="12" fill="#1e293b" />
                    <circle cx="74" cy="88" r="4" fill="white" />
                    <circle cx="66" cy="96" r="2" fill="white" opacity="0.5" />
                </motion.g>

                {/* Right pupil - animated */}
                <motion.g style={{ x: rightEyeX, y: rightEyeY }}>
                    <circle cx="130" cy="92" r="12" fill="#1e293b" />
                    <circle cx="134" cy="88" r="4" fill="white" />
                    <circle cx="126" cy="96" r="2" fill="white" opacity="0.5" />
                </motion.g>

                {/* Eyebrows */}
                <motion.path
                    d="M 50 65 Q 70 55 90 65"
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    animate={{ d: isHappy ? "M 50 60 Q 70 50 90 60" : "M 50 65 Q 70 55 90 65" }}
                />
                <motion.path
                    d="M 110 65 Q 130 55 150 65"
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    animate={{ d: isHappy ? "M 110 60 Q 130 50 150 60" : "M 110 65 Q 130 55 150 65" }}
                />

                {/* Mouth - changes on hover */}
                <motion.path
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    animate={{
                        d: isHappy
                            ? "M 60 140 Q 100 175 140 140"  // Big smile
                            : "M 70 140 Q 100 160 130 140"   // Normal smile
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />

                {/* Teeth when happy */}
                {isHappy && (
                    <motion.rect
                        x="85"
                        y="145"
                        width="30"
                        height="12"
                        rx="2"
                        fill="white"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: 0.1 }}
                    />
                )}

                {/* AI badge */}
                <g>
                    <rect
                        x="135"
                        y="155"
                        width="35"
                        height="20"
                        rx="10"
                        fill="#10b981"
                    />
                    <text
                        x="152.5"
                        y="169"
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="bold"
                        fill="white"
                        fontFamily="system-ui"
                    >
                        AI
                    </text>
                </g>

                {/* Sparkles around */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '100px 100px' }}
                >
                    <text x="15" y="50" fontSize="16" fill="#10b981">✨</text>
                    <text x="175" y="40" fontSize="14" fill="#fbbf24">⭐</text>
                    <text x="180" y="160" fontSize="12" fill="#10b981">✨</text>
                    <text x="10" y="150" fontSize="14" fill="#fbbf24">⭐</text>
                </motion.g>
            </svg>
        </motion.div>
    )
}

export default AIAvatar
