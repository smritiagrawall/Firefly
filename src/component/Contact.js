import React from "react";
// import './List.css';
import frame from '../images/Frame1.png';
import Profile from "../utils/Profile";
import Rowwrapper from "../wrappers/RowWrapper";
import ColumnWrapper from "../wrappers/ColumnWrapper";
import styled from "styled-components";
import ColorProfile from "../utils/ColorProfile";
function List() {
    const ScreenHeaderWrapper = styled(ColumnWrapper)`
    .head{
        /* border: 2px solid white; */
        width: 20rem;
        margin-left: 1rem;
        color: #bdb9b9;
        }
        .names{
            width:22rem;
            height: 20rem;
            overflow-y: scroll;
            margin-left: 0.5rem;
            background-color: #222325;
            border-radius: 1rem;
        }
        .names::-webkit-scrollbar {
           width: 5px;
         }
         
        .image{
            height: 3.5rem;
            width: 3.5rem;
            margin-top: 2rem;
            margin-left: 2rem;
        }
        .subname{
            display: flex;
        }
        .sub{
            /* display: inline; */
            margin-top: 2rem;
        }
        .sub h3{
           color:#bdb9b9 ;
           margin-top: 4.2rem;
           margin-left: 2rem;
           display: inline;
        }
        
        .sub p{
            color:#bdb9b9 ;
            /* margin-top: 4.2rem; */
         margin-left: 2rem;
         font-size: 0.8rem;
         }
        
         .contact{
            width: 44rem;
            height: 20rem;
            margin-top: 2rem;
            margin-left: 0.5rem;
            /* background-color: #222325;
            border-radius: 1rem; */
         }
        
         .contactcontent{
            display: inline;
            
         }
        
         .contactcontent h2{
            display: inline;
            color:#bdb9b9 ;
         }
         .contactcontent p{
            display: inline;
            color:#bdb9b9 ;
            margin-left: 28rem;
            
         }
         .Colorboxesdiv{
            /* display: inline; */
            width: 24rem;
            height: 7rem;
            margin-top: 2rem;
            // margin-left: 3rem;
            /* border: 2px solid white; */
             display: flex;
         }
         .yellowbox{
            width: 6rem;
            height: 3rem;
            margin-top: 1rem;
            margin-left: 0.5rem;
            border:#221e15;
            // display: flex; 
           padding-bottom: 3rem;
           border-radius: 1rem;
         //   position: absolute;
        // top:50%;
           background-color: #221e15;
        
         }
         .greenbox{
            width: 6rem;
            height: 3rem;
            border:none;
            // border: 2px solid rgb(31, 104, 45);
            margin-top: 1rem;
            margin-left: 1rem;
            /* display: flex; */
           padding-bottom: 3rem;
           border-radius: 1rem;
           background-color: #221e15;
        
        }
        
        .pinkbox{
            width: 6rem;
            height: 3rem;
            // border: 2px solid rgb(177, 53, 128);
            border:none;
            margin-top: 1rem;
            margin-left: 1rem;
            /* display: flex; */
           padding-bottom: 3rem;
           border-radius: 1rem;
           background-color: #221e15;
        
        }
        
         .yellowbox h3{
           color: rgb(224, 182, 30);
        //    margin-left: 3rem;
          
         }
         .greenbox h3{
           color: rgb(31, 104, 45);
        //    margin-left: 3rem;
          
         }
         .pinkbox h3{
           color: rgb(177, 53, 128);
        //    margin-left: 3rem;
          
         }
        
         @media only screen and (max-width: 1180px) {
           .head{
              margin-left: 2rem;
              }
              .names{
                 width: 20rem;
                 height: 20rem;
                 
                 margin-left: 1.4rem;
                 background-color: #222325;
                 border-radius: 1rem;
             }   
        
             .contact{
              width: 44rem;
              height: 20rem;
              margin-top: 2rem;
              margin-left: 2rem;
              /* background-color: #222325;
              border-radius: 1rem; */
           }
           .contactcontent p{
              display: inline;
              color:#bdb9b9 ;
              margin-left: 6rem;
           }
           .Colorboxesdiv{
              /* display: inline; */
            
            width: 20rem;
              height: 7rem;
              margin-top: 2rem;
              margin-left: 0rem;
              margin-right: 6.4rem;
              /* border: 2px solid white; */
               /* display: flex; */
           }
           .yellowbox{
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
             cursor: pointer;
          
           }
        
           .greenbox{
              width: 6rem;
              height: 0.5rem;
              margin-top: 1rem;
              margin-left: 6.5rem;
              padding-bottom: 3rem;
              cursor: pointer;
           
           }
           
           .pinkbox{
              width: 6rem;
              height: 0.5rem;
              margin-top: 1rem;
              margin-left: 0.5rem;
              padding-bottom: 3rem;
              cursor: pointer;
           }
        
           .yellowbox h3{
              
              margin-left: 0rem;
             
            }
            .greenbox h3{
             
              margin-left: 0rem;
          
              
             
            }
            .pinkbox h3{
             
              margin-left: 0rem;
             
            }
         }
`;
    return(
<ScreenHeaderWrapper>
<div className="head">
    <h2>Frequent</h2>
</div>
<div className="names">

    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
   
</div>

<div className="contact">
    <div className="contactcontent">
        <h2>All Contacts</h2>
        <p>100 contacts</p>
    </div>
    {/* <div className="colors">

        <ColorProfile color={"yellow"}/>
        <ColorProfile color={"green"}/>
        <ColorProfile color={"pink"}/>
    </div> */}
    <div className="Colorboxesdiv">
        <button className="yellowbox">
         <h3>Yellow</h3>
        </button>
        <button className="greenbox">
        <h3>Green</h3>
</button>
<button className="pinkbox">
<h3>Pink</h3>
</button>
    </div>
    {/* <div className="names">

    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
    <Profile fullname={"Samwise gamgee"} />
   
</div> */}
</div>

{/* <div className="names">
   
</div> */}

</ScreenHeaderWrapper>
)};
    export default List;