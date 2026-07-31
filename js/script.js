/* ===================================================
   Job Portal - Basic JavaScript
   Only simple form validation and show/hide password
   =================================================== */

/* ---------- Login Form Validation ---------- */
var loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
    } else {
      alert("Login successful! (This is a demo website)");
      loginForm.reset();
    }
  });
}

/* ---------- Show / Hide Password on Login page ---------- */
var showLoginPassword = document.getElementById("showLoginPassword");

if (showLoginPassword) {
  showLoginPassword.addEventListener("change", function () {
    var passwordBox = document.getElementById("loginPassword");

    if (showLoginPassword.checked) {
      passwordBox.type = "text";
    } else {
      passwordBox.type = "password";
    }
  });
}

/* ---------- Register Form Validation ---------- */
var registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("regName").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    var confirm = document.getElementById("regConfirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
      alert("Please fill in all the fields.");
    } else if (password !== confirm) {
      alert("Password and Confirm Password do not match.");
    } else {
      alert("Registration successful! (This is a demo website)");
      registerForm.reset();
    }
  });
}

/* ---------- Show / Hide Password on Register page ---------- */
var showRegPassword = document.getElementById("showRegPassword");

if (showRegPassword) {
  showRegPassword.addEventListener("change", function () {
    var pass1 = document.getElementById("regPassword");
    var pass2 = document.getElementById("regConfirm");

    if (showRegPassword.checked) {
      pass1.type = "text";
      pass2.type = "text";
    } else {
      pass1.type = "password";
      pass2.type = "password";
    }
  });
}

/* ---------- Apply Job Form Validation ---------- */
var applyForm = document.getElementById("applyForm");

if (applyForm) {
  applyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("applyName").value;
    var email = document.getElementById("applyEmail").value;
    var phone = document.getElementById("applyPhone").value;

    if (name === "" || email === "" || phone === "") {
      alert("Please fill in your name, email and phone number.");
    } else {
      alert("Your application has been submitted! (This is a demo website)");
      applyForm.reset();
    }
  });
}

/* ---------- Contact Form Validation ---------- */
var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all the fields before sending.");
    } else {
      alert("Thank you! Your message has been sent. (This is a demo website)");
      contactForm.reset();
    }
  });
}