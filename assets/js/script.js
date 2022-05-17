window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  function toggleMeun() {
    const menuToggle = document.querySelector('menuToggle');
    menuToggle.classList.toggle('active');
  }