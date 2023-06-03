/*  ======================== typing animations =============================== */

var typed = new Typed(".typing", {
  strings: ["", "Front End Developer", "Web Developer", "Web Designer"],
  typeSpeed: 100,
  BackSpeed: 80,
  loop: true,
});

/* ====================== change of hover on movement =========================== */

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSelection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSelection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asidenavTogglerBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSelection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

const navTogglerbtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerbtn.addEventListener("click", () => {
  asidenavTogglerBtn();
});

function asidenavTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerbtn.classList.toggle("open");
  for (let i = 0; i < totalSelection; i++) {
    allSection[i].classList.toggle("open");
  }
}
