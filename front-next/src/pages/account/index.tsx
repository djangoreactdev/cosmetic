import React from "react";

export default function MyAccount() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">My Account</h3>
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
                        My Account
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account-dashboard">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div
                className="dashboard_tab_button"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <ul role="tablist" className="nav flex-column dashboard-list">
                  <li>
                    <a
                      href="#dashboard"
                      data-bs-toggle="tab"
                      className="nav-link btn btn-block btn-md btn-black-default-hover active"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#orders"
                      data-bs-toggle="tab"
                      className="nav-link btn btn-block btn-md btn-black-default-hover"
                    >
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#downloads"
                      data-bs-toggle="tab"
                      className="nav-link btn btn-block btn-md btn-black-default-hover"
                    >
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#address"
                      data-bs-toggle="tab"
                      className="nav-link btn btn-block btn-md btn-black-default-hover"
                    >
                      Addresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#account-details"
                      data-bs-toggle="tab"
                      className="nav-link btn btn-block btn-md btn-black-default-hover"
                    >
                      Account details
                    </a>
                  </li>
                  <li>
                    <a
                      href="login.html"
                      className="nav-link btn btn-block btn-md btn-black-default-hover"
                    >
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              <div
                className="tab-content dashboard_content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="tab-pane fade show active" id="dashboard">
                  <h4>Dashboard </h4>
                  <p>
                    From your account dashboard. you can easily check &amp; view
                    your <a href="#">recent orders</a>, manage your{" "}
                    <a href="#">shipping and billing addresses</a> and{" "}
                    <a href="#">Edit your password and account details.</a>
                  </p>
                </div>
                <div className="tab-pane fade" id="orders">
                  <h4>Orders</h4>
                  <div className="table_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Order</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>May 10, 2018</td>
                          <td>
                            <span className="success">Completed</span>
                          </td>
                          <td>$25.00 for 1 item </td>
                          <td>
                            <a href="cart.html" className="view">
                              view
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>May 10, 2018</td>
                          <td>Processing</td>
                          <td>$17.00 for 1 item </td>
                          <td>
                            <a href="cart.html" className="view">
                              view
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="downloads">
                  <h4>Downloads</h4>
                  <div className="table_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Downloads</th>
                          <th>Expires</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Shopnovilla - Free Real Estate PSD Template</td>
                          <td>May 10, 2018</td>
                          <td>
                            <span className="danger">Expired</span>
                          </td>
                          <td>
                            <a href="#" className="view">
                              Click Here To Download Your File
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Organic - ecommerce html template</td>
                          <td>Sep 11, 2018</td>
                          <td>Never</td>
                          <td>
                            <a href="#" className="view">
                              Click Here To Download Your File
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="address">
                  <p>
                    The following addresses will be used on the checkout page by
                    default.
                  </p>
                  <h5 className="billing-address">Billing address</h5>
                  <a href="#" className="view">
                    Edit
                  </a>
                  <p>
                    <strong>Bobby Jackson</strong>
                  </p>
                  <address>Address: Your address goes here.</address>
                </div>
                <div className="tab-pane fade" id="account-details">
                  <h3>Account details </h3>
                  <div className="login">
                    <div className="login_form_container">
                      <div className="account_login_form">
                        <form>
                          <p>
                            Already have an account?{" "}
                            <a href="#">Log in instead!</a>
                          </p>
                          <div className="input-radio">
                            <span className="custom-radio">
                              <input type="radio" value="1" name="id_gender" />{" "}
                              Mr.
                            </span>
                            <span className="custom-radio">
                              <input type="radio" value="1" name="id_gender" />{" "}
                              Mrs.
                            </span>
                          </div>{" "}
                          <br />
                          <div className="default-form-box mb-20">
                            <label>First Name</label>
                            <input type="text" name="first-name" />
                          </div>
                          <div className="default-form-box mb-20">
                            <label>Last Name</label>
                            <input type="text" name="last-name" />
                          </div>
                          <div className="default-form-box mb-20">
                            <label>Email</label>
                            <input type="text" name="email-name" />
                          </div>
                          <div className="default-form-box mb-20">
                            <label>Password</label>
                            <input type="password" name="user-password" />
                          </div>
                          <div className="default-form-box mb-20">
                            <label>Birthdate</label>
                            <input type="date" name="birthday" />
                          </div>
                          <span className="example">(E.g.: 05/31/1970)</span>
                          <br />
                          <label className="checkbox-default" htmlFor="offer">
                            <input type="checkbox" id="offer" />
                            <span>Receive offers from our partners</span>
                          </label>
                          <br />
                          <label
                            className="checkbox-default checkbox-default-more-text"
                            htmlFor="newsletter"
                          >
                            <input type="checkbox" id="newsletter" />
                            <span>
                              Sign up for our newsletter
                              <br />
                              <em>
                                You may unsubscribe at any moment. For that
                                purpose, please find our contact info in the
                                legal notice.
                              </em>
                            </span>
                          </label>
                          <div className="save_button mt-3">
                            <button
                              className="btn btn-md btn-black-default-hover"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
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
