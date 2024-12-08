import { useEffect, useState, useCallback, RefObject } from 'react';
import { calculateParallax, isElementInView, lerp } from '../utils/parallaxUtils';

interface ParallaxState {
  offset: number;
  opacity: number;
  scale: number;
}

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const [state, setState] = useState<ParallaxState>({
    offset: 0,
    opacity: 1,
    scale: 1,
  });

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const scrollPosition = window.pageYOffset;
    const elementTop = rect.top + scrollPosition;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    if (isElementInView(elementTop, elementHeight, windowHeight, scrollPosition)) {
      const parallaxOffset = calculateParallax(elementTop, elementHeight, scrollPosition, speed);
      const currentOpacity = lerp(0.4, 1, Math.abs(1 - Math.abs(parallaxOffset) / 100));
      const currentScale = lerp(0.95, 1.05, Math.abs(1 - Math.abs(parallaxOffset) / 100));

      setState({
        offset: parallaxOffset,
        opacity: currentOpacity,
        scale: currentScale,
      });
    }
  }, [ref, speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return state;
};