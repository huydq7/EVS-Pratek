"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

interface Video {
  id: number;
  url: string;
  thumbnail: string;
}

export const VideoPage = () => {
  const videos = [
    { id: 1, url: "/video.mp4", thumbnail: "/logo.png" },
    { id: 2, url: "/video2.mp4", thumbnail: "/logo.png" },
    { id: 3, url: "/video3.mp4", thumbnail: "/logo.png" },
  ];

  const [activeVideo, setActiveVideo] = useState<Video>(videos[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeVideo]);

  const handleVideoClick = (videoId: number) => {
    const selectedVideo = videos.find((v) => v.id === videoId);
    if (selectedVideo) {
      setActiveVideo(selectedVideo);
    }
  };

  const handleMainVideoClick = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Error playing video:", error));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-montserrat px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 font-bold text-center text-brand-primary-medium">
        Nhanh chóng - Hiệu quả - Dễ dàng
      </h2>

      {/* Main video */}
      <div className="w-full max-w-4xl mb-6 sm:mb-8">
        <div className="aspect-w-16 aspect-h-9">
          <video
            ref={videoRef}
            className="w-[845px] h-[480px] object-cover rounded-lg shadow-lg cursor-pointer"
            controls
            onClick={handleMainVideoClick}
          >
            <source src={activeVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Thumbnail videos */}
      <div className="w-full max-w-4xl mb-6 sm:mb-8">
        <div
          className={cn(
            "flex gap-3 sm:gap-4 justify-center overflow-x-auto py-2",
            "scrollbar-thin scrollbar-thumb-brand-primary-medium scrollbar-track-gray-200"
          )}
        >
          {videos.map((video) => (
            <Button
              key={video.id}
              onClick={() => handleVideoClick(video.id)}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all flex-shrink-0",
                isMobile ? "w-32 aspect-video" : "w-[156px] h-[88px]", // Larger size for desktop with a 16:10 aspect ratio
                activeVideo.id === video.id
                  ? "ring-2 sm:ring-4 ring-brand-primary-medium scale-105 z-10"
                  : "opacity-80 hover:opacity-100 hover:scale-105"
              )}
            >
              <Image
                src={video.thumbnail}
                alt={`Video thumbnail ${video.id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20">
                <svg
                  className={cn(
                    "w-8 h-8 sm:w-12 sm:h-12 text-white transition-transform",
                    activeVideo.id !== video.id && "group-hover:scale-125"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <Button className="mt-4 sm:mt-6 rounded-full bg-brand-secondary-medium font-semibold text-base sm:text-lg lg:text-xl w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 lg:h-[80px] lg:font-bold">
        Dùng thử miễn phí
      </Button>
    </div>
  );
};
