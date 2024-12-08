export const calculateParallax = (elementTop: number, elementHeight: number, scrollPosition: number, speed: number = 0.5): number => {
    const relativeScroll = scrollPosition - elementTop;
    const percentageScrolled = relativeScroll / elementHeight;
    return percentageScrolled * speed * 100;
  };
  
  export const isElementInView = (elementTop: number, elementHeight: number, windowHeight: number, scrollPosition: number): boolean => {
    const elementBottom = elementTop + elementHeight;
    const viewBottom = scrollPosition + windowHeight;
    return elementTop <= viewBottom && elementBottom >= scrollPosition;
  };
  
  export const lerp = (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor;
  };