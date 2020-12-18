let backgroundImage = document.getElementById("image1");

const preloadImage = (url) => {
  let img = new Image();
  img.src = url;
  img.onload = () => {
    backgroundImage.classList.add("load-image");
  };
};

preloadImage("./big-image.jpg");
