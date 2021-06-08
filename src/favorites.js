import React, {useEffect} from 'react';
import firebase from 'firebase';

import {Cards} from './cards.js';

export function FavoritesPage(props) {
    let candiesArray;
    useEffect(() => {
      const favsRef = firebase.database().ref('favs');
      favsRef.on('value', (snapshot) => {
        const candiesObjs = snapshot.val();
        console.log(candiesObjs);
        let objectKeyArray = Object.keys(candiesObjs);
        candiesArray = objectKeyArray.map((key) => {
          let singleCandyObj = candiesObjs[key];
          singleCandyObj.key = key;
          return singleCandyObj;
        })
        console.log("candiesArray", candiesArray);
      })
    })
    return (
      <div className="container">
        <section className="cards-column">
          <div id="candy-div">
            <Cards currentData={candiesArray} gridView={props.gridView} likeCallBack={props.likeCallBack} currentUser={props.currentUser}/>
          </div> 
        </section>
      </div>
    )
  }