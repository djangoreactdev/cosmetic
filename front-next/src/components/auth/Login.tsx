import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

interface Idata {
  id: "string";
  password: "string";
=======

interface Idata {
  data: {
    email: "string";
    password: "string";
  };
>>>>>>> 2df60ad... add testing data front
=======
import { signIn } from "next-auth/react";
import Link from "next/link";

interface Idata {
  id: "string";
  password: "string";
>>>>>>> 583e06f... add login
}

interface IProps {
  onSubmit: (e: any, data: Idata) => void;
  loading: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
function Login({}: IProps) {
  const [data, setData] = useState<Idata | any>({});
  const router = useRouter();
  const onChange = async (e: any) => {
=======
function Login({ onSubmit, loading }: IProps) {
  const [data, setData] = useState<Idata | any>({});

  const onChange = (e: any) => {
>>>>>>> 2df60ad... add testing data front
=======
function Login({}: IProps) {
  const [data, setData] = useState<Idata | any>({});

  const onChange = async (e: any) => {
>>>>>>> 583e06f... add login
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
    const response = await signIn("login", {
      id: data.id,
      password: data.password,
      redirect: false,
    });
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
    console.log(response);
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
<<<<<<< HEAD
<<<<<<< HEAD
                      value={data["id"] || ""}
                      name="id"
=======
                      value={data["email"] || ""}
                      name="email"
>>>>>>> 2df60ad... add testing data front
=======
                      value={data["id"] || ""}
                      name="id"
>>>>>>> 583e06f... add login
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
<<<<<<< HEAD
<<<<<<< HEAD
                    <Link href="#">Lost your password?</Link>
=======
                    <a href="#">Lost your password?</a>
>>>>>>> 2df60ad... add testing data front
=======
                    <Link href="#">Lost your password?</Link>
>>>>>>> 583e06f... add login
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
