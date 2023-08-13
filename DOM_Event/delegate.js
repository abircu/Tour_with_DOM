const items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

// add list item
document.getElementById("btn-add-item").addEventListener("click", function () {
  const listContainer = document.getElementById("list-container");
  const li = document.createElement("li");
  li.innerText = "hello javascript";
  listContainer.appendChild(li);
});

function makeGreen() {
  document.body.style.backgroundColor = "green";
}
document.getElementById("make-blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
