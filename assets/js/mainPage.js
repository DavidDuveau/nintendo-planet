document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".sidenav");
  let instances = M.Sidenav.init(elems);
});

/* function changeImage() {
  let images = document.getElementById("img-sidenav_0");
  let src = images.getAttribute("src");
  if (src == "/assets/images/mushroom.png") {
    src = "/assets/images/star.png";
  } else if (src == "/assets/images/star.png") {
    src = "/assets/images/coin.png";
  } else {
    src = "/assets/images/mushroom.png";
  }
  images.setAttribute("src", src);
} */

// fonction pour changer l'image de la sidenav onclick
let i = 0;
function changeImage() {
  let imgArray = [
    "/assets/images/mushroom.png",
    "/assets/images/star.png",
    "/assets/images/coin.png",
    "/assets/images/triforce.png",
    "/assets/images/link.png",
    "/assets/images/boo.png",
    "/assets/images/m_bros.png",
    "/assets/images/mask.png",
    "/assets/images/yoshi.png",
  ];
  let images = document.getElementById("img-sidenav_0");
  let src = images.getAttribute("src");
  i = Math.floor(Math.random() * 9);
  src = imgArray[i];
  images.setAttribute("src", src);
}
