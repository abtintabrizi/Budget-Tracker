import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "components/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRequestUrl = "http://localhost:3001/api/get/users";
    Axios.get(getRequestUrl).then((response) => {
      setUserList(response.data);
    });
  }, []);

  const submitLogin = () => {
    let users = userList.filter((user) => {
      return user.name === username && user.password === password;
    });

    if (users.length === 1) {
      navigate("/budgets");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={submitLogin} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
