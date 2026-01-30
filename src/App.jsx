import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import RegisterLoginDetailsAdmin from './PublicAdmin/RegisterLoginDetailsAdmin';
import OtpVerification from './PublicAdmin/OtpVerification';
import RegisterCompanyDetails from './PublicAdmin/RegisterCompanyDetails';
import RegisterSelectPlan from './PublicAdmin/RegisterSelectPlan';
import CheckEmailLinkMessage from './PublicAdmin/CheckEmailLinkMessage';
import LoginAccount from './PublicAdmin/LoginAccount';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAccount />} />
        <Route path="/register-login-details" element={<RegisterLoginDetailsAdmin />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/register-company-details" element={<RegisterCompanyDetails />} />
        <Route path="/register-select-plan" element={<RegisterSelectPlan />} />
        <Route path="/email-verify-link-sms" element={<CheckEmailLinkMessage />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/super-admindashboard" element={<SuperAdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
