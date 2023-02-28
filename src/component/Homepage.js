import React from "react";
// import "./Home.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import List from "./Contact";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addcontact from "../Pages/Addcontact";
import ViewCotact from "../Pages/ViewContact";
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
function Homepage() {
  const ScreenHeaderWrapper = styled(Rowwrapper)`
    .main {
      background-color: #0d0d0d;
      width: 390px;
      height: 500px;
      overflow-x: hidden;
    }
  `;
  return (
    <ScreenHeaderWrapper>
      <div className="main">
        <Header />
        <SearchBar />
        <List />
        <Routes>
          <Route path="/Addcontact" element={<Addcontact />} />
          <Route path="/Viewcontact" element={<ViewCotact />} />
        </Routes>

        {/* <Addcontact /> */}
        {/* <ViewCotact /> */}
      </div>
    </ScreenHeaderWrapper>
  );
}

export default Homepage;
