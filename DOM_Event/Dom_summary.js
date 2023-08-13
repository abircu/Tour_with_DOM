function onClickHandle() {
  console.log("button clicked");
}

function onClickHandle() {
  const changeText = document.getElementById("change_text");
  changeText.innerText =
    "hello this is event handle practice it more for batter output";
}

// option 2:
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handlerStatus = document.getElementById("change_text");
    handlerStatus.innerText = "the text is updated";
  });

//   option 2
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("text-field");
  const inputText = inputField.value;
  const paraGraph = document.getElementById("update");
  paraGraph.innerText = inputText;
  inputField.value = "";
});
