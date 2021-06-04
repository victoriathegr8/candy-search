import Heart from "react-heart";
import ReactStars from "react-rating-stars-component";
import React, {useState} from 'react';
import { Redirect, Link} from 'react-router-dom';

export function Cards(props) {
    // the props for this should be the state values, specifically the card object array, and the gridView
   
    if(props.gridView) {
      return props.currentData.map((currentCard) => {
        return(
        <div className="cardpoolGrid" key={currentCard.competitorname}>
          <CardGridView key={currentCard.competitorname} card={currentCard} likeCallback={props.likeCallBack}/>
        </div>);
      });
    }
    else {
      return props.currentData.map((currentCard) => {
        return(
          <div className="cardpoolList" key={currentCard.competitorname}>
            <CardListView key={currentCard.competitorname} card={currentCard} likeCallback={props.likeCallBack}/>
          </div>);
      });
    }
  }


function CardGridView(props) {
    
    const [active, setActive] = useState(false);
    const[redirectTo, setRedirect] = useState(undefined);
    
  
    const handleClickIndv = () => {
      setRedirect("/indv/" + props.card.competitorname);
    }
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    const handleClickHeart = () => {props.likeCallback(props.card.competitorname)};
    // the props for this should be the list of current candies to show
    // this is where the cards code goes
    
    if(redirectTo !== undefined && redirectTo.indexOf("/indv/") >= 0) {
      return (<Redirect push to={redirectTo}/>);
    }
    return(
      <div  key={props.card.competitorname} className="card">
        <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
        <div className="card-body">
            <p className="card-title h5">{props.card.competitorname}</p>
            <div className="stars"><ReactStars count={5} onChange={ratingChanged} size={40} activeColor="#ffd700"/></div>
            {/* <i className="far fa-heart fa-2x nobreak hearts" onClick={handleClick}></i> */}
            <Heart className="heart nobreak" isActive={active} onClick={() => {setActive(!active); handleClickHeart()}}/>
            <Link to="/indv" className="btn btn-primary" onClick={handleClickIndv}>More Info:</Link>
        </div>
      </div>
    );
  }


  
  
function CardListView(props) {
    const [active, setActive] = useState(false);
    const[redirectTo, setRedirect] = useState(undefined);
  
    const handleClickIndv = () => {
      setRedirect("/indv/" + props.card.competitorname);
    }
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    const handleClickHeart = () => {props.likeCallback(props.card.competitorname)};
    // the props for this should be the list of current candies to show
    // this is where the cards code goes
    
    if(redirectTo !== undefined && redirectTo.indexOf("/indv/") >= 0) {
      return (<Redirect push to={redirectTo}/>);
    }
    return(
      <div  key={props.card.competitorname} className="card">
        <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
        <div className="card-body">
            
            <p className="card-title h5">{props.competitorname}</p>
            <p className="card-title h5">{props.card.competitorname}</p>
            <p className="card-text">{"Has Egg: " + convertToWords(props.card.hasegg)}</p>
            <p className="card-text">{"Has Milk: " + convertToWords(props.card.hasmilk)}</p>
            <p className="card-text">{"Has Soy: " + convertToWords(props.card.hassoy)}</p>
            <div className="stars"><ReactStars count={5} onChange={ratingChanged} size={40} activeColor="#ffd700"/></div>
            {/* <i className="far fa-heart fa-2x nobreak hearts" onClick={handleClick}></i> */}
            <Heart className="heart nobreak" isActive={active} onClick={() => {setActive(!active); handleClickHeart()}}/>
            <Link to="/indv" className="btn btn-primary" onClick={handleClickIndv}>More Info:</Link>
        </div>
      </div>
    );
  }

export function convertToWords(num) {
    if(num === 0) {
      return "No";
    }
    else {
      return "Yes";
    }
  }