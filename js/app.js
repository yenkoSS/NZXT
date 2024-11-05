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
