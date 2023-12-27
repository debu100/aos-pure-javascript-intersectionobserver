//? change header style on scroll

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  //   if (window.scrollY > 150) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  header.classList.toggle("sticky", window.scrollY > 150);
});

//? aos on scroll
const boxes = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) {
    //   entry.target.classList.add("show");
    // } else {
    //   entry.target.classList.remove("show");
    // }
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

boxes.forEach((box) => {
  observer.observe(box);
});
