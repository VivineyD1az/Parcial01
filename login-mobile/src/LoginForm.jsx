import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-right"></div>

      <div className="login-box">
        <div className="user-icon"></div>

        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />

        <div className="remember-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button className="login-button">Sign in</button>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </div>
  );
}

export default LoginForm;
