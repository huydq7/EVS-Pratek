"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";

interface Video {
  id: number;
  url: string;
  thumbnail: string;
}

export const VideoPage = () => {
  const videos = [
    {
      id: 1,
      url: "/video.mp4",
      thumbnail: "/video-thumbnail-1.jpg",
    },
    {
      id: 2,
      url: "/video2.mp4",
      thumbnail: "/video-thumbnail-2.jpg",
    },
    {
      id: 3,
      url: "/video3.mp4",
      thumbnail: "/video-thumbnail-3.jpg",
    },
  ];
  const [activeVideo, setActiveVideo] = useState<Video>(videos[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Load the video without autoplay
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
    <div className="custom-height flex flex-col items-center justify-center font-montserrat">
      <p className="text-2xl mb-8 leading-8 text-[24px] font-bold text-brand-primary-medium">
        Nhanh chóng - Hiệu quả - Dễ dàng
      </p>

      {/* Main video */}
      <div className="w-[845px] h-[420px] mb-6">
        <video
          ref={videoRef}
          className="w-full h-[420px] object-cover rounded-lg shadow-lg cursor-pointer"
          controls
          onClick={handleMainVideoClick}
        >
          <source src={activeVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Thumbnail videos */}
      <div className="flex gap-4 justify-center">
        {videos.map((video) => (
          <Button
            key={video.id}
            onClick={() => handleVideoClick(video.id)}
            className={`relative w-[240px] h-[135px] rounded-lg overflow-hidden transition-all 
              ${
                activeVideo.id === video.id
                  ? "ring-4 ring-brand-primary-medium"
                  : "opacity-70 hover:opacity-100"
              }`}
          >
            <Image
              src={video.thumbnail}
              alt={`Video thumbnail ${video.id}`}
              width={240}
              height={135}
              layout="responsive"
              objectFit="cover"
            />

            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <svg
                className="w-12 h-12 text-white"
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
      <Button className="rounded-[100px] bg-brand-secondary-medium font-semibold w-[250px] relative top-12 h-[60px] text-[20px] leading-8 px-8 py-4">
        Dùng thử miễn phí
      </Button>
    </div>
  );
};
