import { HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ ...rest }: FooterProps) {
  return (
    <>
      <footer className="footer-section footer-bg section-top-gap-100">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="container">
              <div className="row mb-n6">
                <div className="col-lg-3 col-sm-6 mb-6">
                  <div
                    className="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h5 className="title">INFORMATION</h5>
                    <ul className="footer-nav">
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-6">
                  <div
                    className="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h5 className="title">MY ACCOUNT</h5>
                    <ul className="footer-nav">
                      <li>
                        <a href="my-account.html">My account</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="faq.html">Frequently Questions</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-6">
                  <div
                    className="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h5 className="title">CATEGORIES</h5>
                    <ul className="footer-nav">
                      <li>
                        <a href="#">Decorative</a>
                      </li>
                      <li>
                        <a href="#">Kitchen utensils</a>
                      </li>
                      <li>
                        <a href="#">Chair & Bar stools</a>
                      </li>
                      <li>
                        <a href="#">Sofas and Armchairs</a>
                      </li>
                      <li>
                        <a href="#">Interior lighting</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-6">
                  <div
                    className="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h5 className="title">ABOUT US</h5>
                    <div className="footer-about">
                      <p>
                        We are a team of designers and developers that create
                        high quality Magento, Prestashop, Opencart.
                      </p>

                      <address className="address">
                        <span>Address: Your address goes here.</span>
                        <span>Email: demo@example.com</span>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-center">
            <div className="container">
              <div className="row mb-n6">
                <div className="col-xl-3 col-lg-4 col-md-6 mb-6">
                  <div
                    className="footer-social"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h4 className="title">FOLLOW US</h4>
                    <ul className="footer-social-link">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 mb-6">
                  <div
                    className="footer-newsletter"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4 className="title">DON'T MISS OUT ON THE LATEST</h4>
                    <div className="form-newsletter">
                      <form action="#" method="post">
                        <div className="form-fild-newsletter-single-item input-color--golden">
                          <input
                            type="email"
                            placeholder="Your email address..."
                            required
                          />
                          <button type="submit">SUBSCRIBE!</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
                <div className="col-auto mb-6">
                  <div className="footer-copyright">
                    <p className="copyright-text">
                      &copy; 2021 <a href="index.html">therankme</a>. Made with
                      <i className="fa fa-heart text-danger"></i> by
                      <a href="https://therankme.com/" target="_blank">
                        therankme
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-auto mb-6">
                  <div className="footer-payment">
                    <div className="image">
                      <img
                        src="assets/images/company-logo/payment.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button className="material-scrolltop" type="button"></button>

      <div
        className="modal fade"
        id="modalAddcart"
        // tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col text-right">
                    <button
                      type="button"
                      className="close modal-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        {" "}
                        <i className="fa fa-times"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="modal-add-cart-product-img">
                          <img
                            className="img-fluid"
                            src="assets/images/product/default/home-1/default-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="modal-add-cart-info">
                          <i className="fa fa-check-square"></i>Added to cart
                          successfully!
                        </div>
                        <div className="modal-add-cart-product-cart-buttons">
                          <a href="cart.html">View Cart</a>
                          <a href="checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 modal-border">
                    <ul className="modal-add-cart-product-shipping-info">
                      <li>
                        <strong>
                          <i className="icon-shopping-cart"></i> There Are 5
                          Items In Your Cart.
                        </strong>
                      </li>
                      <li>
                        <strong>TOTAL PRICE: </strong> <span>$187.00</span>
                      </li>
                      <li className="modal-continue-button">
                        <a href="#" data-bs-dismiss="modal">
                          CONTINUE SHOPPING
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalQuickview"
        // tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col text-right">
                    <button
                      type="button"
                      className="close modal-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        {" "}
                        <i className="fa fa-times"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-details-gallery-area mb-7">
                      <div className="product-large-image modal-product-image-large swiper-container">
                        <div className="swiper-wrapper">
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="product-image-thumb modal-product-image-thumb swiper-container pos-relative mt-5">
                        <div className="swiper-wrapper">
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="gallery-thumb-arrow swiper-button-next"></div>
                        <div className="gallery-thumb-arrow swiper-button-prev"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-product-details-content-area">
                      <div className="product-details-text">
                        <h4 className="title">Nonstick Dishwasher PFOA</h4>
                        <div className="price">
                          <del>$70.00</del>$80.00
                        </div>
                      </div>

                      <div className="product-details-variable">
                        <div className="variable-single-item">
                          <span>Color</span>
                          <div className="product-variable-color">
                            <label htmlFor="modal-product-color-red">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-red"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-red"></span>
                            </label>
                            <label htmlFor="modal-product-color-tomato">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-tomato"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>
                            <label htmlFor="modal-product-color-green">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-green"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-green"></span>
                            </label>
                            <label htmlFor="modal-product-color-light-green">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-light-green"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-light-green"></span>
                            </label>
                            <label htmlFor="modal-product-color-blue">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-blue"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-blue"></span>
                            </label>
                            <label htmlFor="modal-product-color-light-blue">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-light-blue"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-light-blue"></span>
                            </label>
                          </div>
                        </div>

                        <div className="d-flex align-items-center flex-wrap">
                          <div className="variable-single-item">
                            <span>Quantity</span>
                            <div className="product-variable-quantity">
                              <input
                                min="1"
                                max="100"
                                // value="10"
                                type="number"
                              />
                            </div>
                          </div>

                          <div className="product-add-to-cart-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="modal-product-about-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia iste laborum ad impedit pariatur esse
                          optio tempora sint ullam autem deleniti nam in quos
                          qui nemo ipsum numquam, reiciendis maiores quidem
                          aperiam, rerum vel recusandae
                        </p>
                      </div>

                      <div className="modal-product-details-social">
                        <span className="title">SHARE THIS PRODUCT</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="pinterest">
                              <i className="fa fa-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="google-plus">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="linkedin">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
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

export default Footer;
