import { Client } from "@/graphql/apollo";
import { ChangePasswordDocument } from "@/graphql/generated";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface Idata {
  oldPassword: "string";
  newPassword: "string";
}

export default function ChangePassword() {
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

    const response = await Client.mutate({
      mutation: ChangePasswordDocument,
      variables: {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      },
    });
    console.log(response);
    if (response?.errors) {
      toast.success(response?.errors[0].message);
    }

    const resp = response?.data.changePassword.response;
    if (resp.status === "error") {
      toast.error(resp.message);
    }
    if (resp.status === "success") {
      toast.success(resp.message);
      router.push("/");
    }
  };

  return (
    <div className="container py-16 ">
      <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Change Password{" "}
        </h2>

        <form onSubmit={(e) => onSubmit(e, data)}>
          <div className="default-form-box">
            <label>
              Old Password<span>*</span>
            </label>
            <input
              type="password"
              onChange={onChange}
              value={data["oldPassword"] || ""}
              name="oldPassword"
            />
          </div>
          <div className="default-form-box">
            <label>
              New Password<span>*</span>
            </label>
            <input
              type="password"
              onChange={onChange}
              value={data["newPassword"] || ""}
              name="newPassword"
            />
          </div>
          <div className="login_submit">
            <button
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
              type="submit"
            >
              Submit ..
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
