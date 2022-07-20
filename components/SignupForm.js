import React, { useState } from "react";
import { signIn, signOut, signUpEithEmail } from "../lib/firebase";

function SignupForm() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col w-full h-full space-y-4 justify-center items-start "
    >
      <h1 className="font-bold text-2xl mx-auto">SIGN UP FORM for new users</h1>
      <label className="font-bold pl-2 ">Email</label>
      <input
        className="w-full bg-transparent border-black border px-3 py-2 rounded-2xl placeholder-gray-700 "
        placeholder="email..."
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <label className="font-bold pl-2 ">Password</label>
      <input
        type="password"
        className="w-full bg-transparent border-black border px-3 py-2 rounded-2xl placeholder-gray-700 "
        placeholder="password..."
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        className="border rounded-lg border-black px-4 py-1 mx-auto !mt-10 transition ease-linear hover:bg-black hover:text-white "
        onClick={() => {
          signUpEithEmail(newEmail, newPassword);
        }}
      >
        Create new user
      </button>
    </form>
  );
}

export default SignupForm;
