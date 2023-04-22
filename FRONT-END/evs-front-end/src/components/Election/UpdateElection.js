import React, { useState } from 'react'
import axios  from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import './updateel.css'
function UpdateElection() {
    const[electionid,setElectionID]=useState('')
    const [name,setName]=useState('')
    const [electiondate,setElectionDate]=useState('')
    const[district,setDistrict]=useState('')
    const[constituency,setConstituency]=useState('')
    const[countingdate,setCountingDate]=useState('')
    const [obj,setObj]=useState({});
    const handeSubmit=(e)=>{
     e.preventDefault();
    
     setObj({
      "constituency": constituency,
      "countingdate": countingdate,
      "district": district,
      "electiondate": electiondate,
      "electionid":electionid,
      "name": name
   })
        const ele=JSON.stringify(obj);
       console.log(ele) 
       console.log(obj) 
     //  console.log(name+' '+electionDate+' '+district+' '+constituency+' '+countingDate);
    
     axios.put('http://localhost:8081/evs/admin/updateElection',obj).then(
        (res)=>{
            console.log(res.data)
        }
     ).catch((err)=>{
        console.log(err)
     })
        }
  return (
      <div>
         <div className='x'>
            <Header/>
            <div className='y'>
        <h1>Update Election</h1>
        <form onSubmit={handeSubmit}>
        Enter Election ID : <input type='text' value={electionid} onChange={(e)=>{setElectionID(e.target.value)}}/><br/>
        Enter Election Name : <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
           Enter Election Date : <input type='text' value={electiondate} onChange={(e)=>{setElectionDate(e.target.value)}}/><br/>
           Enter District : <input type='text' value={district} onChange={(e)=>{setDistrict(e.target.value)}}/><br/>
           Enter constituency : <input type='text' value={constituency} onChange={(e)=>{setConstituency(e.target.value)}} /><br/>
           Enter CountingDate : <input type='text' value={countingdate} onChange={(e)=>{setCountingDate(e.target.value)}}/><br/>

<button>Update Election</button>
        </form>
        </div>
        </div>
        <Footer/>
</div>
     )
}

export default UpdateElection
