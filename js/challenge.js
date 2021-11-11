// increments every second
// grab counter element from body
const counterElement = document.getElementById("counter");

// plus function, takes current counter and increases by 1
function plus() {
  let currentNumber = parseInt(counterElement.innerText);
  currentNumber += 1;
  counterElement.innerText = currentNumber;
}

// minus function
function minus() {
  let currentNumber = parseInt(counterElement.innerText);
  currentNumber -= 1;
  counterElement.innerText = currentNumber;
}

// call plus function in setInterval to make counter increase by one every sec
let interval = setInterval(plus, 1000);

// plus eventListener with clik, use current counter innnerText
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", plus);

// minus eventListener with click, use current counter innerText
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", minus);

// heart liker function: add li with currentNumber to ul
function heartClicked() {
  // get the number
  let currentNumber = parseInt(counterElement.innerText);
  // get the likes list
  let likesList = document.querySelector(".likes");

  const likedItem = likesList.querySelector(
    `li[data-count="${currentNumber}"]`
  );

  if (likedItem) {
    // shoul display number of likes ...`${currentNumber} has been liked ${num} times!`
    // calculate new count
    const likes = parseInt(likedItem.dataset.likes);

    likedItem.dataset.likes = likes + 1;
    // update text
    likedItem.innerText = `${currentNumber} has been liked ${likedItem.dataset.likes} times!`;
  } else {
    // create new like
    let likesListItem = document.createElement("li");

    likesListItem.innerText = `${currentNumber} has been liked!`;
    likesListItem.dataset.count = currentNumber;
    likesListItem.dataset.likes = 1;
    likesList.appendChild(likesListItem);
  }
}

// like a number with heart button:add eventListener to heart button
const heartButton = document.getElementById("heart");
heartButton.addEventListener("click", heartClicked);

// pause button: pause counter and change name to resume
// resume button: restart counter and change name to pause

function pause() {
  clearInterval(interval);
  pauseResumeButton.innerText = "resume";
}

const pauseResumeButton = document.getElementById("pause");

pauseResumeButton.addEventListener("click", function () {
  if (pauseResumeButton.innerText === "pause") {
    pause();
  }
  if (pauseResumeButton.innerText === "resume") {
    resume();
  }
});

function resume() {
  interval = setInterval(plus, 1000);
  pauseResumeButton.innerText = "pause";
}

// submit comment
const commentForm = document.getElementById("comment-form");
function submitComment(e) {
  e.preventDefault();
  let userText = e.target.comment.value;

  if (userText.length > 0) {
    const commentContainer = document.getElementById("list");
    const newComment = document.createElement("li");

    newComment.textContent = userText;
    commentContainer.appendChild(newComment);
    e.target.reset();
  }
}

commentForm.addEventListener("submit", submitComment);
