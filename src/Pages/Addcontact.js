// import React from "react";
// import "./Addcontact.css";
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
function Addcontact() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };

    const handleClick1 = () => {
        setActive(!active);
      };
    // let navigate = useNavigate();
    const ScreenHeaderWrapper = styled(Rowwrapper)`
    .title h1{

        margin-left: 9rem; 
            margin-top: 3rem;
            color:#bdb9b9 ;
    }
    
    .title p{
    
        margin-left: 17rem; 
            margin-top: 2rem;
            color:#bdb9b9 ;
    }
    
    .textbox{
        height: 2.7rem;
        border-radius: 0.5rem;
        border: none;
        width: 44rem;
        background-color: #222222;
        margin-left: 17rem; 
        padding-left: 1rem;
    }
    
    .colorss{
        /* display: inline; */
      
      width: 25rem;
        height: 7rem;
        margin-top: 2rem;
        margin-left: 17rem;
        margin-right: 5rem;
        /* border: 2px solid white; */
         display: flex;
     }
     .subdivs{
        width: 6rem;
        height: 3rem;
        margin-top: 1rem;
        margin-left: 2rem;
        // border:#221e15;
        // display: flex; 
       padding-bottom: 3rem;
       border-radius: 1rem;
       position: absolute;
    // top:50%;
       background-color: #221e15;
      
    
     }
    
     .subdivvs{
        width: 6rem;
        height: 3rem;
        border: 2px solid rgb(31, 104, 45);
        margin-top: 1rem;
        margin-left: 9rem;
        /* display: flex; */
       padding-bottom: 3rem;
       border-radius: 1rem;
       background-color: #221e15;
     
     }
     
     .subdiv2s{
        width: 6rem;
        height: 3rem;
        border: 2px solid rgb(177, 53, 128);
        margin-top: 1rem;
        margin-left: 1rem;
        /* display: flex; */
       padding-bottom: 3rem;
       border-radius: 1rem;
       background-color: #221e15;
     }
    
     .subdivs h3{
        
        // margin-left: 0.1rem;
        color: rgb(224, 182, 30);
       
      }
      .subdivvs h3{
        color: rgb(31, 104, 45);
        margin-left: 0.1rem;
    
        
       
      }
      .subdiv2s h3{
        color: rgb(177, 53, 128);
        margin-left: 0.1rem;
       
      }
      .save{
        height:3rem;
        width: 18rem;
        border-radius: 0.7rem;
        margin-left: 0.5rem;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        background-color: black;
        color: aliceblue;
      }
      .box{
        border: 2px solid white;
        width: 22.5em;
        margin-left: 26rem;
        border-radius: 0.7rem;
        background-color: aliceblue;
        height: 3.7rem;
        margin-top: 5rem;
        display: flex;
      }
    .del{
    margin-top: 0.25rem;
    height: 3.2rem;
    width: 3.2rem;
    margin-left: 0.3rem;
    background-color: #bdb7b7;
    border: none;
    border-radius: 1.2rem;
    }
    
    .box svg{
      height: 1.4rem;
    width: 1.4rem;
    
    }
    .arrowdiv{
      display: flex;
    }
    .title svg{
      
      height: 1.4rem;
      width: 1.4rem;
      color: aliceblue;
    }
    .back{
      margin-left: 18rem;
      height: 3.2rem;
      width: 3.2rem;
      margin-top: 2.8rem;
      border-radius: 1rem;
      background-color: black;
    }
    
    .iconsdiv{
      width: 36rem;
      height: 4rem;
      /* border: 2px solid wheat; */
      margin-left: 15rem;
      display: flex;
    }
    
    
    .btn1{
      width: 3rem;
      height: 3rem;
      margin-left: 2rem;
     background-color: #222222;
     border: none;
     border-radius: 2rem;
    
    }

    .cont{
        border:none;
      }
      .cont2{
        border: 2px solid rgb(224, 182, 30);
      }
    
      @media only screen and (max-width: 1180px) {
  

        .title h1{

            margin-left: 2rem; 
                margin-top: 3rem;
                color:#bdb9b9;
                font-size:1.7rem;
        }
       .back{
        margin-left:1.3rem;
        border:none;
       }
    .title p{
    
        margin-left: 3rem; 
            margin-top: 2rem;
            color:#bdb9b9 ;
    }
      
      .textbox{
          height: 2.7rem;
          border-radius: 0.5rem;
          border: none;
          width:17rem;
          background-color: #222222;
          margin-left: 2rem; 
          padding-left: 1rem;
      }
      
      .colorss{
          /* display: inline; */
        
        width: 25rem;
          height: 7rem;
          margin-top: 2rem;
          margin-left: 1.6rem;
          margin-right: 9rem;
          /* border: 2px solid white; */
           display: flex;
       }
       .subdivs{
        width: 6rem;
        height: 0.3rem;
      //   border: 2px solid rgb(224, 182, 30);
        /* margin-top: 1rem; */
        margin-left: 0rem;
        /* margin-right: 7rem; */
        text-align:top;
       padding-bottom: 3rem;
       border-radius: 1rem;
       background-color: #221e15;
      
       }
     

       .subdivvs{
        width: 6rem;
        height: 0.5rem;
        margin-top: 1rem;
        margin-left: 6.5rem;
        padding-bottom: 3rem;
       
       }
       
       .subdiv2s{
        width: 6rem;
        height: 0.5rem;
        margin-top: 1rem;
        margin-left: 0.5rem;
        padding-bottom: 3rem;
       }
      .iconsdiv{
        // margin-right:4rem;
        width: 36rem;
        height: 4rem;
        /* border: 2px solid wheat; */
        margin-left: 0.2rem;
        display: flex;
      }
       .subdivs h3{
          
          margin-left: 0.3rem;
          color: rgb(224, 182, 30);
         
        }
        .subdivvs h3{
          color: rgb(31, 104, 45);
          margin-left: 0.2rem;
      
          
         
        }
        .subdiv2s h3{
          color: rgb(177, 53, 128);
          margin-left: 0.3rem;
         
        }
        .save{
          height:3rem;
          width: 8rem;
          border-radius: 0.7rem;
          margin-left: 0.5rem;
          margin-top: 0.3rem;
          margin-bottom: 0.3rem;
          background-color: black;
          color: aliceblue;
        }
        .box{
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
            <div className="title">
                <div className="arrowdiv">
                <h1>Add new Contact</h1>
                <button className="back"><FaArrowLeft /></button>
           
            </div>
            <p>Name</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox"></input>
            </form>
            <p >Wallet Address</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox"></input>
            </form>
            <p>Social media contact (recommended)</p>
            <div className="iconsdiv">
            <button className="btn1" onClick={handleClick1}
        style={{ backgroundColor: active ? "#FAD66E" : "" }}><FaEnvelope/></button>
            <button className="btn1"><FaDiscord/></button>
            <button className="btn1"><FaTwitter/></button> 
            <button className="btn1"><FaPaperPlane/></button>
            </div>
            <form>
                <input type="text" autofocus="autofocus" placeholder="add email ID" className="textbox"></input>
            </form>
            <p>Note(optional)</p>
            <form>
                <input type="text" autofocus="autofocus" placeholder="add note about the contact"  className="textbox"></input>
            </form>
            </div>

            <div className="colorss">
        <button className="subdivs"  onClick={handleClick}
        style={{ borderColor: active ? "yellow" : "#221e15" }}
       >
         <h3>Yellow</h3>
        </button>
        <button className="subdivvs">
        <h3>Green</h3>
</button>
<button className="subdiv2s">
<h3>Pink</h3>
</button>
    </div>

    <div>
        <div className="box">
            <button className="save" autofocus="autofocus">Save</button>
            <div>
           
           <button className="del"><FaRegTrashAlt /></button>
            </div> 
        </div>
    </div>
        </div>
        </ScreenHeaderWrapper>
    );
};

export default Addcontact;