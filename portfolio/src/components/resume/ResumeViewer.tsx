import { X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResumeViewerProps {
    isOpen: boolean
    onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000]"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[55%] lg:w-[45%] bg-white shadow-2xl z-[2001] flex flex-col border-l border-gray-200"
                    >
                        {/* Minimal Header */}
                        <div className="flex items-center justify-between p-3 px-5 border-b border-gray-100 bg-white/90 backdrop-blur">
                            <h2 className="text-base font-semibold text-gray-700 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]"></span>
                                Resume
                            </h2>

                            <div className="flex items-center gap-1">
                                <a
                                    href="/resume.pdf"
                                    download="Prateek_Gaur_Resume.pdf"
                                    className="p-2 hover:bg-gray-100 rounded-full text-gray-500 cursor-pointer"
                                    title="Download"
                                >
                                    <Download size={16} />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Content - Clean embed without toolbar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex-1 bg-gray-50 overflow-hidden"
                        >
                            <iframe
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                className="w-full h-full border-0"
                                title="Resume"
                            />
                        </motion.div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
