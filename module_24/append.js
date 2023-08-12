// where to add
const placesList = document.getElementById("places-list");
// what to be added
const li = document.createElement("li");
li.innerText = "hi bangali valobasa divi kina bol";
// add the child
placesList.appendChild(li);

// where to add
const mainContainer = document.getElementById("main-conten");
// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my heading ";
section.appendChild(h1);

// create ul
const ul = document.createElement("ul");
// create list item 01
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);
// create list item 02
const li2 = document.createElement("li");
li2.innerText = "haluya";
ul.appendChild(li2);
// create list item 03
const li3 = document.createElement("li");
li3.innerText = "murog pulaw";
ul.appendChild(li3);

// added ul in the section
section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHtml directly

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My dress collection</h1>
<ul>
 <li>T-shirt</li>
 <li>Lungi</li>
 <li>pajama</li>
 </ul>
`;
mainContainer.appendChild(sectionDress);
