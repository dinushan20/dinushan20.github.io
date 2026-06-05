document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-link");
const sectionNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.querySelector("#year");
const portraitImage = document.querySelector(".portrait-img");
const projectImages = document.querySelectorAll(".project-image img");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");

    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!siteNav || !navToggle) return;

    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeId = entry.target.getAttribute("id");

        sectionNavLinks.forEach((link) => {
          const linkTarget = link.getAttribute("href");

          if (linkTarget === `#${activeId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    },
    {
      threshold: 0.35,
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

if (portraitImage) {
  portraitImage.addEventListener("error", () => {
    portraitImage.style.display = "none";
  });
}

projectImages.forEach((image) => {
  image.addEventListener("error", () => {
    const imageBox = image.closest(".project-image");

    if (!imageBox) return;

    image.style.display = "none";
    imageBox.classList.add("image-missing");
    imageBox.innerHTML = "<span>Project image</span>";
  });
});
