import Image from "next/image";
import React from "react";
import { bannerstyle3img1 } from "@/images/index";

export default function ModernBanner() {
  return (
    <>
      <div className="banner-section section-top-gap-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div
                className="banner-single-item banner-style-3 banner-animation img-responsive"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="image">
                  <Image className="img-fluid" src={bannerstyle3img1} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Modern Furniture Basic Collection</h3>
                  <h5 className="sub-title">
                    We design your home more beautiful
                  </h5>
                  <a
                    href="product-details-default.html"
                    className="btn btn-lg btn-outline-golden icon-space-left"
                  >
                    <span className="d-flex align-items-center">
                      discover now <i className="ion-ios-arrow-thin-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
