import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import AddElection from './components/Election/AddElection';
import SelectElection from './components/Election/SelectElection.js';
import UpdateElection from './components/Election/UpdateElection';
import AddParty from './components/Party/AddParty';
import SelectParty from './components/Party/SelectParty';
import About from './components/About';
import Contact from './components/Contact';
import AddCan from './components/Candidate/AddCan';
import AddProfile from './components/AddProfile';
import AddApp from './components/Application/AddApp';
import SelectApp from './components/Application/SelectApp';
import SelectApp1 from './components/Application/SelectApp1';
import Voterid from './components/EO/Voterid';
import SelectElection1 from './components/Election/SelectElection1';
import SelectApp2 from './components/Application/SelectApp2';
import SelectCanParty from './components/Candidate/SelectCanParty';
import SelectCanElection from './components/Candidate/SelectCanElection';


function App() {
  return (
    <div>

      
            <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/admin/addelection' element={<AddElection/>}/>
      <Route path='/admin/selectelection1' element={<SelectElection1/>}></Route>
      <Route path='/admin/selectelection' element={<SelectElection/>}></Route>
      <Route path='/admin/addparty' element={<AddParty/>}></Route>
      <Route path='/admin/selectparty' element={<SelectParty/>}></Route>
      <Route path='/admin/addCandidate' element={<AddCan/>}></Route>
      <Route path='/voter/addProfile' element={<AddProfile/>}></Route>
      <Route path='/admin/addApplication' element={<AddApp/>}></Route>
      <Route path='/admin/selectApplication' element={<SelectApp/>}></Route>
      <Route path='/admin/selectApplication1' element={<SelectApp1/>}></Route>
      <Route path='/EO/voterid' element={<Voterid/>}></Route>
      <Route path='/admin/selectApplication2' element={<SelectApp2/>}></Route>
      <Route path='/admin/addCandidate' element={<AddCan/>}></Route>
      <Route path='/admin/candidatebyparty' element={<SelectCanParty/>}></Route>
      <Route path='/admin/candidatebyelection' element={<SelectCanElection/>}></Route>

      </Routes>

      
    </div>
  );
}

export default App;
