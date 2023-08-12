// option 01: is used onclick directly

// option 02:
function makeYellow() {
  document.body.style.backgroundColor = "gray";
}
// option 02: another code
function white() {
  document.body.style.backgroundColor = "skyblue";
}

// option 03:  using html element id
const changeColor = document.getElementById("make-green");
changeColor.onclick = greenButton;
function greenButton() {
  document.body.style.backgroundColor = "green";
}
// pption 04: using html element id
const purpleButton = document.getElementById("purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
