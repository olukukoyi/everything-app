import React from "react";
import LogOutForm from "../components/LogOutForm";
import SignupForm from "../components/SignupForm";
import useAuth from "../lib/useAuth";
function Signup() {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center  w-[500px] mx-auto mt-30 h-[550px] bg-gray-200 p-6 shadow-lg mt-7 ">
      {user ? <LogOutForm /> : <SignupForm />}
    </div>
  );
}

export default Signup;
