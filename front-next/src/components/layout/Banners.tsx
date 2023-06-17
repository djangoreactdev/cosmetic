import Image from "next/image";
import React from "react";
import {
  bannerstyle1img1,
  bannerstyle2img1,
  bannerstyle2img2,
  bannerstyle2img3,
  bannerstyle2img4,
} from "@/images/index";

export default function Banners() {
  return (
    <>
      <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="row mb-n6">
              <div className="col-lg-6 col-12 mb-6">
                <div
                  className="banner-single-item banner-style-1 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <Image src={bannerstyle1img1} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Mini rechargeable Table Lamp - E216
                    </h4>
                    <h5 className="sub-title">We design your home</h5>
                    <a
                      href="product-details-default.html"
                      className="btn btn-lg btn-outline-golden icon-space-left"
                    >
                      <span className="d-flex align-items-center">
                        discover now
                        <i className="ion-ios-arrow-thin-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mb-6">
                <div className="row mb-n6">
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <Image src={bannerstyle2img2} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Kitchen <br />
                          utensils
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <Image src={bannerstyle2img3} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Sofas and <br />
                          Armchairs
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <Image src={bannerstyle2img4} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Chair & Bar
                          <br />
                          stools
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <Image src={bannerstyle2img1} alt="" />
                      </div>
                      <div className="content">
                        <h4>
                          Interior <br />
                          lighting
                        </h4>
                        <a href="product-details-default.html">
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
