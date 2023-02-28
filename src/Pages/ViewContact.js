import React from "react";
// import "./ViewContact.css";
import { FaArrowLeft } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import List from "../component/Contact";
function ViewContact(){
    const ScreenHeaderWrapper = styled(Rowwrapper)`

    .main {
        background-color: #0d0d0d;
        width: 390px;
        height: 500px;
        overflow-x: hidden;
      }
    .profilebox{
        width: 6rem;
        height: 6rem;
        background-color: #222222;
        margin-left: 8.5rem;
        margin-top: 5rem;
        border-radius: 0.6rem;
        }
        .profilecolor{
            width: 2.5rem;
            height: 0.5rem;
            background-color: rgb(239, 185, 50);
            margin-left: 1.8rem;
            border-radius: 0.4rem;
        margin-top: 4rem;
        }
        
        .main h2{
            color: aliceblue;
            margin-left: 5.5rem;
        }
        
        .main p{
            color: aliceblue;
            margin-left: 1.4rem;
        }
        
        .textbox1{
            height: 2.7rem;
            border-radius: 0.5rem;
            border: none;
            width: 19rem;
            background-color: #222222;
            margin-left: 1.5rem; 
            padding-left: 1rem;
            color:white;
        }
        .textbox2{
            height: 2.7rem;
            border-radius: 0.5rem;
            border: none;
            width: 19rem;
            background-color: #222222;
            margin-left: 1.5rem; 
            padding-left: 1rem;
            color:white;
        }
        
        .socialicon{
            height: 2.7rem;
            width: 2.7rem;
            margin-left: 2rem; 
            border-radius: 2rem;
            background-color: #222222;
        }
        .socialdiv{
            display: flex;
        }
        .backbtn{
            margin-left: 1rem;
            height: 3.2rem;
            width: 3.2rem;
            margin-top: 2.8rem;
            border-radius: 1rem;
            background-color: black;
          }
          .editbtn{
            margin-left: 14rem;
            height: 3.2rem;
            width: 3.2rem;
            margin-top: 0rem;
            border-radius: 1rem;
            background-color: black;
          }
          .backbtn svg{
            height: 1.4rem;
            width: 1.4rem;
            color: white;
            // margin-left: 1rem;
          }
          .editbtn svg{
            height: 1.4rem;
            width: 1.4rem;
            color: aliceblue;
            // margin-left: 12rem;
          }
        
          .socialicon button{
            margin-top: 0.7rem;
            height: 1.3rem;
            width: 1.7rem;
            margin-left: 0.4rem;
          }

          .savediv{
            border: 2px solid white;
            width: 17.5em;
            margin-left: 2rem;
            border-radius: 0.7rem;
            background-color: aliceblue;
            height: 3.7rem;
            margin-top: 4rem;
            display: flex;
          }
          .savediv svg{
            height: 1.4rem;
          width: 1.4rem;
          
          }
          .savebtn{
            height:3rem;
            width: 18rem;
            border-radius: 0.7rem;
            margin-left: 0.5rem;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
            background-color: black;
            color: aliceblue;
          }
          .savemaindiv{
            height:7rem;
          }
          .delbtn{
            margin-top: 0.25rem;
            height: 3.2rem;
            width: 3.2rem;
            margin-left: 0.3rem;
            background-color: #bdb7b7;
            border: none;
            border-radius: 1.2rem;
            }
            .uppericon svg{
                height:1.5rem;
                width:1.5rem;
                color:white;
                // margin-left:15rem;
            }

        @media only screen and (max-width: 1180px) {
            .uppericon{
                display:flex;
                // margin-left:0rem;
                // margin-right:2rem;
                border:2px solid white;
            padding-right:1rem;
            width:35rem;
        //    align:left;

            }
            .uppericon svg{
                width:1.5rem;
                height:2.5rem;
                // margin-left:8rem;


            }
            .arrowleft{
                border:2px solid white;
                margin-right:0rem;
                width:10rem;
                // margin-left:3rem;
                padding-right:3rem;
                display:flex;
            }
            .edit{
                border:2px solid white;
                display:flex;
                padding-left:0rem;
                width:16rem;
                padding-right:4rem;

            }
            .uppericon .backbtn{
             margin-left:2.6rem;
            }
            .editbtn{
                margin-left:10rem;
            }
            .profilebox{
                width: 6rem;
                height: 6rem;
                background-color: #222222;
                margin-left: 8rem;
                margin-top: 5rem;
                border-radius: 0.6rem;
                }

              
                .profilecolor{
                    width: 2.5rem;
                    height: 0.5rem;
                    background-color: rgb(239, 185, 50);
                    margin-left: 1.8rem;
                    border-radius: 0.4rem;
                margin-top: 4rem;
                }
                
                .main h2{
                    color: aliceblue;
                    margin-left: 5rem;
                }
                
                .main p{
                    color: aliceblue;
                    margin-left: 2.5rem;
                }
                
                .textbox1{
                    height: 2.7rem;
                    border-radius: 0.5rem;
                    border: none;
                    width: 17.5rem;
                    background-color: #222222;
                    margin-left: 2rem; 
                    padding-left: 1rem;
                }
                .textbox2{
                    height: 2.7rem;
                    border-radius: 0.5rem;
                    border: none;
                    width: 13rem;
                    background-color: #222222;
                    margin-left: 2rem; 
                    padding-left: 1rem;
                }
                
                .socialicon{
                    height: 2.9rem;
                    width: 2.9rem;
                    margin-left: 1rem; 
                    border-radius: 2rem;
                    background-color: #222222;
                }
                .socialicon button{
                    border:none;
                    background-color:#222222;
                    // margin-right:0.5rem;
                }
                .socialicon svg{
                    color:white;
                    height:1.5rem;
                    width:1.5rem;
                    margin-right:0.3rem
                }
                .socialdiv{
                    display: flex;
                }
                .savediv{
                    border: 2px solid white;
                    width: 16.5em;
                    margin-left: 3rem;
                    border-radius: 0.7rem;
                    background-color: aliceblue;
                    height: 3.7rem;
                    margin-top: 4rem;
                    display: flex;
                  }
                  .savediv svg{
                    height: 1.4rem;
                  width: 1.4rem;
                  
                  }
                  .savebtn{
                    height:3rem;
                    width: 18rem;
                    border-radius: 0.7rem;
                    margin-left: 0.5rem;
                    margin-top: 0.3rem;
                    margin-bottom: 0.3rem;
                    background-color: black;
                    color: aliceblue;
                  }
                  .delbtn{
                    margin-top: 0.25rem;
                    height: 3.2rem;
                    width: 3.2rem;
                    margin-left: 0.3rem;
                    background-color: #bdb7b7;
                    border: none;
                    border-radius: 1.2rem;
                    }
        }
`;
    return(
<ScreenHeaderWrapper>
    <div className="main">
        <div className="uppericon" >
        <button className="backbtn">
        <Link to="/"> <FaArrowLeft /></Link>
       
        </button> 
        <button className="editbtn"> 
        <Link to="/addcontact"> <FaPen /></Link>      
        
              </button>
      
        </div>
        <div className="profilebox">
<div className="profilecolor">

</div>
        </div>
        <h2>Samwise Gamgee</h2>
        <p>Wallet Address</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox1"  placeholder="100000000x..6AB"></input>
            </form>

            <p>Note(optional)</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox1"  placeholder="Add note about contact"></input>
            </form>

            <p>Social media</p>
            <div className="socialdiv">
            <form>
                <input type="text" autofocus="autofocus" className="textbox2" placeholder="Username"></input>
            </form>
            <div className="socialicon">
            <button > < FaDiscord/></button>
            </div>
            </div>
           <div className="savemaindiv">
            <div className="savediv">
            <button className="savebtn">Copy wallet address</button>
           
        
         <div>
           <button className="delbtn"> <FaShareAlt /></button>
            </div> 
            </div>
            </div>
    </div>
</ScreenHeaderWrapper>
);
}

export default ViewContact;