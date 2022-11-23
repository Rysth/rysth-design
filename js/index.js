const toggler = document.querySelector("#toggler");
const nav = document.querySelector("nav");
const list = document.querySelector("#navbar-list");
const items = document.querySelectorAll("#navbar-list li a");

const mediaQuery = window.matchMedia("(min-width: 1000px)");

toggler.addEventListener("click", () => {
  list.classList.toggle("flex-column");
});

items.forEach((element) => {
  element.addEventListener("click", () => {
    if (!mediaQuery.matches) {
      list.classList.toggle("flex-column");
    }
  });
});

/* TO CHARGE PROJECT DYNAMICALLY */

const projectObjects = [
  {
    TYPE: "CARD",
    URL: "https://tinyurl.com/rysthdesign",
    IMAGE: "../assets/images/JPG-PNG/PROJECTS/DC-rysth-design.jpg",
  },
  {
    TYPE: "WEBSITE",
    URL: "https://tinyurl.com/rysthdesign",
    IMAGE: "../assets/images/JPG-PNG/PROJECTS/WP-rysth-design.jpg",
  },
  {
    TYPE: "CARD",
    URL: "https://tinyurl.com/jprefrigeraciondigitalcard",
    IMAGE: "../assets/images/JPG-PNG/PROJECTS/DC-jprefrigeracion.jpg",
  },
  {
    TYPE: "WEBSITE",
    URL: "https://tinyurl.com/jprefrigeracion",
    IMAGE: "../assets/images/JPG-PNG/PROJECTS/WP-jprefrigeracion.jpg",
  },
];

const cardsProjects = document.querySelector(".digital-cards");
const websitesProjects = document.querySelector(".websites");

window.onload = () => {
  projectObjects.forEach(object => {
    let project = document.createElement("div");
    let overlay = document.createElement("div");
    let url = document.createElement("a");
    let image = document.createElement("img");
    
    project.className = "project";
    overlay.className = "overlay-black";

    url.href = object.URL.trim();

    image.className = "project-image"
    image.src = object.IMAGE.trim();

    url.appendChild(overlay);
    url.appendChild(image);
    project.appendChild(url);

    if(object.TYPE.trim() === "WEBSITE"){
      websitesProjects.appendChild(project);
    }else{
      cardsProjects.appendChild(project);
    }

  });

};
