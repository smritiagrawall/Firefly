import React from "react";
import "./Addcontact.css";
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";
function Addcontact() {
    // let navigate = useNavigate();
    return (
        
        //   <button onClick={() => navigate(-1)}>Back</button> 
        <div className="main">
            <div className="title">
                <div className="arrowdiv">
                <button className="back"><FaArrowLeft /></button>
            <h1>Add new Contact</h1>
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
            <button className="btn1"><FaEnvelope/></button>
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
        <div className="subdivs">
         <h3>Yellow</h3>
        </div>
        <div className="subdivvs">
        <h3>Green</h3>
</div>
<div className="subdiv2s">
<h3>Pink</h3>
</div>
    </div>

    <div>
        <div className="box">
            <button className="save">Save</button>
            <div>
           
           <button className="del"><FaRegTrashAlt /></button>
            </div> 
        </div>
    </div>
        </div>
       
    );
};

export default Addcontact;