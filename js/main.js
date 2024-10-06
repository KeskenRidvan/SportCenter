const hamburger = document.querySelector(".hamburger");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarNav.classList.remove("active");
  })
);

const tabs = document.querySelectorAll(".tab-box .tab-button");
const content = document.querySelectorAll(
  ".classes-container .content-box .content"
);
const contentImage = document.querySelectorAll(
  ".classes-container .content-box .content-image"
);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    content.forEach((content) => {
      content.classList.remove("active");
    });

    contentImage.forEach((contentImage) => {
      contentImage.classList.remove("active");
    });

    content[index].classList.add("active");
    contentImage[index].classList.add("active");
  });
});

let tri = document.querySelector("#bmi .gauge");
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");

function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (height > 0 && weight > 0) {
    let bmi = weight / (height / 100) ** 2;
    let gaugePosition = getGaugePosition(bmi);

    if (gaugePosition) {
      tri.style.left = `${gaugePosition}%`;
    }
  }
}

function getGaugePosition(bmi) {
  if (bmi > 13.5 && bmi < 18.5) {
    return 7 + ((bmi - 13.5) * 16) / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    return 23 + ((bmi - 18.5) * 16) / 7;
  } else if (bmi >= 25 && bmi < 30) {
    return 40 + ((bmi - 24.5) * 16) / 5;
  } else if (bmi >= 30 && bmi < 35) {
    return 40 + ((bmi - 24.5) * 16) / 5;
  } else if (bmi >= 35 && bmi < 40) {
    return 40 + ((bmi - 24.5) * 16) / 5;
  }
  return null;
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);

function changeBg() {
  let wrapper = document.querySelector(".header-wrapper");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    wrapper.classList.remove("bg-color");
  } else {
    wrapper.classList.add("bg-color");
  }
}
window.addEventListener("scroll", changeBg);
