var fansIcon = document.querySelector("footer .fans");
var fishIcon = document.querySelector("footer .fish");
var pawIcon = document.querySelector("footer .pets");
console.log(pawIcon);
fansIcon.addEventListener("mouseover", function () {
  fansIcon.innerText = "127k";
});
fishIcon.addEventListener("mouseover", function () {
  fishIcon.innerText = "47k";
});
pawIcon.addEventListener("mouseover", function () {
  pawIcon.innerText = "20k";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector(".bottom h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealthy Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
