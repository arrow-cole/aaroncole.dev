// Control banner visibility based on the `data-visible` attribute
        document.addEventListener("DOMContentLoaded", () => {
            const banner = document.getElementById("banner");
            const isVisible = banner.getAttribute("data-visible") === "true"; // TRUE = visible, FALSE = hidden

                banner.style.display = isVisible ? "block" : "none"; // Hide the banner if not visible
            });