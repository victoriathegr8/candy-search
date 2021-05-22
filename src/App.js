// getting the data 
// setting it to state
const STATE = {
  currentData: [], // this is going to be a list of candy objects
  searchTerm: "",
  // this passes the candy to renderIndividualCandy
  indvCandy: {}, 
  // variables for list/grid view
  gridView: false,
  // variables for filter 
  checkboxes: []
}

function App () {
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
                    <div id="candy-div" className="cardpoolGrid">
                      
                    </div> 
                  </section>
                </div>
                <div className="indv-container">
                  
                </div>
              </main>
            </div>
            <footer>
              
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

function MakeNavBar(){
  return (<nav>
            <ul>
                <li>
                    <a href="index.html"><img src="img/icon.png" alt="candy website logo"/></a>
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
            <div id="search-div" class="search" role="search">
                <input id="search-bar" type="text" placeholder="Search for your Candy..."></input>
            </div>
        </nav>);
}
function MakeButtonsLarge(){
  return(
    <div>
      <button id="list-button" class="view" aria-label="List View">
        <i class="fa fa-bars"></i>
        List
      </button>
      <button id="grid-button" class="view" aria-label="Grid View">
        <i class="fa fa-th-large"></i>
        Grid
      </button>
      <br/><br/><br/>
    </div>
  );
}

function MakeForm () {
  //this is where to input the form code
}

function MakeModal () {
  //this is where to input the modal code
}

function MakeButtonsSmall() {
  return(
    <div>
      <button id="list-button" aria-label="List View" onclick="renderCardListView()">
        <i class="fa fa-bars"></i>
        List
      </button>
      <button id="grid-button" aria-label="Grid View" onclick="renderCardGridView()">
        <i class="fa fa-th-large"></i>
        Grid
      </button>
      <button id="smallfilterbutton" aria-label="Filter and Sort">
        <i class="fa fa-filter"></i>
        Filter and Sort
      </button>
    </div>
  );
}