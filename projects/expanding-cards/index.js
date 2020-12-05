let card = document.getElementsByClassName("card");
let isActive = 0;

const setImage = (id) => {
  card[id].children[0].src = window.localStorage.getItem("Image" + id);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  let url = document.getElementById("url").value;
  if (url != null && url.trim() != "") {
    window.localStorage.setItem("Image" + isActive, url);
    setImage(isActive);
    document.getElementById("url").value = "";
  }
};

const setImages = () => {
  for (let id = 0; id < card.length; id++) {
    card[id].addEventListener("click", () => {
      onCardClick(id);
    });
    setImage(id);
  }
};

const setDefaultImages = () => {
  let defaultImages = [
    "https://picsum.photos/id/1022/800/600",
    "https://picsum.photos/id/1035/800/600",
    "https://picsum.photos/id/1049/800/600",
    "https://picsum.photos/id/1051/800/600",
    "https://picsum.photos/id/1004/800/600",
  ];
  for (let id = 0; id < defaultImages.length; id++) {
    window.localStorage.setItem("Image" + id, defaultImages[id]);
  }
};

const activateCard = (id) => {
  card[isActive].classList.remove("active");
  card[id].classList.add("active");
  isActive = id;
};

const onCardClick = (id) => {
  if (card[id].classList.contains("active")) {
    card[isActive].classList.remove("active");
  } else {
    activateCard(id);
  }
};

const onResetDefault = () => {
  setDefaultImages();
  setImages();
};

if (window.localStorage.getItem("Image" + 0) == null) {
  setDefaultImages();
}

setImages();
