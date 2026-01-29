import React from "react";
import munc_logo from "../assets/Image/munc-logo.png";
import { GoPlus } from "react-icons/go";
import "../Responsive.css";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiBagSimple } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";

 const superAdminCard=[
     {
        company:"Total Companies",
        data:"2231",
        percent:"+12%",
        icon: <PiBuildingApartmentFill/>
     },
      {
        company:"Active Companies",
        data:"98,698",
        percent:"+14%",
        icon: <PiBagSimple />
        
     },
       {
        company:"Total Employee",
        data:"98,698",
        percent:"+12%",
        icon: <MdOutlinePersonOutline />
     },
      {
        company:"Monthly Active User",
        data:"98,698",
        percent:"+12%",
         icon: <MdOutlinePersonOutline />
     },
      {
        company:"Free Users",
        data:"98,698",
        percent:"+12%",
         icon: <MdOutlinePersonOutline />
     },
      {
        company:"New Signups Today",
        data:"98,698",
        percent:"+12%",
         icon: <MdOutlinePersonOutline />
     },
     
 ]
const SuperAdminDashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        className="super-admindahsboard-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 180px",
          border: "1px solid #BCBCBC",
        }}
      >
        <img
          style={{ objectFit: "contain", width: "100%", maxWidth: "150px" }}
          src={munc_logo}
          alt="munc_logo"
        />
        <button
          className=""
          style={{
            backgroundColor: "#407BFF",
            borderRadius: "8px",
            border: "none",
            padding: "12px 10px",
            width: "211px",
            color: "white",
            fontFamily: "Inter",
            fontSize: "clamp(9px,2vw,16px)",
            fontWeight: "400",
          }}
        >
          <GoPlus
            style={{ fontSize: "clamp(18px,2vw,20px)", fontWeight: "600" }}
          />
          Send Annoucement
        </button>
      </nav>
      {/* Dahsboard container */}
      <div
        className="dashbaord-container super-admindahsboard-container"
        style={{
          backgroundColor: "#EAEAEA",
          padding: "39px 180px",
          height: "100vh",
        }}
      >  
        <div className="superadmin-card-container d-flex justify-content-between flex-wrap">  
        {superAdminCard.map((item,idx) =>(
        <div 
          key={idx}
          className="superadmin-dashboard-card input-all-box"
          style={{
             display:"flex",
             flexDirection:"column",
             justifyContent:"center",
            fontFamily: "Inter",
            backgroundColor: "#FFFFFF",
            width: "240px",
            height: "107px",
            padding:"0 10px",
            borderBottom: "6px solid #0F31AC",
            borderRadius:"5px"
          }}
        > 
       
          <div style={{ display: "flex", justifyContent: "space-between" ,alignItems:"center"}}>
            <h3
              style={{
                fontSize: "clamp(14px,2vw,16px)",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              {item.company}
            </h3>
            <div
              style={{
                backgroundColor: "#E5F2FF",
                borderRadius: "55px",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
             
               <span style={{ color: "#007CFF", display:"flex", justifyContent:"center", alignItems:"center" }}>{item.icon}</span>
            </div>
          </div>
          <div className="d-flex gap-1 align-items-center" >
            <h1
              style={{
                color: "#0F31AC",
                fontSize: "clamp(28px,2vw,32px)",
                fontWeight: "500",
                marginBottom:"0"
              }}
            >
              {item.data}
            </h1>
            <span
              style={{
                backgroundColor: "#E8FFDB",
                color: "#2F8700",
                borderRadius: "4px",
                padding: "3px",
                width: "37px",
                height: "21px",
                fontSize: "clamp(8px,2vw,12px)",
                fontWeight: "400",
              }}
            >
              {item.percent}
            </span>
        
          </div>
        </div>
         ))}
         </div>  
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
