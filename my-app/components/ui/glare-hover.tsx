"use client";

import React from 'react';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '500px',
  height = '500px',
  background = 'transparent',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;

  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const containerStyle: React.CSSProperties = {
    width,
    height,
    background,
    borderRadius,
    border: `1px solid ${borderColor}`,
    overflow: 'hidden',
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    ...style
  };

  const glareStyle: React.CSSProperties = {
    content: '',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${glareAngle}deg, hsla(0, 0%, 0%, 0) 60%, ${rgba} 70%, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0) 100%)`,
    transition: `${transitionDuration}ms ease`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none',
  };

  return (
    <div
      className={`glare-hover-container ${className}`}
      style={containerStyle}
      onMouseEnter={(e) => {
        const glareEl = e.currentTarget.querySelector('.glare-effect') as HTMLElement;
        if (glareEl) {
          glareEl.style.backgroundPosition = '100% 100%, 0 0';
        }
      }}
      onMouseLeave={(e) => {
        const glareEl = e.currentTarget.querySelector('.glare-effect') as HTMLElement;
        if (glareEl && !playOnce) {
          glareEl.style.backgroundPosition = '-100% -100%, 0 0';
        }
      }}
    >
      <div className="glare-effect" style={glareStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
