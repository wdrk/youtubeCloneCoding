const moreBtn = document.querySelector(
  ".infoAndUpNext .info .metadata .titleAndButton .moreBtn"
);
const title = document.querySelector(
  ".infoAndUpNext .info .metadata .titleAndButton .title"
);

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
