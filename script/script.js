document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header");

  function handleScroll() {
    if (window.scrollY > 50) {
      headerElement.classList.add("scrolled");
    } else {
      headerElement.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
