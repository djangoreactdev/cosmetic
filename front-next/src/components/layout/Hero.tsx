import Image from "next/image";
import React, { useEffect, useState } from "react";
import { heroslider1, heroslider2 } from "@/images/index";

// import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [heroslider1, heroslider2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="hero-slider-section">
        <div className="hero-slider-active swiper-container">
          <div className="swiper-wrapper">HERO</div>
        </div>
      </div>
    </>
  );
}
