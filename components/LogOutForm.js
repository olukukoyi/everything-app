import React from "react";
import { signOut } from "../lib/firebase";
import useAuth from "../lib/useAuth";

function LogOutForm() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col space-y-2 items-center jsutify-center ">
      <h1>
        The user <span className="font-bold underline">{user.displayName}</span>{" "}
        is already logged in
      </h1>
      <h1> log out here</h1>
      <button
        className="border border-black rounded-lg px-2 py-1 hover:bg-black hover:text-white transition ease-linear "
        onClick={signOut}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOutForm;
