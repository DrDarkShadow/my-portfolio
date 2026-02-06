"use client"
import { useEffect, useRef } from "react"

export function LiquidEffectAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const script = document.createElement("script")
        script.type = "module"
        script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';

      const canvas = document.getElementById('liquid-canvas');
      if (canvas) {
        const app = LiquidBackground(canvas);
        app.loadImage('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=1920&q=80');
        app.liquidPlane.material.metalness = 0.75;
        app.liquidPlane.material.roughness = 0.25;
        app.liquidPlane.uniforms.displacementScale.value = 5;
        app.setRain(false);
        window.__liquidApp = app;
      }
    `

        document.body.appendChild(script)

        return () => {
            if (window.__liquidApp && window.__liquidApp.dispose) {
                window.__liquidApp.dispose()
            }
            if (script.parentNode) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="fixed inset-0 m-0 w-full h-full touch-none overflow-hidden -z-10">
            <canvas
                ref={canvasRef}
                id="liquid-canvas"
                className="fixed inset-0 w-full h-full"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

declare global {
    interface Window {
        __liquidApp?: {
            dispose?: () => void
            loadImage?: (url: string) => void
            liquidPlane?: {
                material: { metalness: number; roughness: number }
                uniforms: { displacementScale: { value: number } }
            }
            setRain?: (enabled: boolean) => void
        }
    }
}
