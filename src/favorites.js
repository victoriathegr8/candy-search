import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import CANDY_DATA from './data/candy-data.json'; 


export function FavoritesPage(props) {
   
    let candiesArray;
    let favCandies = [];
    console.log("props Fav Page", props)
  
    useEffect(() => {

      if(props.currentUser !== undefined) {
        let favsRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites')
    
        favsRef.on('value', (snapshot) => {
          const candiesObjs = snapshot.val();
          let objectKeyArray = Object.keys(candiesObjs);
          candiesArray = objectKeyArray.map((key) => {
            let singleCandyObj = candiesObjs[key];
            return singleCandyObj;
          })
          for (let i = 0; i < candiesArray.length; i++) {
            let index = candiesArray[i];
            let candy = props.data[index];
            favCandies.push(candy);
          }
          
          props.setCandydata(favCandies);
          props.setFavCandyNums(objectKeyArray);  
        }); 
      }
    }, []);
    return null;
    
    
  }