import React from "react";
import "./Addcontact.css";
// import { useNavigate } from "react-router-dom";
function Addcontact() {
    // let navigate = useNavigate();
    return (
        
        //   <button onClick={() => navigate(-1)}>Back</button> 
        <div className="main">
            <div className="title">
            <h1>Add new Contact</h1>
            <p>Name</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox"></input>
            </form>
            <p>Wallet Address</p>
            <form>
                <input type="text" autofocus="autofocus" className="textbox"></input>
            </form>
            <p>Social media contact (recommended)</p>
            <div>

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
            {/* <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <button> <i class="fa fa-trash-o" style="font-size:36px"></i></button>
            </div>  */}
        </div>
    </div>
        </div>
       
    );
};

export default Addcontact;