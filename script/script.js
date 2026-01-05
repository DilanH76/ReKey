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

// recherche

const searchBtn = document.getElementById("toggle-search"); // loupe
const closeBtn = document.querySelector(".close-search"); // croix
const capsule = document.querySelector(".nav-center-capsule"); // conteneur
const searchInput = document.getElementById("search-input"); // champ texte

// 1 clique sur la LOUPE
searchBtn.addEventListener("click", () => {
  capsule.classList.add("search-active");
  setTimeout(() => searchInput.focus(), 100);
});

// 2clique sur la CROIX
closeBtn.addEventListener("click", () => {
  capsule.classList.remove("search-active");
});

// 3 Fermer si on clique ailleurs sur la page
document.addEventListener("click", (e) => {
  if (
    !capsule.contains(e.target) &&
    capsule.classList.contains("search-active")
  ) {
    capsule.classList.remove("search-active");
  }
});
