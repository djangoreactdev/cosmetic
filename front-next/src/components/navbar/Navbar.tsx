import React from "react";
import Image from "next/image";
import { logo_black, menu_banner } from "@/images/index";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Client } from "@/graphql/apollo";
import { useMutation, useLazyQuery } from "@apollo/client";
import { NavCategoriesDocument } from "@/graphql/generated";

export function Navbar() {
  const [search, setsearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const [categorys, setCategories] = useState<(typeof NavCategoriesDocument)[]>(
    []
  );

  const navigate = useRouter().push;

  const { status } = useSession();

  const logOut = () => {
    signOut({ redirect: false });
    Client.cache.reset();
    navigate("/");
  };

  async function getCategories() {
    const { data } = await Client.query({
      query: NavCategoriesDocument,
    });
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wishlist ||
        menuMobile ||
        menu ||
        (cart &&
          event.target instanceof HTMLElement &&
          !event.target.closest(".modal-content"))
      ) {
        setMenuMobile(false);
        setMenu(false);
        setCart(false);
        setWishlist(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menu, menuMobile, wishlist, cart]);

  return (
    <>
      <header className="header-section d-none d-xl-block ">
        <div className="header-wrapper">
          <div className="header-top header-top-bg--black section-fluid">
            <div className="container">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-top-left">
                  <div className="header-top-contact header-top-contact-color--white header-top-contact-hover-color--green">
                    <Link href="tel:0123456789" className="icon-space-right">
                      <i className="icon-call-in"></i>0123456789
                    </Link>
                    <a
                      href="mailto:demo@example.com"
                      className="icon-space-right"
                    >
                      <i className="icon-envelope"></i>demo@example.com
                    </a>
                  </div>
                </div>
                <div className="header-top-right">
                  <div className="header-top-user-link header-top-user-link-color--white header-top-user-link-hover-color--golden">
                    {status !== "authenticated" ? (
                      <>
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                      </>
                    ) : (
                      <>
                        <Link href="/account">My Account</Link>
                        <button onClick={logOut}>Logout</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`header-bottom header-bottom-color--white section-fluid sticky-header sticky-color--white ${
              stickyHeader ? "sticky" : ""
            }`}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo_black} alt="" />
                      </Link>
                    </div>
                  </div>

                  <div className="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                      <ul>
                        <li className="has-dropdown">
                          <Link className="active main-menu-link" href="/">
                            Home
                          </Link>
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link href="shop">
                            Shop <i className="fa fa-angle-down"></i>
                          </Link>

                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              <li className="mega-menu-item">
                                <Link href="#" className="mega-menu-item-title">
                                  Shop Layouts
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link href="shop-grid-sidebar-right.html">
                                      Grid Right Sidebar
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {categorys &&
                                categorys.map((item, id) => (
                                  <li key={id} className="mega-menu-item">
                                    <Link
                                      href={item.slug}
                                      className="mega-menu-item-title"
                                    >
                                      {item.name}
                                    </Link>
                                    <ul className="mega-menu-sub">
                                      {item.children &&
                                        item.children.map((child, id) => (
                                          <li key={id}>
                                            <Link href={child.slug}>
                                              {child.name}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </li>
                                ))}
                            </ul>
                            <div className="menu-banner">
                              <Link href="#" className="menu-banner-link">
                                <Image
                                  className="menu-banner-img"
                                  src={menu_banner}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="has-dropdown">
                          <Link href="blog">
                            Blog <i className="fa fa-angle-down"></i>
                          </Link>

                          <ul className="sub-menu">
                            <li>
                              <Link href="blog-grid-sidebar-left.html">
                                Blog Grid Sidebar left
                              </Link>
                            </li>
                            <li>
                              <Link href="blog-grid-sidebar-right.html">
                                Blog Grid Sidebar Right
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <a
                        href="#"
                        onClick={() => setWishlist(!wishlist)}
                        className="offcanvas-toggle"
                      >
                        <i className="fa-regular fa-heart fa-gl"></i>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => setCart(!cart)}
                        className="offcanvas-toggle"
                      >
                        <i className="fa-solid fa-bag-shopping fa-gl"></i>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setsearch(!search)}>
                        <i className="fa-solid fa-magnifying-glass fa-gl"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => setMenu(!menu)}
                        className="offacnvas offside-about offcanvas-toggle"
                      >
                        <i className="fa-solid fa-bars fa-gl"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-header mobile-header-bg-color--white section-fluid d-lg-block d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="mobile-header-left">
                <ul className="mobile-menu-logo">
                  <li>
                    <Link href="/">
                      <div className="logo">
                        <Image src={logo_black} alt="" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mobile-right-side">
                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li>
                    <a href="#" onClick={() => setsearch(!search)}>
                      <i className="fa-solid fa-magnifying-glass fa-gl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setWishlist(!wishlist)}
                      className="offcanvas-toggle"
                    >
                      <i className="fa-regular fa-heart fa-gl"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setCart(!cart)}
                      className="offcanvas-toggle"
                    >
                      <i className="fa-solid fa-bag-shopping fa-gl"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setMenuMobile(!menuMobile)}
                      className="offacnvas offside-about offcanvas-toggle"
                    >
                      <i className="fa-solid fa-bars fa-gl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-offcanvas"
        className={`offcanvas offcanvas-rightside offcanvas-mobile-menu-section ${
          menuMobile ? "offcanvas-open" : ""
        }`}
      >
        <div className="offcanvas-header text-right">
          <button
            className="offcanvas-close"
            onClick={() => setMenuMobile(!menuMobile)}
          >
            <i className="fa-solid fa-xmark fa-sm"></i>
          </button>
        </div>

        <div className="offcanvas-mobile-menu-wrapper">
          <div className="mobile-menu-bottom">
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <Link href="#">
                    <span>Home</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="index.html">Home 1</Link>
                    </li>
                    <li>
                      <Link href="index-2.html">Home 2</Link>
                    </li>
                    <li>
                      <Link href="index-3.html">Home 3</Link>
                    </li>
                    <li>
                      <Link href="index-4.html">Home 4</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">
                    <span>Shop</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="#">Shop Layout</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="shop-grid-sidebar-left.html">
                            Grid Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-grid-sidebar-right.html">
                            Grid Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-Mobile-width.html">
                            Mobile Width
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-list-sidebar-left.html">
                            List Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-list-sidebar-right.html">
                            List Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="#">Shop Pages</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="cart.html">Cart</Link>
                        </li>
                        <li>
                          <Link href="empty-cart.html">Empty Cart</Link>
                        </li>
                        <li>
                          <Link href="wishlist.html">Wishlist</Link>
                        </li>
                        <li>
                          <Link href="compare.html">Compare</Link>
                        </li>
                        <li>
                          <Link href="checkout.html">Checkout</Link>
                        </li>
                        <li>
                          <Link href="login.html">Login</Link>
                        </li>
                        <li>
                          <Link href="my-account.html">My Account</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="#">Product Single</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="product-details-default.html">
                            Product Default
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-variable.html">
                            Product Variable
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-affiliate.html">
                            Product Referral
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-group.html">
                            Product Group
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-single-slide.html">
                            Product Slider
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-tab-left.html">
                            Product Tab Left
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-tab-right.html">
                            Product Tab Right
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-gallery-left.html">
                            Product Gallery Left
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-gallery-right.html">
                            Product Gallery Right
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-sticky-left.html">
                            Product Sticky Left
                          </Link>
                        </li>
                        <li>
                          <Link href="product-details-sticky-right.html">
                            Product Sticky right
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">
                    <span>Blogs</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="#">Blog Grid</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="blog-grid-sidebar-left.html">
                            Blog Grid Sidebar left
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-grid-sidebar-right.html">
                            Blog Grid Sidebar Right
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="blog-Mobile-width.html">
                        Blog Mobile Width
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Blog List</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="blog-list-sidebar-left.html">
                            Blog List Sidebar left
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-list-sidebar-right.html">
                            Blog List Sidebar Right
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">Blog Single</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link href="blog-single-sidebar-left.html">
                            Blog Single Sidebar left
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-single-sidebar-right.html">
                            Blog Single Sidebar Right
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">
                    <span>Pages</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link href="faq.html">Frequently Questions</Link>
                    </li>
                    <li>
                      <Link href="privacy-policy.html">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="404.html">404 Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="about-us.html">About Us</Link>
                </li>
                <li>
                  <Link href="contact-us.html">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-contact-info">
            <div className="logo">
              <Link href="index.html">
                <img src="assets/images/logo/logo_white.png" alt="" />
              </Link>
            </div>

            <address className="address">
              <span>Address: Your address goes here.</span>
              <span>Call Us: 0123456789, 0123456789</span>
              <span>Email: demo@example.com</span>
            </address>

            <ul className="social-link">
              <li>
                <Link href="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>

            <ul className="user-link">
              <li>
                <Link href="wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link href="cart.html">Cart</Link>
              </li>
              <li>
                <Link href="checkout.html">Checkout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="offcanvas-about"
        className={`offcanvas offcanvas-rightside offcanvas-mobile-about-section ${
          menu ? "offcanvas-open" : ""
        }`}
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={() => setMenu(!menu)}>
            <i className="fa-solid fa-xmark fa-sm"></i>
          </button>
        </div>

        <div className="mobile-contact-info">
          <div className="logo">
            <Link href="index.html">
              <Image src={logo_black} alt="" />
            </Link>
          </div>

          <address className="address">
            <span>Address: Your address goes here.</span>
            <span>Call Us: 0123456789, 0123456789</span>
            <span>Email: demo@example.com</span>
          </address>

          <ul className="social-link">
            <li>
              <Link href="#">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>

          <ul className="user-link">
            <li>
              <Link href="/account/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="offcanvas-add-cart"
        className={`offcanvas offcanvas-rightside offcanvas-add-cart-section ${
          cart ? "offcanvas-open" : ""
        }`}
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={() => setCart(!cart)}>
            <i className="fa-solid fa-xmark fa-sm"></i>
          </button>
        </div>

        <div className="offcanvas-add-cart-wrapper">
          <h4 className="offcanvas-title">Shopping Cart</h4>
          <ul className="offcanvas-cart">
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link href="#" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-1/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link href="#" className="offcanvas-cart-item-link">
                    Car Wheel
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $49.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <Link href="#" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link href="#" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-2/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link href="#" className="offcanvas-cart-item-link">
                    Car Vails
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      3 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $500.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <Link href="#" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link href="#" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-3/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link href="#" className="offcanvas-cart-item-link">
                    Shock Absorber
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $350.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <Link href="#" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
          </ul>
          <div className="offcanvas-cart-total-price">
            <span className="offcanvas-cart-total-price-text">Subtotal:</span>
            <span className="offcanvas-cart-total-price-value">$170.00</span>
          </div>
          <ul className="offcanvas-cart-action-button">
            <li>
              <Link href="cart.html" className="btn btn-block btn-golden">
                View Cart
              </Link>
            </li>
            <li>
              <Link
                href="compare.html"
                className="btn btn-block btn-golden mt-5"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="offcanvas-wishlish"
        className={`offcanvas offcanvas-rightside offcanvas-add-cart-section ${
          wishlist ? "offcanvas-open" : ""
        }`}
      >
        <div className="offcanvas-header text-right">
          <button
            className="offcanvas-close"
            onClick={() => setWishlist(!wishlist)}
          >
            <i className="fa-solid fa-xmark fa-sm"></i>
          </button>
        </div>

        <div className="offcanvas-wishlist-wrapper">
          <h4 className="offcanvas-title">Wishlist</h4>
          <ul className="offcanvas-wishlist">
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link href="#" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-1/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link href="#" className="offcanvas-wishlist-item-link">
                    Car Wheel
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      1 x
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $49.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <Link href="#" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link href="#" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-2/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link href="#" className="offcanvas-wishlist-item-link">
                    Car Vails
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      3 x
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $500.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <Link href="#" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link href="#" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-3/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link href="#" className="offcanvas-wishlist-item-link">
                    Shock Absorber
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      1 x
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $350.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <Link href="#" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
          </ul>
          <ul className="offcanvas-wishlist-action-button">
            <li>
              <Link href="#" className="btn btn-block btn-golden">
                View wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="search" className={`search-modal + ${search ? "open" : ""}`}>
        <button
          type="button"
          className="close "
          onClick={() => setsearch(!search)}
        >
          ×
        </button>
        <form>
          <input type="search" placeholder="type keyword(s) here" />
          <button type="submit" className="btn btn-lg btn-golden">
            Search
          </button>
        </form>
      </div>

      <div
        className={`offcanvas-overlay`}
        style={
          menu || menuMobile || wishlist || cart
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>
    </>
  );
}

export default Navbar;
