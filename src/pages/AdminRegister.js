import React, { useEffect } from "react";
import "../pages/AdminRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AdminRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);

  const handleRegisterClick = async () => {
    try {
      await axios.post("http://localhost:8080/admin/insertAdmin", {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });
      console.log("Registration successful:");
      alert("Registration successful, You may now proceed to login");
      // Handle success (e.g., redirect, show a success message to the user)
      window.location.reload();
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="adminregister-h1">Register</h1>

            <div className="form">
              <input
                className="adminregister-input"
                placeholder="firstname"
                type="text"
                id="firstname"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="lastname"
                type="text"
                id="lastname"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="username"
                type="text"
                id="username"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="email"
                type="text"
                id="email"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="password"
                type="password"
                id="password"
              ></input>
            
              <br />
              <button className="adminregister-btnregister" onClick={handleRegisterClick}>Register</button>
              <hr />
              <Link to="/admin">
                <button className="adminregister-btnlogin">Login</button>
              </Link>
            </div>
          </div>
          <div className="r">
            <Link to="/">
              <button className="pharmalogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
