// variables for html elements
var userEl = document.querySelector("#users");
var displayContainerEl = document.querySelector("#scoreDisplayContainer");

// declare userObject variable
var userObject;

// initialize function for getting stored user information 
// and displaying as an unordered list on the page
function init() {
  // create variable storeUsers that get user info from local storage 
  var storedUsers = JSON.parse(localStorage.getItem("UserInformation"));

  // loop through stored users
  for (var i = 0; i < storedUsers.length; ++i) {

    // create user variable that holds each users info
    var user = "Player Name: " + storedUsers[i].userName +
                ", Player Score: " + storedUsers[i].score +
                ", Player Time: " + storedUsers[i].timeLeft +"'s left";

    // create a new list item
    var li = document.createElement("li");
    // set list item to user
    li.textContent = user;

    // append new list item to the unordered list element
    userEl.appendChild(li);
  }
}

// call init
init();