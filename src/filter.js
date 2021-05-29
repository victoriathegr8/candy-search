import CANDY_DATA from './data/candy-data.json'; 

//get checkboxes as array
let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
function getCheckboxValues() {
    let checkboxValues = [];
    allCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(1);
          else checkboxValues.push(0)
    });
    STATE.checkboxes = checkboxValues;
    return checkboxValues;
}

let sugarMinElem = document.querySelector('#sugarmin');
let sugarMaxElem = document.querySelector('#sugarmax');

// filter candies against checkboxes array
function filterCandies(candies2) {
    let bools = [];
    if (STATE.checkboxes[0] === 1) {
        if (candies2.chocolate === STATE.checkboxes[0]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[1] === 1) {
        if (candies2.caramel === STATE.checkboxes[1]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[2] === 1) {
        if (candies2.peanutyalmondy === STATE.checkboxes[2]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[3] === 1) {
        if (candies2.nougat === STATE.checkboxes[3]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[4] === 1) {
        if (candies2.crispedricewafer === STATE.checkboxes[4]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[5] === 1) {
        if (candies2.pluribus === STATE.checkboxes[5]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[6] === 1) {
        if (candies2.hasegg !== STATE.checkboxes[6]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[7] === 1) {
        if (candies2.hasmilk !== STATE.checkboxes[7]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[8] === 1) {
        if (candies2.hassoy !== STATE.checkboxes[8]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[9] === 1) {
        if( candies2.fruity === STATE.checkboxes[9]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[10] === 1) {
        if (candies2.hard === STATE.checkboxes[10]) bools.push(true);
        else bools.push(false);
    }
    if (STATE.checkboxes[11] === 1) {
        if (candies2.bar === STATE.checkboxes[11]) bools.push(true);
        else bools.push(false);
    }
    let checker = arr => arr.every(Boolean);
    return checker(bools);
}

// filter candies against sugar percent range
function sugarFilter(candies) {
    if (sugarMinElem.value > 0 && sugarMaxElem.value > 0) return (candies.sugarpercent) * 100 > sugarMinElem.value && (candies.sugarpercent) * 100 < sugarMaxElem.value;
    else if (sugarMinElem.value > 0) return (candies.sugarpercent) * 100 > sugarMinElem.value;
    else if (sugarMaxElem.value > 0) return (candies.sugarpercent) * 100 < sugarMaxElem.value;
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
    if (sugarMinElem.value < 0 || sugarMaxElem.value < 0 || sugarMinElem.value > 100 || sugarMaxElem.value > 100 ) {
        sugarMinElem.setCustomValidity("Number must be between 0 and 100.");
        sugarMaxElem.setCustomValidity("Number must be between 0 and 100.");
        sugarFeedbackElem.textContent = "Number must be between 0 and 100.";
        console.log("TEST FAILED");
        return false;
    } else {
        sugarMinElem.setCustomValidity("");
        sugarFeedbackElem.textContent = "";
        return true;
    }
}

// sort candies by selected method
let sortElem = document.querySelector('#sort');
function sortCandy(data) {
    if (sortElem.value == "alphabet") return data.sort((a, b) => (a.competitorname > b.competitorname) ? 1 : -1)
    else if (sortElem.value == "sugarasc") return data.sort((a, b) => (a.sugarpercent > b.sugarpercent) ? 1 : -1)
    else if (sortElem.value == "sugardes") return data.sort((a, b) => (a.sugarpercent > b.sugarpercent) ? -1 : 1)
}

// filter and sort everything after hitting apply button
let submitElem = document.querySelector('#applybutton');
submitElem.addEventListener('click', function() {
    // only if the sugar input is valid
    if(validateSugar() == false) return;

    else {
        STATE.currentData = CANDY_DATA;
        STATE.checkboxes = getCheckboxValues();
        // get the filtered data
        let filteredData = STATE.currentData.filter(candyCombinedFilter);
         // changing state and re-rendering the data
        STATE.currentData = sortCandy(filteredData);
    }
    renderCandy(STATE);
})