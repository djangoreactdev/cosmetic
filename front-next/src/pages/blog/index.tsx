import React from "react";

export default function index() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Blog Grid - Left Sidebar</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar-left.html">Blog</a>
                      </li>
                      <li className="active" aria-current="page">
                        Blog Grid Left Sidebar
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row-reverse">
            <div className="col-lg-3">
              <div
                className="siderbar-section"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">Search</h6>
                  <div className="default-search-style d-flex">
                    <input
                      className="default-search-style-input-box"
                      type="search"
                      placeholder="Search..."
                      required
                    />
                    <button
                      className="default-search-style-input-btn"
                      type="submit"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">CATEGORIES</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li>
                        <a href="#">Audio</a>
                      </li>
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Other</a>
                      </li>
                      <li>
                        <a href="#">Travel</a>
                      </li>
                      <li>
                        <a href="#"> Uncategorized</a>
                      </li>
                      <li>
                        <a href="#"> Video</a>
                      </li>
                      <li>
                        <a href="#">Wordpress</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">Tags</h6>
                  <div className="sidebar-content">
                    <div className="tag-link">
                      <a href="#">Technology</a>
                      <a href="#">Information</a>
                      <a href="#">Wordpress</a>
                      <a href="#">Devs</a>
                      <a href="#">Program</a>
                    </div>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">Meta</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li>
                        <a href="#">Log in</a>
                      </li>
                      <li>
                        <a href="#">Entries feed</a>
                      </li>
                      <li>
                        <a href="#">Comments feed</a>
                      </li>
                      <li>
                        <a href="#">WordPress.org</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">PRODUCT CATEGORIES</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li>
                        <ul className="sidebar-menu-collapse">
                          <li className="sidebar-menu-collapse-list">
                            <div className="accordion">
                              <a
                                href="#"
                                className="accordion-title collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#men-fashion"
                                aria-expanded="false"
                              >
                                Men <i className="ion-ios-arrow-right"></i>
                              </a>
                              <div id="men-fashion" className="collapse">
                                <ul className="accordion-category-list">
                                  <li>
                                    <a href="#">Dresses</a>
                                  </li>
                                  <li>
                                    <a href="#">Jackets &amp; Coats</a>
                                  </li>
                                  <li>
                                    <a href="#">Sweaters</a>
                                  </li>
                                  <li>
                                    <a href="#">Jeans</a>
                                  </li>
                                  <li>
                                    <a href="#">Blouses &amp; Shirts</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Football</a>
                      </li>
                      <li>
                        <a href="#"> Men's</a>
                      </li>
                      <li>
                        <a href="#"> Portable Audio</a>
                      </li>
                      <li>
                        <a href="#"> Smart Watches</a>
                      </li>
                      <li>
                        <a href="#">Tennis</a>
                      </li>
                      <li>
                        <a href="#"> Uncategorized</a>
                      </li>
                      <li>
                        <a href="#"> Video Games</a>
                      </li>
                      <li>
                        <a href="#">Women's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="blog-wrapper">
                <div className="row mb-n6">
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image-box">
                        <a
                          href="blog-single-sidebar-left.html"
                          className="image-link"
                        >
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-grid-home-1-img-1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog image post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="blog-list-slider-arrow">
                        <div className="blog-list-slider swiper-container">
                          <div className="swiper-wrapper">
                            <div className="blog-list-slider-img swiper-slide">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="blog-list-slider-img swiper-slide">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="blog-list-slider-img swiper-slide">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="blog-list-slider-img swiper-slide">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="blog-list-slider-img swiper-slide">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-5.jpg"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="swiper-button-prev"></div>
                          <div className="swiper-button-next"></div>
                        </div>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog Slider post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="blog-video-box">
                        <img
                          className="img-fluid"
                          src="assets/images/blog/blog-grid-home-1-img-5.jpg"
                          alt=""
                        />
                        <a
                          href="https://youtu.be/MKjhBO2xQzg"
                          className="video-play-btn"
                          data-autoplay="true"
                          data-vbtype="video"
                        >
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog video post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image-box">
                        <a
                          href="blog-single-sidebar-left.html"
                          className="image-link"
                        >
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-grid-home-1-img-2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog image post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image-box">
                        <a
                          href="blog-single-sidebar-left.html"
                          className="image-link"
                        >
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-grid-home-1-img-5.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog image post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-6">
                    <div
                      className="blog-list blog-grid-single-item blog-color--golden"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="blog-audio-box">
                        <iframe
                          className="embed-responsive-item"
                          allow="autoplay"
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/182537870&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                        ></iframe>
                      </div>
                      <div className="content">
                        <ul className="post-meta">
                          <li>
                            POSTED BY :{" "}
                            <a href="#" className="author">
                              Admin
                            </a>
                          </li>
                          <li>
                            ON :{" "}
                            <a href="#" className="date">
                              APRIL 24, 2018
                            </a>
                          </li>
                        </ul>
                        <h6 className="title">
                          <a href="blog-single-sidebar-left.html">
                            {" "}
                            Blog Audio post
                          </a>
                        </h6>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent
                        </p>
                        <a href="#" className="read-more-btn icon-space-left">
                          Read More{" "}
                          <span className="icon">
                            <i className="ion-ios-arrow-thin-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="page-pagination text-center"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <ul>
                  <li>
                    <a className="active" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-skipforward"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
