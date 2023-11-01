import React from 'react';
import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {MdPassword} from "react-icons/md";

import '../assets/css/sign-in.css'

export default function SignIn() {
  return (
    <section>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-5 mb-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Sign In
                  </h2>

                  <form method='' action=''>
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

                    <div className="d-flex justify-content-center">
                      <Link
                        type="button" to={"/profile"}
                        className="btn btn-outline-secondary"
                      >
                        Login
                      </Link>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/sign-up" className="fw-bold">
                        <u>Sign Up</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
