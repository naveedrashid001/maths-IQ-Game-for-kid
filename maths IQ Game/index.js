const AddplayerName = document.getElementById("AddplayerName")
const EnterName = window.prompt("Enter player Name !!");
if (EnterName) {
    AddplayerName.innerHTML += `${EnterName}`;
}
else {
    AddplayerName.innerHTML += "Player1";
}

