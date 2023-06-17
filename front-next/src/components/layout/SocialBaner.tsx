import Image from "next/image";
import React from "react";
import {
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  instagram5,
  instagram6,
} from "@/images/index";

export default function SocialBaner() {
  return (
    <>
      <div className="instagram-section  section-inner-bg">
        <div
          className="instagram-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instagram-box">
                  <div id="instagramFeed" className="instagram-grid clearfix">
                    <a
                      href="https://www.instagram.com/p/CCFOZKDDS6S/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram1} alt="" width={200} />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOYDNjWF5/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram2} alt="" width={200} />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOXH6D-zQ/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram3} alt="" width={200} />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOVcrDDOo/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram4} alt="" width={200} />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOUajjABP/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram5} alt="" width={200} />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOS2MDmjj/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <Image src={instagram6} alt="" width={200} />
                    </a>
                  </div>
                  <div className="instagram-link">
                    <h5>
                      <a
                        href="https://www.instagram.com/myfurniturecom/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HONOTEMPLATE
                      </a>
                    </h5>
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
