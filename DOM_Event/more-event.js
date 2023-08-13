// document.getElementById("btn-more").addEventListener("click", function () {
//   console.log("event trigered");
// });

// role 1:using focus

// document.getElementById("input-box").addEventListener("focus", function () {
//   console.log("now it is focasing ");
// });

//role 2: using keydow

// document
//   .getElementById("input-box")
//   .addEventListener("keydown", function (event) {
//     console.log(event.target.value);
//   });

//role 3: using keypress

// document.getElementById('input-box').addEventListener('keypress',function(event){
//     console.log(event.target.value)
// })

// role 3: using keyup
document
  .getElementById("input-box")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
