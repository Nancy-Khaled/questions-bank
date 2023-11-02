import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import "../assets/css/profile.css";

export default function Profile() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name; //to get unique file name
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };
  // ->fierbase storage
  // allow read;
  // allow write: if
  // request.resource.size < 3 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*');

  return (
    <section className="mt-4 mb-4">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-7">
            <div className="card mt-5 mb-5">
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white p-3">
                  <input
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                  <img
                    onClick={() => fileRef.current.click()}
                    src={formData.avatar || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"}
                    alt="Avatar"
                    className="img-fluid avatar rounded-full object-cover"
                  />
                  <p className="text-sm">
                    {fileUploadError ? (
                      <span className="text-red-700"></span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                      <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                      <span className="text-green-700">
                        Image successfully uploaded!
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <h2>Nour Mahmoud</h2>
                  <p>Student</p>
                  <p>19 yrs</p>
                  <p>Computer Science</p>
                </div>
                <div className="col-md-8">
                  <div className="card-body pt-5 pb-5">
                    {/* information */}
                    <h2>Information</h2>
                    <hr className="mt-0 mb-3" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">info@example.com</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">123 456 789</p>
                      </div>
                    </div>
                    {/* exams */}
                    <h2>Exams</h2>
                    <hr className="mt-0 mb-3" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Passed</h6>
                        <p className="text-muted">4 Exams</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Failed</h6>
                        <p className="text-muted">0 Exam</p>
                      </div>
                    </div>
                    {/* social media */}
                    <h2>Social Media</h2>
                    <hr className="mt-0 mb-3" />
                    <div className="row pt-1">
                      <div className="col-3 mb-3">
                        <Link
                          to={"https://www.facebook.com/login/"}
                          target="_blank"
                        >
                          <FaFacebook color="#0866ff"></FaFacebook>
                        </Link>
                      </div>
                      <div className="col-3 mb-3">
                        <Link
                          to={"https://www.linkedin.com/login"}
                          target="_blank"
                        >
                          <FaLinkedin color="#0072b1"></FaLinkedin>
                        </Link>
                      </div>
                      <div className="col-3 mb-3">
                        <Link
                          to={"https://web.whatsapp.com/login"}
                          target="_blank"
                        >
                          <FaWhatsapp color="#25D366"></FaWhatsapp>
                        </Link>
                      </div>
                      <div className="col-3 mb-3">
                        <Link
                          to={"https://www.google.com/account/about/"}
                          target="_blank"
                        >
                          <BiLogoGmail color="#d44638"></BiLogoGmail>
                        </Link>
                      </div>
                    </div>
                    {/* settings */}
                    <h2>Settings</h2>
                    <hr className="mt-0 mb-3" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <Link to={"/"} className="text-red-700">Delete Account</Link>
                      </div>
                      <div className="col-6 mb-3">
                        <Link to={"/"} className="text-muted">Sign Out</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
