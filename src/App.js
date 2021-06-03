import React, {useState, useEffect} from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import "./website-style.css";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// importing the right components
import {MakeCards} from './cards.js';
import {MakeIndv} from './indv.js';
import {MakeForm} from './mainFilterForm.js';
import {MakeModal} from './modalFilterForm.js';
import {About} from "./about.js";

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

function App (props) {

  
  const [gridView, setGridView] = useState(false);
  const [candydata, setCandydata] = useState(props.data);
  
  const [sugarMinElem, setSugarmin] = useState(null);
  const [sugarMaxElem, setSugarmax] = useState(null);

/////////////////////////////////////////////////////////////////////////////////////////////////
  let handleClick = function handleGridFlip(booleanValue) {
    console.log("calling handleClick, setting gridView to ", booleanValue);
    setGridView(booleanValue);
  }
  
  function handleLike(name) {
    let copy = candydata.map(x => x);
    copy.forEach(function(obj) {
      if (obj.competitorname === name) {
        obj.liked = true;
      }
    })
    setCandydata(copy);
  }

  function handleSearch(inputStr) {
      if(inputStr === undefined) {
        inputStr = "";
      }
      console.log("inside handleSearch");
      let candyArray = candydata.filter(function(candyObj) {
      let candyObjStr =  (candyObj.competitorname.toLowerCase());
      let stateSearchStr = (inputStr.toLowerCase());
      // if the candy name string contains the search term
      if (candyObjStr.indexOf(stateSearchStr) !== -1) {
          console.log("found match");
          // return that object to the candy array
          return candyObj;
      }
      });
      setCandydata(candyArray);  
  }

  //get checkboxes as array
 const [checkboxes, setCheckboxes] = useState([]);
 function getCheckboxValues() {
      let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
      let checkboxValues = [];
      allCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) checkboxValues.push(1);
            else checkboxValues.push(0)
      });
      console.log("checkboxValues 1", checkboxValues);
      setCheckboxes(checkboxValues);
      console.log(checkboxes);
      return checkboxValues;
  }
  
  // filter candies against checkboxes array
  function filterCandies(candies2) {
    console.log("checkboxes", checkboxes);
    let bools = [];
    console.log("Filtering Candy: ", candies2);
    console.log("Checkboxes[0]", checkboxes[0]);
    if (checkboxes[0] === 1) {
        if (candies2.chocolate === checkboxes[0]) {
          console.log('pushing true');
          bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxes[1] === 1) {
        if (candies2.caramel === checkboxes[1]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[2] === 1) {
        if (candies2.peanutyalmondy === checkboxes[2]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[3] === 1) {
        if (candies2.nougat === checkboxes[3]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[4] === 1) {
        if (candies2.crispedricewafer === checkboxes[4]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[5] === 1) {
        if (candies2.pluribus === checkboxes[5]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[6] === 1) {
        if (candies2.hasegg !== checkboxes[6]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[7] === 1) {
        if (candies2.hasmilk !== checkboxes[7]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[8] === 1) {
        if (candies2.hassoy !== checkboxes[8]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[9] === 1) {
        if( candies2.fruity === checkboxes[9]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[10] === 1) {
        if (candies2.hard === checkboxes[10]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    if (checkboxes[11] === 1) {
        if (candies2.bar === checkboxes[11]) {
          bools.push(true);
          console.log('pushing true');
        }
        else {bools.push(false);}
    }
    console.log("bools" , bools);
    let checker = (arr) => {arr.every(Boolean)};
    return checker(bools);
  }
  // filter candies against sugar percent range
  function sugarFilter(candies) {
    if (sugarMinElem > 0 && sugarMaxElem> 0) return (candies.sugarpercent) * 100 > sugarMinElem && (candies.sugarpercent) * 100 < sugarMaxElem;
    else if (sugarMinElem > 0) return (candies.sugarpercent) * 100 > sugarMinElem;
    else if (sugarMaxElem > 0) return (candies.sugarpercent) * 100 < sugarMaxElem;
    else return true;
  }

  //combine characteristics and sugar range filters
  function makeCombinedFilter(func1, func2) {
    return function combinedFilter(filters) {
      let filtered1 = func1(filters);
      console.log("Filtered1", filtered1);

      let filtered2 = func2(filters);
      console.log("Filtered2", filtered1);

      return filtered1 && filtered2;
    };
  }
  let candyCombinedFilter = makeCombinedFilter(filterCandies, sugarFilter);
  
  // input validation for sugar range
  function validateSugar() {
    if (sugarMinElem < 0 || sugarMaxElem < 0 || sugarMinElem > 100 || sugarMaxElem > 100 ) {
        setSugarmax("Number must be between 0 and 100.");
        setSugarmin("Number must be between 0 and 100.");
        console.log("TEST FAILED");
        return false;
    } 
    else {
        console.log("passed ValidateSugar");
        return true;
    }
  }

  function handleSugarMin(input) {
    setSugarmin(input);
  }
  function handleSugarMax(input) {
    setSugarmax(input);
  }
  function handleFormSubmit() {
    console.log("Inside handleFormSubmit");
    // should have validateSugar, currentData
    if(!validateSugar()) {
      return;
    }
    else {
        let copy = candydata;
        console.log("data", copy);
        getCheckboxValues();
        let filteredData = copy.filter(candyCombinedFilter);
        console.log("filtered data" , filteredData);
        setCandydata(filteredData);
    }
  }
// Roshni to be moving a bunch of functions between the //s
//////////////////////////////////////////////////////////////////////////////////////////////////

  const [user, setUser] = useState(undefined);
  console.log(user);
  let content = null;

  //auth state event listener
  useEffect( () => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        setUser(null)
      }
        
    })
  });

  // const handleSignOut = () => {
  //   //setErrorMessage(null);
  //   firebase.auth().signOut();
  // }

  if (!user) {
    return (
      <div className="container">
        
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
    } else {
        return (
          <div>
            <div>
              <MakeHeader/>
            </div>
            <div>
              <MakeNavBar searchCallBack={handleSearch}/>
            </div>
            <div className="outer-box">
              <main>
                <Switch>
                  <Route exact path="/">
                    <div className="container">
                      <section className="form-column">
                        <MakeButtonsLarge handleClick={handleClick} likeCallBack={handleLike}/>
                        <MakeForm handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax} handleSubmit={handleFormSubmit} currentData={candydata}/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <MakeButtonsSmall handleClick={handleClick} likeCallBack={handleLike}/>
                          <MakeModal  handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax}  handleSubmit={handleFormSubmit} currentData={candydata}/>
                        </div>
                        <br/><br/><br/>
                        <div id="candy-div">
                          <MakeCards currentData={candydata} gridView={gridView} likeCallBack={handleLike}/>
                        </div> 
                      </section>
                    </div>
                  </Route>
                  <Route exact path="/indv/:candyname">
                    <div className="indv-container">
                      <MakeIndv props={props}/>
                    </div>
                  </Route>
                  <Route path="/about" >
                    <About/>
                  </Route>
                  <Route path="/">
                    <div className="container">
                      <section className="form-column">
                        <MakeButtonsLarge handleClick={handleClick} likeCallBack={handleLike}/>
                        <MakeForm handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax}  handleSubmit={handleFormSubmit} currentData={candydata}/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <MakeButtonsSmall handleClick={handleClick} likeCallBack={handleLike}/>
                          <MakeModal handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax} handleSubmit={handleFormSubmit} currentData={candydata}/>
                        </div>
                        <br/><br/><br/>
                        <div id="candy-div">
                          <MakeCards currentData={candydata} gridView={gridView} likeCallBack={handleLike}/>
                        </div> 
                      </section>
                    </div>
                  </Route>
                </Switch>
              </main>
            </div>
            <footer>
              <MakeFooter/>
            </footer>
          </div>);
}}

function MakeHeader() {
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

function MakeNavBar(props){
  const handleSignOut = () => {
    firebase.auth().signOut();
  }
  return (<nav>
            <ul>
                <li>
                    <Link to="/"><img src="img/icon.png" alt="candy website logo"/></Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/fav">Favorites</Link>
                </li>
                <li>
                  
                </li>
            </ul>
            <div id="search-div" className="search" role="search">
                <input id="search-bar" type="text" placeholder="Search for your Candy..." onChange={event => {props.searchCallBack(event.target.value)}}></input>
                <button className="navLink" type="button" onClick={handleSignOut}>Log Out</button>
            </div>
            
        </nav>);
}
function MakeButtonsLarge(props){
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


function MakeButtonsSmall(props) {
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
      <button id="smallfilterbutton" aria-label="Filter and Sort">
        <i className="fa fa-filter"></i>
        Filter and Sort
      </button>
    </div>
  );
}

function MakeFooter() {

  return (
    <div className="footer">
      <p>©2021 The WhipperSnappers. All rights reserved.</p>
      <p>Created by Sachi Figliolini, Victoria Nguyen, and Roshni Srikanth</p>
      <p>Images taken from
        <a href="https://www.candywarehouse.com/">Candy Warehouse</a>
      </p>
    </div>
  );
}






export default App;