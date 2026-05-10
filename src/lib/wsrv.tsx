// Utility function for resizing and optimizing images using the WSRV service
export function wsrv(url: string, width = 1200, quality = 80): string {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}
