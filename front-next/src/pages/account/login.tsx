import { useContext } from "react";

import { Puff } from "react-loading-icons";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Client } from "@/apollo";
import Login from "@/components/auth/Login";

const login = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default login;
