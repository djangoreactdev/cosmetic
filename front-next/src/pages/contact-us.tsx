import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Contact Us</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active" aria-current="page">
                        Contact Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-details-wrapper section-top-gap-100"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="contact-details">
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="tel:+0123456789">0123456789</a>
                      <a href="tel:+0123456789">0123456789</a>
                    </div>
                  </div>

                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="mailto:demo@example.com">demo@example.com</a>
                      <a href="http://www.example.com/">www.example.com</a>
                    </div>
                  </div>

                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <span>Your address goes here.</span>
                    </div>
                  </div>
                </div>
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <ul>
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
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="contact-form section-top-gap-100"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Get In Touch</h3>
                <form
                  id="contact-form"
                  action="https://htmlmail.hasthemes.com/nazmul/mail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label htmlFor="contact-name">Name</label>
                        <input name="name" type="text" id="contact-name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label htmlFor="contact-email">Email</label>
                        <input name="email" type="email" id="contact-email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label htmlFor="contact-subject">Subject</label>
                        <input
                          name="subject"
                          type="text"
                          id="contact-subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea
                          name="message"
                          id="contact-message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        className="btn btn-lg btn-black-default-hover"
                        type="submit"
                      >
                        SEND
                      </button>
                    </div>
                    <p className="form-messege"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
