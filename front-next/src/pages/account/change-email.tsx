import { Client } from "@/graphql/apollo";
import { ChangeEmailDocument } from "@/graphql/generated";
import { signOut } from "next-auth/react";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface Idata {
  email: "string";
}

export default function ChangeEmail() {
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
      mutation: ChangeEmailDocument,
      variables: {
        email: data.email,
      },
    });
    console.log(response);
    if (response?.errors) {
      toast.success(response?.errors[0].message);
    }

    const resp = response?.data.changeEmail.response;
    if (resp.status === "error") {
      toast.error(resp.message);
    }
    if (resp.status === "success") {
      toast.success(resp.message);

      signOut({ redirect: false });
      Client.cache.reset();
      router.push("/");
    }
  };

  return (
    <div className="container py-16 ">
      <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
        <h2 className="text-2xl uppercase font-medium mb-1">Change Email</h2>
        <form onSubmit={(e) => onSubmit(e, data)}>
          <div className="default-form-box">
            <label className="text-gray-600 mb-2 block">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              className="flex m-auto"
              onChange={onChange}
              value={data["email"] || ""}
              name="email"
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
