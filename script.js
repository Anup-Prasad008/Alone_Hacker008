function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function animateAndOpen() {
  const btn = document.getElementById("glowBtn");

  // Step 1: Glow + zoom
  btn.classList.add("active");

  // Step 2: After animation → scroll
  setTimeout(() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });

    // Step 3: Reset button
    btn.classList.remove("active");
  }, 400);
}
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
    }
