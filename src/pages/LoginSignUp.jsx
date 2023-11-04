import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import OAuth from "../shared/components/OAuth/OAuth.jsx";

import "../assets/css/login_signup.css";

export default function LoginSignUp() {
  const [action, setAction] = useState("Sign Up");

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">{action}</h2>

                <form>
                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="form-item mb-4">
                      <span className="icon">
                        <FaUser></FaUser>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                  )}

                  <div className="form-item mb-4">
                    <span className="icon">
                      <MdEmail></MdEmail>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="form-item mb-4">
                    <span className="icon">
                      <MdPassword></MdPassword>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>

                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="form-item mb-4">
                      <span className="icon">
                        <MdPassword></MdPassword>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat password"
                      />
                    </div>
                  )}

                  <div className="btns-container">
                    <Link
                      onClick={() => {
                        setAction("Sign Up");
                      }}
                      type="button"
                      to={"/profile"}
                      className="btn btn-outline-secondary"
                    >
                      Sign Up
                    </Link>
                    <OAuth></OAuth>
                  </div>

                  {action === "Login" ? (
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{" "}
                      <Link to="/sign-up" className="fw-bold" onClick={() => {
                          setAction("Sign Up");
                        }}>
                        <u>Sign Up</u>
                      </Link>
                    </p>
                  ) : (
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link
                        to="/login"
                        className="fw-bold"
                        onClick={() => {
                          setAction("Login");
                        }}
                      >
                        <u>Login</u>
                      </Link>
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
