import Image from "next/image";
import React, { useEffect, useState } from "react";
import { heroslider1, heroslider2 } from "@/images/index";

export default function Hero() {
  const [images, setImages] = useState(2);

  const handleImages = () => {
    if (images === 1) {
      setImages(2);
    } else {
      setImages(1);
    }
  };

  return (
    <>
      <div className="hero-slider-section">
        <div className="hero-slider-active swiper-container">
          <div className="swiper-wrapper">
            {images === 1 ? (
              <div className="hero-single-slider-item swiper-slide">
                <div className="hero-slider-bg">
                  <Image src={heroslider1} alt="" />
                </div>

                <div className="hero-slider-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-auto">
                        <div className="hero-slider-content">
                          <h4 className="subtitle">
                            Made of Fresh Ingredients
                          </h4>
                          <h1 className="title">
                            A natural & <br /> organic Skincare{" "}
                          </h1>
                          <a
                            href="product-details-default.html"
                            className="btn btn-lg btn-outline-golden"
                          >
                            shop now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hero-single-slider-item swiper-slide">
                <div className="hero-slider-bg">
                  <Image src={heroslider2} alt="" />
                </div>
                <div className="hero-slider-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-auto">
                        <div className="hero-slider-content">
                          <h4 className="subtitle">Premium Facial Skincare</h4>
                          <h1 className="title">
                            Fresh Face <br /> Natural Skincare
                          </h1>
                          <a
                            href="product-details-default.html"
                            className="btn btn-lg btn-outline-golden"
                          >
                            shop now{" "}
                          </a>
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
            <div className="swiper-pagination active-color-golden"></div>
            <button
              className="absolute top-1/2 swiper-button-prev d-none d-lg-block fa-sharp fa-solid fa-arrow-left fa-xl"
              onClick={handleImages}
            ></button>
            <button
              className="absolute top-1/2 right-0 swiper-button-next d-none d-lg-block fa-sharp fa-solid fa-arrow-right fa-xl"
              onClick={handleImages}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
