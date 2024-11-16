import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const ip = "192.168.236.126";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const reqSignup = (e) => {
    e.preventDefault();
    const user = {
      full_name: document.getElementById("signup-name").value,
      username: document.getElementById("signup-username").value,
      phone: document.getElementById("signup-phone").value,
      email: document.getElementById("signup-email").value,
      password: document.getElementById("signup-password").value,
    };

    fetch(`http://${ip}:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.message === "Signup successful") {
          window.location.href = "/login.html";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const reqSignIn = (e) => {
    e.preventDefault();
    const user = {
      username: document.getElementById("signin-username").value,
      password: document.getElementById("signin-password").value,
    };

    fetch(`http://${ip}:3000/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.message === "Signin successful") {
          sessionStorage.setItem(
            "username",
            document.getElementById("signin-username").value
          );
          window.location.href = "/index.html";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header_logo">
          <a href="./home.html">
            <img
              src="https://www.kaldanhotels.com/images/logo.png"
              alt="logo"
              style={{ width: "140px", height: "80px" }}
            />
          </a>
        </div>
      </header>
      <main className="main">
        <div className="form">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "signin" ? "active" : ""}`}
              onClick={() => handleTabChange("signin")}
            >
              Sign In
            </div>
            <div
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabChange("signup")}
            >
              Sign Up
            </div>
          </div>
          <div className="form-container">
            {activeTab === "signin" && (
              <form onSubmit={reqSignIn}>
                <div className="form-group">
                  <label htmlFor="signin-username">Username/Phone/Email</label>
                  <input type="text" id="signin-username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signin-password">Password</label>
                  <input type="password" id="signin-password" required />
                </div>
                <input type="submit" value="Sign In" />
              </form>
            )}
            {activeTab === "signup" && (
              <form onSubmit={reqSignup}>
                <div className="form-group">
                  <label htmlFor="signup-name">Full Name</label>
                  <input type="text" id="signup-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-phone">Phone</label>
                  <input type="tel" id="signup-phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-email">Email</label>
                  <input type="email" id="signup-email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-username">Username</label>
                  <input type="text" id="signup-username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" id="signup-password" required />
                </div>
                <input type="submit" value="Sign Up" />
              </form>
            )}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer_item">
          <a href="https://www.facebook.com/kaldansamudhra/">
            <i className="fab fa-facebook-f" style={{ color: "rgb(59, 89, 300)" }} />
          </a>
        </div>
        <div className="footer_item">
          <a href="https://www.instagram.com/kaldanhotels/?__coig_restricted=1">
            <i className="fab fa-instagram" style={{ color: "rgb(193, 53, 132)" }} />
          </a>
        </div>
        <div className="footer_item">
          <a href="https://www.bing.com/maps?q=kaldan+samudhra+palace+location&FORM=HDRSC7&cp=12.646105~80.202444&lvl=14.5">
            <img src="./img/gm.svg" alt="maps_logo" style={{ height: "42px", width: "42px" }} />
          </a>
        </div>
        <div className="footer_item">
          <a href="https://in.linkedin.com/company/kaldan-samudhra-palace">
            <i className="fab fa-linkedin" style={{ color: "rgb(29, 161, 242)" }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
