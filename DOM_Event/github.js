document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById("btn-delete");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });
document.getElementById("btn-delete").addEventListener("click", function () {});
