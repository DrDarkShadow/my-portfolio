import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import { FlipText } from '../ui/flip-text'

export function Hero() {
    const scrollToSection = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />

            {/* Content Container */}
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="text-lg tracking-[0.3em] uppercase text-[var(--text-secondary)]">
                            Hello, I'm
                        </span>
                    </motion.div>

                    {/* Name with FlipText Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-6"
                    >
                        <FlipText
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient"
                            duration={3}
                            delay={0.5}
                        >
                            Prateek Gaur
                        </FlipText>
                    </motion.div>

                    {/* Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-10"
                    >
                        <span className="text-xl md:text-2xl text-[var(--accent-primary)]">
                            AI Engineer • GenAI Specialist
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-12"
                    >
                        Building intelligent systems with Python, LLMs, and RAG architectures.
                        End-to-end AI solutions from concept to deployment.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <a
                            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                        >
                            <FileText size={20} />
                            View Resume
                        </a>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
                        >
                            <Mail size={20} />
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex gap-4 justify-center"
                    >
                        {[
                            { href: 'https://www.linkedin.com/in/prateek-gaur-3099a7228/', icon: Linkedin, label: 'LinkedIn' },
                            { href: 'https://github.com/DrDarkShadow', icon: Github, label: 'GitHub' },
                            { href: 'mailto:gaur.prateek.1609@gmail.com', icon: Mail, label: 'Email' },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    onClick={() => scrollToSection('#about')}
                    className="flex flex-col items-center gap-2 cursor-pointer text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                    <ArrowDown size={24} />
                </motion.button>
            </motion.div>
        </section>
    )
}
