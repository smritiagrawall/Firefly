import logo from "./logo.svg";
import "./App.css";
import Homepage from "./component/Homepage";
import Addcontact from "./Pages/Addcontact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          {/* You need to have route for Homepage also  */}
          <Route path="/addcontact" element={<Addcontact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
