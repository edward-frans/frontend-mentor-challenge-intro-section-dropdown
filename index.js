
let features = document.getElementById("features");
let company = document.getElementById("company");

let featuresMob = document.getElementById("features-mob");
let companyMob = document.getElementById("company-mob");

let arrowFeatures = document.getElementById("arrow-features");
let arrowCompany = document.getElementById("arrow-company");

let arrowFeaturesMob = document.getElementById("arrow-features-mob");
let arrowCompanyMob = document.getElementById("arrow-company-mob");

let menuContainer = document.getElementById("menu-container");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");

let srcArrowUp = "images/icon-arrow-up.svg";
let srcArrowDown = "images/icon-arrow-down.svg";


function showFeatures() {
  if (features.style.display == "none") {
    features.style.display = "grid";
    arrowFeatures.src = srcArrowUp
  } else {
    features.style.display = "none";
    arrowFeatures.src = srcArrowDown
  }

  if (featuresMob.style.display == "none") {
    featuresMob.style.display = "inherit";
    arrowFeaturesMob.src = srcArrowUp

  } else {
    featuresMob.style.display = "none";
    arrowFeaturesMob.src = srcArrowDown
  }
}

function showCompany() {
  if (company.style.display == "none") {
    company.style.display = "grid";
    arrowCompany.src = srcArrowUp
  } else {
    company.style.display = "none";
    arrowCompany.src = srcArrowDown

  }

  if (companyMob.style.display == "none") {
    companyMob.style.display = "inherit";
    arrowCompanyMob.src = srcArrowUp
  } else {
    companyMob.style.display = "none";
    arrowCompanyMob.src = srcArrowDown
  }
}




if (menu) {
  menu.addEventListener("click", () => {
    menuContainer.classList.add("show-container");
  })
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    menuContainer.classList.remove("show-container");
  })
}
