import { Client } from "@/graphql/apollo";
import { NavCategoriesDocument } from "@/graphql/generated";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function index() {
  const [categorys, setCategories] = useState<(typeof NavCategoriesDocument)[]>(
    []
  );
  async function getCategories() {
    const { data } = await Client.query({
      query: NavCategoriesDocument,
    });
    setCategories(data.categories);
  }

  async function getProducts() {
    const { data } = await Client.query({
      query: NavCategoriesDocument,
    });
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Shop - Grid Left Sidebar</h3>
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
                        Shop Grid Left Sidebar
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
            <div className="col-lg-3">
              <div
                className="siderbar-section"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">CATEGORIES</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li>
                        <ul className="sidebar-menu-collapse">
                          <li className="sidebar-menu-collapse-list">
                            <a className="accordion-title">
                              Men <i className="ion-ios-arrow-right"></i>
                            </a>

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
                          </li>
                        </ul>
                      </li>
                      {categorys.map((category) =>
                        category.children.length > 0 ? (
                          <li key={category.id}>
                            <ul className="sidebar-menu-collapse">
                              <li
                                className="sidebar-menu-collapse-list"
                                key={`category` + category.id}
                              >
                                <Link
                                  className="accordion-title"
                                  href={`shop/` + category.slug}
                                >
                                  {category.name}
                                  <i className="ion-ios-arrow-right"></i>
                                </Link>

                                <ul className="accordion-category-list">
                                  {category.children.map((child, id) => (
                                    <li key={`child` + id}>
                                      <Link href={`shop/` + child.slug}>
                                        {child.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <li key={category.id}>
                            <a href="#">{category.name}</a>
                          </li>
                        )
                      )}
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
                        <a href="#">Women's</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">FILTER BY PRICE</h6>
                  <div className="sidebar-content">
                    <div id="slider-range"></div>
                    <div className="filter-type-price">
                      <label htmlFor="amount">Price range:</label>
                      <input type="text" id="amount" />
                    </div>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">MANUFACTURER</h6>
                  <div className="sidebar-content">
                    <div className="filter-type-select">
                      <ul>
                        <li>
                          <label
                            className="checkbox-default"
                            htmlFor="brakeParts"
                          >
                            <input type="checkbox" id="brakeParts" />
                            <span>Brake Parts(6)</span>
                          </label>
                        </li>
                        <li>
                          <label
                            className="checkbox-default"
                            htmlFor="accessories"
                          >
                            <input type="checkbox" id="accessories" />
                            <span>Accessories (10)</span>
                          </label>
                        </li>
                        <li>
                          <label
                            className="checkbox-default"
                            htmlFor="EngineParts"
                          >
                            <input type="checkbox" id="EngineParts" />
                            <span>Engine Parts (4)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" htmlFor="hermes">
                            <input type="checkbox" id="hermes" />
                            <span>hermes (10)</span>
                          </label>
                        </li>
                        <li>
                          <label
                            className="checkbox-default"
                            htmlFor="tommyHilfiger"
                          >
                            <input type="checkbox" id="tommyHilfiger" />
                            <span>Tommy Hilfiger(7)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">SELECT BY COLOR</h6>
                  <div className="sidebar-content">
                    <div className="filter-type-select">
                      <ul>
                        <li>
                          <label className="checkbox-default" htmlFor="black">
                            <input type="checkbox" id="black" />
                            <span>Black (6)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" htmlFor="blue">
                            <input type="checkbox" id="blue" />
                            <span>Blue (8)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" htmlFor="brown">
                            <input type="checkbox" id="brown" />
                            <span>Brown (10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" htmlFor="Green">
                            <input type="checkbox" id="Green" />
                            <span>Green (6)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" htmlFor="pink">
                            <input type="checkbox" id="pink" />
                            <span>Pink (4)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">Tag products</h6>
                  <div className="sidebar-content">
                    <div className="tag-link">
                      <a href="#">asian</a>
                      <a href="#">brown</a>
                      <a href="#">euro</a>
                      <a href="#">fashion</a>
                      <a href="#">hat</a>
                      <a href="#">t-shirt</a>
                      <a href="#">teen</a>
                      <a href="#">travel</a>
                      <a href="#">white</a>
                    </div>
                  </div>
                </div>

                <div className="sidebar-single-widget">
                  <div className="sidebar-content">
                    <a
                      href="product-details-default.html"
                      className="sidebar-banner img-hover-zoom"
                    >
                      <img
                        className="img-fluid"
                        src="assets/images/banner/side-banner.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
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
                              className="nav-link active py-3"
                              data-bs-toggle="tab"
                              href="#layout-3-grid"
                            >
                              <img
                                src="assets/images/icons/bkg_grid.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link py-3"
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
                        <form action="#" className="border p-2 rounded-sm">
                          <fieldset>
                            <select name="speed" id="speed">
                              <option>Sort by average rating</option>
                              <option>Sort by popularity</option>
                              <option value="selected">Sort by newness</option>
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
                      <div className="tab-content tab-animate-zoom">
                        <div
                          className="tab-pane active show sort-layout-single"
                          id="layout-3-grid"
                        >
                          <div className="row">
                            <div className="col-xl-4 col-sm-6 col-12">
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
                            <div className="col-xl-4 col-sm-6 col-12">
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
                                  adipisicing elit. Nobis ad, iure incidunt. Ab
                                  consequatur temporibus non eveniet inventore
                                  doloremque necessitatibus sed, ducimus
                                  quisquam, ad asperiores
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

              <div
                className="page-pagination text-center"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-step-forward"></i>
                    </a>
                  </li>
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
