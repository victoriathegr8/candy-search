// getting the data 
// setting it to state
const STATE = {
  currentData: [], // this is going to be a list of candy objects
  searchTerm: "",
  // this passes the candy to renderIndividualCandy
  indvCandy: {}, 
  // variables for list/grid view
  gridView: false,
  // variables for filter 
  checkboxes: []
}

// function renderCardDynamicallyListView(candyObj){ // returns the card div 
   
//   // setting the right classes 
//   document.getElementById('candy-div').className = 'cardpoolList';
//   document.getElementById('candy-div').classList.remove = 'cardpoolGrid';
//   document.getElementById('candy-div').classList.add = 'cardpoolList';

//   // getting the div to put the candies in
//   let candyCard = document.createElement("div");
//   candyCard.classList.add("card");

//   // adding the event listener to each card
//   candyCard.addEventListener('click', function() {
//       STATE.indvCandy = candyObj;
//       let mainElem = document.querySelector(".container");
//       // clearing the container of all other objects
//       mainElem.innerHTML = "";
//       renderIndividualCandyView();
//       let candyIndvDiv = document.querySelector(".indv-container");
//       // changing display 
//       candyIndvDiv.style.display = "block";      
//   });


//   // creating the candy image
//   let candyImg = document.createElement("img");
//   candyImg.classList.add("card-img-top");
//   candyImg.src = candyObj.imglink;
//   candyImg.alt = candyObj.competitorname;

//   // creating the candy body
//   let candyCardBody = document.createElement("div");
//   candyCardBody.classList.add("card-body");

//   // creating the title
//   let cardBodyTitle = document.createElement('p');
//   cardBodyTitle.classList.add("card-title");
//   cardBodyTitle.classList.add("h5");
//   cardBodyTitle.textContent = candyObj.competitorname;

//   // creating the button
//   let candyInfoLink = document.createElement('a');
//   candyInfoLink.classList.add("more-info-button");
//   candyInfoLink.classList.add('btn');
//   candyInfoLink.classList.add('btn-primary');
//   candyInfoLink.textContent = "More Info";


//   // adding all the elements to the div
//   candyCardBody.appendChild(cardBodyTitle);
//   candyCardBody.appendChild(candyInfoLink);

//   candyCard.appendChild(candyImg);
//   candyCard.appendChild(candyCardBody);

//   return candyCard;
// }

// function renderCardDynamicallyGridView(candyObj){ // returns the card div 
//   // setting the right classes
//   document.getElementById('candy-div').className = 'cardpoolGrid';
//   document.getElementById('candy-div').classList.remove = 'cardpoolList';
//   document.getElementById('candy-div').classList.add = 'cardpoolGrid';

//   // creating the containing element
//   let candyCard = document.createElement("div");
//   candyCard.classList.add("card");
  
//   // adding an eventHandler to all the elements
//   candyCard.addEventListener('click', function() {
//       STATE.indvCandy = candyObj;

//       let mainElem = document.querySelector(".container");
//       // clearing the container
//       mainElem.innerHTML = "";
//       renderIndividualCandyView();

//       // displaying the individual page
//       let candyIndvDiv = document.querySelector(".indv-container");
//       candyIndvDiv.style.display = "block";
//   });


//   // creating the image
//   let candyImg = document.createElement("img");
//   candyImg.classList.add("card-img-top");
//   candyImg.src = candyObj.imglink;
//   candyImg.alt = candyObj.competitorname;

//   // creating the card
//   let candyCardBody = document.createElement("div");
//   candyCardBody.classList.add("card-body");

//   // creating the title
//   let cardBodyTitle = document.createElement('p');
//   cardBodyTitle.classList.add("card-title");
//   cardBodyTitle.classList.add("h5");
//   cardBodyTitle.textContent = candyObj.competitorname;

  

//   // creating the button
//   let candyInfoLink = document.createElement('a');
//   candyInfoLink.classList.add("more-info-button");
//   candyInfoLink.classList.add('btn');
//   candyInfoLink.classList.add('btn-primary');
//   candyInfoLink.href = "./individualpage.html";
//   candyInfoLink.textContent = "More Info";

//   // adding the descriptive elements 
//   let description = document.createElement('p');
//   description.textContent = "Allergen Information:";
//   candyCardBody.appendChild(description);
 
//   // adding the allergen information
//   if(candyObj.hasegg === 1) {
//       let hasEgg = document.createElement('p');
//       hasEgg.textContent = "Contains Egg";
//       candyCardBody.appendChild(hasEgg);
//   }
//   if(candyObj.hasmillk === 1) {
//       let hasMilk = document.createElement('p');
//       hasMilk.textContent = "Contains Milk";
//       candyCardBody.appendChild(hasMilk);
//   }
//   if(candyObj.hassoy === 1) {
//       let hasSoy = document.createElement('p');
//       hasSoy.textContent = "Contains Soy";
//       candyCardBody.appendChild(hasSoy);
//   }
      
//   // adding the elements to the div
//   candyCardBody.appendChild(cardBodyTitle);
//   candyCardBody.appendChild(candyInfoLink);
//   candyCard.appendChild(candyImg);
//   candyCard.appendChild(candyCardBody);

//   return candyCard;
// }


// function renderCardsListView(candyArray){
//   // setting state gridView to false so that renderCandy can work properly
//   STATE.gridView = false;
//   let mainPage = document.querySelector("#candy-div");
//   // showing the display
//   mainPage.style.display = "block";

//   // clearing the main element
//   mainPage.innerHTML = "";

//   // creating all the cards
//   for(let candyObj of candyArray) {
//       let element = renderCardDynamicallyListView(candyObj);
//       // adding the cards to the main page
//       mainPage.appendChild(element);
//   }
// }
// function renderCardsGridView(candyArray) {
//   // setting state gridView to false so that renderCandy can work properly
//   STATE.gridView = true;
//   let mainPage = document.querySelector("#candy-div");
//   // showing the display
//   mainPage.style.display = "block";
//   mainPage.innerHTML = "";

//   // creating all the cards
//   for(let candyObj of candyArray) {
//       let element = renderCardDynamicallyGridView(candyObj);
//       // adding the cards to the main page
//       mainPage.appendChild(element);
//   }
// }



// this is our controller