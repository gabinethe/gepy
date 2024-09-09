import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import MainForm from "../../Components/Card";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <MainForm />
      </div>
      <Footer />
    </div>
  );
}
