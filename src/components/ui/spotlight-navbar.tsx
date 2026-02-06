"use client"
import React, { useEffect, useRef, useState } from "react"
import { animate } from "framer-motion"
import { cn } from "../../lib/utils"

export interface NavItem {
    label: string
    href: string
}

export interface SpotlightNavbarProps {
    items?: NavItem[]
    className?: string
    onItemClick?: (item: NavItem, index: number) => void
    defaultActiveIndex?: number
}

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],
    className,
    onItemClick,
    defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
    const [hoverX, setHoverX] = useState<number | null>(null)

    const spotlightX = useRef(0)
    const ambienceX = useRef(0)

    useEffect(() => {
        if (!navRef.current) return

        const nav = navRef.current

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect()
            const x = e.clientX - rect.left
            setHoverX(x)
            spotlightX.current = x
            nav.style.setProperty("--spotlight-x", `${x}px`)
        }

        const handleMouseLeave = () => {
            setHoverX(null)
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)
            if (activeItem) {
                const navRect = nav.getBoundingClientRect()
                const itemRect = activeItem.getBoundingClientRect()
                const targetX = itemRect.left - navRect.left + itemRect.width / 2

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v
                        nav.style.setProperty("--spotlight-x", `${v}px`)
                    },
                })
            }
        }

        nav.addEventListener("mousemove", handleMouseMove)
        nav.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove)
            nav.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [activeIndex])

    useEffect(() => {
        if (!navRef.current) return

        const nav = navRef.current
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)

        if (activeItem) {
            const navRect = nav.getBoundingClientRect()
            const itemRect = activeItem.getBoundingClientRect()
            const targetX = itemRect.left - navRect.left + itemRect.width / 2

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v
                    nav.style.setProperty("--ambience-x", `${v}px`)
                },
            })
        }
    }, [activeIndex])

    const handleItemClick = (item: NavItem, index: number, e: React.MouseEvent) => {
        e.preventDefault()
        setActiveIndex(index)
        onItemClick?.(item, index)

        // Smooth scroll to section
        const element = document.querySelector(item.href)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50", className)}>
            <nav
                ref={navRef}
                className={cn(
                    "spotlight-nav relative h-12 rounded-full transition-all duration-300 overflow-hidden",
                    "bg-[rgba(10,10,15,0.8)] backdrop-blur-xl",
                    "border border-white/10 shadow-2xl"
                )}
            >
                {/* Nav Items */}
                <ul className="relative flex items-center h-full px-2 gap-0 z-[10]">
                    {items.map((item, idx) => (
                        <li key={idx} className="relative h-full flex items-center justify-center">
                            <a
                                href={item.href}
                                data-index={idx}
                                onClick={(e) => handleItemClick(item, idx, e)}
                                className={cn(
                                    "px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                                    activeIndex === idx
                                        ? "text-white"
                                        : "text-white/50 hover:text-white"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Spotlight (Follows Mouse) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `radial-gradient(100px circle at var(--spotlight-x) 100%, rgba(0,217,255,0.15) 0%, transparent 50%)`,
                    }}
                />

                {/* Active Indicator Line */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                    style={{
                        background: `radial-gradient(40px circle at var(--ambience-x) 0%, var(--accent-primary) 0%, transparent 100%)`,
                    }}
                />
            </nav>
        </div>
    )
}

export default SpotlightNavbar
