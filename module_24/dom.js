const allLielement = document.getElementsByTagName("li");
for (const li of allLielement) {
  // console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  // console.log(h1.innerText);
}
const allFruits = document.getElementsByClassName("fruits-name");
for (const fruits of allFruits) {
  // console.log(fruits.innerText);
}
const otherClass = document.getElementsByClassName("others");
console.log(otherClass.innerText);
// quary selector.
const someLi = document.querySelectorAll("#fruits-cotainer li");
for (const li of someLi) {
  // console.log(li.innerText);
}

// add styling atribute
const allSection = document.querySelectorAll("section");
for (const sect of allSection) {
  sect.style.border = "2px solid steelblue";
  sect.style.marginBottom = "5px";
  sect.style.borderRadius = "8px";
}
const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
// placesContainer.firstChild;
