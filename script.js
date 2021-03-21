let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
let box10 = document.querySelector(".box10");
let logo = document.querySelector(".logo");
let getStartedButton = document.querySelector(".get-started-button");
let tryGenerator = document.querySelector(".try-generator");
let pencilIcon = document.querySelector(".offers-icon-container1");
let configuratinIcon = document.querySelector(".cog-icon");
let accauntCreateButton = document.querySelector(".create-accaunt-button");
let contactButton = document.querySelector(".contact-button");
let viewPostsButton = document.querySelector(".view-posts");

let colorsArr = [
  "#00EDBC",
  "#EB00F5",
  "#007BFE",
  "#FF002A",
  "#00EA80",
  "#225BFD",
  "#FF8B00",
  "#00E9FF",
  "#FFE910",
  "#FF0047",
];

let arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10];

for (let i = 0; i < arr.length; i++) {
  arr[i].style.backgroundColor = colorsArr[i];
  arr[i].onclick = function () {
    arr[i].style.outline = "3px solid grey";
    logo.style.color = arr[i].style.backgroundColor;
    getStartedButton.style.backgroundColor = arr[i].style.backgroundColor;
    tryGenerator.style.color = arr[i].style.backgroundColor;
    pencilIcon.style.color = arr[i].style.backgroundColor;
    configuratinIcon.style.color = arr[i].style.backgroundColor;
    accauntCreateButton.style.backgroundColor = arr[i].style.backgroundColor;
    contactButton.style.backgroundColor = arr[i].style.backgroundColor;
    viewPostsButton.style.backgroundColor = arr[i].style.backgroundColor;
  };
}

let colorIcon = document.querySelector(".cog-icon");
let colors = document.querySelector(".colors");

colorIcon.addEventListener("click", changePlace);

function changePlace() {
  colors.classList.toggle("place");
  colors.style.transitionDuration = "1s";
}

let nav = document.querySelector("nav");
let scrollTopButton = document.querySelector(".scroll-top");

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > 600) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

scrollTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let menuButton = document.querySelector(".menu-bar-container");
let menu = document.querySelector(".menu");
menuButton.onclick = function () {
  menu.classList.toggle("show");
};

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 2000);
