import logo from "./logo.svg";
import "./App.css";
import Homepage from "./component/Homepage";
import Addcontact from "./Pages/Addcontact";
import ViewContact from "./Pages/ViewContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          {/* You need to have route for Homepage also  */}
          <Route path="/addcontact" element={<Addcontact />} />
          <Route path="/ViewContact" element={<ViewContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
