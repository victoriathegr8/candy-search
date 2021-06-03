import React, {useState} from 'react';
import CANDY_DATA from './data/candy-data.json'; 
import setCandydata from './App.js';
// handleCheckbox = e => {
//   if (this.state.filter === e.target.value) this.setState({ filter: "none" });
//   else this.setState({ filter: e.target.value, checked: true });
// };
// const [checkboxes, setCheckboxes] = useState([]);
// handleCheckbox = e => {
//   candydata = props.data;
//   let isChecked = e.target.checked;
//   let checkValue = e.target.value;
//   if (isChecked == true) checkboxes.push(checkValue);
//   else checkboxes = checkboxes.filter(x => x !== checkValue);

//   if (isChecked == true) {
//     let filteredCandies = candydata.filter(function(){
//       candyObj => candyObj.checkValue == 1;
//     })
//   }
//   else 
// }

export function MakeForm(props) {
const [checkboxes, setCheckboxes] = useState([]);
const [sugarMinElem, setSugarmin] = useState(null);
const [sugarMaxElem, setSugarmax] = useState(null);
//get checkboxes as array
let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
function getCheckboxValues() {
    let checkboxValues = [];
    allCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(1);
          else checkboxValues.push(0)
    });
    setCheckboxes(checkboxValues);
    return checkboxValues;
}

// let sugarMinElem = document.querySelector('#sugarmin');
// let sugarMaxElem = document.querySelector('#sugarmax');


// filter candies against checkboxes array
function filterCandies(candies2) {
    let bools = [];
    // for (var prop in candies2) {
    //   let index = 0;
    //   if (checkboxes[index] === 1) {
    //     if (candies2.prop === checkboxes[index]) bools.push(true);
    //     else bools.push(false);
    //   }
    //   index++;
    // }
    if (checkboxes[0] === 1) {
        if (candies2.chocolate === checkboxes[0]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[1] === 1) {
        if (candies2.caramel === checkboxes[1]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[2] === 1) {
        if (candies2.peanutyalmondy === checkboxes[2]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[3] === 1) {
        if (candies2.nougat === checkboxes[3]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[4] === 1) {
        if (candies2.crispedricewafer === checkboxes[4]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[5] === 1) {
        if (candies2.pluribus === checkboxes[5]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[6] === 1) {
        if (candies2.hasegg !== checkboxes[6]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[7] === 1) {
        if (candies2.hasmilk !== checkboxes[7]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[8] === 1) {
        if (candies2.hassoy !== checkboxes[8]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[9] === 1) {
        if( candies2.fruity === checkboxes[9]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[10] === 1) {
        if (candies2.hard === checkboxes[10]) bools.push(true);
        else bools.push(false);
    }
    if (checkboxes[11] === 1) {
        if (candies2.bar === checkboxes[11]) bools.push(true);
        else bools.push(false);
    }
    let checker = arr => arr.every(Boolean);
    return checker(bools);
}

// filter candies against sugar percent range
function sugarFilter(candies) {
    if (sugarMinElem > 0 && sugarMaxElem> 0) return (candies.sugarpercent) * 100 > sugarMinElem && (candies.sugarpercent) * 100 < sugarMaxElem;
    else if (sugarMinElem > 0) return (candies.sugarpercent) * 100 > sugarMinElem;
    else if (sugarMaxElem > 0) return (candies.sugarpercent) * 100 < sugarMaxElem;
    else return true;
}

//combine characteristics and sugar range filters
function makeCombinedFilter(func1, func2) {
    return function combinedFilter(filters) {
      let filtered1 = func1(filters);
      let filtered2 = func2(filters);
      return filtered1 && filtered2;
    };
}
let candyCombinedFilter = makeCombinedFilter(filterCandies, sugarFilter);
let sugarFeedbackElem = document.querySelector('#sugarFeedback');

// input validation for sugar range
function validateSugar() {
    if (sugarMinElem < 0 || sugarMaxElem < 0 || sugarMinElem > 100 || sugarMaxElem > 100 ) {
        sugarMinElem.setCustomValidity("Number must be between 0 and 100.");
        sugarMaxElem.setCustomValidity("Number must be between 0 and 100.");
        //sugarFeedbackElem.textContent = "Number must be between 0 and 100.";
        console.log("TEST FAILED");
        return false;
    } else {
        //sugarMinElem.setCustomValidity("");
        //sugarFeedbackElem.textContent = "";
        return true;
    }
}

// sort candies by selected method
// let sortElem = document.querySelector('#sort');
// function sortCandy(data) {
//     if (sortElem.value == "alphabet") return data.sort((a, b) => (a.competitorname > b.competitorname) ? 1 : -1)
//     else if (sortElem.value == "sugarasc") return data.sort((a, b) => (a.sugarpercent > b.sugarpercent) ? 1 : -1)
//     else if (sortElem.value == "sugardes") return data.sort((a, b) => (a.sugarpercent > b.sugarpercent) ? -1 : 1)



function submitForm() {
    // only if the sugar input is valid
    if(validateSugar() == false) return;

    else {
        let copy = CANDY_DATA;
        setCheckboxes(getCheckboxValues);
        // get the filtered data
        let filteredData = copy.filter(candyCombinedFilter);
        console.log(filteredData);
         // changing state and re-rendering the data
        //console.log(sortCandy(filteredData));
    }
    //renderCandy(STATE);
}
    // this is where to input the form code
    // this should render the form page - not sure if you actually update the state here
    return (<form>
      <h2>Filter</h2>
      <nobr className="filtertype">Contains:</nobr><br />
      <input type="checkbox" id="contains1" name="contains1" value="chocolate" />
      <label htmlFor="contains1">
        Chocolate</label><br />
      <input type="checkbox" id="contains2" name="contains2" value="caramel" />
      <label htmlFor="contains2">
        Caramel</label><br />
      <input type="checkbox" id="contains3" name="contains3" value="peanutyalmondy" />
      <label htmlFor="contains3">
        Peanuts/Peanut Butter/Almonds</label><br />
      <input type="checkbox" id="contains4" name="contains4" value="nougat" />
      <label htmlFor="contains4">
        Nougat</label><br />
      <input type="checkbox" id="contains5" name="contains5" value="crispedricewafer" />
      <label htmlFor="contains5">
        Crisped Rice/Wafers/Cookie</label><br />
      <input type="checkbox" id="contains6" name="contains6" value="pluribus" />
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
      <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" onChange={event => setSugarmin(event.target.value)} name="sugarmin" min={0} max={100} />
      <nobr>% to
      </nobr>
      <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" onChange={event => setSugarmax(event.target.value)} name="sugarmax" min={0} max={100} /><nobr>
        %</nobr><br />
      <p id="sugarFeedback" className="invalid-feedback" /><br />
      <label className="filtertype" htmlFor="sort">Sort By:</label><br />
      <select name="sort" id="sort">
        <option value="alphabet">Name A to Z</option>
        <option value="sugarasc">Sugar Percentile Low to High</option>
        <option value="sugardes">Sugar Percentile High to Low</option>
      </select>
      <br /><br />
      <button id="applybutton" type="button" onClick={submitForm}>Apply</button>
      <input type="reset" defaultValue="Reset" />
    </form>);
  }
  
export function MakeModal () {
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
  
