MANTRA
1. FETCH the data
2. SELECT the 'DOM' elements
3. CREATE new elements (as needed)
4. ATTACH event listeners (as needed)
5. ASSIGN data to element attributes
6. APPEND new elements to the DOM

# Deliverables
As a user, I can:

1. See all ramen images in the div with the id of ramen-menu. When the page loads, fire a function called displayRamens that requests the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
- [x] Fetch data from "http://localhost:3000/ramens"
- [x] Select the "ramen-menu"-ID'd div element
- [x] Using in the DisplayRamens function, iterate over the array of ramens, and pass each ramen's data to the renderRamenInMenu function
- [x] In the renderRamenInMenu function, create a new 'img' element for each ramen
- [x] Assign the ramen image's url to the img.src of each new 'img' element
- [x] Append each new 'img' element to the "ramen-menu"-ID'd div element
- [x] In the main function, invoke the getAllRamen fetch function with a  chained .then statement which will invoke the displayRamens function and pass it the parsed-to-json ramenArray data obtained by the getAllRamen fetch function from the db.json file housed on the server.

2. Click on an image from the #ramen-menu div and fire a callback called handleClick to see all the info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).
- [x] Add an event listener that will invoke the main function after the DOM has fully loaded.
- [x] Select the child elements of the #ramen-detail div and select the Comment and Rating display elements.
- [x] Make handleClick function that accepts a ramen object as an argument
- [x] Assign data from each ramen object passed into handleClick to the elements selected above
- [x] Add an event listener to all of the images in the ramen-menu
- [x] Invoke handleClick with the ramen object corresponding to the clicked image

3. Attach a submit even listener to the new-ramen form using a function called addSubmitListener. After the submission, create a new ramen and add it to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

## Data shape
json
{
    "id": 1,
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
}