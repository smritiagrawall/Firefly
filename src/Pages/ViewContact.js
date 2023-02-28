import React from "react";
// import "./ViewContact.css";
import { FaArrowLeft } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";
function ViewContact(){
    const ScreenHeaderWrapper = styled(Rowwrapper)`

    .main{
        height:80rem;;
    }
    .profilebox{
        width: 6rem;
        height: 6rem;
        background-color: #222222;
        margin-left: 35.5rem;
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
            margin-left: 33rem;
        }
        
        .main p{
            color: aliceblue;
            margin-left: 18rem;
        }
        
        .textbox1{
            height: 2.7rem;
            border-radius: 0.5rem;
            border: none;
            width: 44rem;
            background-color: #222222;
            margin-left: 17rem; 
            padding-left: 1rem;
        }
        .textbox2{
            height: 2.7rem;
            border-radius: 0.5rem;
            border: none;
            width: 39rem;
            background-color: #222222;
            margin-left: 17rem; 
            padding-left: 1rem;
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
            margin-left: 18rem;
            height: 3.2rem;
            width: 3.2rem;
            margin-top: 2.8rem;
            border-radius: 1rem;
            background-color: black;
          }
          .editbtn{
            margin-left: 38rem;
            height: 3.2rem;
            width: 3.2rem;
            margin-top: 2.8rem;
            border-radius: 1rem;
            background-color: black;
          }
          .backbtn svg{
            height: 1.4rem;
            width: 1.4rem;
            color: aliceblue;
          }
          .editbtn svg{
            height: 1.4rem;
            width: 1.4rem;
            color: aliceblue;
          }
        
          .socialicon button{
            margin-top: 0.7rem;
            height: 1.3rem;
            width: 1.7rem;
            margin-left: 0.4rem;
          }

          .savediv{
            border: 2px solid white;
            width: 22.5em;
            margin-left: 26rem;
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
        @media only screen and (max-width: 1180px) {
            .uppericon{
                display:flex;


            }
            .uppericon .backbtn{
             margin-left:2.6rem;
            }
            .editbtn{
                margin-left:11rem;
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
                    height: 2.7rem;
                    width: 2.7rem;
                    margin-left: 2rem; 
                    border-radius: 2rem;
                    background-color: #222222;
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
        <div className="uppericon">
        <button className="backbtn"><FaArrowLeft /></button>
        <button className="editbtn"><FaPen /></button>
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
           
            <div className="savediv">
            <button className="savebtn">Copy wallet address</button>
           
        
         <div>
           <button className="delbtn"> <FaShareAlt /></button>
            </div> 
            </div>
    </div>
</ScreenHeaderWrapper>
);
}

export default ViewContact;