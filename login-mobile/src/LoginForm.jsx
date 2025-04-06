import React, { useState } from "react";
import "./LoginForm.css";
import Icon from "./assets/Icon.svg";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe ? "Sí" : "No");


    setUsername("");
    setPassword("");
    setRememberMe(false);
  };

  return (
    <div className="login-container">
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-right"></div>

      <div className="login-box">
        <div className="user-icon">
          <img src={Icon} alt="user icon" />
        </div>

        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember-container">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Sign in
        </button>

        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default LoginForm;


