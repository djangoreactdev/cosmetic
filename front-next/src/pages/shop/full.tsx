import React from "react";

export default function full() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Shop - Full Width</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="shop-grid-sidebar-left.html">Shop</a>
                      </li>
                      <li className="active" aria-current="page">
                        Shop Full Width
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-12">
              <div className="shop-sort-section">
                <div className="container">
                  <div className="row">
                    <div
                      className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="sort-tablist d-flex align-items-center">
                        <ul className="tablist nav sort-tab-btn">
                          <li>
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#layout-4-grid"
                            >
                              <img
                                src="assets/images/icons/bkg_grid.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#layout-list"
                            >
                              <img
                                src="assets/images/icons/bkg_list.png"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>

                        <div className="page-amount ml-2">
                          <span>Showing 1–9 of 21 results</span>
                        </div>
                      </div>

                      <div className="sort-select-list d-flex align-items-center">
                        <label className="mr-2">Sort By:</label>
                        <form action="#">
                          <fieldset>
                            <select name="speed" id="speed">
                              <option>Sort by average rating</option>
                              <option>Sort by popularity</option>
                              <option selected="selected">
                                Sort by newness
                              </option>
                              <option>Sort by price: low to high</option>
                              <option>Sort by price: high to low</option>
                              <option>Product Name: Z</option>
                            </select>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sort-product-tab-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content">
                        <div
                          className="tab-pane active show sort-layout-single"
                          id="layout-4-grid"
                        >
                          <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="0"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-9.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-10.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Epicuri per lobortis
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$68</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="200"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-11.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-3.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Kaoreet lobortis sagit
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$95.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="400"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-5.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-7.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Condimentum posuere
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$115.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="600"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-6.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-9.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Convallis quam sit
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      $75.00 - $85.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="0"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-1.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tag">
                                    <span>sale</span>
                                  </div>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Aliquam lobortis
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      $75.00 - $85.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="200"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-3.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-4.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tag">
                                    <span>sale</span>
                                  </div>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Condimentum posuere
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      <del>$89.00</del> $80.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="400"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-6.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tag">
                                    <span>sale</span>
                                  </div>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Condimentum posuere
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      $75.00 - $85.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="600"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-12.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-3.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Condimentum posuere
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      $75.00 - $85.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="0"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-5.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Condimentum posuere
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">
                                      $75.00 - $85.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="200"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-7.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Donec eu libero ac
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$74</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="400"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-5.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Dolorum fuga eget
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$90</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div
                                className="product-default-single-item product-color--golden"
                                data-aos="fade-up"
                                data-aos-delay="600"
                              >
                                <div className="image-box">
                                  <a
                                    href="product-details-default.html"
                                    className="image-link"
                                  >
                                    <img
                                      src="assets/images/product/default/home-1/default-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="assets/images/product/default/home-1/default-6.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                    <div className="action-link-right">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                      >
                                        <i className="icon-magnifier"></i>
                                      </a>
                                      <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                      </a>
                                      <a href="compare.html">
                                        <i className="icon-shuffle"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title">
                                      <a href="product-details-default.html">
                                        Duis pulvinar obortis
                                      </a>
                                    </h6>
                                    <ul className="review-star">
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill">
                                        <i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty">
                                        <i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">$86.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane sort-layout-single"
                          id="layout-list"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="product-list-single product-color--golden">
                                <a
                                  href="product-details-default.html"
                                  className="product-list-img-link"
                                >
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-2.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-list-content">
                                  <h5 className="product-list-link">
                                    <a href="product-details-default.html">
                                      KAOREET LOBORTIS SAGIT
                                    </a>
                                  </h5>
                                  <ul className="review-star">
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="empty">
                                      <i className="ion-android-star"></i>
                                    </li>
                                  </ul>
                                  <span className="product-list-price">
                                    <del>$30.12</del>
                                    $25.12
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nobis ad, iure incidunt.
                                    Ab consequatur temporibus non eveniet
                                    inventore doloremque necessitatibus sed,
                                    ducimus quisquam, ad asperiores
                                  </p>
                                  <div className="product-action-icon-link-list">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      Add to cart
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-magnifier"></i>
                                    </a>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-heart"></i>
                                    </a>
                                    <a
                                      href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-shuffle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-list-single product-color--golden">
                                <a
                                  href="product-details-default.html"
                                  className="product-list-img-link"
                                >
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-3.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-4.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-list-content">
                                  <h5 className="product-list-link">
                                    <a href="product-details-default.html">
                                      CONDIMENTUM POSUERE
                                    </a>
                                  </h5>
                                  <ul className="review-star">
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="empty">
                                      <i className="ion-android-star"></i>
                                    </li>
                                  </ul>
                                  <span className="product-list-price">
                                    $95.00
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nobis ad, iure incidunt.
                                    Ab consequatur temporibus non eveniet
                                    inventore doloremque necessitatibus sed,
                                    ducimus quisquam, ad asperiores
                                  </p>
                                  <div className="product-action-icon-link-list">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      Add to cart
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-magnifier"></i>
                                    </a>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-heart"></i>
                                    </a>
                                    <a
                                      href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-shuffle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-list-single product-color--golden">
                                <a
                                  href="product-details-default.html"
                                  className="product-list-img-link"
                                >
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-5.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-6.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-list-content">
                                  <h5 className="product-list-link">
                                    <a href="product-details-default.html">
                                      ALIQUAM LOBORTIS
                                    </a>
                                  </h5>
                                  <ul className="review-star">
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="empty">
                                      <i className="ion-android-star"></i>
                                    </li>
                                  </ul>
                                  <span className="product-list-price">
                                    {" "}
                                    $25.12
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nobis ad, iure incidunt.
                                    Ab consequatur temporibus non eveniet
                                    inventore doloremque necessitatibus sed,
                                    ducimus quisquam, ad asperiores
                                  </p>
                                  <div className="product-action-icon-link-list">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      Add to cart
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-magnifier"></i>
                                    </a>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-heart"></i>
                                    </a>
                                    <a
                                      href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-shuffle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-list-single product-color--golden">
                                <a
                                  href="product-details-default.html"
                                  className="product-list-img-link"
                                >
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-7.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-8.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-list-content">
                                  <h5 className="product-list-link">
                                    <a href="product-details-default.html">
                                      CONVALLIS QUAM SIT
                                    </a>
                                  </h5>
                                  <ul className="review-star">
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="empty">
                                      <i className="ion-android-star"></i>
                                    </li>
                                  </ul>
                                  <span className="product-list-price">
                                    $75.00 - $85.00
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nobis ad, iure incidunt.
                                    Ab consequatur temporibus non eveniet
                                    inventore doloremque necessitatibus sed,
                                    ducimus quisquam, ad asperiores
                                  </p>
                                  <div className="product-action-icon-link-list">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      Add to cart
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-magnifier"></i>
                                    </a>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-heart"></i>
                                    </a>
                                    <a
                                      href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-shuffle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-list-single product-color--golden">
                                <a
                                  href="product-details-default.html"
                                  className="product-list-img-link"
                                >
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-9.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src="assets/images/product/default/home-1/default-10.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-list-content">
                                  <h5 className="product-list-link">
                                    <a href="product-details-default.html">
                                      DONEC EU LIBERO AC
                                    </a>
                                  </h5>
                                  <ul className="review-star">
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="fill">
                                      <i className="ion-android-star"></i>
                                    </li>
                                    <li className="empty">
                                      <i className="ion-android-star"></i>
                                    </li>
                                  </ul>
                                  <span className="product-list-price">
                                    <del>$25.12</del>
                                    $20.00
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nobis ad, iure incidunt.
                                    Ab consequatur temporibus non eveniet
                                    inventore doloremque necessitatibus sed,
                                    ducimus quisquam, ad asperiores
                                  </p>
                                  <div className="product-action-icon-link-list">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      Add to cart
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-magnifier"></i>
                                    </a>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-heart"></i>
                                    </a>
                                    <a
                                      href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"
                                    >
                                      <i className="icon-shuffle"></i>
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
