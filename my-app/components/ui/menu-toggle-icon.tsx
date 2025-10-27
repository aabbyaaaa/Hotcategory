'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
  duration?: number;
}

export const MenuToggleIcon = React.forwardRef<SVGSVGElement, MenuToggleIconProps>(
  ({ open, duration = 200, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(className)}
        {...props}
      >
        <motion.line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: duration / 1000 }}
          style={{ originX: '12px', originY: '12px' }}
        />
        <motion.line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: duration / 1000 }}
        />
        <motion.line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: duration / 1000 }}
          style={{ originX: '12px', originY: '12px' }}
        />
      </svg>
    );
  }
);

MenuToggleIcon.displayName = 'MenuToggleIcon';
