import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './Selel.css'
function SelectElection() {
    const [data, setData] = useState([]);

    axios.get('http://localhost:8080/evs/admin/selectElection').then(res=>{
        setData(res.data)
        
    })

    console.log(data)
        
    return (
      <div>
        <div className='c'>
          <Header/>
          <div className='s'>
      <table border="4">
        <thead>
          <tr>
            <th>ElectionID</th>
            <th>Name</th>
            <th>ElectionDate</th>
            <th>District</th>
            <th>Constituency</th>
            <th>CountingDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.electionid}>
                <td>{item.electionid}</td>
              <td>{item.name}</td>
              <td>{item.electiondate}</td>
              <td>{item.district}</td>
              <td>{item.constituency}</td>
              <td>{item.countingdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <Footer/>

      </div>
)}


export default SelectElection
