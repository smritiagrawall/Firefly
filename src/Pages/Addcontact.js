// import React from "react";
// import "./Addcontact.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ViewContact from "./ViewContact";
// import Homepage from "../component/Homepage";
// import { useNavigate } from "react-router-dom";
function Addcontact() {
  const [active, setActive] = useState(false);
  // const [activeicon,setActiveicon]=useState();
  const handleClick = () => {
    setActive(!active);
  };

  const handleClick1 = () => {
    setActive(!active);
  };
  // let navigate = useNavigate();
  const ScreenHeaderWrapper = styled(Rowwrapper)`
  .main {
    background-color: #0d0d0d;
    width: 390px;
    height: 500px;
    overflow-x: hidden;
  }
    .header h1 {
      margin-left: 0.5rem;
      margin-top: 3rem;
      color: #bdb9b9;
    }

    .header p {
      margin-left: 0.5rem;
      margin-top: 2rem;
      color: #bdb9b9;
    }

    .textbox {
      height: 2.7rem;
      border-radius: 0.5rem;
      border: none;
      width: 20rem;
      background-color: #222222;
      margin-left: 0.5rem;
      padding-left: 1rem;
      color:white;
    }

    .Colorboxesdiv {
      /* display: inline; */

      width: 20rem;
      height: 7rem;
      margin-top: 2rem;
      margin-left: 0.2rem;
      margin-right: 5rem;
      /* border: 2px solid white; */
      display: flex;
    }
    .yellowbox {
      width: 6rem;
      height: 3rem;
      margin-top: 1rem;
      margin-left: 0.5rem;
      border:none;
      // display: flex;
      padding-bottom: 3rem;
      border-radius: 1rem;
    
      // top:50%;
      background-color: #221e15;
      cursor: pointer;
    }

    .greenbox {
      width: 6rem;
      height: 3rem;
      // border: 2px solid rgb(31, 104, 45);
      margin-top: 1rem;
      margin-left: 0.5rem;
      /* display: flex; */
      padding-bottom: 3rem;
      border-radius: 1rem;
      background-color: #221e15;
      cursor: pointer;
      border:none;
    }

    .pinkbox {
      width: 6rem;
      height: 3rem;
      // border: 2px solid rgb(177, 53, 128);
      margin-top: 1rem;
      margin-left: 0.6rem;
      /* display: flex; */
      padding-bottom: 3rem;
      border-radius: 1rem;
      background-color: #221e15;
      cursor: pointer;
      border:none;
    }

    .yellowbox h3 {
      // margin-left: 0.1rem;
      color: rgb(224, 182, 30);
    }
    .greenbox h3 {
      color: rgb(31, 104, 45);
      margin-left: 0.1rem;
    }
    .pinkbox h3 {
      color: rgb(177, 53, 128);
      margin-left: 0.1rem;
    }
    .savebtn {
      height: 3rem;
      width: 18rem;
      border-radius: 0.7rem;
      margin-left: 0.5rem;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      background-color: black;
      color: aliceblue;
    }
    .savediv {
      border: 2px solid white;
      width: 18.5em;
      margin-left: 1.8rem;
      border-radius: 0.7rem;
      background-color: aliceblue;
      height: 3.7rem;
      margin-top: 1rem;
      display: flex;
    }
    .delbtn {
      margin-top: 0.25rem;
      height: 3.2rem;
      width: 3.2rem;
      margin-left: 0.3rem;
      background-color: #bdb7b7;
      border: none;
      border-radius: 1.2rem;
    }

    .savediv svg {
      height: 1.4rem;
      width: 1.4rem;
    }
    .icondiv {
      display: flex;
    }

    .icondiv svg {
      color:white;
      margin-left:2.5rem;
      height:1.5rem;
      width:1.5rem;
      margin-top:3.5rem;
    }
    .title svg {
      height: 1.4rem;
      width: 1.4rem;
      color: aliceblue;
    }
    .backbutton {
      margin-left: 26rem;
      height: 3.2rem;
      width: 3.2rem;
      margin-top: 2.8rem;
      border-radius: 1rem;
      background-color: black;
    }
    .backbutton svg {
      height: 1.4rem;
      width: 1.4rem;
      color: aliceblue;
    }
    .socialicondiv {
      width: 20rem;
      height: 4rem;
      //  border: 2px solid wheat; 
      margin-left: 0rem;
      display: flex;
    }

    .btn1 {
      width: 3rem;
      height: 3rem;
      margin-left: 0.7rem;
      background-color: #222222;
      border: none;
      border-radius: 2rem;
    }
    .btn1 svg {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
    }
 .savemaindiv{
  height:7rem;
 }
    @media only screen and (max-width: 1180px) {
      .header h1 {
        margin-left: 2rem;
        margin-top: 3rem;
        color: #bdb9b9;
        font-size: 1.7rem;
      }
      .backbutton {
        margin-left: 1.3rem;
        border: none;
      }
      .header p {
        margin-left: 3rem;
        margin-top: 2rem;
        color: #bdb9b9;
      }
      .icondiv svg {
        color:white;
        margin-left:3rem;
        height:1.5rem;
        width:1.5rem;
        margin-top:3rem;
      }
      .textbox {
        height: 2.7rem;
        border-radius: 0.5rem;
        border: none;
        width: 17rem;
        background-color: #222222;
        margin-left: 2rem;
        padding-left: 1rem;
      }

      .Colorboxesdiv {
        /* display: inline; */

        width: 25rem;
        height: 7rem;
        margin-top: 2rem;
        margin-left: 1.6rem;
        margin-right: 9rem;
        /* border: 2px solid white; */
        display: flex;
      }
      .yellowbox {
        width: 6rem;
        height: 0.3rem;
        //   border: 2px solid rgb(224, 182, 30);
        /* margin-top: 1rem; */
        margin-left: 0rem;
        /* margin-right: 7rem; */
        text-align: top;
        padding-bottom: 3rem;
        border-radius: 1rem;
        background-color: #221e15;
      }

      .greenbox {
        width: 6rem;
        height: 0.5rem;
        margin-top: 1rem;
        margin-left: 6.5rem;
        padding-bottom: 3rem;
      }

      .pinkbox {
        width: 6rem;
        height: 0.5rem;
        margin-top: 1rem;
        margin-left: 0.5rem;
        padding-bottom: 3rem;
      }
      .socialicondiv {
        // margin-right:4rem;
        width: 36rem;
        height: 4rem;
        /* border: 2px solid wheat; */
        margin-left: 0.2rem;
        display: flex;
      }
      .yellowbox h3 {
        margin-left: 0.3rem;
        color: rgb(224, 182, 30);
      }
      .greenbox h3 {
        color: rgb(31, 104, 45);
        margin-left: 0.2rem;
      }
      .pinkbox h3 {
        color: rgb(177, 53, 128);
        margin-left: 0.3rem;
      }
      .savebtn {
        height: 3rem;
        width: 8rem;
        border-radius: 0.7rem;
        margin-left: 0.5rem;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        background-color: black;
        color: aliceblue;
      }
      .savediv {
        border: 2px solid white;
        width: 12.5em;
        margin-left: 4.5rem;
        border-radius: 0.7rem;
        background-color: aliceblue;
        height: 3.7rem;
        margin-top: 1rem;
      }
    }
  `;
  return (
    //   <button onClick={() => navigate(-1)}>Back</button>
    <ScreenHeaderWrapper>
      <div className="main">
        <div className="header">
          <div className="icondiv">
            <h1>Add new Contact</h1>
            {/* <button className="backbutton"> */}
            <Link to="/">
              <FaArrowLeft />
              </Link>
            {/* </button> */}
          </div>
          <p>Name</p>
          <form>
            <input
              type="text"
              autofocus="autofocus"
              className="textbox"
            ></input>
          </form>
          <p>Wallet Address</p>
          <form>
            <input
              type="text"
              autofocus="autofocus"
              className="textbox"
            ></input>
          </form>
          <p>Social media contact (recommended)</p>
          <div className="socialicondiv">
            <button
              className="btn1"
              onClick={handleClick1}
              style={{ backgroundColor: active ? "#FAD66E" : "" }}
            >
              <FaEnvelope />
            </button>
            <button className="btn1">
              <FaDiscord />
            </button>
            <button className="btn1">
              <FaTwitter />
            </button>
            <button className="btn1">
              <FaPaperPlane />
            </button>
          </div>
          <form>
            <input
              type="text"
              autofocus="autofocus"
              placeholder="add email ID"
              className="textbox"
            ></input>
          </form>
          <p>Note(optional)</p>
          <form>
            <input
              type="text"
              autofocus="autofocus"
              placeholder="add note about the contact"
              className="textbox"
            ></input>
          </form>
        </div>

        <div className="Colorboxesdiv">
          <button
            className="yellowbox"
            onClick={handleClick}
            style={{ borderColor: active ? "yellow" : "#221e15" }}
          >
            <h3>Yellow</h3>
          </button>
          <button className="greenbox">
            <h3>Green</h3>
          </button>
          <button className="pinkbox">
            <h3>Pink</h3>
          </button>
        </div>

        <div className="savemaindiv">
          <div className="savediv">
            <button className="savebtn" autofocus="autofocus">
              Save
            </button>
            <div>
              <button className="delbtn">
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScreenHeaderWrapper>
  );
}

export default Addcontact;
