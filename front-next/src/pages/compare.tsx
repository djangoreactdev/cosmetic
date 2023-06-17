import React from "react";

export default function compare() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Compare</h3>
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
                        Compare
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="compare-section">
        <div
          className="compare-table-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive compare-table">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td className="first-column">Product</td>
                          <td className="product-image-title">
                            <a
                              href="product-details-default.html"
                              className="image"
                            >
                              <img
                                src="assets/images/product/default/home-1/default-1.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a
                              href="shop-grid-sidebar-left.html"
                              className="category"
                            >
                              Furniture
                            </a>
                            <a
                              href="product-details-default.html"
                              className="title"
                            >
                              Rinosin title
                            </a>
                          </td>
                          <td className="product-image-title">
                            <a
                              href="product-details-default.html"
                              className="image"
                            >
                              <img
                                src="assets/images/product/default/home-1/default-2.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a
                              href="shop-grid-sidebar-left.html"
                              className="category"
                            >
                              Furniture
                            </a>
                            <a
                              href="product-details-default.html"
                              className="title"
                            >
                              Macro title
                            </a>
                          </td>
                          <td className="product-image-title">
                            <a
                              href="product-details-default.html"
                              className="image"
                            >
                              <img
                                src="assets/images/product/default/home-1/default-3.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a
                              href="shop-grid-sidebar-left.html"
                              className="category"
                            >
                              Furniture
                            </a>
                            <a
                              href="product-details-default.html"
                              className="title"
                            >
                              Oakley title
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="first-column">Description</td>
                          <td className="pro-desc">
                            <p>
                              Eye glasses are very important for thos whos have
                              some difficult in their eye to see every hing
                              clearly and perfectly
                            </p>
                          </td>
                          <td className="pro-desc">
                            <p>
                              Eye glasses are very important for thos whos have
                              some difficult in their eye to see every hing
                              clearly and perfectly
                            </p>
                          </td>
                          <td className="pro-desc">
                            <p>
                              Eye glasses are very important for thos whos have
                              some difficult in their eye to see every hing
                              clearly and perfectly
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="first-column">Price</td>
                          <td className="pro-price">$295</td>
                          <td className="pro-price">$275</td>
                          <td className="pro-price">$395</td>
                        </tr>
                        <tr>
                          <td className="first-column">Color</td>
                          <td className="pro-color">Black</td>
                          <td className="pro-color">Black</td>
                          <td className="pro-color">Black</td>
                        </tr>
                        <tr>
                          <td className="first-column">Stock</td>
                          <td className="pro-stock">In Stock</td>
                          <td className="pro-stock">In Stock</td>
                          <td className="pro-stock">In Stock</td>
                        </tr>
                        <tr>
                          <td className="first-column">Add to cart</td>
                          <td className="pro-addtocart">
                            <a
                              href="#"
                              className="btn btn-md btn-golden"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              <span>ADD TO CART</span>
                            </a>
                          </td>
                          <td className="pro-addtocart">
                            <a
                              href="#"
                              className="btn btn-md btn-golden"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              <span>ADD TO CART</span>
                            </a>
                          </td>
                          <td className="pro-addtocart">
                            <a
                              href="#"
                              className="btn btn-md btn-golden"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              <span>ADD TO CART</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="first-column">Delete</td>
                          <td className="pro-remove">
                            <button>
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                          <td className="pro-remove">
                            <button>
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                          <td className="pro-remove">
                            <button>
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="first-column">Rating</td>
                          <td className="pro-ratting">
                            <div className="product-review">
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-empty">
                                <i className="fa fa-star"></i>
                              </span>
                            </div>
                          </td>
                          <td className="pro-ratting">
                            <div className="product-review">
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-empty">
                                <i className="fa fa-star"></i>
                              </span>
                            </div>
                          </td>
                          <td className="pro-ratting">
                            <div className="product-review">
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-fill">
                                <i className="fa fa-star"></i>
                              </span>
                              <span className="review-empty">
                                <i className="fa fa-star"></i>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
