// index.js

////////////////
//// Global
////////////////
const ramenURL = "http://localhost:3000/ramens";

////////////////
// DOM Selectors
////////////////
const ramenMenu = document.querySelector("#ramen-menu");
const detailImg = document.querySelector(".detail-image");
const name = document.querySelector(".name");
const restaurant = document.querySelector(".restaurant");
const rating = document.querySelector("#rating-display");
const comment = document.querySelector("#comment-display");

//////////////////
// Fetch functions
//////////////////
function getAllRamen(url) {
  return fetch(url)
  .then(response => response.json());
}

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = (ramensArray) => {
  // Add code
  //console.log(ramensArray);
  ramensArray.forEach(renderRamenInMenu);
};

//////////////////////////////
// Render Functions
//////////////////////////////
function renderRamenInMenu(ramenObject) {
  //console.log(ramenObject);
  const img = document.createElement("img");
  //console.log(img);
  img.src = ramenObject.image;
  ramenMenu.append(img);
}

function renderRamenDetails(ramenObject) {
  detailImg.src = ramenObject.image;
  name.innerText = ramenObject.name;
  restaurant.innerText = ramenObject.restaurant;
  rating.innerText = ramenObject.rating;
  comment.innerText = ramenObject.comment;
}

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

/////////////////////////////////////////
// EventListener for DOM Load to run MAIN
/////////////////////////////////////////
main()


/////////////////////////////
//Initializer for development
/////////////////////////////
getAllRamen(ramenURL).then(ramenArray => {
  //Test to see renderRamenDetails is working:
  //renderRamenDetails(ramenArray[0]);
  displayRamens(ramenArray);
});


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
