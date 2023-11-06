document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = passwordInput.value;
  
      if (username === "testuser" && password === "password123") {
        alert("Login successful!");
        window.location.href = "content.html"; // Redirect to the content page after successful login
      } else {
        alert("Login failed. Please check your credentials.");
      }
    });
  
    function togglePasswordVisibility() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  
    showPasswordButton.addEventListener("click", togglePasswordVisibility);
  });
  