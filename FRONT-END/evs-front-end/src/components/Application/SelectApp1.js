import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import "./SelAp.css";

function SelectApp1() {
  const [data, setData] = useState(null);
  const [userid, setUserid] = useState("");

  const handleUseridChange = (event) => {
    setUserid(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .get(`http://localhost:8080/evs/admin/selectApplication/${userid}`)
      .then((res) => {
        if (res.data) {
          setData([res.data]);
          alert("Application submitted successfully");
        } else {
          console.error("No application data received:", res.data);
          alert("Failed to fetch application data. Please try again later.");
        }
      })
      .catch(() =>
        alert("Failed to generate Voter ID. Please try again later.")
      );
  };

  return (
    <div>
      <div className="container3">
        <Header/>
        <div className="container4">
            <div className="tab">
          <label htmlFor="userid">Enter your user ID:</label>
          <input
            type="text"
            id="userid"
            value={userid}
            onChange={handleUseridChange}
          />
          <button onClick={handleSubmit}>Submit</button>
          </div>
          <table border="4" style={{marginLeft:'400px'}}>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Passed Status</th>
                <th>Approved Status</th>
                <th>Constituency</th>
                <th>Voter ID</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.passedstatus}</td>
                    <td>{item.approvedstatus}</td>
                    <td>{item.constituency}</td>
                    <td>{item.voterId}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SelectApp1;
