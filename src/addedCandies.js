import { useEffect } from 'react';
import firebase from 'firebase';

export function AddedCandyCards(props) {
   
    let candiesArray = [];
    let favCandies = [];
    let objectKeyArray = [];
    
    // takes a snapshot of firebase user's favorites
    useEffect(() => {
      if(props.currentUser === undefined || props.currentUser === null) {
        return;
      }
      else {
        let addedRef = firebase.database().ref('users/'+ props.currentUser.uid + '/added')
    
        addedRef.on('value', (snapshot) => {
          const candiesObjs = snapshot.val();
          if(candiesObjs !== null ){
            objectKeyArray = Object.keys(candiesObjs);
            candiesArray = objectKeyArray.map((key) => {
              let singleCandyObj = candiesObjs[key];
              return singleCandyObj;
            })
          }
          console.log(candiesArray);
          props.setAddedCandies(candiesArray);  
        }); 
      }
    }, []);
    return null;
  }