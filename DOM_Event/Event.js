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
// pption 03(final): using html element id [we will use sometimes]
const purpleButton = document.getElementById("purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
// option 4:Add event listener

const pinkButton = document.getElementById("pinky");
pinkButton.addEventListener("click", makepink);
function makepink() {
  document.body.style.backgroundColor = "pink";
}
// option 4:another way to add event listner
const pinkyButton = document.getElementById("pinky");
pinkyButton.addEventListener("click", function anotherWay() {
  document.body.style.backgroundColor = "pink";
});

// option 5: alawys use it(final part).
document.getElementById("golden-road").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
