// console.log(EventTarget);
const newlink = document.querySelector(".newlinks");
const body = document.querySelector("body");
let section2cardcontainer = document.querySelector(".section2cardcontainer");
const handleShowSideBar = () => {
  newlink.classList.add("newlinksShown");
  body.classList.add("bodyunscroll");
};
const handleremoveSideBar = () => {
  console.log(EventTarget);
  const newlink = document.querySelector(".newlinks");
  newlink.classList.remove("newlinksShown");
  body.classList.remove("bodyunscroll");
};
let scrollHandleRight = () => {
  section2cardcontainer.scrollBy(500, 0);
};
let scrollHandleLeft = () => {
  section2cardcontainer.scrollBy(-500, 0);
};
