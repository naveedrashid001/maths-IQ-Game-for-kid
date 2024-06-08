const letsPlayButton = document.getElementById("letsPlayButton");

letsPlayButton.addEventListener("click", function(event) {
    const enterName = window.prompt("Enter player Name !!");
    if (enterName) {
        localStorage.setItem("playerName", enterName);
    } else {
        localStorage.setItem("playerName", "Player1");
    }
});
