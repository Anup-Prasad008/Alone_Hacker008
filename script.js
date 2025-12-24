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
