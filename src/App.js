
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Auth from './components/auth.js';
import Admin from './components/admin.js';
import Student from "./components/student.js";
import Supervisor from "./components/supervisor.js";
import Panel_member from "./components/panel_member.js";
import Home from "./components/home.js";
import Home2 from "./components/Admin/home.js";


function App() {

  
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/auth" element={<Auth/>}/>
        <Route exact path="/admin/*" element={<Admin/>}/>
        
          
         <Route exact path="/Student/*" element={<Student/>}/>
        <Route exact path="/Supervisor/*" element={<Supervisor/>}/>
        <Route exact path="/Panel/*" element={<Panel_member/>}/>

      </Routes>
      </BrowserRouter>

      </>
  );
}

export default App;
