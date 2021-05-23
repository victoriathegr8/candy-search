import React, {useState} from 'react';

function App (props) {
  const [gridView, setGridView] = useState(false);
  console.log(props.data)
  return (<div>
            <div>
              <MakeHeader/>
            </div>
            <div>
              <MakeNavBar/>
            </div>
            <div className="outer-box">
              <main>
                <div className="container">
                  <section className="form-column">
                    <MakeButtonsLarge/>
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
                <div className="indv-container">
                  <MakeIndv props={props}/>
                </div>
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
                    <a href="index.html"><img src="../public/img/icon.png" alt="candy website logo"/></a>
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
            <div id="search-div" className="search" role="search">
                <input id="search-bar" type="text" placeholder="Search for your Candy..."></input>
            </div>
        </nav>);
}
function MakeButtonsLarge(){
  return(
    <div>
      <button id="list-button" className="view" aria-label="List View">
        <i className="fa fa-bars"></i>
        List
      </button>
      <button id="grid-button" className="view" aria-label="Grid View">
        <i className="fa fa-th-large"></i>
        Grid
      </button>
      <br/><br/><br/>
    </div>
  );
}

function MakeForm () {
  // this is where to input the form code
  // this should render the form page - not sure if you actually update the state here
  return null;
}

function MakeModal () {
  // this is where to input the modal code
  // this should render the modal page - not sure if you actually update the state here
  return null;
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
  console.log("MakeCards: " + props.currentData);
  if(props.gridView) {
    return props.currentData.map((currentCard) => {
      return(
      <div className="cardpoolGrid">
        <MakeCardGridView card={currentCard}/>
      </div>);
    });
  }
  else {
    return props.currentData.map((currentCard) => {
      return(
        <div className="cardpoolList">
          <MakeCardListView card={currentCard}/>
        </div>);
    });
  }
}
function MakeCardListView(props) {
  // the props for this should be the list of current candies to show 
  // this is where the cards code goes
  console.log("MakeCardListView: " + props);
  return(
    <div key={props.competitorname} className="card">
      <img className="card-img-top" src={props.imglink} alt={props.competitorname}/>
      <div className="card-body">
          <p className="card-title h5">{props.competitorname}</p>
          <a className="btn btn-primary" href="www.google.com">More Info:</a>
      </div>
    </div>
  );
}
function MakeCardGridView(props) {
  // the props for this should be the list of current candies to show
  // this is where the cards code goes
  console.log("MakeCardGridView: " +props.name);
  return(
    <div  key={props.competitorname} className="card">
      <img className="card-img-top" src={props.imglink} alt={props.competitorname}/>
      <div className="card-body">
          <p className="card-title h5">{props.competitorname}</p>
          <a className="btn btn-primary" href="www.google.com">More Info:</a>
      </div>
    </div>
  );
}

function MakeIndv(props) {
  // the props for this should be the individual candy object
  return null;

}
export default App;