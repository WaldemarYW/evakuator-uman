(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-ZTEK44B8D6");
})();

(function () {
  const scrollButton = document.querySelector(".scroll-top");
  const callButton = document.querySelector(".call-float");
  if (!scrollButton) return;

  const THRESHOLD = 200;

  const toggleVisibility = () => {
    if (window.scrollY > THRESHOLD) {
      scrollButton.classList.remove("hidden");
      callButton?.classList.remove("hidden");
    } else {
      scrollButton.classList.add("hidden");
      callButton?.classList.add("hidden");
    }
  };

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  window.addEventListener("load", toggleVisibility);
  toggleVisibility();
})();
