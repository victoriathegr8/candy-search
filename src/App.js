import React, {useState} from 'react';
import { Route, Switch, Link} from 'react-router-dom';



// importing the right components
import {MakeCards} from './cards.js';
import {MakeIndv} from './indv.js';
import {MakeForm, MakeModal} from './formComponents.js';
import {About} from './about.js';
function App (props) {

  
  const [gridView, setGridView] = useState(false);
  let [candydata, setCandydata] = useState(props.data);

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

  return (<div>
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
                        <MakeForm/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <MakeButtonsSmall handleClick={handleClick} likeCallBack={handleLike}/>
                          <MakeModal/>
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
                        <MakeForm/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <MakeButtonsSmall handleClick={handleClick} likeCallBack={handleLike}/>
                          <MakeModal/>
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
}

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
            </ul>
            <div id="search-div" className="search" role="search">
                <input id="search-bar" type="text" placeholder="Search for your Candy..." onChange={event => {props.searchCallBack(event.target.value)}}></input>
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