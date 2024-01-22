
const newLink = document.querySelector(".newlinks");
const body = document.querySelector("body");
let section2cardcontainer = document.querySelector(".section2cardcontainer");
const handleShowSideBar = () => {
  newLink.classList.add("newlinksShown");
  body.classList.add("bodyunscroll");
};
const handleRemoveSideBar = () => {
  console.log(EventTarget);
  const newLink = document.querySelector(".newlinks");
  newLink.classList.remove("newlinksShown");
  body.classList.remove("bodyunscroll");
};
let scrollHandleRight = () => {
  section2cardcontainer.scrollBy(500, 0);
};
let scrollHandleLeft = () => {
  section2cardcontainer.scrollBy(-500, 0);
};
