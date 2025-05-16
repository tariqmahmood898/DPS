import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css"; // Import your CSS file
import payImage from '../assets/images/future.png';
const LoginPage = () => {
  return (
    <div className="home-container">
      <div className="login-section">
        <img src={payImage} alt="DPS Crypto Token" className="login-image" />

        <div className="login-text">
          <h1> Welcome to the DPS Platform Secure and Fast </h1>
          <form id="contact" className="contact">


            


          





              
          






           </form>

        </div>
      </div>



      <div className="cnt-card left-card">
        <div class="row">
          <div class="box">Box 1</div>
          <div class="box">Box 2</div>
          <div class="box">Box 3</div>

</div>









      </div>


    </div>
  );
};

export default LoginPage;
