import React from "react";
import LoginForm from "../components/LoginForm";
import LogOutForm from "../components/LogOutForm";
import useAuth from "../lib/useAuth";

function Login() {
  const { user } = useAuth();
  if (user) {
    console.log(user);
  }

  return (
    <div className="flex justify-center items-center  w-[500px] mx-auto mt-30 h-[550px] bg-gray-200 p-6 shadow-lg mt-7 ">
      {user ? <LogOutForm /> : <LoginForm />}
    </div>
  );
}

export default Login;
