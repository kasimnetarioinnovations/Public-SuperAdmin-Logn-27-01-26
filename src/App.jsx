import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

// Public //--------------------------------------------------------------------------------------
import RegisterLoginDetailsAdmin from './Public/RegisterLoginDetailsAdmin';
import OtpVerification from './Public/OtpVerification';
import RegisterCompanyDetails from './Public/RegisterCompanyDetails';
import RegisterSelectPlan from './Public/RegisterSelectPlan';
import SuccessMessage from './Public/SuccessMessage';
import LoginAccount from './Public/LoginAccount';
import AdminDashboard from './Public/AdminDashboard';

// Super Admin //--------------------------------------------------------------------------------------
import SuperAdminLogin from './SuperAdmin/LoginSuperAdmin';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard';


function App() {


  return (
    <>
      <Routes>
        ---------// Public //----------------------------------------------------------------------
        <Route path="/" element={<LoginAccount />} />
        <Route path="/register-login-details" element={<RegisterLoginDetailsAdmin />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/register-company-details" element={<RegisterCompanyDetails />} />
        <Route path="/register-select-plan" element={<RegisterSelectPlan />} />
        <Route path="/success-message" element={<SuccessMessage />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        ---------// Super Admin //----------------------------------------------------------------------
        <Route path="/superadmin-login" element={<SuperAdminLogin />} />
        <Route path="/super-admindashboard" element={<SuperAdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
