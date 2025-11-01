import React from "react";
import "./Login.css";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="login-main">
      <section className="login-section">
        <div className="login-header">
          <FaUserCircle className="login-icon" />
          <h2>User Login</h2>
        </div>

        <form className="login-form">
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email ID" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <input type="submit" className="btn" value="LOGIN" />

          <p className="switch-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
