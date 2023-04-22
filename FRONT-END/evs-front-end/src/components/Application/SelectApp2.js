import React, { useState, useEffect } from "react";
import axios from "axios";
import './SelAp.css'
import Header from "../Header";
import Footer from "../Footer";

function SelectApp2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/evs/admin/selectApplication")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const filteredData = data.filter((item) => item.approvedstatus === 0);

  console.log(filteredData);

  return (
    <div>
      <div className="container3">
        <Header/>
        <div className="container4">

          <table border="4" style={{marginLeft:'500px',marginTop:'100px'}}>
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
              {filteredData.map((item) => (
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

export default SelectApp2;
