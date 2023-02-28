
import React, { useState } from 'react'

import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";

const SearchBar =()=>{
      const ScreenHeaderWrapper = styled(Rowwrapper)`
      form.example input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: none;
        float: left;
        width: 20rem;
        background: #222222;
        margin-left: 0.5rem;
        margin-top: 5rem;
        height: 2.11rem;
        color:white;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-radius:1rem;
      }
      
      /* Style the submit button */
      form.example button {
        float: left;
        width: 4rem;
        height:3.38rem;
        padding: 10px;
        background: #222222;
        color: white;
        font-size: 27px;
        border: none;
        border-left: none; /* Prevent double borders */
        cursor: pointer;
        margin-top: 5rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      /* Clear floats */
      form.example::after {
        content: "";
        clear: both;
        display: table;
      }
    
      @media only screen and (max-width: 1180px) {
        form.example input[type=text] {
        width: 15rem;
        margin-left: 1.3rem;
           
          }
      
      }
`;

     return(
      <ScreenHeaderWrapper>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <form class="example" action="action_page.php">
        <input type="text" placeholder="Search name,wallet address.." name="search" />
        <i class="fa fa-search"></i>
      </form></ScreenHeaderWrapper>
     );
 


};

export default SearchBar;