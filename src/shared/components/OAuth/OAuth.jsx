import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

import "./css/oauthStyle.css";
import { app } from "../../../firebase";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      
    } catch (error) {
      console.log("Could not Continue with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="btn btn-danger mt-3"
    >
      Continue with{" "}
      <span>
        <FaGoogle></FaGoogle>
      </span>
    </button>
  );
}
