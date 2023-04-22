import React, { useEffect , useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import './Profile.css'
function AddProfile() {
    const[userId,setUserId]=useState('')
    const[firstname,setFirstame]=useState('')
    const[lastname,setLastName]=useState('')
    const[dateofbirth,setDateofbirth]=useState('')
    const[gender,setGender]=useState('')
    const[street,setStreet]=useState('')
    const[location,setLocation]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[pincode,setPincode]=useState('')
    const[mobileno,setMobileno]=useState('')
    const[emailId,setEmailId]=useState('')
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

    const [obj,setObj]=useState({});
    const handeSubmit = (e) => {
        e.preventDefault();
        
        setObj({userId:userId,firstName:firstname,lastName:lastname,
            dateOfBirth:dateofbirth,
            gender:gender,street:street,location:location,
            city:city,state:state,pincode:pincode,mobileNo:mobileno,
            emailId:emailId,
            userCredentials: {
                userId: userCredentialsUserId,
                password: userCredentialsPassword,
                userType: userCredentialsType,
                loginStatus: userCredentialsLoginStatus,
              },})
        console.log(obj)
        axios.post('http://localhost:8080/evs/voter/addProfile', obj)
          .then(response => {
            alert("Data is added successfully");
          })
          .catch(error => {
            console.error(error);
          });
      }
      
  return (
      <div>
                <div className='profile1'>

        <Header/>
        <div className='profile2'>
        <h1>Voter Registration</h1>
        <form onSubmit={handeSubmit} >
           Enter User ID : <input type='text' value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
           Enter  First Name : <input type='text' value={firstname} onChange={(e)=>{setFirstame(e.target.value)}}/>
           Enter Last Name : <input type='text' value={lastname} onChange={(e)=>{setLastName(e.target.value)}}/>
           Enter Date Of Birth: <input type='text' value={dateofbirth} onChange={(e)=>{setDateofbirth(e.target.value)}}/>
           Enter Gender: <input type='text' value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
           Enter Street: <input type='text' value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
           Enter Location: <input type='text' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
           Enter City: <input type='text' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
           Enter State: <input type='text' value={state} onChange={(e)=>{setState(e.target.value)}}/>
           Enter Pincode: <input type='text' value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
           Enter Mobile No: <input type='text' value={mobileno} onChange={(e)=>{setMobileno(e.target.value)}}/>
           Enter Email: <input type='email' value={emailId} onChange={(e)=>{setEmailId(e.target.value)}}/>

          <button type='submit'>Register</button>
        </form>
        </div>
        </div>



        <Footer/>

      </div>
    
  )
}

export default AddProfile
