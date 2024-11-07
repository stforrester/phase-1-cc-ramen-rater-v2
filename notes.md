MANTRA
1. FETCH the data
2. SELECT the 'DOM' elements
3. CREATE new elements (as needed)
4. ATTACH event listeners (as needed)
5. ASSIGN data to element attributes
6. APPEND new elements to the DOM


# Deliverables
As a user, I can:
1. See all ramen images in the div with the id of ramen-menu.
2. When the page loads, fire a function called displayRamens that requests the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
3. Click on an image from the #ramen-menu div and fire a callback called handleClick to see all the info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).
4. Attach a submit even listener to the new-ramen form using a function called addSubmitListener. After the submission, create a new ramen and add it to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.


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
