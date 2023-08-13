// add event listener to the post button
document.getElementById("btn-post").addEventListener("click", function () {
  // step 2:get the comment box
  const commentBox = document.getElementById("comment-section");
  const newComment = commentBox.value;
  //   step 3:set the commment insite the comment container
  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;
  commentContainer.appendChild(p);
  commentBox.value = "";
});
