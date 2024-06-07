const tabs = document.querySelector(".tab-titles");
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-content");

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  e.target.classList.add("active-link");

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  const element = document.getElementById(id);
  element.classList.add("active-tab");
});


// Responsiveness:

const faTimes = document.querySelector(".fa-times");
const faBars = document.querySelector(".fa-bars");
const sidemenu = document.querySelector(".sidemenu");

faBars.addEventListener("click", () => {
    sidemenu.style.right = "0";
});

faTimes.addEventListener("click", () => {
    sidemenu.style.right = "-200px";
});
