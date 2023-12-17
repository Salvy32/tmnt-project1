//////////Grab #id images of turtles and put them in a smaller 'variable (const donnie, const mikey, const ralph, const leo)///////////////////

const donnie = document.querySelector("#donnie");
const mikey = document.querySelector("#mikey");
const ralph = document.querySelector("#ralph");
const leo = document.querySelector("#leo");
const tmnt = document.querySelector("#tmntKing");

//////////Grabbing the #id name from html which holds the name of the turtle and adding an event listener so i can make the name clickable/////////////////////////////////

document.querySelector("#tmntNext").addEventListener("click", tmntNext);
document.querySelector("#donnieNext").addEventListener("click", donnieNext);
document.querySelector("#mikeyNext").addEventListener("click", mikeyNext);
document.querySelector("#ralphNext").addEventListener("click", ralphNext);
document.querySelector("#leoNext").addEventListener("click", leoNext);

function tmntNext() {
  tmnt.classList.toggle("hidden");
  mikey.classList.add("hidden");
  ralph.classList.add("hidden");
  leo.classList.add("hidden");
  donnie.classList.add("hidden");
}

function donnieNext() {
  donnie.classList.toggle("hidden");
  tmnt.classList.add("hidden");
  mikey.classList.add("hidden");
  ralph.classList.add("hidden");
  leo.classList.add("hidden");
}

function mikeyNext() {
  mikey.classList.toggle("hidden");
  tmnt.classList.add("hidden");
  donnie.classList.add("hidden");
  ralph.classList.add("hidden");
  leo.classList.add("hidden");
}

function ralphNext() {
  ralph.classList.toggle("hidden");
  tmnt.classList.add("hidden");
  donnie.classList.add("hidden");
  mikey.classList.add("hidden");
  leo.classList.add("hidden");
}

function leoNext() {
  leo.classList.toggle("hidden");
  tmnt.classList.add("hidden");
  donnie.classList.add("hidden");
  mikey.classList.add("hidden");
  ralph.classList.add("hidden");
}
