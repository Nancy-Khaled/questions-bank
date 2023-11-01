import React from "react";
import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {MdPassword} from "react-icons/md";

import '../assets/css/sign-up.css'
import OAuth from "../shared/components/OAuth/OAuth.jsx";

export default function SignUp() {
  return (
    <section>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-5 mb-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Sign Up
                  </h2>

                  <form action="/SignUp" method="post">
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

                    <div className="btns-container">
                    <Link
                        type="button" to={"/profile"}
                        className="btn btn-outline-secondary"
                      >
                        Register
                      </Link>
                      <OAuth></OAuth>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/sign-in" className="fw-bold">
                        <u>SignIn</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
