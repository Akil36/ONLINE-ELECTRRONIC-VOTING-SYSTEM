import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Home.css'
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
function Home() {
  const[userID,setUserID]=useState('');
  const[password,setPassword]=useState('');
  const[role,setRole]=useState('Admin');
  let cb={};
  const[error,setError]=useState("");
// const [data,setData]=useState(false);
const nav=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    cb={'userID':userID,'password':password}
    console.log(JSON.stringify(cb));
          
     axios.get(`http://localhost:8080/evs/admin/authenticateUser/`+userID+'/'+password).then(
      (res)=>{
        console.log(JSON.stringify(res.data))
       
    
    if (res.data == true)
    {
      if (role === "Admin") {
        if (userID === "AD-001" && password === "AD-001") {
          alert(" Welcome Admin-You can Create new elections");
          nav("/admin/addelection");
        } else if (userID === "AD-002" && password === "AD-002") {
          alert(" Welcome Admin - View the Upcoming Election List");
          nav("/admin/selectelection1");
        } else if (userID === "AD-003" && password === "AD-003") {
          alert(" Welcome Admin - View the Election Lists");
          nav("/admin/selectelection");
        } else if (userID === "AD-004" && password === "AD-004") {
          alert(" Welcome Admin - Add party to the election");
          nav("/admin/addparty");
        } else if (userID === "AD-005" && password === "AD-005") {
          alert(" Welcome Admin - Party Lists");
          nav("/admin/selectparty");
        } 
        else if (userID === "AD-007" && password === "AD-007") {
          alert("Welcome Admin - view candidate by election");
          nav("/admin/candidatebyelection");
        } else if (userID === "AD-008" && password === "AD-008") {
          alert(" Welcome Admin");
          nav("/admin/selectApplication2");
        } else if (userID === "AD-009" && password === "AD-009") {
          alert(" Welcome Admin - view candidate by parties");
          nav("/admin/candidatebyparty");
        } else {
          setError("Invalid credentials");
        }
      } else if (role === "EO") {
        if (userID === "EO-001" && password === "EO-001") {
          alert(" Welcome officer - here you expected application llists");
          nav("/admin/selectapplication");
        } else if (userID === "EO-002" && password === "EO-002") {
          alert(" Welcome Officer - new work??");
          nav("/EO/voterid");
        } else {
          setError("Invalid credentials");
        }
      } else if (role === "Voter") {
        if (userID === "US-001" && password === "US-001") {
          alert("Welcome Voter - Have a great experience ");
          nav("/register");
        } else if (userID === "US-002" && password === "US-002") {
          alert(" Welcome Voter - apply your rights");
          nav("/admin/addApplication");
        } else if (userID === "US-003" && password === "US-003") {
          alert(" Welcome Voter - view the application");
          nav("/admin/selectapplication1");
        } else if (userID === "US-004" && password === "US-004") {
          alert("Welcome Voter - Choose your own  Choice");
          nav("/admin/selectelection1");
        }  else if (userID === "US-005" && password === "US-005") {
          alert(" Welcome Voter - ");
          nav("/admin/candidatebyelection");
        } else {
          setError("Invalid credentials");
        }
      } else {
        setError("Invalid credentials");
      }
    }
  }).catch((err)=>{
    console.error(err);
    setError("Authentication Failed");
  });
};

// if (redirect) {
//   return <Redirect to={redirect} />;
// }

  return (
    <div>
      <Header/>
      <div className='cont'>
      <div className='image-container'>
        <img src="https://img.jagranjosh.com/imported/images/E/GK/indian%20elections.jpg" alt='Image' className='image' />
      </div>
    <div className='con'>
        <h1>User Login</h1>
        <form  className='form-cont' onSubmit={handleSubmit}>
        Select Your Role  :{" "}  <select className='select-option' value={role} onChange={(e) => { setRole(e.target.value) }}>
          <option value='Admin'>Admin</option>
          <option value='EO'>EO</option>
          <option value='Voter'>Voter</option>
        </select><br/><br/>
          Enter UserID :{" "} <input type='text' value={userID} onChange={(e)=>{setUserID(e.target.value)}}/><br/>
          Enter Password :{" "} <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button className='bt1'>Login</button><br/>
        
  <Link to='/register'><button className='bt2'>Register</button></Link>
  </form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
