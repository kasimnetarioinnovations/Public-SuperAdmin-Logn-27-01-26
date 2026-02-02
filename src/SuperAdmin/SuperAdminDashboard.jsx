import React, { useState } from "react";
import munc_logo from "../assets/Image/munc-logo.png";
import { GoPlus } from "react-icons/go";
import "../Responsive.css";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiBagSimple } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RxDotFilled } from "react-icons/rx";
import { GrFormCheckmark } from "react-icons/gr";
import { TbUserHexagon } from "react-icons/tb";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import Pagination from "./Pagination";

const superAdminCard = [
  {
    company: "Total Companies",
    data: "2231",
    percent: "+12%",
    icon: <PiBuildingApartmentFill />,
  },
  {
    company: "Active Companies",
    data: "98,698",
    percent: "+14%",
    icon: <PiBagSimple />,
  },
  {
    company: "Total Employee",
    data: "98,698",
    percent: "+12%",
    icon: <MdOutlinePersonOutline />,
  },
  {
    company: "Monthly Active User",
    data: "98,698",
    percent: "+12%",
    icon: <MdOutlinePersonOutline />,
  },
  {
    company: "Free Users",
    data: "98,698",
    percent: "+12%",
    icon: <MdOutlinePersonOutline />,
  },
  {
    company: "New Signups Today",
    data: "98,698",
    percent: "+12%",
    icon: <MdOutlinePersonOutline />,
  },
];
const revenueGrowthCard = [
  {
    title: "MRR",
    digit: "98,698",
  },
  {
    title: "ARR",
    digit: "98,698",
  },
  {
    title: "Upgraded",
    digit: "98,698",
  },
  {
    title: "Pending Payments",
    digit: "98,698",
  },
];
const openTicket = [
  {
    iconOne: <MdOutlinePayment />,
    issueName: "Payroll Issue",
    issueNumber: "54",
    issueType: "High",
    issueTypeIcon: <RxCross2/>,
  },
  {
    iconOne: <TbUserHexagon />,
    issueName: "Login Problem",
    issueNumber: "12",
    issueType: "Medium",
    issueTypeIcon: <RxDotFilled />,
  },
  {
    iconOne: <MdOutlineRocketLaunch />,
    issueName: "Feature Request",
    issueNumber: "03",
    issueType: "Low",
   issueTypeIcon: <GrFormCheckmark />,
  },
];
 const companyList =[
  {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
    {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
    {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
    {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
    {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
    {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Active",
    statusIcon: <GrFormCheckmark />,
    OrdDate:"Today"

  },
   {
    regDate:"14/04/2024",
    compName:"ZolarTecH",
    PlanTyp:"Free",
    noEmp:"10-25 Employee",
    status:"Inactive",
    statusIcon: <RxDotFilled />,
    OrdDate:"Today"

  }
 ]
const SuperAdminDashboard = () => {
  // Revenue Graph
  const width = 1000;
  const height = 280;
  const padding = 30;

  const data = [
    40, 38, 42, 40, 45, 39, 43, 46, 44, 37, 42, 48, 36, 40, 35, 41, 39, 42, 45,
    46, 48, 47, 50, 45, 47, 46, 49, 47,
  ];

  const splitIndex = 18;
  const [tooltip, setTooltip] = useState(null);

  const max = Math.max(...data);
  const min = Math.min(...data);

  const scaleX = (i) =>
    padding + (i * (width - padding * 2)) / (data.length - 1);

  const scaleY = (val) =>
    height - padding - ((val - min) / (max - min)) * (height - padding * 2);

  const buildPath = (start, end) =>
    data
      .slice(start, end)
      .map((d, i) => {
        const x = scaleX(i + start);
        const y = scaleY(d);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

  const xTicks = [
    { index: 0, label: "01" },
    { index: 6, label: "07" },
    { index: 14, label: "15" },
    { index: 22, label: "23" },
    { index: data.length - 1, label: "31" }, // ✅ FIX
  ];
  const gridLines = [
    scaleY(min), // bottom
    scaleY((min + max) / 2), // middle
    scaleY(max), // top
  ];

  // Subscription Breakdown Ring Chart
  const size = 170;
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  // values must sum to 100
  const segments = [
    { value: 30, color: "#FF9706" }, // orange
    { value: 33, color: "#34C300" }, // green
    { value: 65, color: "#5F4DFF" }, // purple
  ];

  let offset = 0;

  return (
    <div>
      {/* Navbar */}
      <nav
        className="superadmin-navdashboard"
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
          // height: "100vh",
          gap: "39px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* superadmin-card */}
        <div className="superadmin-card-container d-flex justify-content-between ">
          {superAdminCard.map((item, idx) => (
            <div
              key={idx}
              className="superadmin-dashboard-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Inter",
                backgroundColor: "#FFFFFF",
                width:"100%",
                maxWidth: "240px",
                height:"100vh",
                maxHeight: "107px",
                padding: "0 10px",
                borderBottom: "6px solid #0F31AC",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#007CFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <h1
                  style={{
                    color: "#0F31AC",
                    fontSize: "clamp(28px,2vw,32px)",
                    fontWeight: "500",
                    marginBottom: "0",
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
        {/* superadmin-graph-container */}
        <div
          className="superadmin-graph-container flex-wrap"
          style={{
            fontFamily: "Inter",
            display: "flex",
            justifyContent: "space-between",
            width:"100%",
          }}
        >
          {/* revenue-section */}
          <div
            className="revenue-section superadmin-main-content-w"
            style={{
              backgroundColor: "#FFFFFF",
              
              maxWdth: "910px",
              maxHeight: "540px",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div className="d-flex justify-content-between">
              <h2 style={{ fontSize: "clamp(16px,2vw,20px)" }}>
                Revenue Growth
              </h2>
              <select
                className="input-outline"
                name=""
                id=""
                style={{
                  backgroundColor: "#F2F8FF",
                  border: "1px solid #EFEFEF",
                  outline: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                }}
              >
                <option value="">This Month</option>
                <option value="">Last Month</option>
                <option value="">Last Year</option>
              </select>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <h1
                style={{
                  color: "#0F31AC",
                  fontSize: "clamp(28px,2vw,32px)",
                  fontWeight: "500",
                  marginBottom: "0",
                }}
              >
                98,698
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
                +12%
              </span>
            </div>
            <svg width="100%" viewBox={`0 0 ${width} ${height}`}>
              {/* GRID LINES (ADD FIRST) */}
              {gridLines.map((y, i) => (
                <line
                  key={i}
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="#0000001A"
                  strokeWidth="1"
                />
              ))}

              {/* baseline */}
              <line
                x1={padding}
                y1={height - padding}
                x2={width - padding}
                y2={height - padding}
                stroke="#000000"
                strokeWidth="1"
              />

              {/* past line */}
              <path
                d={buildPath(0, splitIndex + 1)}
                fill="none"
                stroke="#0048FF"
                strokeWidth="2"
              />

              {/* future line */}
              <path
                d={buildPath(splitIndex, data.length)}
                fill="none"
                stroke="#00000066"
                strokeWidth="2"
              />

              {/* vertical dotted divider */}
              <line
                x1={scaleX(splitIndex)}
                y1={padding}
                x2={scaleX(splitIndex)}
                y2={height - padding}
                stroke="#00000059"
                strokeDasharray="4 6"
              />

              {/* hover zones for tooltip */}
              {data.map((value, index) => {
                const x = scaleX(index);
                const y = scaleY(value);

                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r={6}
                    fill="transparent"
                    onMouseEnter={() => setTooltip({ x, y, value })}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })}

              {/* active dot */}
              <circle
                cx={scaleX(splitIndex)}
                cy={scaleY(data[splitIndex])}
                r="6"
                fill="#0048FF"
                stroke="#FFFFFF"
                strokeWidth="3"
              />

              {/* tooltip */}
              {tooltip && (
                <g>
                  <rect
                    x={tooltip.x - 25}
                    y={tooltip.y - 35}
                    width="50"
                    height="22"
                    rx="6"
                    fill="#1e5de4"
                  />
                  <text
                    x={tooltip.x}
                    y={tooltip.y - 20}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#FFFFFF"
                  >
                    {tooltip.value}
                  </text>
                </g>
              )}

              {/* X-axis labels */}
              {xTicks.map(({ index, label }) => (
                <text
                  key={label}
                  x={scaleX(index)}
                  y={height - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#000000"
                >
                  {label}
                </text>
              ))}
            </svg>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 0fr)", gap:"10px"}}>
              {revenueGrowthCard.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    borderBottom:
                      idx === 0
                        ? "4px solid #D00003"
                        : idx === 1
                          ? "4px solid #00D045"
                          : idx === 2
                            ? "4px solid #D000BC"
                            : idx === 3
                              ? "4px solid #B1D000"
                              : "",
                    borderTop: "1px solid #EFEFEF",
                    borderLeft: "1px solid #EFEFEF",
                    borderRight: "1px solid #EFEFEF",
                    width: "200px",
                    height: "107px",
                    borderRadius: "12px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(14px,2vw,16px)",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    {item.title} <HiOutlineExclamationCircle />
                  </h3>
                  <h1
                    style={{
                      fontSize: "clamp(20px,2vw,28px)",
                      color: "#000000",
                    }}
                  >
                    {item.digit}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          {/* Subcritpion-section */}
          <div className="subscription-section d-flex flex-column justify-content-between">
            <div
              className="subscription-breakdown superadmin-main-content-w flex-wrap"
              style={{
                backgroundColor: "white",
                maxWidth: "599px",
                maxHeight: "282px",
                borderRadius: "8px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              <h2 style={{ fontSize: "clamp(16px,2vw,20px)" }}>
                Subscription Breakdown
              </h2>

              <div
                style={{ display: "flex", alignItems: "center", gap: "115px" }}
              >
                <svg width={size} height={size}>
                  {segments.map((seg, index) => {
                    const dash = (seg.value / 100) * circumference;
                    const dashArray = `${dash} ${circumference}`;
                    const dashOffset = circumference - offset;

                    offset += dash;

                    return (
                      <circle
                        key={index}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="transparent"
                        stroke={seg.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        // strokeLinecap="round"
                        transform={`rotate(-360 ${center} ${center})`}
                      />
                    );
                  })}

                  {/* Center Text */}
                  <text
                    x="50%"
                    y="48%"
                    textAnchor="middle"
                    fontSize="25"
                    fontWeight="600"
                    fill="#000"
                  >
                    2231
                  </text>
                  <text
                    x="50%"
                    y="58%"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#9CA3AF"
                  >
                    Total Companies
                  </text>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "31px",
                  }}
                >
                  <label htmlFor="" style={{ display: "flex", gap: "16px" }}>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#34C300",
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                      }}
                    ></div>{" "}
                    <span>Free - 40%</span>
                  </label>
                  <label htmlFor="" style={{ display: "flex", gap: "16px" }}>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#FF9706",
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                      }}
                    ></div>{" "}
                    <span>Standard - 40%</span>
                  </label>
                  <label htmlFor="" style={{ display: "flex", gap: "16px" }}>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#5F4DFF",
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                      }}
                    ></div>{" "}
                    <span>Pro - 20%</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Ticket-section */}
            <div
              className="ticket-section superadmin-main-content-w"
              style={{
                backgroundColor: "white",
                maxWidth: "599px",
                maxHeight: "214px",
                borderRadius: "8px",
                padding: "24px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
              }}
            >
              <h2 style={{ fontSize: "clamp(16px,2vw,20px)" }}>Open Ticket</h2>
              <div className="d-flex flex-column gap-3">
                 {openTicket.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-center"
                  
                >
                  
                     <span
                    className="d-flex align-items-center gap-1"
                    style={{ fontSize: "clamp(10px,2vw,14px)"}}
                  >
                    <span
                      style={{
                        color: "#407BFF",
                        fontSize: "clamp(10px,2vw,14px)",
                      }}
                    >
                       {item.iconOne}
                    </span>
                   {item.issueName}
                  </span>
                  

                  <span style={{fontSize: "clamp(10px,2vw,14px)"}}>{item.issueNumber} Issue</span>

                   <div>
                     <span
                    className="d-flex align-items-center"
                    style={{
                      backgroundColor: item.issueType === 'High' ? "#F7C7C9" : item.issueType === 'Medium' ? "#F7F7C7" : item.issueType === 'Low' ? "#D4F7C7" : "",
                      color: item.issueType === 'High' ? "#A80205" : item.issueType === 'Medium' ? "#7E7000" : item.issueType === 'Low' ? "#01774B" : "",
                      borderRadius: "50px",
                      padding: "4px 8px",
                      fontSize: "clamp(10px,2vw,14px)",
                    }}
                  >
                     <span>{item.issueTypeIcon}</span>
                    {item.issueType}
                  </span>
                   </div>

                </div>
              ))}
              </div>
            </div>
          </div>
         
        </div>
       
           {/* Companies List */}
            <div className="companies-list" style={{backgroundColor:"white",borderRadius:"8px", width:"100%", padding:"24px", overflow:"auto" }}>
               <h2 style={{ fontSize: "clamp(16px,2vw,20px)" }}>
                Companies List
              </h2>

                 <table style={{width:"100%",fontFamily:"Inter",}}>
                  <thead style={{backgroundColor:"#EBF8FF",color:"#727681" , }}>
                    <tr>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>Registered Date <span><LuArrowDownUp/></span></th>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>Company Name</th>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>Plan Type</th>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>No. of Employee</th>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>Status</th>
                      <th style={{ padding:"4px 16px",fontWeight:"400",fontSize:"14px",}}>Order Date</th>
                    </tr>
                  </thead>
                   <tbody style={{ color:"#0E101A"}}>
                     {companyList.map((item,idx)=>(
                    <tr key={idx}>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" }}>{item.regDate}</td>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" }}>{item.compName}</td>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" }}>{item.PlanTyp}</td>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" }}>{item.noEmp}</td>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" , display:"flex"}}> <span
                    className="d-flex align-items-center"
                    style={{
                      backgroundColor: item.status === 'Active' ? "#F7C7C9" : item.status === 'Inactive' ? "#F7F7C7" : "",
                      color: item.status === 'Active' ? "#A80205" : item.status === 'Inactive' ? "#7E7000" : "",
                      borderRadius: "50px",
                      padding: "4px 8px",
                      textAlign:"center"
                    }}
                  >
                     <span>{item.statusIcon}</span>
                     {item.status}
                   </span></td>
                      <td style={{ padding:"8px 16px",fontSize:"14px",fontWeight:"400" }}>{item.OrdDate}</td>
                    </tr>
                    ))}
                   </tbody>
                     
                 </table>
                <Pagination/>
            </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
