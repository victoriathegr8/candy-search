// importing the right libraries and css styling
import React, {useState, useEffect} from 'react';
import { Route, Switch, Link, Redirect, useHistory} from 'react-router-dom';
import "./website-style.css";
import firebase from 'firebase';


// importing the right components
import {Cards} from './cards.js';
import {Indv} from './indv.js';
import {Form} from './mainFilterForm.js';
import {Modal} from './modalFilterForm.js';
import {About} from "./about.js";
import {checkCheckboxesForm, checkCheckboxesModal} from './form_modal_filters.js';
import {Header, SignIn, ButtonsLarge, ButtonsSmall, Footer} from './components.js';
import {NavBar} from './navbar.js';
import {FavoritesPage} from './favorites.js';
import {PromptModal} from "./signInPromptModal";






// renders the actual page for the app
function App (props) {

  // state variables 
  let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [gridView, setGridView] = useState(false);
  const [candydata, setCandydata] = useState(props.data);
  const [checkboxes, setCheckboxes] = useState(temp);
  const [sugarMinElem, setSugarmin] = useState(null);
  const [sugarMaxElem, setSugarmax] = useState(null);
  const [user, setUser] = useState(undefined);
  const [signedIn, setSignedIn] = useState(false);
  const [redirect, setRedirect] = useState("/");
  const [favoriteCandies, setFavoriteCandies] = useState(temp);
  const [favCandyNums, setFavCandyNums] = useState([]);

  

  // event handlers

  // handleClick should be called when the grid view or list view buttons are clicked
  let handleClick = function(booleanValue) {
    setGridView(booleanValue);
  }
  
  // handles the like function when the heart is clicked
  function handleLike(name) {
    let copy = candydata.map(x => x);
    copy.forEach(function(obj) {
      if (obj.competitorname === name) {
        obj.liked = true;
      }
    })
    setCandydata(copy);
  }

  // filters the existing data by the search term
  function handleSearch(inputStr) {
      if(inputStr === undefined) {
        inputStr = "";
      }
      let candyArray = candydata.filter(function(candyObj) {
      let candyObjStr =  (candyObj.competitorname.toLowerCase());
      let stateSearchStr = (inputStr.toLowerCase());
      // if the candy name string contains the search term
      if (candyObjStr.indexOf(stateSearchStr) !== -1) {
          
          // return that object to the candy array
          return candyObj;
      }
      });
      // resets the candyData array and renders
      setCandydata(candyArray);  
  }

  //get checkboxes as array; helper method for handleFormSubmit()
  function getCheckboxValues() {
    // get all checkboxes
    let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    let checkboxValues = [];
    allCheckboxes.forEach((checkbox) => {
          // add 1 if the checkbox is clicked, add 0 if not
          if (checkbox.checked) checkboxValues.push(1);
          else checkboxValues.push(0)
    });
    setCheckboxes(checkboxValues); // this is not actually updating the checkboxes value
    return checkboxValues; // returning the value is a temp fix for the stateHook problem
}
 
  
  // filter candies against checkboxes array; helper method for handleFormSubmit()
  function filterCandies(candies2) {
    console.log(checkboxes); // this value is not being updated
    let checkboxV = getCheckboxValues();
    return (checkCheckboxesForm(checkboxV, candies2) && checkCheckboxesModal(checkboxV, candies2));
     // returns true if every element in the bool array is true and false otherwise
  }

  // filter candies against sugar percent range; helper method for handleFormSubmit()
  function sugarFilter(candies) {
    if (sugarMinElem > 0 && sugarMaxElem> 0) {
      return (candies.sugarpercent) * 100 > sugarMinElem && (candies.sugarpercent) * 100 < sugarMaxElem;
    }
    else if (sugarMinElem > 0) {
      return (candies.sugarpercent) * 100 > sugarMinElem;
    }
    else if (sugarMaxElem > 0) {
      return (candies.sugarpercent) * 100 < sugarMaxElem;
    }
    else {
      return true;
    }
  }

  //combine characteristics and sugar range filters; helper method for handleFormSubmit()
  function makeCombinedFilter() {
    return function combinedFilter(candyObj) {
      let filtered1 = filterCandies(candyObj); // returns true if the candy object passes the first filter
      let filtered2 = sugarFilter(candyObj); // returns true if the candy object passes the sugar filter
      return filtered1 && filtered2; // the candy object must pass both the filters to be displayed
    };
  }
  let candyCombinedFilter = makeCombinedFilter();
  
  // input validation for sugar range; shows an error message on the bottom of the screen in red
  function validateSugar() {
    if (sugarMinElem < 0 || sugarMaxElem < 0 || sugarMinElem > 100 || sugarMaxElem > 100 ) {
      document.querySelector(".error-message").style.display="block";
      return false;
    } 
    else {
      document.querySelector(".error-message").style.display="none";
      return true;
    }
  }

  // sets stateHook values
  function handleSugarMin(input) {
    setSugarmin(input);
  }
  function handleSugarMax(input) {
    setSugarmax(input);
  }

  // displays the modal element when the modal button is clicked
  function handleModalPopup() {
    let modal = document.querySelector(".modal");
    modal.style.display="block";

    let cards = document.querySelector("#candy-div");
    cards.style.display="none";
  }

  // makes the modal element dissappear when closed
  function handleModalClose() {
    let modal = document.querySelector(".modal");
    modal.style.display="none";

    let cards = document.querySelector("#candy-div");
    cards.style.display="block";
  }

  // updates the candy data to match the checkboxes on either the form or the modal 
  function handleFormSubmit() {
    let copy = props.data;
    if(!validateSugar()) {
      return;
    }
    else {
        let filteredData = copy.filter(candyCombinedFilter);
        setCandydata(filteredData);
    }
  }

  // function for making sign in/out more user friendly
  function handleSignIn() {
    setSignedIn(true);
    return <Redirect push to="/signin"/>;

  }

  function handleLogOut() {
    setSignedIn(false);
    firebase.auth().signOut();
    window.location.reload();
    return <Redirect push to="/"/>;
  }

  //auth state event listener
  useEffect( () => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        setRedirect("/");
      } else {
        setUser(null)
      }
        
    })
  });
 
  // actually returning and rendering the page
        return (
          <div>
            <div>
              <Header/>
            </div>
            <div>
              <NavBar searchCallBack={handleSearch} signedIn={signedIn} handleLogOut={handleLogOut} handleSignIn={handleSignIn}/>
            </div>
            <div className="outer-box">
              <main>
                <Switch>
                  <Route path="/indv/:candyname">
                    <div className="indv-container">
                      <Indv data={props.data}/>
                    </div>
                  </Route>
                  <Route path="/about" >
                    <About/>
                  </Route>
                  <Route exact path="/signin">
                    <SignIn/>
                  </Route>
                  <Route exact path="/fav">
                    <FavoritesPage currentUser={user} setCandydata={setFavoriteCandies} data={props.data} setFavCandyNums={setFavCandyNums}/>
                    {!user ? <Redirect to="/signin"/> : <Cards currentData={favoriteCandies} gridView={gridView} signedIn={signedIn} currentUser={user} favCandyNums={favCandyNums}/>}
                  </Route>
                  <Route path="/">
                    <div className="container">
                      <section className="form-column">
                        <ButtonsLarge handleClick={handleClick} likeCallBack={handleLike}/>
                        <Form handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax} handleSubmit={handleFormSubmit}/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <ButtonsSmall handleClick={handleClick} likeCallBack={handleLike} filterButtonCallBack={handleModalPopup}/>
                          <Modal  handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax}  handleSubmit={handleFormSubmit} handleClose={handleModalClose}/>
                        </div>
                        <br/><br/><br/>
                        <div id="candy-div">
                          <PromptModal/>
                          <FavoritesPage currentUser={user} setCandydata={setFavoriteCandies} data={props.data} setFavCandyNums={setFavCandyNums}/>
                          <Cards currentData={candydata} gridView={gridView} likeCallBack={handleLike} signedIn={signedIn} currentUser={user} favCandyNums={favCandyNums}/>
                        </div> 
                      </section>
                    </div>
                  </Route>
                </Switch>
              </main>
            </div>
            <footer>
              <Footer/>
            </footer>
          </div>);
}







export default App;