import firebase from 'firebase';
import React, {useState} from 'react';
let addedID = 0;

// modal that adds a candy to the file
export function AddModal(props) { 
    const [active, setActive] = useState(false);


    const handleApply = (candyObj) => {

        if(!props.signedIn || props.currentUser === undefined) {
          let modal = document.querySelector("#signin-modal");
          modal.style.display="block";
        }
        else {
          let state = !active
          setActive(state);

          
          let tempRef = firebase.database().ref('users/'+ props.currentUser.uid + '/added')
          
          tempRef.push(candyObj);
          addedID++;
        }
        props.handleModalClose();
      };

    let candy = {
        "candynum": props.candyNum,
        "competitorname": "",
        "chocolate": 0,
        "fruity": 0,
        "caramel": 0,
        "peanutyalmondy": 0,
        "nougat": 0,
        "crispedricewafer": 0,
        "hard": 0,
        "bar": 0,
        "pluribus": 0,
        "sugarpercent": -1,
        "pricepercent": -1,
        "winpercent": -1,
        "imglink": "",
        "hasegg": 0,
        "hasmilk": 0,
        "hassoy": 0,
        "userAdded": 1
      }; 
    return (
        <div className="modal add-modal card">
            <div className="modal-content card-body">
                <span className="add-modal-close close" onClick={() => props.handleModalClose()} alt="close button">×</span>
                <span className="add-modal-txt">Add Your New candy Information</span>
                <br/>
                <label>Name of your candy: </label>
                <input type="text" name="name" defaultValue="" onChange={(event) => {candy.competitorname = event.target.value}}></input>
                <br/>
                <label >Image Url of a picture of your candy: </label> 
                <input type="text" name="image" defaultValue="" onChange={(event) => {candy.imglink = event.target.value}}></input>
                <br/>


                <nobr>
                  <input type="checkbox" name="containsEgg" defaultValue="Reset" onClick={() => {candy.hasegg = 1}} alt="egg checkbox"></input>
                  <label >&ensp;Your candy contains Egg</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="containsMilk" defaultValue="Reset" onClick={() => {candy.hasmilk = 1}} alt="milk checkbox"></input>
                  <label >&ensp;Your candy contains Milk</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="containsSoy" defaultValue="Reset" onClick={() => {candy.hassoy = 1}} alt="soy checkbox"></input>
                  <label >&ensp;Your candy contains Soy</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="chocolate" defaultValue="Reset" onClick={() => {candy.chocolate = 1}} alt="chocolate checkbox"></input>
                  <label >&ensp;Your candy contains Chocolate</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="fruity" defaultValue="Reset" onClick={() => {candy.fruity = 1}} alt="fruity checkbox"></input>
                  <label >&ensp;Your candy is Fruity</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="caramel" defaultValue="Reset" onClick={() => {candy.caramel = 1}} alt="caramel checkbox"></input>
                  <label >&ensp;Your candy contains caramel</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="peanutyalmondy" defaultValue="Reset" onClick={() => {candy.peanutyalmondy = 1}} alt="peanuty almondy checkbox"></input>
                  <label >&ensp;Your candy contains peanuts, almonds, or peanut butter</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="nougat" defaultValue="Reset" onClick={() => {candy.nougat = 1}} alt="nougat checkbox"></input>
                  <label >&ensp;Your candy has nougat</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="crispedricewafer" defaultValue="Reset" onClick={() => {candy.crispedricewafer = 1}} alt="crisped ricewafer checkbox"></input>
                  <label >&ensp;Your candy contains crisped rice wafers</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="hard" defaultValue="Reset" onClick={() => {candy.hard = 1}} alt="hard checkbox"></input>
                  <label >&ensp;Your candy contains is hard</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="bar" defaultValue="Reset" onClick={() => {candy.bar = 1}} alt="bar checkbox"></input>
                  <label >&ensp;Your candy is a bar</label>
                </nobr>
                <br/>
                <nobr>
                  <input type="checkbox" name="pluribus" defaultValue="Reset" onClick={() => {candy.pluribus = 1}} alt="multiple candies in a box checkbox"></input>
                  <label >&ensp;Your candy has many pieces inside 1 box</label>
                </nobr>
                <br/>

                <label >Sugar percentage of your Candy __% (if known): </label>
                <input type="number" name="sugarpercent" defaultValue="" onChange={(event) => {candy.sugarpercent = event.target.value/100}}></input>
                <br/>
                <br/>
                <button className="btn btn-primary" defaultValue="Reset" onClick={() => handleApply(candy)} alt="Reset Button">Add</button>
            </div>
        </div>
        
    );
}