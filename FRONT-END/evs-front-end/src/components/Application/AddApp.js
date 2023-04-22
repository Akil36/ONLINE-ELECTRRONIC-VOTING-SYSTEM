import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import './AddApp.css'
function AddApp() {
  const [userId, setUserId] = useState("");
  const [constituency, setConstituency] = useState("");
  const [voterId, setVoterId] = useState("");
  const [userCredentialsUserId, setUserCredentialsUserId] = useState("");
  const [userCredentialsPassword, setUserCredentialsPassword] = useState("");
  const [userCredentialsType, setUserCredentialsType] = useState("");
  const [userCredentialsLoginStatus, setUserCredentialsLoginStatus] =
    useState("");

  useEffect(() => {
    if (userId) {
      fetchUserCredentials(userId);
    }
  }, [userId]);

  const fetchUserCredentials = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/evs/userCredentials/${userId}`
      );
      const data = response.data;
      setUserCredentialsUserId(data.userId);
      setUserCredentialsPassword(data.password);
      setUserCredentialsPassword(data.userType);
      setUserCredentialsPassword(data.loginStatus);
    } catch (error) {
      console.error("Error fetching user credentials:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      userId: userId,
      constituency: constituency,
      passedstatus: 0,
      approvedstatus: 0,
      voterId: voterId,
      userCredentials: {
        userId: userCredentialsUserId,
        password: userCredentialsPassword,
        userType: userCredentialsType,
        loginStatus: userCredentialsLoginStatus,
      },
    };

    axios
      .post("http://localhost:8080/evs/admin/addApplication", newObj)
      .then(() => alert("Application submitted successfully"));
  };

  return (
    <div className="container1">
      <Header/>
    <div className="container2">
      <h1>Application Details</h1>
      <form onSubmit={handleSubmit}>
        User Id:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        Constituency:
        <input
          type="text"
          value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
        />
        <br />
        <button type="submit">Add Application</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default AddApp;