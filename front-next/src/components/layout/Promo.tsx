import Image from "next/image";
import React from "react";
import {
  servicepromo1,
  servicepromo2,
  servicepromo3,
  servicepromo4,
} from "@/assets/images";

export default function Promo() {
  return (
    <>
      <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <Image src={servicepromo1} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">FREE SHIPPING</h6>
                    <p>
                      Get 10% cash back, free shipping, free returns, and more
                      at 1000+ top retailers!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="image">
                    <Image src={servicepromo2} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">30 DAYS MONEY BACK</h6>
                    <p>
                      100% satisfaction guaranteed, or get your money back
                      within 30 days!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="image">
                    <Image src={servicepromo3} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">SAFE PAYMENT</h6>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="image">
                    <Image src={servicepromo4} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">LOYALTY CUSTOMER</h6>
                    <p>
                      Card for the other 30% of their purchases at a rate of 1%
                      cash back.
                    </p>
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
