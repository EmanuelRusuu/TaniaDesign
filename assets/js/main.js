/* =============================================================
   Portfolio — small progressive-enhancement script.
   Nothing here is required for the content to work; it just adds
   the theme toggle, mobile menu, sticky-header shadow and reveals.
   ============================================================= */
(function () {
  "use strict";

  /* ---- Theme (light / dark) with saved preference ---- */
  var root = document.documentElement;
  var STORAGE_KEY = "tania-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  // Initial theme: saved choice > OS preference > light
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  document.addEventListener("click", function (e) {
    var toggle = e.target.closest && e.target.closest(".theme-toggle");
    if (!toggle) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (err) {}
  });

  /* ---- Mobile navigation ---- */
  var navToggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelector(".nav__links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping a link
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Sticky header hairline once scrolled ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal (respects reduced-motion) ---- */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Set current year in footers ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
