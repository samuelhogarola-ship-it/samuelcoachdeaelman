const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    mobileMenu.classList.toggle("is-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
      mobileMenu.classList.remove("is-open");
    });
  });
}

window.siteHooks = {
  initAnalytics(tracker) {
    if (typeof tracker === "function") tracker();
  },
  initForm(handler) {
    if (typeof handler === "function") handler();
  }
};
