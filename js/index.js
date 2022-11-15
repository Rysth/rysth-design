const toggler = document.querySelector("#toggler");
const nav = document.querySelector("nav");
const list = document.querySelector("#navbar-list");
const items = document.querySelectorAll("#navbar-list li a");

const mediaQuery = window.matchMedia("(min-width: 1000px)");

toggler.addEventListener("click", () => {
  list.classList.toggle("flex-column");
});

items.forEach(element => {
  element.addEventListener("click", () => {
    if(!mediaQuery.matches){
      list.classList.toggle("flex-column");
    }
  });
});
