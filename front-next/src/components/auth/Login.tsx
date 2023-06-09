import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

interface Idata {
  id: "string";
  password: "string";
}

interface IProps {
  onSubmit: (e: any, data: Idata) => void;
  loading: boolean;
}

function Login({}: IProps) {
  const [data, setData] = useState<Idata | any>({});
  const router = useRouter();
  const onChange = async (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: any, data: Idata) => {
    e.preventDefault();
    const response = await signIn("login", {
      id: data.id,
      password: data.password,
      redirect: false,
    });
    if (response?.error) {
      toast.error(response?.error);
    } else {
      toast.success("Login success");
      router.push("/");
    }
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

      <div className="container py-16 ">
        <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
          <h2 className="text-2xl uppercase font-medium mb-1">login form</h2>
          <form onSubmit={(e) => onSubmit(e, data)}>
            <div className="default-form-box">
              <label>
                Username or email <span>*</span>
              </label>
              <input
                type="text"
                onChange={onChange}
                value={data["id"] || ""}
                name="id"
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
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
                type="submit"
              >
                login
              </button>
              <label className="checkbox-default m-4" htmlFor="offer">
                <input type="checkbox" id="offer" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password">Lost your password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
