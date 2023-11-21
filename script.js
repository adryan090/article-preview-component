const shareButton = document.querySelector(".share-icon");
const socialIcons = document.querySelector(".social-buttons");
shareButton.addEventListener("click", () => {
  socialIcons.classList.toggle("hidden");
  shareButton.classList.toggle("active");
});
