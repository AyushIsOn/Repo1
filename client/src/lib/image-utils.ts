/**
 * Utility function to get the WebP version of an image path if available
 * Falls back to original image if WebP doesn't exist
 */
export function getOptimizedImagePath(originalPath: string): string {
  // Remove leading slash if present
  const cleanPath = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;
  
  // Check if it's already a WebP image
  if (cleanPath.endsWith('.webp')) {
    return `/${cleanPath}`;
  }
  
  // For other image formats, try to use WebP version
  if (cleanPath.match(/\.(jpg|jpeg|png)$/i)) {
    const webpPath = cleanPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    // For images in the images folder, check webp subfolder
    if (cleanPath.startsWith('images/')) {
      const fileName = cleanPath.replace('images/', '');
      const webpFileName = fileName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return `/images/webp/${webpFileName}`;
    }
    return `/${webpPath}`;
  }
  
  // Return original path if no optimization available
  return `/${cleanPath}`;
}

/**
 * Get image sources for HTML picture element with WebP fallback
 */
export function getImageSources(originalPath: string) {
  const webpPath = getOptimizedImagePath(originalPath);
  const originalFullPath = originalPath.startsWith('/') ? originalPath : `/${originalPath}`;
  
  return {
    webp: webpPath,
    fallback: originalFullPath
  };
}
