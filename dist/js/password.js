// Passwords mapped to their redirect pages
const passwords = {
  "City8map": "github", // Admin
  "aBcDeFgHiJkLmNoPqRsTuVwXyZ": "../404", // User
};

document.getElementById("loginBtn").addEventListener("click", login);

function login() {
  const password = document.getElementById("password").value;
  const messageEl = document.getElementById("message");

  if (!password) {
    messageEl.style.color = "red";
    messageEl.textContent = "Please enter the password.";
    return;
  }

  if (passwords[password]) {
    messageEl.style.color = "green";
    messageEl.textContent = "Password accepted. Redirecting...";
    setTimeout(() => {
      window.location.href = passwords[password];
    }, 1000);
  } else {
    messageEl.style.color = "red";
    messageEl.textContent = "Incorrect password. / Access denied.";
  }
}