import { useState, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

function getYouTubeThumbnails(videoUrl: string) {
  const id = videoUrl.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/)?.[1];
  if (!id) return null;
  return {
    small: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    full: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  };
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [vimeoThumbSmall, setVimeoThumbSmall] = useState<string | null>(null);
  const [vimeoThumbFull, setVimeoThumbFull] = useState<string | null>(null);
  const [thumbFullLoaded, setThumbFullLoaded] = useState(false);

  const youtube = getYouTubeThumbnails(videoUrl);
  const thumbSmall = youtube ? youtube.small : vimeoThumbSmall;
  const thumbFull = youtube ? youtube.full : vimeoThumbFull;

  useEffect(() => {
    if (videoUrl.includes("youtube.com")) return;

    const vimeoId = videoUrl.match(/\/video\/(\d+)/)?.[1];
    if (!vimeoId) return;

    const controller = new AbortController();
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then(({ thumbnail_url }: { thumbnail_url: string }) => {
        setVimeoThumbSmall(thumbnail_url);
        setVimeoThumbFull(thumbnail_url.replace(/_(\d+)x(\d+)(\.\w+)$/, "_1280x720$3"));
      })
      .catch(() => {});

    return () => controller.abort();
  }, [videoUrl]);

  return (
    <div className="w-full aspect-video relative overflow-hidden">
      <iframe
        src={videoUrl.replace(/[&?]autoplay=1/, "")}
        className="w-full h-full"
        allow="fullscreen; picture-in-picture"
        onLoad={() => setVideoLoaded(true)}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-200 ease-in ${videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {thumbSmall && (
          <img
            src={thumbSmall}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: thumbFullLoaded ? undefined : "blur(8px)" }}
          />
        )}
        {thumbFull && (
          <img
            src={thumbFull}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${thumbFullLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setThumbFullLoaded(true)}
          />
        )}
      </div>
    </div>
  );
}
