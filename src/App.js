import React, {useState, useEffect} from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import "./website-style.css";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// importing the right components
import {Cards} from './cards.js';
import {Indv} from './indv.js';
import {Form} from './mainFilterForm.js';
import {Modal} from './modalFilterForm.js';
import {About} from "./about.js";
import {checkCheckboxesForm, checkCheckboxesModal} from './form_modal_filters.js';


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

  let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [gridView, setGridView] = useState(false);
  const [candydata, setCandydata] = useState(props.data);
  const [checkboxes, setCheckboxes] = useState(temp);
  const [sugarMinElem, setSugarmin] = useState(null);
  const [sugarMaxElem, setSugarmax] = useState(null);

/////////////////////////////////////////////////////////////////////////////////////////////////
  let handleClick = function handleGridFlip(booleanValue) {
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
  function getCheckboxValues() {
    let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    let checkboxValues = [];
    allCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(1);
          else checkboxValues.push(0)
    });
    setCheckboxes(checkboxValues);
    return checkboxValues;
}
 
  
  // filter candies against checkboxes array
  function filterCandies(candies2) {
    // console.log(checkboxes); // this value is not being updated
    let checkboxV = getCheckboxValues();
    return (checkCheckboxesForm(checkboxV, candies2) && checkCheckboxesModal(checkboxV, candies2));
     // returns true if every element in the bool array is true and false otherwise
  }
  // filter candies against sugar percent range
  function sugarFilter(candies) {
    console.log("inside sugar filter");
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

  //combine characteristics and sugar range filters
  function makeCombinedFilter() {
    return function combinedFilter(candyObj) {
      let filtered1 = filterCandies(candyObj);
      let filtered2 = sugarFilter(candyObj);
      return filtered1 && filtered2;
    };
  }
  let candyCombinedFilter = makeCombinedFilter();
  
  // input validation for sugar range
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

  function handleSugarMin(input) {
    setSugarmin(input);
  }
  function handleSugarMax(input) {
    setSugarmax(input);
  }

  function handleModalPopup() {
    let modal = document.querySelector(".modal");
    modal.style.display="block";

    let cards = document.querySelector("#candy-div");
    cards.style.display="none";
  }

  function handleModalClose() {
    let modal = document.querySelector(".modal");
    modal.style.display="none";

    let cards = document.querySelector("#candy-div");
    cards.style.display="block";
  }


  function handleFormSubmit() {
    let copy = candydata;
    if(!validateSugar()) {
      return;
    }
    else {
        let filteredData = copy.filter(candyCombinedFilter);
        setCandydata(filteredData);
    }
  }
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

  // if (!user) {
  //   return (
  //     <div className="container">
        
  //       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  //     </div>
  //   );
  //   } else {
        return (
          <div>
            <div>
              <Header/>
            </div>
            <div>
              <NavBar searchCallBack={handleSearch}/>
            </div>
            <div className="outer-box">
              <main>
                <Switch>
                  <Route exact path="/">
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
                          <Cards currentData={candydata} gridView={gridView} likeCallBack={handleLike} currentUser={user}/>
                        </div> 
                      </section>
                    </div>
                  </Route>
                  <Route exact path="/indv/:candyname">
                    <div className="indv-container">
                      <Indv props={props}/>
                    </div>
                  </Route>
                  <Route path="/about" >
                    <About/>
                  </Route>
                  {/* <Route path="/">
                    <div className="container">
                      <section className="form-column">
                        <ButtonsLarge handleClick={handleClick} likeCallBack={handleLike}/>
                        <Form handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax}  handleSubmit={handleFormSubmit}/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <ButtonsSmall handleClick={handleClick} likeCallBack={handleLike} filterButtonCallBack={handleModalPopup}/>
                          <Modal handleSugarMin={handleSugarMin} handleSugarMax={handleSugarMax} handleSubmit={handleFormSubmit} handleClose={handleModalClose}/>
                        </div>
                        <br/><br/><br/>
                        <div id="candy-div">
                          <Cards currentData={candydata} gridView={gridView} likeCallBack={handleLike}/>
                        </div> 
                      </section>
                    </div>
                  </Route> */}
                  <Route exact path="/signin">
                    <MakeSignIn currentUser={user}/>
                  </Route>
                  <Route exact path="/fav">
                    <FavoritesPage gridView={gridView} likeCallBack={handleLike} currentUser={user}/>
                  </Route>
                </Switch>
              </main>
            </div>
            <footer>
              <Footer/>
            </footer>
          </div>);
} // VICTORIA DON'T FORGET THE EXTRA BRACKET HERE

function Header() {
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

function NavBar(props){
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

function MakeSignIn(props) {
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

function FavoritesPage(props) {
  let candiesArray;
  useEffect(() => {
    const favsRef = firebase.database().ref('favs');
    favsRef.on('value', (snapshot) => {
      const candiesObjs = snapshot.val();
      console.log(candiesObjs);
      let objectKeyArray = Object.keys(candiesObjs);
      candiesArray = objectKeyArray.map((key) => {
        let singleCandyObj = candiesObjs[key];
        singleCandyObj.key = key;
        return singleCandyObj;
      })
      console.log(candiesArray);
    })
  })
  return (
    <div className="container">
      <section className="cards-column">
        <div id="candy-div">
          <Cards currentData={candiesArray} gridView={props.gridView} likeCallBack={props.likeCallBack} currentUser={props.currentUser}/>
        </div> 
      </section>
    </div>
  )
}

function ButtonsLarge(props){
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


function ButtonsSmall(props) {

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

function Footer() {

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