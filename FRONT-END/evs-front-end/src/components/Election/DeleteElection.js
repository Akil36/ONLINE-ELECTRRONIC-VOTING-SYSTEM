// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Delel.css'

function DeleteElection() {
    const [electionid,setElectionID]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
              axios.delete(`http://localhost:8081/evs/admin/deleteElection/`+electionid).then(res=>alert("Data is Deleted"))
        console.log('Election Deleted successfully...'+electionid)
    }
  return (
    <div>
       <div className='d'>
      <Header/>
        <div className='a'>
      <h1> Delete Election</h1>
      <form onSubmit={handleSubmit} >
        Enter Election ID : <input type="text" value={electionid} onChange={(e)=>{setElectionID(e.target.value)}}/><br/>
        <button>Delete Election</button>
      </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DeleteElection;