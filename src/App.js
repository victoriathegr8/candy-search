import React, {useState} from 'react';
import { Route, Switch, Link, Redirect, NavLink, useParams} from 'react-router-dom';
import CANDY_DATA from './data/candy-data.json'; 

function App (props) {
  const [gridView, setGridView] = useState(false);
  let handleClick = function handleGridFlip(booleanValue) {
    setGridView(booleanValue);
    console.log("Set gridView to: ", gridView);
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
                  <Route path="/indv">
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


function MakeForm () {
  // this is where to input the form code
  // this should render the form page - not sure if you actually update the state here
  return (<form>
    <h2>Filter</h2>
    <nobr className="filtertype">Contains:</nobr><br />
    <input type="checkbox" id="contains1" name="contains1" defaultValue="Chocolate" />
    <label htmlFor="contains1">
      Chocolate</label><br />
    <input type="checkbox" id="contains2" name="contains2" defaultValue="Caramel" />
    <label htmlFor="contains2">
      Caramel</label><br />
    <input type="checkbox" id="contains3" name="contains3" defaultValue="PeanutAlmondy" />
    <label htmlFor="contains3">
      Peanuts/Peanut Butter/Almonds</label><br />
    <input type="checkbox" id="contains4" name="contains4" defaultValue="Nougat" />
    <label htmlFor="contains4">
      Nougat</label><br />
    <input type="checkbox" id="contains5" name="contains5" defaultValue="CrispedRiceWafer" />
    <label htmlFor="contains5">
      Crisped Rice/Wafers/Cookie</label><br />
    <input type="checkbox" id="contains6" name="contains6" defaultValue="Pluribus" />
    <label htmlFor="contains6">
      Multiple Candies in Bag/Box</label><br />
    <input type="checkbox" id="contains7" name="contains7" defaultValue="Egg" />
    <label htmlFor="contains7">
      No Egg</label><br />
    <input type="checkbox" id="contains8" name="contains8" defaultValue="Milk" />
    <label htmlFor="contains8">
      No Milk</label><br />
    <input type="checkbox" id="contains9" name="contains9" defaultValue="Soy" />
    <label htmlFor="contains9">
      No Soy</label><br /><br />
    <nobr className="filtertype">Other Attributes:</nobr><br />
    <input type="checkbox" id="other1" name="other1" defaultValue="Fruity" />
    <label htmlFor="other1">
      Fruit-Flavored</label><br />
    <input type="checkbox" id="other2" name="other2" defaultValue="Hard" />
    <label htmlFor="other2">
      Hard Candy</label><br />
    <input type="checkbox" id="other3" name="other3" defaultValue="Bar" />
    <label htmlFor="other3">
      Candy Bar</label><br /><br />
    <nobr className="filtertype">Sugar Percentile:</nobr><br />
    <nobr>Min         Max</nobr><br />
    <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" name="sugarmin" min={0} max={100} />
    <nobr>% to
    </nobr>
    <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" name="sugarmax" min={0} max={100} /><nobr>
      %</nobr><br />
    <p id="sugarFeedback" className="invalid-feedback" /><br />
    <label className="filtertype" htmlFor="sort">Sort By:</label><br />
    <select name="sort" id="sort">
      <option value="alphabet">Name A to Z</option>
      <option value="sugarasc">Sugar Percentile Low to High</option>
      <option value="sugardes">Sugar Percentile High to Low</option>
    </select>
    <br /><br />
    <button id="applybutton" type="button">Apply</button>
    <input type="reset" defaultValue="Reset" />
  </form>);
}

function MakeModal () {
  // this is where to input the modal code
  // this should render the modal page - not sure if you actually update the state here
  return (<div className="small-view">
  {/* The Modal */}
  <div id="filtermodal" className="modal">
    {/* Modal content */}
    <div className="modal-content">
      <span className="close">×</span>
      <form>
        <h2>Filter</h2>
        <span className="filtertype">Contains:</span><br />
        <input type="checkbox" id="contains1" name="contains1" defaultValue="Chocolate" />
        <label htmlFor="contains1">
          Chocolate</label><br />
        <input type="checkbox" id="contains2" name="contains2" defaultValue="Caramel" />
        <label htmlFor="contains2">
          Caramel</label><br />
        <input type="checkbox" id="contains3" name="contains3" defaultValue="PeanutAlmondy" />
        <label htmlFor="contains3">
          Peanuts/Peanut Butter/Almonds</label><br />
        <input type="checkbox" id="contains4" name="contains4" defaultValue="Nougat" />
        <label htmlFor="contains4">
          Nougat</label><br />
        <input type="checkbox" id="contains5" name="contains5" defaultValue="CrispedRiceWafer" />
        <label htmlFor="contains5">
          Crisped Rice/Wafers/Cookie</label><br />
        <input type="checkbox" id="contains6" name="contains6" defaultValue="Pluribus" />
        <label htmlFor="contains6">
          Multiple Candies in Bag/Box</label><br />
        <input type="checkbox" id="contains7" name="contains7" defaultValue="Egg" />
        <label htmlFor="contains7">
          No Egg</label><br />
        <input type="checkbox" id="contains8" name="contains8" defaultValue="Milk" />
        <label htmlFor="contains8">
          No Milk</label><br />
        <input type="checkbox" id="contains9" name="contains9" defaultValue="Soy" />
        <label htmlFor="contains9">
          No Soy</label><br /><br />
        <nobr className="filtertype">Other Attributes:</nobr><br />
        <input type="checkbox" id="other1" name="other1" defaultValue="Fruity" />
        <label htmlFor="other1">
          Fruit-Flavored</label><br />
        <input type="checkbox" id="other2" name="other2" defaultValue="Hard" />
        <label htmlFor="other2">
          Hard Candy</label><br />
        <input type="checkbox" id="other3" name="other3" defaultValue="Bar" />
        <label htmlFor="other3">
          Candy Bar</label><br /><br />
        <nobr className="filtertype">Sugar Percentile:</nobr><br />
        <nobr>Min             Max</nobr><br />
        <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" name="sugarmin" min={0} max={100} />
        <nobr>% to
        </nobr>
        <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" name="sugarmax" min={0} max={100} /><nobr>
          %</nobr><br />
        <p id="sugarFeedback" className="invalid-feedback" /><br />
        <label className="filtertype" htmlFor="sort">Sort By:</label><br />
        <select name="sort" id="sort">
          <option value="alphabet">Name A to Z</option>
          <option value="sugarasc">Sugar Percentile Low to High</option>
          <option value="sugardes">Sugar Percentile High to Low</option>
        </select>
        <br /><br />
        <button id="applybutton" type="button">Apply</button>
        <input type="reset" defaultValue="Reset" />
      </form>
    </div>
  </div>
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
  
  return(
    <div key={props.card.competitorname} className="card">
      <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
      <div className="card-body">
          <p className="card-title h5">{props.card.competitorname}</p>
          <p className="card-title h5">{"Has Egg: " + convertToWords(props.card.hasegg)}</p>
          <p className="card-title h5">{"Has Milk: " + convertToWords(props.card.hasmilk)}</p>
          <p className="card-title h5">{"Has Soy: " + convertToWords(props.card.hassoy)}</p>
          <Link to="/indv" className="btn btn-primary">More Info:</Link>
      </div>
    </div>
  );
}
function MakeCardGridView(props) {
  // the props for this should be the list of current candies to show
  // this is where the cards code goes
  
  return(
    <div  key={props.card.competitorname} className="card">
      <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
      <div className="card-body">
          <p className="card-title h5">{props.card.competitorname}</p>
          <Link to="/indv" className="btn btn-primary">More Info:</Link>
      </div>
    </div>
  );
}

function MakeIndv(props) {
  // the props for this should be the individual candy object
  let urlParams = useParams();
  let candyName = urlParams.candyName; 
  let candy =  CANDY_DATA.find(CANDY_DATA, {competitorname: candyName}); 
  if(!candy) return <h2>Candy not specified</h2> 
  console.log(candy);

  return (<div key={candy.competitorname}>
    <div className="card">
      <div className="card-title">
        About:
      </div>
      <div className="card-img-top">
        <img src={candy.imglink} alt={candy.name} />
      </div>
      <div className="card-body candy-detail">
        <p>Has Chocolate: <span className="data-ans">{convertToWords(candy.chocolate)}</span></p>
        <p>Is Fruity: <span className="data-ans">{convertToWords(candy.fruit)}</span></p>
        <p>Has Caramel: <span className="data-ans">{convertToWords(candy.caramel)}</span></p>
        <p>Has Peanut, Almond, or Peanut Butter: <span className="data-ans">{convertToWords(candy.peanutyalmondy)}</span></p>
        <p>Has Nougat: <span className="data-ans">{convertToWords(candy.nougat)}</span></p>
        <p>Has Crispy Rice Wafer: <span className="data-ans">{convertToWords(candy.crispedricewafer)}</span></p>
        <p>Is Hard: <span className="data-ans">{convertToWords(candy.hard)}</span></p>
        <p>Is Bar: <span className="data-ans">{convertToWords(candy.bar)}</span></p>
        <p>Pluribus (many candies in 1 package): <span className="data-ans">{convertToWords(candy.pluribus)}</span> </p>
        <p>Sugar Percent: <span className="data-ans">{(candy.sugarpercent * 100) + '%'}</span> </p>
      </div>
    </div>
    <p/>
    <section>
      <div className="card">
        <div className="card-title">
          Nutrition Information:
        </div>
        <div className="card-img nutrition-info">
          <img src={getIndvCandyImgName(props)} alt={"Nutrition Information about" + candy.competitorname}/>
        </div>
      </div>
    </section>
  </div>);
}

function getIndvCandyImgName(props) {  
  // the props should be the individual candy object
  let candy = props.card.indvCandy;
  let location = candy.competitorname.split(' ').join('_');
  return "./img/"+candy.candynum+"_"+location+".jpg";
}


function convertToWords(num) {
  if(num === 0) {
    return "no";
  }
  else {
    return "yes";
  }
}
export default App;