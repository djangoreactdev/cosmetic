import React, { useState } from "react";

interface Idata {
  data: {
    email: "string";
    password: "string";
  };
}

interface IProps {
  onSubmit: (e: any, data: Idata) => void;
  loading: boolean;
}

function Register({ onSubmit, loading }: IProps) {
  const [data, setData] = useState<Idata | any>({});

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Login</h3>
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
                        Login
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customer-login">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-md-6 offset-md-3">
              <div
                className="account_form register"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Register</h3>
                <form action="#">
                  <div className="default-form-box">
                    <label>
                      Email address <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="default-form-box">
                    <label>
                      Passwords <span>*</span>
                    </label>
                    <input type="password" />
                  </div>
                  <div className="login_submit">
                    <button
                      className="btn btn-md btn-black-default-hover"
                      type="submit"
                    >
                      Register
                    </button>
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

export default Register;
