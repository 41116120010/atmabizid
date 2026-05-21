/**
 * Centralized configuration.
 * Uses Vite environment variables with sensible defaults.
 */

export const config = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://atma.biz.id",
  imageBasePath: import.meta.env.VITE_IMAGE_BASE_PATH || "/image",
} as const;

/**
 * Helper to construct image paths.
 */
export function getImagePath(filename: string): string {
  return `${config.imageBasePath}/${filename}`;
}

/**
 * Helper to get WebP version of an image path.
 */
export function getWebPPath(filename: string): string {
  const webpName = filename.replace(/\.(jpeg|jpg|png)$/i, ".webp");
  return `${config.imageBasePath}/${webpName}`;
}

/**
 * Helper to construct absolute image URLs (for OG tags, etc.)
 */
export function getImageUrl(filename: string): string {
  return `${config.siteUrl}${config.imageBasePath}/${filename}`;
}
