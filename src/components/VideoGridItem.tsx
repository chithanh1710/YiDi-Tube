import { Link } from "react-router-dom";
import formatDuration from "../utils/formatDuration";
import VIEW_FORMATTER from "../utils/formatView";
import formatTimeAgo from "../utils/formatTimeAgo";
import { useEffect, useRef, useState } from "react";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  });

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link to={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt={title}
          className={`block w-full h-full object-cover transition-all duration-300 ${
            isVideoPlaying ? "delay-300 rounded-none" : " rounded-xl"
          } `}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          className={`block h-full w-full object-cover absolute inset-0 transition-opacity  duration-300 ${
            isVideoPlaying ? "delay-500 opacity-100" : " opacity-0"
          }`}
          ref={videoRef}
          src={videoUrl}
          muted
          playsInline
        ></video>
      </Link>
      <div className="flex gap-2">
        <Link to={`/@${channel.id}`} className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full "
            src={channel.profileUrl}
            alt={channel.name}
          />
        </Link>
        <div className="flex flex-col">
          <Link to={`/watch?v=${id}`} className="font-bold">
            {title}
          </Link>
          <Link to={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </Link>
          <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} Views •{" "}
            {formatTimeAgo(postedAt) === "Năm Ngoái"
              ? "1 Năm Trước"
              : formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}
