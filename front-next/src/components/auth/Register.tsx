<<<<<<< HEAD
<<<<<<< HEAD
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface Idata {
  lastName: "string";
  email: "string";
  username: "string";
  firstName: "string";
  password: "string";
=======
import React, { useState } from "react";

interface Idata {
  data: {
    email: "string";
    password: "string";
  };
>>>>>>> 2df60ad... add testing data front
=======
import { signIn } from "next-auth/react";
import React, { useState } from "react";

interface Idata {
  lastName: "string";
  email: "string";
  username: "string";
  firstName: "string";
  password: "string";
>>>>>>> 583e06f... add login
}

interface IProps {
  onSubmit: (e: any, data: Idata) => void;
  loading: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
function Register({}: IProps) {
  const [data, setData] = useState<Idata | any>({});
  const router = useRouter();
=======
function Register({ onSubmit, loading }: IProps) {
=======
function Register({}: IProps) {
>>>>>>> 583e06f... add login
  const [data, setData] = useState<Idata | any>({});

>>>>>>> 2df60ad... add testing data front
  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 583e06f... add login
  const onSubmit = async (e: any, data: Idata) => {
    e.preventDefault();
    const response = await signIn("register", {
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      redirect: false,
    });
    console.log(response);
<<<<<<< HEAD
    if (response?.error) {
      toast.error(response?.error);
    } else {
      toast.success("Login success");
      router.push("/");
    }
  };

=======
>>>>>>> 2df60ad... add testing data front
=======
  };

>>>>>>> 583e06f... add login
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 583e06f... add login
                <form onSubmit={(e) => onSubmit(e, data)}>
                  <div className="default-form-box">
                    <label>Last Name</label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={data["lastName"] || ""}
                      name="lastName"
                    />
                  </div>
                  <div className="default-form-box">
                    <label>First Name</label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={data["firstName"] || ""}
                      name="firstName"
                    />
                  </div>
                  <div className="default-form-box">
                    <label>Username</label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={data["username"] || ""}
                      name="username"
                    />
                  </div>
<<<<<<< HEAD
=======
                <form action="#">
>>>>>>> 2df60ad... add testing data front
=======
>>>>>>> 583e06f... add login
                  <div className="default-form-box">
                    <label>
                      Email address <span>*</span>
                    </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 583e06f... add login
                    <input
                      type="email"
                      onChange={onChange}
                      value={data["email"] || ""}
                      name="email"
                    />
<<<<<<< HEAD
                  </div>
                  <div className="default-form-box">
                    <label>
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      onChange={onChange}
                      value={data["password"] || ""}
                      name="password"
                    />
                  </div>

                  <div className="default-form-box">
                    <label>
                      Password repeat <span>*</span>
                    </label>
                    <input
                      type="password"
                      onChange={onChange}
                      value={data["password2"] || ""}
                      name="password2"
                    />
=======
                    <input type="text" />
=======
>>>>>>> 583e06f... add login
                  </div>
                  <div className="default-form-box">
                    <label>
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      onChange={onChange}
                      value={data["password"] || ""}
                      name="password"
                    />
                  </div>

                  <div className="default-form-box">
                    <label>
                      Password repeat <span>*</span>
                    </label>
<<<<<<< HEAD
                    <input type="password" />
>>>>>>> 2df60ad... add testing data front
=======
                    <input
                      type="password"
                      onChange={onChange}
                      value={data["password2"] || ""}
                      name="password2"
                    />
>>>>>>> 583e06f... add login
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
