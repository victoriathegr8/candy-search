// imports the right statements
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import react, {useState} from 'react';

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
  return (
    <div className="container">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} onClick={props.setSignedIn(true)} />
    </div>
  );
}
  
// creates the larger list view/grid view buttons
export function ButtonsLarge(props){
    const[show,setShow] = useState(false);
    const close = () => setShow(false);
    return(
      <div>
        <button id="list-button" className="view" aria-label="List View" onClick={() => {props.handleClick(false)}}>
          <i className="fa fa-bars"></i>
          List
        </button>
        <button id="grid-button" className="view" aria-label="Grid View" onClick={() => {props.handleClick(true)}}>
          <i className="fa fa-th-large"></i>
          Grid
        </button>
        <button data-modal-target="#modal" id="add-button" className="view" aria-label="Add Candy" onClick={() => setShow(true)}>
          <i className="fa fa-edit"></i>
          Add Candy
        </button>
        <div class="add-modal" id="add-modal" 
        style={{
          opacity: show ? '1' : '0'
        }}>
          <div class="add-modal-header">
            <div class="title">Add Your New Candy Information Here</div>
            <button data-close-button class="close-button" onClick={close}>&times;</button>
          </div>
          <div class="add-modal-body">
            <label for="name">Name of your Candy: </label>
            <input type="text" name="name"></input> <br/>
            <label for="image">Image Url of a Picture of your Candy: </label>
            <input type="text" name="image"></input> <br/>
            <input type="checkbox" name="containsEgg"></input>
            <label for="containsEgg">Your Candy contains Egg</label> <br/>
            <input type="checkbox" name="containsMilk"></input>
            <label for="containsMilk">Your Candy contains Milk</label> <br/>
            <input type="checkbox" name="containsSoy"></input>
            <label for="containsSoy">Your Candy contains Soy</label> <br/>
            <br/>
            <button>Apply</button>
          </div>
        </div>
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
  