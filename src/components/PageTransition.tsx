"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPath) {
      setIsTransitioning(true);
      
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setCurrentChildren(children);
        setPreviousPath(pathname);
        setIsTransitioning(false);
      }, 200); // Shorter exit time for snappier feel

      return () => clearTimeout(exitTimer);
    }
  }, [pathname, previousPath, children]);

  // Update children when they change (for same page content updates)
  useEffect(() => {
    if (!isTransitioning && currentChildren !== children) {
      setCurrentChildren(children);
    }
  }, [children, currentChildren, isTransitioning]);

  return (
    <div
      className={`page-transition ${
        isTransitioning ? 'page-exit' : 'page-enter'
      }`}
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'translateY(10px) scale(0.98)' : 'translateY(0) scale(1)',
        filter: isTransitioning ? 'blur(1px)' : 'blur(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {currentChildren}
    </div>
  );
} 