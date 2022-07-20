import React, { useState } from "react";
import { signIn, signInWithEmail, signOut } from "../lib/firebase";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col w-full h-full space-y-4 justify-center items-start "
    >
      <h1 className="font-bold text-2xl mx-auto">LOGIN FORM</h1>
      <label className="font-bold pl-2 ">Email</label>
      <input
        className="w-full bg-transparent border-black border px-3 py-2 rounded-2xl placeholder-gray-700 "
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="font-bold pl-2 ">Password</label>
      <input
        className="w-full bg-transparent border-black border px-3 py-2 rounded-2xl placeholder-gray-700 "
        placeholder="password..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="border rounded-lg border-black px-4 py-1 mx-auto !mt-10 transition ease-linear hover:bg-black hover:text-white "
        onClick={() => {
          signInWithEmail(email, password);
        }}
      >
        Sign In
      </button>
      <h1 className="mx-auto"> or</h1>
      <button
        className="border rounded-lg border-black px-4 py-1 mx-auto !mt-3 transition ease-linear hover:bg-black hover:text-white"
        onClick={signIn}
      >
        Sign In With Google
      </button>
    </form>
  );
}

export default LoginForm;
