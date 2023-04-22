import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import './Addparty.css'


function AddParty() {
    const [id,setId]=useState('')
    const [name1,setName]=useState('')
    const[leader1,setLeader]=useState('')
    const[symbol1,setSymbol]=useState('')
    const [obj,setObj]=useState({});
    const handeSubmit=(e)=>{
     e.preventDefault();
     console.log(id+""+name1+""+leader1+""+symbol1);
     setObj({partyid:id,name:name1,leader:leader1,symbol:symbol1})
    //    const ele=JSON.stringify(obj);
   //  console.log(name+' '+electionDate+' '+district+' '+constituency+' '+countingDate);
    
     axios.post('http://localhost:8080/evs/admin/addParty',obj).then(rej=>(alert("Data is added successfully")))

        }
  return (
      <div>
                <div className='g'>

        <Header/>
        <div className='container2'>
        <h1>Party Details</h1>
        <form onSubmit={handeSubmit} >
            Enter Party ID : <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/><br/>
           Enter Party Name : <input type='text' value={name1} onChange={(e)=>{setName(e.target.value)}}/><br/>
           Enter Party's Leader : <input type='text' value={leader1} onChange={(e)=>{setLeader(e.target.value)}}/><br/>
           Enter Party's Symbol : <input type='text' value={symbol1} onChange={(e)=>{setSymbol(e.target.value)}} /><br/>

          <button type='submit'>Add Party</button>
        </form>
        </div>
        </div>
        <Footer/>

      </div>
    
  )
}

export default AddParty
