import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

function useAuth() {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return { user };
}

export default useAuth;
