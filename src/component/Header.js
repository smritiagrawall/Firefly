import React from "react";
// import "./Header.css";
import Rowwrapper from "../wrappers/RowWrapper";
import logo from "../images/Logo.svg";
import fire from "../images/Firefly.png";
import { FaPlus } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import Addcontact from "../Pages/Addcontact";
import styled from "styled-components";
import { Route, useNavigate, Switch, Link, Routes } from "react-router-dom";
function Header() {
  const ScreenHeaderWrapper = styled(Rowwrapper)`
    .maindiv {
      display: flex;
      width: 390px;
      height: 5rem;
    }
    .headermain{
      display:flex;
      // border: 2px solid white; 
    }
    .addcontacts {
      align-items: right;
      //  border: 2px solid white; 
      height: 3rem;
      width: 15rem;
      // margin-left: 23rem;
      // padding-right: 6rem;
      padding-top:3rem;
      // margin-top: 1rem;
      // color:white;
      // display:inline-block;
    }
    .fireflyicon {
      // border: 2px solid white;   
      width: 32rem;
      height: 5rem;
      padding-bottom:5rem;
      display:inline;
    }
    .btn {
      height: 2.5rem;
      width: 3.5rem;
      border-radius: 0.8rem;
      cursor: pointer;
      border: none;
      margin-top: 5rem;
      margin-left:4rem;
      margin-right:3rem;
    }
    /* .icon{
            height: 2rem;
            width: 12rem;
        } */

    .image1 {
      height: 13rem;
      width: 13rem;
      // margin-left: 17rem;
      // margin-bottom:7rem;
      margin-top:0rem
    }

    .btn svg {
      height: 2.3rem;
      width: 1.3rem;
      color: black;
      // margin-top:0.7rem;
      cursor:pointer;
      // display:inline-block;
    }
    @media only screen and (max-width: 1180px) {
      .image1 {
        height: 7.5rem;
        width: 7.5rem;
        margin-left: 2rem;
        margin-top: 1.1rem;
      }
      .addcontacts {
        // border: 2px solid white; 
        height: 3rem;
        width: 15rem;
        margin-left: 0rem;
        padding-right: 60.4rem;
        // margin-top: 2rem;
      }
      .btn {
        height: 2.7rem;
        width: 2.7rem;
        margin-right: 30rem;
        margin-top: 2rem;
      }
      .addcontacts svg {
        height: 1.5rem;
        width: 1.5rem;
        color: white;
        // margin-top:0rem;
        margin-left:5rem;
        cursor:pointer;
        display:inline-block;

      }
    }
  `;
  return (
    <ScreenHeaderWrapper>
      <div className="maindiv">
        <div className="headermain">
        {/* <div className="fireflyicon"> */}
          <img className="image1" src={logo} alt="profile"></img>
        {/* </div> */}
        {/* <div className="addcontacts"> */}
        <button class="btn">
          <Link to="/addcontact">
          
            <FaPlus />
           
          </Link>
          </button>
          </div> 
        {/* </div> */}
      </div>
    </ScreenHeaderWrapper>
  );
}

export default Header;
