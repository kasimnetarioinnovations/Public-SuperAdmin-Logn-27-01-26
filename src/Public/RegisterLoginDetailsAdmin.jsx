import React from 'react';
import login_background from "../assets/Image/Customers.png";
import munc_logo from "../assets/Image/munc-logo.png";
import { Link } from "react-router-dom";
import "../Responsive.css"
import { MdKeyboardBackspace } from "react-icons/md";

const RegisterLoginDetailsAdmin = () => {
  return (
    <div>
      <div className="d-flex" style={{ height: "100vh" }}>

        {/* login-container */}
        <div
          className="login-container"
          style={{
            backgroundColor: "white",
            width: "100%",
            // height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter",

          }}
        >

          <div
            className="register-account-container"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* back button */}
            <label
              htmlFor=""
              style={{
                fontWeight: "400",
                fontSize: "clamp(14px,2vw,16px)",
                color: "#000000",
                display: "flex",
                width: "100%",
                paddingBottom: "15px"

              }}
            >
              <Link to="/" style={{textDecoration:"none", color:"black"}}><MdKeyboardBackspace style={{ color: "black" }} /> Back</Link> 
            </label>

            {/* munc logo */}
            <img
              src={munc_logo}
              alt="munc_logo"
              style={{
                maxWidth: "214px",
                width: "100%",
                paddingBottom: "15px",
              }}
            />

            {/* register account head title */}
            <div className="register-account-head-title text-center">
              <h3
                style={{
                  fontSize: "clamp(14px,2vw,20px)",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                Register your Account
              </h3>
              <p
                style={{
                  fontSize: "clamp(12px,2vw,14px)",
                  color: "#1E1E1E",
                  fontWeight: "400",
                }}
              >
                Login Details (Admin Account Setup)
              </p>
            </div>

            {/* register account form */}
            <form action="" style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              {/* name */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(12px,2vw,14px)",
                    color: "#000000",
                  }}
                >
                  Full Name
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="text"
                  placeholder="Enter Full Name"
                  style={{
                    width: "400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(12px,2vw,14px)",
                    color: "#000000",
                  }}
                >
                  Email
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="email"
                  placeholder="Enter Admin Email"
                  style={{
                    width: "400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>
              
              {/* Phone Number */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(12px,2vw,14px)",
                    color: "#000000",
                  }}
                >
                  Phone Number
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="number"
                  placeholder="Enter Phone Number"
                  style={{
                    width: "400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Password */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(12px,2vw,14px)",
                    color: "#000000",
                  }}
                >
                  Password
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="password"
                  placeholder="Enter Admin Passowrd"
                  style={{
                    width: "400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Next Button */}
              <Link to="/otp-verification">
                <button
                  className='input-all-box'
                  style={{
                    backgroundColor: "#0084FF",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    width: "400px",
                    border: "none",
                    color: "white",
                    fontSize: "clamp(14px,2vw,16px)",
                    fontWeight: "500",
                  }}
                >
                  Next
                </button>
              </Link>

            </form>

              {/* Login Redirect Link */}
              <label
                htmlFor=""
                style={{
                  fontWeight: "400",
                  fontSize: "clamp(12px,2vw,14px)",
                  color: "#000000",
                  marginTop: "10px",
                }}
              >
                {" "}
                Already have an Account ? <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
              </label>

          </div>
        </div>

        {/* login-background */}
        <div
          className="login-background"
          style={{
            backgroundColor: "#0447AA",
            width: "100%",
            // height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={login_background} alt="login_background" style={{ width: "100%", maxWidth: "582px" }} />
        </div>
      </div>
    </div>
  )
}

export default RegisterLoginDetailsAdmin