const projectObjects = [
  {
    TYPE: "WEBSITE",
    URL: "https://tinyurl.com/rysthdesign",
    IMAGE: "assets/images/JPG-PNG/PROJECTS/WP-rysth-design.jpg",
  },
  {
    TYPE: "WEBSITE",
    URL: "https://tinyurl.com/jprefrigeracion",
    IMAGE: "assets/images/JPG-PNG/PROJECTS/WP-jprefrigeracion.jpg",
  },
  {
    TYPE: "CARD",
    URL: "https://basiccard.netlify.app/",
    IMAGE: "assets/images/JPG-PNG/PROJECTS/DC-rysth-design.jpg",
  },
  {
    TYPE: "CARD",
    URL: "https://elementalcard.netlify.app/",
    IMAGE: "assets/images/JPG-PNG/PROJECTS/DC-pethost.jpg",
  },
  {
    TYPE: "CARD",
    URL: "https://esentialcard.netlify.app/",
    IMAGE: "assets/images/JPG-PNG/PROJECTS/DC-burguers.jpg",
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
    url.target = "_blank";

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
