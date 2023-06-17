import Link from "next/link";
import React from "react";

function ForgotPassword() {
  return (
    <div className="container py-16 ">
      <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
        <h2 className="text-2xl uppercase font-medium mb-1">Reset password</h2>

        <form method="" action="">
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                className="input-box"
                placeholder="example@mail.com"
              />
            </div>
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

export default ForgotPassword;
