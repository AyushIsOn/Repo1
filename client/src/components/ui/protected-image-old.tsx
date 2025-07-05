import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  disableRightClick?: boolean;
  disableDownload?: boolean;
  watermark?: string;
}

export function ProtectedImage({ 
  src, 
  alt, 
  fallbackSrc, 
  className,
  disableRightClick = true,
  disableDownload = true,
  watermark,
  ...props 
}: ProtectedImageProps) {
  // Get the base path for GitHub Pages
  const basePath = import.meta.env.PROD ? '/Hostel' : '';
  
  const [imgSrc, setImgSrc] = useState(() => {
    // Convert image path to WebP if available and add base path
    const getWebPSrc = (originalSrc: string) => {
      // If already has base path, don't add it again
      if (originalSrc.startsWith(basePath)) {
        if (originalSrc.includes('/images/webp/')) return originalSrc;
        
        const webpSrc = originalSrc.replace(
          /\/images\/([^/]+)\.(jpg|jpeg|png)$/i, 
          '/images/webp/$1.webp'
        );
        return webpSrc;
      }
      
      // Add base path and convert to WebP
      const withBasePath = `${basePath}${originalSrc}`;
      if (withBasePath.includes('/images/webp/')) return withBasePath;
      
      const webpSrc = withBasePath.replace(
        /\/images\/([^/]+)\.(jpg|jpeg|png)$/i, 
        '/images/webp/$1.webp'
      );
      return webpSrc;
    };
    return getWebPSrc(src);
  });
  const [isLoading, setIsLoading] = useState(true);  const [hasError, setHasError] = useState(false);

  // Convert image path to WebP if available and add base path
  const getWebPSrc = (originalSrc: string) => {
    // If already has base path, don't add it again
    if (originalSrc.startsWith(basePath)) {
      if (originalSrc.includes('/images/webp/')) return originalSrc;
      
      const webpSrc = originalSrc.replace(
        /\/images\/([^/]+)\.(jpg|jpeg|png)$/i, 
        '/images/webp/$1.webp'
      );
      return webpSrc;
    }
    
    // Add base path and convert to WebP
    const withBasePath = `${basePath}${originalSrc}`;
    if (withBasePath.includes('/images/webp/')) return withBasePath;
    
    const webpSrc = withBasePath.replace(
      /\/images\/([^/]+)\.(jpg|jpeg|png)$/i, 
      '/images/webp/$1.webp'
    );
    return webpSrc;
  };

  const getOriginalSrc = (originalSrc: string) => {
    // Add base path if not already present
    if (originalSrc.startsWith(basePath)) return originalSrc;
    return `${basePath}${originalSrc}`;
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback to original format if WebP fails
    if (imgSrc.includes('.webp')) {
      const originalPath = src; // Use the original src prop
      const originalSrc = getOriginalSrc(originalPath);
      setImgSrc(fallbackSrc || originalSrc);
    }
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
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          className?.includes('rounded') ? className.split(' ').find(c => c.includes('rounded')) : 'rounded'
        )} />
      )}
      
      <picture>
        <source srcSet={getWebPSrc(src)} type="image/webp" />
        <img
          {...props}
          src={imgSrc}
          alt={alt}
          className={cn(
            "w-full h-full",
            className,
            disableDownload && "select-none",
            isLoading && "opacity-0",
            hasError && "opacity-50"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          loading="lazy"
          decoding="async"
          style={{
            ...props.style,
            userSelect: disableDownload ? 'none' : 'auto',
            WebkitUserSelect: disableDownload ? 'none' : 'auto',
            MozUserSelect: disableDownload ? 'none' : 'auto',
          } as React.CSSProperties}
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
