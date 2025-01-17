document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0";
          entry.target.style.transitionDelay = `${delay / 1000}s`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeInElements.forEach((el) => observer.observe(el));

  function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = "alert";
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    alertContainer.appendChild(alert);

    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, 5000);
  }
});

document.querySelectorAll(".nav-item.dropdown").forEach(function (dropdown) {
  dropdown.addEventListener("mouseover", function () {
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    if (toggle) {
      const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
      instance.show();
    }
  });

  dropdown.addEventListener("mouseleave", function () {
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    if (toggle) {
      const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
      instance.hide();
    }
  });
});
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.style.display = "block";
    setTimeout(() => {
      popupMessage.style.display = "none";
    }, 3000);
  });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const popupMessage = document.getElementById("popupMessageContact");
      popupMessage.style.display = "block";
      setTimeout(() => {
        popupMessage.style.display = "none";
      }, 3000);
    });
}
