/* ================================
   🌟 Advanced Portfolio JS
================================ */

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ===== SCROLL REVEAL ANIMATION (AOS-like effect) ===== */
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* ===== TYPEWRITER EFFECT ===== */
const typeTarget = document.querySelector(".typing");
if (typeTarget) {
  const words = ["Frontend Developer", "Web Designer", "Cybersecurity Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  const type = () => {
    currentWord = words[wordIndex];
    if (isDeleting) {
      typeTarget.textContent = currentWord.substring(0, charIndex--);
    } else {
      typeTarget.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 80 : 150);
  };
  type();
}

/* ===== DARK/LIGHT MODE TOGGLE ===== */
const themeToggle = document.createElement("button");
themeToggle.innerHTML = "🌙";
themeToggle.classList.add("theme-toggle");
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

/* ===== RESUME DOWNLOAD MESSAGE ===== */
const resumeBtn = document.querySelector(".resume-btn .btn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("📄 Opening Resume in a new tab...");
  });
}

/* ===== FOOTER YEAR AUTO UPDATE ===== */
document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.querySelector(".footer-text");
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${year} • Made with ❤️ by <span>Manjunath</span>`;
  }
});
