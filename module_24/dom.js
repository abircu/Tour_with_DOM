console.log("hello");
const allLielement = document.getElementsByTagName("li");
for (const li of allLielement) {
  console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1.innerText);
}
