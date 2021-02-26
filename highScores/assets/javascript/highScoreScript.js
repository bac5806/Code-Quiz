var userEl = document.querySelector("#users");
var displayContainerEl = document.querySelector("#scoreDisplayContainer");

var userObject;


function init() {
    var storedUsers = JSON.parse(localStorage.getItem("UserInformation"));
    if (storedUsers !== null) {
      userInfoArr = storedUsers;
    }

    for (var i = 0; i < storedUsers.length; ++i) {

        // userEl.textContent = "Player Name: " + storedUsers[i].userName;
        var user = "Player Name: " + storedUsers[i].userName +
                    ", Player Score: " + storedUsers[i].score +
                    ", Player Time: " + storedUsers[i].timeLeft +"'s left";

        var li = document.createElement("li");
        li.textContent = user;

        userEl.appendChild(li);
    }
}

init();