import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  disableRightClick?: boolean;
  disableDownload?: boolean;
  watermark?: string;
  rotation?: number;
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className,
  sizes = "(max-width: 768px) 300px, (max-width: 1200px) 600px, 1200px",
  priority = false,
  disableRightClick = true,
  disableDownload = true,
  watermark,
  rotation,
  ...props 
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  // Generate responsive image sources
  const getResponsiveImages = (originalSrc: string) => {
    const fileName = originalSrc.split('/').pop()?.replace('.webp', '') || '';
    const basePath = '/optimized-images';
    
    return {
      thumbnail: `${basePath}/thumbnail/${fileName}.webp`,
      small: `${basePath}/small/${fileName}.webp`,
      medium: `${basePath}/medium/${fileName}.webp`,
      large: `${basePath}/large/${fileName}.webp`
    };
  };

  const responsiveImages = getResponsiveImages(src);

  // Generate srcSet for responsive loading
  const srcSet = `
    ${responsiveImages.thumbnail} 300w,
    ${responsiveImages.small} 600w,
    ${responsiveImages.medium} 1200w,
    ${responsiveImages.large} 1920w
  `.trim();

  useEffect(() => {
    // For priority images, start with small size, for others start with thumbnail
    const initialSrc = priority ? responsiveImages.small : responsiveImages.thumbnail;
    setImageSrc(initialSrc);
  }, [src, priority]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Fallback to original WebP image
    const fallbackSrc = src.replace('/optimized-images/', '/webp-images/');
    setImageSrc(fallbackSrc);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disableRightClick) {
      e.preventDefault();
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (disableDownload) {
      e.preventDefault();
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Loading placeholder */}
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          className?.includes('rounded') ? className.split(' ').find(c => c.includes('rounded')) : 'rounded'
        )} />
      )}
      
      <picture>
        <img
          {...props}
          src={imageSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={cn(
            "w-full h-full transition-opacity duration-300",
            className,
            disableDownload && "select-none",
            isLoading && "opacity-0",
            hasError && "opacity-50"
          )}
          style={{
            ...props.style,
            transform: rotation ? `rotate(${rotation}deg)` : undefined,
            userSelect: disableDownload ? 'none' : 'auto',
            WebkitUserSelect: disableDownload ? 'none' : 'auto',
            MozUserSelect: disableDownload ? 'none' : 'auto',
          } as React.CSSProperties}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>

      {/* Watermark overlay */}
      {watermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/15 text-sm font-medium transform rotate-45 select-none">
            {watermark}
          </div>
        </div>
      )}

      {/* Invisible overlay to prevent easy downloading */}
      {disableDownload && (
        <div 
          className="absolute inset-0 cursor-default bg-transparent"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        />
      )}
    </div>
  );
}
