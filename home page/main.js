document.addEventListener("DOMContentLoaded", function() {
  const headerTitle = document.querySelector(".header__title");
  const paragraphs = document.querySelectorAll(".section__paragraph");
  const arrow1 = document.querySelector(".scroll-down-arrow");
  const arrow2 = document.querySelector(".scroll-down-arrow2");

  // Fade in the header title
  headerTitle.classList.add("header__title--visible");

  // Handle paragraph visibility on scroll
  document.addEventListener("scroll", function() {
    paragraphs.forEach(paragraph => {
      if (isInView(paragraph)) {
        paragraph.classList.add("section__paragraph--visible");
      }
    });

    // Handle arrow visibility
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 20) {
      arrow1.classList.add("hide-arrow");
      arrow2.classList.add("show-arrow");
    } else {
      arrow1.classList.remove("hide-arrow");
      arrow2.classList.remove("show-arrow");
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}
