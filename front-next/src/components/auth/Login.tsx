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

function Login({ onSubmit, loading }: IProps) {
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
                className="account_form"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h3>login</h3>
                <form onSubmit={(e) => onSubmit(e, data)}>
                  <div className="default-form-box">
                    <label>
                      Username or email <span>*</span>
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={data["email"] || ""}
                      name="email"
                    />
                  </div>
                  <div className="default-form-box">
                    <label>
                      Passwords <span>*</span>
                    </label>
                    <input
                      type="password"
                      onChange={onChange}
                      value={data["password"] || ""}
                      name="password"
                    />
                  </div>
                  <div className="login_submit">
                    <button
                      className="btn btn-md btn-black-default-hover mb-4"
                      type="submit"
                    >
                      login
                    </button>
                    <label className="checkbox-default mb-4" htmlFor="offer">
                      <input type="checkbox" id="offer" />
                      <span>Remember me</span>
                    </label>
                    <a href="#">Lost your password?</a>
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

export default Login;
