window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      navbar.classList.add("color");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("color");
    }
  });