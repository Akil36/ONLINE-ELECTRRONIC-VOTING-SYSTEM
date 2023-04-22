import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import './Election.css'


function AddElection() {
    const[electionID,setElectionID]=useState('');
    const [name1,setName]=useState('')
    const [electionDate1,setElectionDate]=useState('')
    const[district1,setDistrict]=useState('')
    const[constituency1,setConstituency]=useState('')
    const[countingDate1,setCountingDate]=useState('')
    const [obj,setObj]=useState({});
    const handeSubmit=(e)=>{
     e.preventDefault();
     console.log(electionID+""+name1+""+electionDate1+""+district1+""+countingDate1+""+constituency1);
     setObj({electionid:electionID,name:name1,electiondate:electionDate1,district:district1,constituency:constituency1,countingdate:countingDate1})
    //    const ele=JSON.stringify(obj);
   //  console.log(name+' '+electionDate+' '+district+' '+constituency+' '+countingDate);
    
     axios.post('http://localhost:8080/evs/admin/addElection',obj).then(rej=>(alert("Data is added successfully",rej)))

        }
  return (
      <div>
                <div className='g'>

        <Header/>
        <div className='container2'>
        <h1>Election Details</h1>
        <form onSubmit={handeSubmit} >
        Enter Election ID : <input type='text' value={electionID} onChange={(e)=>{setElectionID(e.target.value)}}/><br/>
            Enter Election Name : <input type='text' value={name1} onChange={(e)=>{setName(e.target.value)}}/><br/>
           Enter Election Date : <input type='text' value={electionDate1} onChange={(e)=>{setElectionDate(e.target.value)}}/><br/>
           Enter District : <input type='text' value={district1} onChange={(e)=>{setDistrict(e.target.value)}}/><br/>
           Enter constituency : <input type='text' value={constituency1} onChange={(e)=>{setConstituency(e.target.value)}} /><br/>
           Enter CountingDate : <input type='text' value={countingDate1} onChange={(e)=>{setCountingDate(e.target.value)}}/><br/>

          <button type='submit'>Add Election</button>
        </form>
        </div>
        </div>
        <Footer/>

      </div>
    
  )
}

export default AddElection
