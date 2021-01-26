import React, { useState, useEffect } from "react";
import "./home.styles.scss";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div className="flexContainer">
      <div className="posts">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post">
          <a href="/join">
            <img className="logo" src={logo} alt="close icon" />
          </a>
        </div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
