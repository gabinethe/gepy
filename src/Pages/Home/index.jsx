import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
