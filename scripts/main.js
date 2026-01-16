(function () {
  const loadGtag = () => {
    if (window.__gtagLoaded) return;
    window.__gtagLoaded = true;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-ZTEK44B8D6");

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZTEK44B8D6";
    document.head.appendChild(script);
  };

  const scheduleGtag = () => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadGtag, { timeout: 2000 });
      return;
    }
    setTimeout(loadGtag, 1200);
  };

  if (document.readyState === "complete") {
    scheduleGtag();
  } else {
    window.addEventListener("load", scheduleGtag, { once: true });
  }
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
