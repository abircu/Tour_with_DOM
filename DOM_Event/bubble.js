document
  .getElementById("section-container")
  .addEventListener("click", function (event) {
    console.log("section trigered");
    event.stopPropagation;
  });

document.getElementById("list-ul").addEventListener("click", function (event) {
  console.log("ul also clicked");
  event.stopPropagation;
});

document.getElementById("heding").addEventListener("click", function (event) {
  console.log("heding clicked");
});
document.getElementById("item-1").addEventListener("click", function (event) {
  console.log("item one  clicked");
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item two clicked");
});
document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("item three clicked");
  event.stopImmediatePropagation;
});
document.getElementById("item-4").addEventListener("click", function (event) {
  console.log("item four clicked");
});
