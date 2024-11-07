// index.js

////////////////
//// Global
////////////////
const ramenURL = "http://localhost:3000/ramens";

////////////////
// DOM Selectors
////////////////


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

const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

/////////////////////////////////////////
// EventListener for DOM Load to run MAIN
/////////////////////////////////////////
//main()
getAllRamen(ramenURL).then(console.log);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
