import React, {useState} from 'react';
import { Route, Switch, Link} from 'react-router-dom';



// importing the right components
import {MakeCardGridView, MakeCardListView} from './cards.js';
import {MakeIndv} from './indv.js';
import {MakeForm, MakeModal} from './formComponents.js';

function App (props) {
  const [gridView, setGridView] = useState(false);
  let handleClick = function handleGridFlip(booleanValue) {
    setGridView(booleanValue);
    console.log("Set gridView to: ", gridView);
  }
  console.log(props);
  let [candydata, setCandydata] = useState(props.data);
  function handleLike(name) {
    let copy = candydata.map(x => x);
    copy.forEach(function(obj) {
      if (obj.competitorname === name) {
        obj.liked = true;
      }
    })
    setCandydata(copy);
  }
  return (<div>
            <div>
              <MakeHeader/>
            </div>
            <div>
              <MakeNavBar/>
            </div>
            <div className="outer-box">
              <main>
                <Switch>
                  <Route exact path="/">
                    <div className="container">
                      <section className="form-column">
                        <MakeButtonsLarge handleClick={handleClick}/>
                        <MakeForm/>
                      </section>
                      <section className="cards-column">
                        <div className="small-view">
                          <MakeButtonsSmall/>
                          <MakeModal/>
                        </div>
                        <br/><br/><br/>
                        <div id="candy-div">
                          <MakeCards currentData={props.data} gridView={gridView}/>
                        </div> 
                      </section>
                    </div>
                  </Route>
                  <Route exact path="/indv/:candyname">
                    <div className="indv-container">
                      <MakeIndv props={props}/>
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
                        <img className="logo" src="../public/img/icon.png" alt="candy website logo"/>
                    </div>
                    <div className="header-text">
                        <h1>Candy Search</h1>
                        <p>Search for your new favorite candy using the candy filter!</p>
                    </div>
                </div>
            </div>
          </header>);
}

function MakeNavBar(){
  return (<nav>
            <ul>
                <li>
                    <Link to="/"><img src="../public/img/icon.png" alt="candy website logo"/></Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div id="search-div" className="search" role="search">
                <input id="search-bar" type="text" placeholder="Search for your Candy..."></input>
            </div>
        </nav>);
}
function MakeButtonsLarge(props){
  return(
    <div>
      <button id="list-button" className="view" aria-label="List View" onClick={props.handleClick(false)}>
        <i className="fa fa-bars"></i>
        List
      </button>
      <button id="grid-button" className="view" aria-label="Grid View" onClick={props.handleClick(true)}>
        <i className="fa fa-th-large"></i>
        Grid
      </button>
      <br/><br/><br/>
    </div>
  );
}


function MakeButtonsSmall() {
  return(
    <div>
      <button id="list-button" aria-label="List View" onclick="renderCardListView()">
        <i className="fa fa-bars"></i>
        List
      </button>
      <button id="grid-button" aria-label="Grid View" onclick="renderCardGridView()">
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

function MakeCards(props) {
  // the props for this should be the state values, specifically the card object array, and the gridView
  if(props.gridView) {
    return props.currentData.map((currentCard) => {
      console.log(currentCard);
      return(
      <div className="cardpoolGrid">
        <MakeCardGridView card={currentCard} likeCallback={props.likeCallback}/>
      </div>);
    });
  }
  else {
    return props.currentData.map((currentCard) => {
      return(
        <div className="cardpoolList">
          <MakeCardListView card={currentCard} likeCallback={props.likeCallback}/>
        </div>);
    });
  }
}




export default App;