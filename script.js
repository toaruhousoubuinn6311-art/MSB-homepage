
// GSAP animation for hero text
gsap.from(".hero-text", { duration: 2, opacity: 0, y: -50, ease: "power3.out" });

// Password authentication
function authenticate() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  if (password === "MSB@2025") {
    document.getElementById("anonymous-comments").style.display = "none";
    document.getElementById("full-members").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "パスワードが違います。";
  }
}
``
