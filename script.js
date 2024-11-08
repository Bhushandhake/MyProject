// Toggle Dark Mode and Video
const toggleButton = document.getElementById("toggle-dark-mode");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Toggle text on the button
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
