document.addEventListener("DOMContentLoaded", function () {
  let elem = document.querySelector(".sidenav");
  M.Sidenav.init(elem);
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

function changeImage() {
  let imgArray = [
    "/assets/images/sidenav/mario_side.png",
    "/assets/images/sidenav/luigi_side.png",
    "/assets/images/sidenav/peach_side.png",
    "/assets/images/sidenav/daisy_side.png",
    "/assets/images/sidenav/harmony_side.png",
    "/assets/images/sidenav/donkey_side.png",
    "/assets/images/sidenav/boo_side.png",
    "/assets/images/sidenav/bowser_side.png",
    "/assets/images/sidenav/bowserJr_side.png",
    "/assets/images/sidenav/babyMario_side.png",
    "/assets/images/sidenav/toad_side.png",
    "/assets/images/sidenav/wario_side.png",
    "/assets/images/sidenav/waluigi_side.png",
    "/assets/images/sidenav/toadette_side.png",
    "/assets/images/sidenav/yoshi_side.png",
    "/assets/images/sidenav/cloud_side.png",
    "/assets/images/sidenav/mask_side.png",
    "/assets/images/sidenav/koopa_side.png",
  ];
  let images = document.getElementById("img-sidenav_0");
  let src = images.getAttribute("src");
  src = imgArray[Math.floor(Math.random() * imgArray.length)];
  images.setAttribute("src", src);
}
