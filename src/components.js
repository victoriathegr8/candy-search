// imports the right statements
import React, {useEffect} from 'react';
import {Link, NavLink, Redirect, } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// signin
const uiConfig = {
    signInOptions: [
      {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true}
    ],
    credentialHelper: 'none', 
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    }
  };


// creates the header
export function Header() {
    return (<header className="jumbotron jumbotron-fluid bg-secondary text-white">
              <div className="a">
                  <div className="header-row">
                      <div className="header-image">
                          <img className="logo" src="img/icon.png" alt="candy website logo"/>
                      </div>
                      <div className="header-text">
                          <h1>Candy Search</h1>
                          <p>Search for your new favorite candy using the candy filter!</p>
                      </div>
                  </div>
              </div>
            </header>);
  }
 

  
// creates the signin page
export function SignIn(props) {
      //if (!props.currentUser) {
      return (
        <div className="container">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
      // } else {
      //   return (
      //     <h1>You're already signed in</h1>
      //   )
      // }
  }
  

 
// creates the larger list view/grid view buttons
export function ButtonsLarge(props){
    return(
      <div>
        <button id="list-button" className="view" aria-label="List View" onClick={() => {props.handleClick(false); console.log("Make Buttons Large List");}}>
          <i className="fa fa-bars"></i>
          List
        </button>
        <button id="grid-button" className="view" aria-label="Grid View" onClick={() => {props.handleClick(true); console.log("Make Buttons Large Grid");}}>
          <i className="fa fa-th-large"></i>
          Grid
        </button>
        <br/><br/><br/>
      </div>
    );
  }
  
  
// creates the smaller list view/grid view buttons with the added "Filter" button that shows the modal
export function ButtonsSmall(props) {
  
      return(
      <div>
        <button id="list-button" aria-label="List View" onClick={() => {props.handleClick(false); console.log("Make Buttons Small List");}}>
          <i className="fa fa-bars"></i>
          List
        </button>
        <button id="grid-button" aria-label="Grid View" onClick={() => {props.handleClick(true); console.log("Make Buttons Small Grid");}}>
          <i className="fa fa-th-large"></i>
          Grid
        </button>
        <button id="smallfilterbutton" aria-label="Filter and Sort"  onClick={() => {props.filterButtonCallBack(); console.log("opening filter button");}}>
          <i className="fa fa-filter"></i>
          Filter and Sort
        </button>
      </div>
    );
  }
  

// creates the footer element
export function Footer() {
    return (
      <div className="footer">
        <p>©2021 The Whippersnappers. All rights reserved.</p>
        <p>Created by Sachi Figliolini, Victoria Nguyen, and Roshni Srikanth</p>
        <p>Images taken from&nbsp;
          <a href="https://www.candywarehouse.com/">Candy Warehouse</a>
        </p>
      </div>
    );
  }
  