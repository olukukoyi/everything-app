import React from "react";
import Link from "next/link";

function Navbar({ children }) {
  return (
    <div>
      <div className="flex w-3/4 mx-auto justify-center items-center p-2 ">
        <div className="flex justify-between items-center w-full ">
          <div>
            <Link href="/">
              <h1 className="cursor-pointer">Home</h1>
            </Link>
          </div>
          <div className="flex space-x-3 ">
            <Link href="/fetching">
              <h1 className="cursor-pointer">RICKAPI</h1>
            </Link>
            <Link href="/login">
              <h1 className="cursor-pointer">LOGIN</h1>
            </Link>
            <Link href="/signup">
              <h1 className="cursor-pointer">SIGN-UP</h1>
            </Link>
            <Link href="/fspost">
              <h1 className="cursor-pointer">FIRESTORE</h1>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Navbar;
