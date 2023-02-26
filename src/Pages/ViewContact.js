import React from "react";
import "./ViewContact.css";
import { FaArrowLeft } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
function ViewContact(){
    return(
<div>
    <div className="main">
        <div>
        <button className="back"><FaArrowLeft /></button>
        <button className="back1"><FaPen /></button>
        </div>
        <div className="imagebox">
<div className="yellow">

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
           
            <div className="box">
            <button className="save">Copy wallet address</button>
           
        
         <div>
           <button className="del"> <FaShareAlt /></button>
            </div> 
            </div>
    </div>
</div>
);
}

export default ViewContact;