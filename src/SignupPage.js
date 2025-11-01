import React from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <main className="signup-main">
      <section className="signup-section">
        <div className="signup-header">
          <FaUser className="signup-icon" />
          <h2>Sign Up</h2>
          <p>Please create your account</p>
        </div>

        <form className="signup-form">
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="First Name" required />
          </div>

          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <input type="submit" className="btn" value="SIGN UP" />

          <p className="switch-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
