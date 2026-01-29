import React,{useState} from 'react'
import login_background from "../assets/Image/login-image.png";
import munc_logo from "../assets/Image/munc-logo.png";
import { Link } from "react-router-dom";
import "../Responsive.css"
import { MdKeyboardBackspace } from "react-icons/md";
import { LuCheck } from "react-icons/lu";
import { GrShare } from "react-icons/gr";

const RegisterSelectPlan = () => {
      const [activePlan, setActivePlan] = useState("monthly");
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
             <label
                  htmlFor=""
                  style={{
                    fontWeight: "400",
                    fontSize: "clamp(14px,2vw,16px)",
                    color: "#000000",
                    display:"flex",
                    width:"100%"
                     
                  }}
                >
               <Link to="/register-login-details"><MdKeyboardBackspace  style={{color:"black"}}/></Link> Back
                </label>
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
                  fontSize: "clamp(12px,2vw,14px)",
                  color: "#1E1E1E",
                  fontWeight: "400",
                }}
              >
                Select Plan
              </p>
            </div>
            {/* Monthly Yearly */}
              <div style={{ display:"flex",
                 alignItems:"center",gap:"4px", paddingBottom:"15px"}}>
               <label
                htmlFor=""
                style={{
                  fontWeight: "400",
                  fontSize: "clamp(12px,2vw,14px)",
                 color:"#0056F5",
                 
                }}
              >
               Save 15% on Yearly Plan
              </label>
                <div style={{border:"1px solid #E9E9E9",borderRadius:"68px", width:"161px", height:"34px", padding:"4px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <button    className={activePlan === "monthly" ? "plan-btn-active" : ""} onClick={() => setActivePlan("monthly")}style={{borderRadius:"16px", padding:"4px 10px",border:"none",  fontSize: "clamp(12px,2vw,14px)", backgroundColor:"transparent"}}>Monthly</button>
                  <button  className={activePlan === "annually" ? "plan-btn-active" : ""} onClick={() => setActivePlan("annually")} style={{borderRadius:"16px", padding:"4px 10px",border:"none",  fontSize: "clamp(12px,2vw,14px)", backgroundColor:"transparent"}}>Annually</button>
                </div>
              </div>
            <form action=""  style={{display:"flex", gap:"16px", flexDirection:"column"}}>
               
              {/* Free */}
               <div className='input-outline input-all-box' style={{ width:"400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding:"12px 20px",
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-between"
                    }}>

                        <div className="select-plan-left" style={{display:"flex", flexDirection:"column"}}>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(14px,2vw,18px)", fontWeight:"600"}}>Free</label>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(28px,2vw,32px)", fontWeight:"600"}}>₹00<span style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)", fontWeight:"400"}}>/Month</span></label>
                            <label htmlFor="" style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)",fontWeight:"400"}}><LuCheck/>Upto 2 Employee</label>
                        </div>
                        <div className="select-plan-right"><input type="checkbox" /></div>

               </div>
                {/* Standard*/}
               <div className='input-outline input-all-box' style={{ width:"400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding:"12px 20px",
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-between"
                    }}>

                        <div className="select-plan-left" style={{display:"flex", flexDirection:"column"}}>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(14px,2vw,18px)", fontWeight:"600"}}>Standard</label>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(28px,2vw,32px)", fontWeight:"600"}}>₹122<span style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)", fontWeight:"400"}}>/Month</span></label>
                            <label htmlFor="" style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)",fontWeight:"400"}}><span style={{color:"#0B9A04"}}>Save ₹366 PA,</span> 15% Discount</label>
                            <label htmlFor="" style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)",fontWeight:"400"}}><LuCheck/>Upto 10 Employee</label>
                        </div>
                        <div className="select-plan-right"><input type="checkbox" /></div>

               </div>
                {/* Pro*/}
               <div className='input-outline input-all-box' style={{ width:"400px",
                    border: "1px solid #DEDEDE",
                    backgroundColor: "#FBFBFB",
                    borderRadius: "8px",
                    padding:"12px 20px",
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-between"
                    }}>

                        <div className="select-plan-left" style={{display:"flex", flexDirection:"column"}}>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(14px,2vw,18px)", fontWeight:"600"}}>Pro</label>
                            <label htmlFor="" style={{color:"#000000", fontSize: "clamp(28px,2vw,32px)", fontWeight:"600"}}>₹589<span style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)", fontWeight:"400"}}>/Month</span></label>
                            <label htmlFor="" style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)",fontWeight:"400"}}><span style={{color:"#0B9A04"}}>Save ₹9322 PA,</span> 15% Discount</label>
                            <label htmlFor="" style={{color:"#626D93", fontSize: "clamp(10px,2vw,12px)",fontWeight:"400"}}><LuCheck/>Upto 50 Employee</label>
                        </div>
                        <div className="select-plan-right"><input type="checkbox" /></div>

               </div>
                {/* Explore */}
                 <label
                htmlFor=""
                style={{
                  fontWeight: "400",
                  fontSize: "clamp(12px,2vw,14px)",
                  color: "#000000",
                }}
              >
                <span style={{color:"#0056F5"}}>Explore Plans in details</span> <GrShare/>
              </label>
               {/* Submit Button */}
               <Link to="/email-verify-link-sms">
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
                    // fontFamily: "Inter",
                }}
              >
               Submit
              </button>
              </Link>
            </form>
              
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
  )
}

export default RegisterSelectPlan