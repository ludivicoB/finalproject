import React from "react";
import "./Userlistprofile.css";
import "../inside/UserProfile.css"
import { useUser } from "../pages/ProviderUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Userlistprofile() {
  const { user} = useUser();
  const [defaultPass, setDefaultPass] = useState(user.password);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(user);
  // });
  

  const toggleEditPass = () => {
    if (document.getElementById("userprofile-input-password").disabled) {
      document.getElementById("userprofile-input-password").disabled = false;
    } else {
      document.getElementById("userprofile-input-password").disabled = true;
    }
  };
  const handleSavePassword = async () => {
    try {
      await axios.put(
        `http://localhost:8080/user/updateUser?userID=${user.userID}`,
        {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: document.getElementById("userprofile-input-password").value,
        }
      );
      alert("Password updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the Updated information:", error);
    }
  };
  return (
    <>
      
      <div className="center">
      <div className="overlay" id="overlay">
        <div className="userprofile-container">
          <div className="userprofile-h1-container">
          <button
            className="sirado"
            onClick={() => {
              // console.log("disaperar");
              document.getElementById("overlay").style.display = "none";
              document.body.classList.remove("overlay-active");
            }}
          >
            X
          </button>
            <h1 className="userprofile-h1">
              {user.firstname} {user.lastname}
            </h1>
          </div>
          <div className="userprofile-body">
            <div className="userprofile-bodyleft">
              <p className="userprofile-p">Account Information</p>
              <hr />
              <div className="userprofile-info">
                <p className="userprofile-p1">Username: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.username}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Firstname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.firstname}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Lastname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.lastname}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Email: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.email}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Password: </p>
                <input
                  className="userprofile-input"
                  id="userprofile-input-password"
                  type="password"
                  value={defaultPass}
                  onChange={(e) => setDefaultPass(e.target.value)}
                  disabled
                ></input>

                <img
                  className="userprofile-changebtn"
                  src="/images/passeditbtn.png"
                  alt="pharmapurse"
                  onClick={toggleEditPass}
                ></img>
              </div>

              <hr />
              <button
                className="userprofile-savebtn"
                onClick={handleSavePassword}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
