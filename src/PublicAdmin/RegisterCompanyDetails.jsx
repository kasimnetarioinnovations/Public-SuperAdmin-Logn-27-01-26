import React from "react";
import login_background from "../assets/Image/login-image.png";
import munc_logo from "../assets/Image/munc-logo.png";
import { Link } from "react-router-dom";
import "../Responsive.css"

const RegisterCompanyDetails = () => {
  return (
    <div>
      <div className="d-flex" style={{height:"100vh"}}>
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
            <img
              src={munc_logo}
              alt="munc_logo"
              style={{
                maxWidth: "214px",
                width: "100%",
                paddingBottom: "15px",
              }}
            />
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
                  fontSize: "clamp(14px,2vw,14px)",
                  color: "#1E1E1E",
                  fontWeight: "400",
                }}
              >
                Enter Company Details
              </p>
            </div>
            <form action=""  style={{display:"flex", gap:"16px", flexDirection:"column"}}>
              {/* Name */}
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
                  Company Name
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="text"
                  placeholder="Enter Name"
                  style={{
                   width:"400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>
              {/* GST NUMBER */}
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
                  GST Number (Optional)
                </label>
                <input
                  className="input-placeholder input-outline input-all-box"
                  type="text"
                  placeholder="Enter GST Number"
                  style={{
                   width:"400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                  }}
                />
              </div>
              {/* SUBDOMAIN and COMPANY WEBSITE */}
              <div className="subdomain-compnay-inp" style={{ display: "flex", gap: "16px",}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                   
                  }}
                >
                  <label
                    htmlFor=""
                    style={{
                      fontWeight: "400",
                      fontSize: "clamp(12px,2vw,14px)",
                      color: "#000000",
                    }}
                  >
                    Subdomain
                  </label>
                  <input
                    className="subdomain-inp input-placeholder input-outline input-all-box"
                    type="text"
                    placeholder="Subdomain"
                    style={{
                     
                      width: "192px",
                      border: "1px solid #DEDEDE",
                      backgroundColor: "#FBFBFB",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      outline: "none",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    
                  }}
                >
                  <label
                    htmlFor=""
                    style={{
                      fontWeight: "400",
                      fontSize: "clamp(12px,2vw,14px)",
                      color: "#000000",
                    }}
                  >
                    Company Website (Optional)
                  </label>
                  <input
                    className="company-web-inp input-placeholder input-outline input-all-box"
                    type="text"
                    placeholder="Company Web"
                    style={{
                  
                      width: "192px",
                      border: "1px solid #DEDEDE",
                      backgroundColor: "#FBFBFB",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
              {/* EMPLOYEE SIZE */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(12px,2vw,14px)",
                    color: "#000000",
                  }}
                >
                  Employee Size
                </label>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                      }}
                    >
                      <input type="checkbox" /> 0-10 Employee
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                      }}
                    >
                      <input type="checkbox" /> 10-25 Employee
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                      }}
                    >
                      <input type="checkbox" /> 25-50 Employee
                    </label>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                      }}
                    >
                      <input type="checkbox" /> 50-100 Employee
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                      }}
                    >
                      <input type="checkbox" /> 100+ Employee
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: "400",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "#000000",
                        visibility: "hidden",
                      }}
                    >
                      <input type="checkbox" /> 100+ Employee
                    </label>
                  </div>
                </div>
              </div>
              {/* INDUSTRY */}
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
                  Industry
                </label>

                <select
                  className="input-outline input-all-box"
                  name=""
                  id=""
                  style={{
                    // width: "100%",
                    backgroundColor: "#FBFBFB",
                    width:"400px",
                    border: "1px solid #DEDEDE",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    outline: "none",
                    color: "#BABABA",
                    fontFamily: "Inter",
                    fontSize: "clamp(12px,2vw,14px)",
                  }}
                >
                  <option value="">Select Industry</option>
                  <option value="">Select Industry2</option>
                  <option value="">Select Industry2</option>
                </select>
              </div>
              {/* Agree Checkbox */}
              <label
                htmlFor=""
                style={{
                  fontWeight: "400",
                  fontSize: "clamp(12px,2vw,14px)",
                  color: "#000000",
                }}
              >
                <input type="checkbox" /> I Agree to the Terms & Conditions and
                Privacy Policy.
              </label>
               {/* Next Button */}
               <Link to="/register-login-details">
              <button
               className="input-all-box"
                style={{
                  backgroundColor: "#0084FF",
                  padding: "12px 16px",
                  borderRadius: "8px",
                   width:"400px",
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
              }}
            >
              {" "}
              I Already have an Account ? <Link style={{textDecoration:"none"}}>Login</Link>.
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
          <img src={login_background} alt="login_background"  style={{width:"100%", maxWidth:"782px"}}/>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyDetails;
