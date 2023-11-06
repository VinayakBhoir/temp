document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const contentSections = document.querySelectorAll(".content section");

  // Function to scroll to the selected content section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Add click event listeners to the menu items for smooth scrolling
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const sectionId = e.target.getAttribute("href").substring(1); // Remove the '#'
      scrollToSection(sectionId);
    }
  });

  // Function to highlight the current section in the menu based on scroll position
  function highlightCurrentSection() {
    contentSections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 100) {
        // Adjust the threshold as needed
        menu.querySelectorAll("a").forEach((link) => {
          link.classList.remove("active");
        });
        menu.querySelector(`a[href="#${sectionId}"]`).classList.add("active");
      }
    });
  }

  // Add scroll event listener for highlighting the current section in the menu
  window.addEventListener("scroll", highlightCurrentSection);
});
