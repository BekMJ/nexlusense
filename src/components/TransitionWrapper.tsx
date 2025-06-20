"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface TransitionWrapperProps {
  children: React.ReactNode;
  transitionType?: 'fade' | 'slide' | 'scale' | 'slide-right';
}

export default function TransitionWrapper({ 
  children, 
  transitionType = 'fade' 
}: TransitionWrapperProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPath) {
      setIsTransitioning(true);
      
      const exitTimer = setTimeout(() => {
        setCurrentChildren(children);
        setPreviousPath(pathname);
        setIsTransitioning(false);
      }, 250);

      return () => clearTimeout(exitTimer);
    }
  }, [pathname, previousPath, children]);

  useEffect(() => {
    if (!isTransitioning && currentChildren !== children) {
      setCurrentChildren(children);
    }
  }, [children, currentChildren, isTransitioning]);

  const getTransitionStyles = () => {
    const baseTransition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    switch (transitionType) {
      case 'slide':
        return {
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
          transition: baseTransition,
        };
      case 'slide-right':
        return {
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateX(30px)' : 'translateX(0)',
          transition: baseTransition,
        };
      case 'scale':
        return {
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
          transition: baseTransition,
        };
      case 'fade':
      default:
        return {
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(10px) scale(0.98)' : 'translateY(0) scale(1)',
          filter: isTransitioning ? 'blur(1px)' : 'blur(0)',
          transition: baseTransition,
        };
    }
  };

  return (
    <div
      className={`page-transition ${transitionType} ${
        isTransitioning ? 'page-exit' : 'page-enter'
      }`}
      style={getTransitionStyles()}
    >
      {currentChildren}
    </div>
  );
} 