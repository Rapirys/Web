const carousel = document.getElementById("BeastCarusel");
const activeCreatureName = document.getElementById("active-creature-name");

carousel.addEventListener("slid.bs.carousel", (e) => {
    activeCreatureName.innerText = e.target
      .querySelector(".carousel-inner .active")
      .getAttribute("creatureName");
});

