import React, { useEffect} from 'react';
import firebase from 'firebase';
import { Redirect} from 'react-router-dom';

// component that sets candy data to only favorited candies, and creates array of favorited candy nums
export function FavoritesPage(props) {
   
    let candiesArray = [];
    let favCandies = [];
    let objectKeyArray = [];
    
    // takes a snapshot of firebase user's favorites
    useEffect(() => {
      if(props.currentUser === undefined || props.currentUser === null) {
        return <h1 className="no-favs">You don't have any favorited candies yet! Press a heart button on the home page, and you'll see your favorites here.</h1>
      }
      else if(props.currentUser !== undefined || props.currentUser !== null) {
        let favsRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites')
    
        favsRef.on('value', (snapshot) => {
          const candiesObjs = snapshot.val();
          if(candiesObjs !== null ){
            objectKeyArray = Object.keys(candiesObjs);
            candiesArray = objectKeyArray.map((key) => {
              let singleCandyObj = candiesObjs[key];
              return singleCandyObj;
            })
          }
          for (let i = 0; i < candiesArray.length; i++) {
            let index = candiesArray[i];
            let candy = props.data[index];
            favCandies.push(candy);
          }
          props.setCandydata(favCandies);
          props.setFavCandyNums(objectKeyArray);  
        }); 
      }
      else {
        return <Redirect push to="/signin"/>
      }
    }, []);
    return null;
  }