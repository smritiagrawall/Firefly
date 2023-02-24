import React from "react";
import "./Home.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import List from "./List";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addcontact from "../Pages/Addcontact";
function Homepage() {
return(
    <div className="page">
        <Header/>
        {/* <Router>
      
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Addcontact" element={<Addcontact />}/>
      
      </Routes>
      </Router> */}
        <SearchBar/>
        <List/>
        <Addcontact/>
    </div>
    );
}

export default Homepage;
