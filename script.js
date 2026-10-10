document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const heroTitle = document.querySelector(".hero-copy h1");

  if (heroTitle) {
    heroTitle.textContent = "Create a site people remember.";
  }

  console.log("Delightedtreats site loaded successfully.");
});
