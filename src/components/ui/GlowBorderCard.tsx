'use client';

import React from 'react';
import { cn } from '../../lib/utils';

export interface GlowBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    aspectRatio?: string;
    borderRadius?: string;
    animationDuration?: number;
    gradientColors?: string[];
    borderWidth?: string;
    blurAmount?: string;
    inset?: string;
    colorPreset?: 'nature' | 'ocean' | 'sunset' | 'aurora' | 'custom';
    paused?: boolean;
}

const colorPresets: Record<string, string[]> = {
    nature: ['#669900', '#88bb22', '#99cc33', '#aaddaa', '#ccee66', '#006699', '#228888', '#3399cc', '#55aacc', '#669900'],
    ocean: ['#006699', '#1177aa', '#2288bb', '#3399cc', '#44aadd', '#55bbee', '#66ccff', '#44bbee', '#2299cc', '#006699'],
    sunset: ['#ff6600', '#ff7711', '#ff8822', '#ff9900', '#ffaa22', '#ffbb44', '#ffcc00', '#ff9933', '#ff7722', '#ff6600'],
    aurora: ['#00ff87', '#22ffaa', '#44ffcc', '#60efff', '#88ddff', '#bb99ff', '#dd77ee', '#ff68f0', '#ff55cc', '#00ff87'],
    custom: ['#10b981', '#059669', '#047857', '#0d9488', '#14b8a6', '#06b6d4', '#0891b2', '#0284c7', '#0369a1', '#10b981'],
};

export const GlowBorderCard = React.forwardRef<HTMLDivElement, GlowBorderCardProps>((
    {
        children,
        className,
        width = '100%',
        height,
        aspectRatio,
        borderRadius = '1rem',
        animationDuration = 4,
        gradientColors,
        borderWidth = '1em',
        blurAmount = '0.6em',
        inset = '-0.8em',
        colorPreset = 'custom',
        paused = false,
        style,
        ...props
    },
    ref
) => {
    const colors = gradientColors || colorPresets[colorPreset] || colorPresets.custom;

    const colorVars: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
        colorVars[`--glow-color-${i + 1}`] = colors[i % colors.length];
    }

    return (
        <div
            ref={ref}
            className={cn(
                "relative overflow-hidden isolate",
                "bg-white/5 dark:bg-neutral-900/60 backdrop-blur-sm",
                className
            )}
            style={{
                width,
                height: height || 'auto',
                aspectRatio: aspectRatio || 'unset',
                borderRadius,
                '--glow-animation-duration': `${animationDuration}s`,
                ...colorVars,
                ...style,
            } as React.CSSProperties}
            {...props}
        >
            <div
                className={cn(
                    "absolute -z-10 border-solid rounded-[inherit] glow-conic",
                    paused && "[animation-play-state:paused]"
                )}
                style={{
                    inset,
                    borderWidth,
                    filter: `blur(${blurAmount})`
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
});

GlowBorderCard.displayName = 'GlowBorderCard';

export default GlowBorderCard;
