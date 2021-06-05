export function checkCheckboxesModal(checkboxV, candies2) {
    let bools = [];
    if (checkboxV[12] === 1) {
        if (candies2.chocolate === checkboxV[12]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[13] === 1 ) {
        if (candies2.caramel === checkboxV[13]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[14] === 1 ) {
        if (candies2.peanutyalmondy === checkboxV[14]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[15] === 1 ) {
        if (candies2.nougat === checkboxV[15]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[16] === 1 ) {
        if (candies2.crispedricewafer === checkboxV[16]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[17] === 1 ) {
        if (candies2.pluribus === checkboxV[17]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[18] === 1 ) {
        if (candies2.hasegg !== checkboxV[18]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[19] === 1 ) {
        if (candies2.hasmilk !== checkboxV[19]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[20] === 1 ) {
        if (candies2.hassoy !== checkboxV[20]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[21] === 1 ) {
        if(candies2.fruity === checkboxV[21]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[22] === 1 ) {
        if (candies2.hard === checkboxV[22] ) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[23] === 1) {
        if (candies2.bar === checkboxV[23]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    let isTrue = function(elem) {return (elem === true)};
    let r = bools.every(isTrue)
    return r;
}

export function checkCheckboxesForm(checkboxV, candies2) {
    let bools = [];
    if (checkboxV[0] === 1) {
        if (candies2.chocolate === checkboxV[0]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[1] === 1 ) {
        if (candies2.caramel === checkboxV[1]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[2] === 1 ) {
        if (candies2.peanutyalmondy === checkboxV[2]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[3] === 1 ) {
        if (candies2.nougat === checkboxV[3]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[4] === 1 ) {
        if (candies2.crispedricewafer === checkboxV[4]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[5] === 1 ) {
        if (candies2.pluribus === checkboxV[5]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[6] === 1 ) {
        if (candies2.hasegg !== checkboxV[6]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[7] === 1 ) {
        if (candies2.hasmilk !== checkboxV[7]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[8] === 1 ) {
        if (candies2.hassoy !== checkboxV[8]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[9] === 1) {
        if(candies2.fruity === checkboxV[9]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[10] === 1 ) {
        if (candies2.hard === checkboxV[10] ) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    if (checkboxV[11] === 1) {
        if (candies2.bar === checkboxV[11]) {
        bools.push(true);
        }
        else {bools.push(false);}
    }
    let isTrue = function(elem) {return (elem === true)};
    let r = bools.every(isTrue)
    return r;
}