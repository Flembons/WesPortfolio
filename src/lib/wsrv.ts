export function wsrv(url: string, width = 1200, quality = 75): string {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}

// Builds a srcSet from a wsrv() URL by swapping its width. The largest
// default matches wsrv()'s own default, so no image gets bigger than before.
export function wsrvSrcSet(src: string, widths = [400, 800, 1200]): string {
  return widths
    .map((w) => {
      const url = new URL(src);
      url.searchParams.set("w", String(w));
      return `${url} ${w}w`;
    })
    .join(", ");
}
