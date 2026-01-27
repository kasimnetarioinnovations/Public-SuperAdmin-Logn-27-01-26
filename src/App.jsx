import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import RegisterAccount from './PublicAdmin/RegisterAccount';


function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<RegisterAccount/>} />
    </Routes>
    </>
  )
}

export default App
