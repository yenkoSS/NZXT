const navResponsive = document.querySelector(".nav-list-responsive");
const menuBtn = document.querySelector(".menu-icon");
const iconClose = document.querySelector(".icon-close");
const navListRespList = document.querySelectorAll(".nav-item");
console.log(navListRespList);

navListRespList.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    if (navResponsive.style.display == "flex") {
      navResponsive.style.display = "none";
    }
  });
});

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const menuDisplay = window
    .getComputedStyle(navResponsive)
    .getPropertyValue("display");

  if (menuDisplay == "" || menuDisplay == "none") {
    navResponsive.style.display = "flex";
  } else if (menuDisplay == "flex") {
    navResponsive.style.display = "none";
  }
});

iconClose.addEventListener("click", (e) => {
  e.preventDefault();
  navResponsive.style.display = "none";
});

const headingObserver = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) headingObserver.unobserve(entry.target);
  })
);

const sectionHeadingList = document.querySelectorAll("h2");
const rowsList = document.querySelectorAll(".row");

sectionHeadingList.forEach((sectionHeading) =>
  headingObserver.observe(sectionHeading)
);

rowsList.forEach((row) => headingObserver.observe(row));
