'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the page has been scrolled past a threshold
 * @param threshold - The scroll position threshold in pixels (default: 10)
 * @returns boolean - true if scrolled past threshold, false otherwise
 */
export function useScroll(threshold: number = 10): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, threshold]);

  return scrolled;
}
