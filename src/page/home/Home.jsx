/** @format */

import React from "react";
import Features from "../../components/featured/Features";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <>
      <div> </div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
      </div>
    </>
  );
};

export default Home;
