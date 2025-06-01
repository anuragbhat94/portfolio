"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  caption: string;
}

export default function Slideshow() {
  // 1) Slides – paths point directly to /public/image‑gallery/*
  const slides: Slide[] = [
    {
      src: "/image-gallery/20210621_043752784_iOS.jpeg",
      caption:
        "Surveying villagers in a house with cow‑dung floors (post‑COVID migration)",
    },
    {
      src: "/image-gallery/20210622_123615978_iOS.jpeg",
      caption: "Field survey in a rural village on COVID aftermath",
    },
    {
      src: "/image-gallery/20210630_084121019_iOS.jpeg",
      caption: "Collecting heat‑wave data in a remote Himalayan hamlet",
    },
    {
      src: "/image-gallery/20210721_085605370_iOS.jpeg",
      caption: "Surveying women in the Himalayan mountains",
    },
    {
      src: "/image-gallery/20210721_093125735_iOS.jpeg",
      caption: "Another glimpse of Himalayan fieldwork",
    },
    {
      src: "/image-gallery/20240614_204719000_iOS.jpg",
      caption:
        "Presenting the HeatWatch Initiative to the MPO policy committee (Bloomington)",
    },
    {
      src: "/image-gallery/20250131_190011734_iOS.jpeg",
      caption:
        "Final capstone presentation on Central Asia hydrological hazards to DoS clients",
    },
    {
      src: "/image-gallery/20250322_011514336_iOS.jpeg",
      caption: "Dinner with Fulbright fellows and faculty",
    },
    {
      src: "/image-gallery/20250328_213423907_iOS.jpeg",
      caption: "Environmental Justice Fellows (2024–25) cohort photo",
    },
    {
      src: "/image-gallery/20250502_175605801_iOS.jpeg",
      caption:
        "Final capstone presentation on hydrological hazards (May 2025)",
    },
    {
      src: "/image-gallery/20250531_052232244_iOS.jpeg",
      caption: "McKinney Climate Fellows cohort (2024)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2) Advance slide every 5 s
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[currentIndex];

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-200">
      {/* image */}
      <Image
        key={current.src} // resets CSS animation on each slide
        src={current.src}
        alt={current.caption}
        fill
        className="object-cover animate-fade"
        priority
      />

      {/* caption */}
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <p className="w-full pb-4 text-sm md:text-base lg:text-lg text-white drop-shadow">
          {current.caption}
        </p>
      </div>
    </div>
  );
}
