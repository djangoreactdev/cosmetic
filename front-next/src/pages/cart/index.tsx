import React from "react";

export default function cart() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Cart</h3>
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
                        Cart
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section">
        <div
          className="cart-table-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Quantity</th>
                          <th className="product_total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </td>
                          <td className="product_thumb">
                            <a href="product-details-default.html">
                              <img
                                src="assets/images/product/default/home-1/default-1.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product_name">
                            <a href="product-details-default.html">
                              Handbag fringilla
                            </a>
                          </td>
                          <td className="product-price">$65.00</td>
                          <td className="product_quantity">
                            <label>Quantity</label>{" "}
                            <input min="1" max="100" value="1" type="number" />
                          </td>
                          <td className="product_total">$130.00</td>
                        </tr>

                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </td>
                          <td className="product_thumb">
                            <a href="product-details-default.html">
                              <img
                                src="assets/images/product/default/home-1/default-2.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product_name">
                            <a href="product-details-default.html">
                              Handbags justo
                            </a>
                          </td>
                          <td className="product-price">$90.00</td>
                          <td className="product_quantity">
                            <label>Quantity</label>{" "}
                            <input min="1" max="100" value="1" type="number" />
                          </td>
                          <td className="product_total">$180.00</td>
                        </tr>

                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </td>
                          <td className="product_thumb">
                            <a href="product-details-default.html">
                              <img
                                src="assets/images/product/default/home-1/default-3.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product_name">
                            <a href="product-details-default.html">
                              Handbag elit
                            </a>
                          </td>
                          <td className="product-price">$80.00</td>
                          <td className="product_quantity">
                            <label>Quantity</label>{" "}
                            <input min="1" max="100" value="1" type="number" />
                          </td>
                          <td className="product_total">$160.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart_submit">
                    <button className="btn btn-md btn-golden" type="submit">
                      update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coupon_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="coupon_code left"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Coupon</h3>
                  <div className="coupon_inner">
                    <p>Enter your coupon code if you have one.</p>
                    <input
                      className="mb-2"
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button type="submit" className="btn btn-md btn-golden">
                      Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="coupon_code right"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3>Cart Totals</h3>
                  <div className="coupon_inner">
                    <div className="cart_subtotal">
                      <p>Subtotal</p>
                      <p className="cart_amount">$215.00</p>
                    </div>
                    <div className="cart_subtotal ">
                      <p>Shipping</p>
                      <p className="cart_amount">
                        <span>Flat Rate:</span> $255.00
                      </p>
                    </div>
                    <a href="#">Calculate shipping</a>

                    <div className="cart_subtotal">
                      <p>Total</p>
                      <p className="cart_amount">$215.00</p>
                    </div>
                    <div className="checkout_btn">
                      <a href="#" className="btn btn-md btn-golden">
                        Proceed to Checkout
                      </a>
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
