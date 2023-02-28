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
      width: 80rem;
      height: 5rem;
    }
    .addcontacts {
      align-items: right;
      /* border: 2px solid white; */
      height: 3rem;
      width: 15rem;
      margin-left: 17rem;
      padding-right: 6rem;
      margin-top: 2rem;
    }
    .fireflyicon {
      /* border: 2px solid white;   */
      width: 35rem;
      height: 2rem;
    }
    .btn {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 0.8rem;
      cursor: pointer;
      border: none;
      margin-top: 3rem;
    }
    /* .icon{
            height: 2rem;
            width: 12rem;
        } */

    .image1 {
      height: 13rem;
      width: 13rem;
      margin-left: 17rem;
    }

    .addcontacts svg {
      height: 1.5rem;
      width: 1.5rem;
    }
    @media only screen and (max-width: 1180px) {
      .image1 {
        height: 7.5rem;
        width: 7.5rem;
        margin-left: 2rem;
        margin-top: 3rem;
      }
      .addcontacts {
        /* border: 2px solid white; */
        height: 3rem;
        width: 15rem;
        margin-left: 0rem;
        padding-right: 46.4rem;
        margin-top: 4rem;
      }
      .btn {
        height: 2.7rem;
        width: 2.7rem;
        margin-right: 30rem;
        margin-top: 2rem;
      }
    }
  `;
  return (
    <ScreenHeaderWrapper>
      <div className="maindiv">
        <div className="fireflyicon">
          <img className="image1" src={logo} alt="profile"></img>
        </div>
        <div className="addcontacts">
          <Link to="/addcontact">
            {/* <button class="btn"> */}
            <FaPlus />
            {/* </button> */}
          </Link>
        </div>
      </div>
    </ScreenHeaderWrapper>
  );
}

export default Header;
