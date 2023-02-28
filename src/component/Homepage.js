import React from "react";
// import "./Home.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import List from "./Contact";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addcontact from "../Pages/AddContact";
import ViewCotact from "../Pages/ViewContact";
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
function Homepage() {
  const ScreenHeaderWrapper = styled(Rowwrapper)`
     
  .main{
    background-color: #0d0d0d;
    width: 100%;
    height: 100%; 
    overflow-x: hidden;
}


`;
return(
  <ScreenHeaderWrapper>
    <div className="main">
        <Router>
        <Header/>
        <SearchBar/>
        <List/>
        <Routes>
        <Route path="/Addcontact" element={<Addcontact />}/>
        <Route path="/Viewcontact" element={<ViewCotact />}/>
      </Routes>
      </Router>
        
         <Addcontact/>
         <ViewCotact/> 
    </div>
    </ScreenHeaderWrapper>
    );
}

export default Homepage;
