
import {Link, NavLink} from 'react-router-dom';
export function NavBar(props) {
    if(props.signedIn === true) {
        return (<NavBarLogOut handleClick={props.handleLogOut}/>);
    }
    else {
        return (<NavBarSignIn handleClick={props.handleSignIn}/>);
    }
}
// creates the Nav Bar with a button that says log out
function NavBarLogOut(props){
    return (<nav>
              <ul>
                  <li>
                      <Link to="/"><img src="img/candy_logo.png" alt="candy website logo"/></Link>
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
                  <NavLink id="logout" to="/" className="navLink" type="button" onClick={() => {props.handleClick()}}>Log Out</NavLink>
              </div>
              
          </nav>);
  }

// creates the Nav Bar with a button that says sign in
function NavBarSignIn(props){
    return (<nav>
              <ul>
                  <li>
                      <Link to="/"><img src="img/candy_logo.png" alt="candy website logo"/></Link>
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
                  <NavLink id="signin" to="/signin" className="navLink" type="button" onClick={() => {props.handleClick()}}>Sign In</NavLink>
              </div>
              
          </nav>);
  }