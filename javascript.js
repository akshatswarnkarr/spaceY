window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

let sections = document.querySelectorAll(".section");
let boxes = document.querySelectorAll(".box");

const options = {
  rootMargin: "-200px",
};

const animate = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, options);

const fade = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade");
    }
  });
}, options);

sections.forEach((section) => {
  animate.observe(section);
});

boxes.forEach((box) => {
  fade.observe(box);
});
