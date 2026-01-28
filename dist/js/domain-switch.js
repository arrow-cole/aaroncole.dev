const domain = window.location.hostname.toLowerCase();

// DEFAULT (aaroncole.dev)
let firstName = "Aaron";
let lastName = "Cole";
let fullName = "Aaron Cole";
let pageTitle = "Aaron Cole Portfolio";
let accentColor = "#f7c08a"; // keep close to your theme

// ARROWCOLE DOMAIN
if (domain.includes("arrowcole.us")) {
  firstName = "Arrow";
  lastName = "Cole";
  fullName = "Arrow Cole";
  pageTitle = "Arrow Cole Portfolio";
  accentColor = "#22c55e";
}

// APPLY PAGE TITLE
document.title = pageTitle;

// CHANGE HERO NAME
const nameHeading = document.querySelector(".lg-heading");

if (nameHeading) {
  nameHeading.innerHTML = `
    ${firstName} <span class="text-secondary">${lastName}</span>
  `;
}

// OPTIONAL: Change favicon per domain
const favicon = document.querySelector("link[rel='icon']");

if (favicon && domain.includes("arrowcole.us")) {
  favicon.href = "dist/img/favicon-arrow.png"; // optional second icon
}

// OPTIONAL: CSS accent override
document.documentElement.style.setProperty("--secondary-color", accentColor);

// Console log (for testing)
console.log("Domain branding loaded for:", fullName);
