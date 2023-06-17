import Image from "next/image";
import React from "react";
import {
  bannerstyle4img1,
  bannerstyle4img2,
  bannerstyle4img3,
  bannerstyle4img4,
} from "@/images/index";

export default function FullBanner() {
  return (
    <>
      <div className="banner-section section-top-gap-100">
        <div className="banner-wrapper clearfix">
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="image">
              <Image className="img-fluid" src={bannerstyle4img4} alt="" />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Bar Stool</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="fa-sharp fa-solid fa-arrow-right fa-sm"></i>
              </span>
            </a>
          </div>

          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="image">
              <Image className="img-fluid" src={bannerstyle4img3} alt="" />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Armchairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="fa-sharp fa-solid fa-arrow-right fa-sm"></i>
              </span>
            </a>
          </div>

          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="image">
              <Image className="img-fluid" src={bannerstyle4img2} alt="" />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">lighting</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="fa-sharp fa-solid fa-arrow-right fa-sm"></i>
              </span>
            </a>
          </div>

          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="image">
              <Image className="img-fluid" src={bannerstyle4img1} alt="" />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Easy chairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="fa-sharp fa-solid fa-arrow-right fa-sm"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
