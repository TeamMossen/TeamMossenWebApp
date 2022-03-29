import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import User from './pages/User'
import './App.css';
import Dashboard from './pages/Dashboard';
import Boss from './pages/Boss';


function App() {
  return (
    <Router>
      {/* <NavComponent></NavComponent> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/boss" element={<Boss/>}/>
        <Route path="dashboard" element={<Dashboard/> }/>
        <Route path="/oauth-callback" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </Router>
  );
}

function Logout(){
  localStorage.removeItem("userData");
  localStorage.removeItem("token");

  return <Navigate to="/"/>
}

export default App;
