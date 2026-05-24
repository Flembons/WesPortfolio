export function wsrv(url: string, width = 1200, quality = 10): string {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}
