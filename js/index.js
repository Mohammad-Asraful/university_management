/* swiper js slider start */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
/* swiper js slider end */

/* Magnatic popup js start */
$(document).ready(function () {
  $(".image-link").magnificPopup({ type: "image" });
});

$(".parent-container").magnificPopup({
  type: "image",
  delegate: "a", // child items selector, by clicking on it popup will open
  // other options
  gallery: {
    enabled: true,
  },
});
/* Magnatic popup js end */

// tab logic start
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".academic_program_tab_title");
  const contents = document.querySelectorAll(
    ".academic_program_tab_content > div"
  );

  // Hide all content sections initially
  contents.forEach((content) => (content.style.display = "none"));

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Hide all content sections
      contents.forEach((content) => (content.style.display = "none"));

      // Add active class to the clicked tab
      this.classList.add("active");

      // Show the corresponding content
      contents[index].style.display = "block";
    });
  });

  // Show only the first tab content by default
  if (tabs.length > 0 && contents.length > 0) {
    tabs[0].classList.add("active");
    contents[0].style.display = "block";
  }
});
// tab logic end

// countup js start
$(".counter_number").counterUp({
  delay: 10,
  time: 1000,
});
// countup js end
