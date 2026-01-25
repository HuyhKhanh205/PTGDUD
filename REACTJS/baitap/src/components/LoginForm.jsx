import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <div className="form-group">
          <input type="text" placeholder="Username" className="form-input" />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </div>

        <button type="button" className="login-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
