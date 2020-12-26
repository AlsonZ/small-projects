let carouselBackground = document.getElementById("carousel-background");
let carouselImage = document.getElementById("carousel-image");
let smallCarouselImageLinks = [
  "./images/small-images/1.jpg",
  "./images/small-images/2.jpg",
  "./images/small-images/3.jpg",
  "./images/small-images/4.jpg",
  "./images/small-images/5.jpg",
  "./images/small-images/6.jpg",
];
let carouselImageLinks = [
  "./images/big-images/1.jpg",
  "./images/big-images/2.jpg",
  "./images/big-images/3.jpg",
  "./images/big-images/4.jpg",
  "./images/big-images/5.jpg",
  "./images/big-images/6.jpg",
];
let currentImage = 0;

const preloadBigImage = (imageLink) => {
  let img = new Image();
  img.src = imageLink;
  img.onload = () => {
    setImage(carouselImageLinks[currentImage]);
  };
};

const setImage = (imageLink) => {
  carouselImage.src = imageLink;
  carouselImage.classList.add("load-image");
  setTimeout(() => {
    carouselImage.classList.remove("load-image");
  }, 1100);
};
const setSmallImage = (imageLink) => {
  preloadBigImage(imageLink);
  carouselBackground.style.backgroundImage = `url(${imageLink})`;
  setImage(imageLink);
};

setSmallImage(smallCarouselImageLinks[currentImage]);

const nextImage = () => {
  if (currentImage >= smallCarouselImageLinks.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  setSmallImage(smallCarouselImageLinks[currentImage]);
};

const previousImage = () => {
  if (currentImage <= 0) {
    currentImage = 4;
  } else {
    currentImage--;
  }
  setSmallImage(smallCarouselImageLinks[currentImage]);
};
