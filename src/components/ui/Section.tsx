import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    fullHeight?: boolean;
    bgColor?: string;
}

export default function Section({
    children,
    id,
    className = '',
    fullHeight = false,
    bgColor = ''
}: SectionProps) {
    return (
        <section
            id={id}
            className={`
        section
        ${fullHeight ? 'section-full-height' : ''}
        ${bgColor}
        ${className}
      `}
        >
            <div className="section-container">
                {children}
            </div>
        </section>
    );
} 