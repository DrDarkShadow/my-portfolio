import { motion, AnimatePresence } from 'framer-motion'

interface ThemeToggleProps {
    isDark: boolean
    onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <motion.button
            onClick={onToggle}
            className="relative w-14 h-7 rounded-full cursor-pointer overflow-hidden"
            style={{
                backgroundColor: isDark ? '#1e293b' : '#fbbf24',
                border: `2px solid ${isDark ? '#334155' : '#d97706'}`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {/* Track background elements */}
            <AnimatePresence>
                {isDark && (
                    <>
                        {/* Stars in dark mode */}
                        <motion.span
                            className="absolute text-[6px]"
                            style={{ left: 6, top: 4 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            ⭐
                        </motion.span>
                        <motion.span
                            className="absolute text-[5px]"
                            style={{ left: 12, top: 14 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            ✨
                        </motion.span>
                        <motion.span
                            className="absolute text-[4px]"
                            style={{ left: 4, top: 10 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            ⭐
                        </motion.span>
                    </>
                )}
                {!isDark && (
                    <>
                        {/* Clouds in light mode */}
                        <motion.span
                            className="absolute text-[8px]"
                            style={{ right: 6, top: 2, opacity: 0.6 }}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 0.6, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                        >
                            ☁️
                        </motion.span>
                        <motion.span
                            className="absolute text-[6px]"
                            style={{ right: 12, top: 12, opacity: 0.4 }}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 0.4, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ delay: 0.1 }}
                        >
                            ☁️
                        </motion.span>
                    </>
                )}
            </AnimatePresence>

            {/* Sun/Moon toggle knob */}
            <motion.div
                className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                animate={{
                    left: isDark ? 30 : 4,
                    rotate: isDark ? 360 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
                style={{
                    backgroundColor: isDark ? '#f1f5f9' : '#fef3c7',
                    boxShadow: isDark
                        ? '0 0 10px rgba(241, 245, 249, 0.5)'
                        : '0 0 15px rgba(251, 191, 36, 0.8)',
                }}
            >
                <motion.span
                    animate={{ rotate: isDark ? 0 : 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm"
                >
                    {isDark ? '🌙' : '☀️'}
                </motion.span>
            </motion.div>
        </motion.button>
    )
}

export default ThemeToggle
