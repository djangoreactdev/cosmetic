import { Client } from "@/graphql/apollo";
import { VerifyPasswordDocument } from "@/graphql/generated";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface Idata {
  email: "string";
  password: "string";
  confirmPassword: "string";
}

export default function ForgotPassword() {
  const [data, setData] = useState<Idata>({} as Idata);
  const router = useRouter();
  const onChange = async (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any, data: Idata) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password does not match");
      return;
    }

    const token = router.query.token as string;
    const response = await Client.mutate({
      mutation: VerifyPasswordDocument,
      variables: {
        email: data.email,
        newPassword: data.password,
        token: token,
      },
    });
    console.log(response);
    if (response?.errors) {
      toast.success(response?.errors[0].message);
    }

    const resp = response?.data.verifyPassword.response;
    if (resp.status === "error") {
      toast.error(resp.message);
    }
    if (resp.status === "success") {
      toast.success(resp.message);
      router.push("/login");
    }
  };

  useEffect(() => {
    const email = router.query["?email"] as string;
    // if (!token) {
    //   toast.error("Invalid token");
    // }
    if (email) {
      onChange({ target: { name: "email", value: email } });
    }
  }, [router]);

  return (
    <div className="container py-16 ">
      <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
        <h2 className="text-2xl uppercase font-medium mb-1">Verify Password</h2>
        <form onSubmit={(e) => onSubmit(e, data)}>
          <div className="default-form-box">
            <label className="text-gray-600 mb-2 block">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              className="flex m-auto"
              //   onChange={onChange}
              readOnly
              value={data["email"] || ""}
              name="email"
            />
          </div>
          <div className="default-form-box">
            <label className="text-gray-600 mb-2 block">
              New Password <span className="text-primary">*</span>
            </label>
            <input
              type="password"
              className="flex m-auto"
              onChange={onChange}
              value={data["password"] || ""}
              name="password"
            />
          </div>
          <div className="default-form-box">
            <label className="text-gray-600 mb-2 block">
              Repeat New Password <span className="text-primary">*</span>
            </label>
            <input
              type="password"
              className="flex m-auto"
              onChange={onChange}
              value={data["confirmPassword"] || ""}
              name="confirmPassword"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
