const navbar = document.querySelectorAll(".navbar__link");

navbar.forEach((item) => {
  item.onclick = () => {
    const itemActive = document.querySelector(".navbar__link--active");

    itemActive.classList.remove("navbar__link--active");

    item.classList.add("navbar__link--active");
  };
});
