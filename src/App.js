import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Addcontact from './Pages/Addcontact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>

<Router>
<Homepage/>
        <Routes>

          {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} /> */}
          <Route path="/addcontact" element={<Addcontact />} />
        </Routes>
     
      </Router>
      
   </div>
  );
}

export default App;
