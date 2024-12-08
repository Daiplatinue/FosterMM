import { useRef, useEffect } from 'react';
import { useParallax } from '../utils/useParallax';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const ParallaxSection = ({ imageUrl, title, description, reverse = false }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { offset: imageOffset, opacity: imageOpacity, scale: imageScale } = useParallax(imageRef, 0.3);
  const { offset: contentOffset, opacity: contentOpacity } = useParallax(contentRef, 0.5);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translate3d(0, ${imageOffset}px, 0) scale(${imageScale})`;
      imageRef.current.style.opacity = `${imageOpacity}`;
    }

    if (contentRef.current) {
      contentRef.current.style.transform = `translate3d(0, ${-contentOffset}px, 0)`;
      contentRef.current.style.opacity = `${contentOpacity}`;
    }
  }, [imageOffset, imageOpacity, imageScale, contentOffset, contentOpacity]);

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
      </div>
      
      <div
        ref={contentRef}
        className={`relative z-10 container mx-auto px-6 ${
          reverse ? 'ml-auto mr-8' : 'ml-8'
        } max-w-2xl will-change-transform`}
      >
        <div
          className={`transition-transform duration-700 ease-out ${
            reverse ? 'text-right' : 'text-left'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};