// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Delparty.css'

function DeleteParty() {
    const [partyid,setPartyID]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
              axios.delete(`http://localhost:8081/evs/admin/deleteParty/`+partyid).then(res=>alert("Data is Deleted"))
        console.log('Party Deleted successfully...'+partyid)
    }
  return (
    <div>
       <div className='d'>
      <Header/>
        <div className='a'>
      <h1> Delete Party</h1>
      <form onSubmit={handleSubmit} >
        Enter Party ID : <input type="text" value={partyid} onChange={(e)=>{setPartyID(e.target.value)}}/><br/>
        <button>Delete Party</button>
      </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DeleteParty;