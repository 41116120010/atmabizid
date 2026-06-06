import { getImagePath, getWebPPath } from "../config";

interface OptimizedImageProps {
  filename: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

/**
 * Renders an image with WebP format support and JPEG/PNG fallback.
 * Uses <picture> element for modern browser optimization.
 */
export default function OptimizedImage({
  filename,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}: OptimizedImageProps) {
  const fallbackSrc = getImagePath(filename);
  const webpSrc = getWebPPath(filename);

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
}
