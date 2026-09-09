/* =========================================================
   FRAMLIL GENERAL ENTERPRISE LTD.
   Website JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= SUPPLIER FORM ================= */

const supplierForm = document.getElementById("supplierForm");

if (supplierForm) {

    supplierForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const location =
            document.getElementById("location").value.trim();

        const produce =
            document.getElementById("produce").value;

        const quantity =
            document.getElementById("quantity").value.trim();

        const contactTime =
            document.getElementById("contactTime").value.trim();

        const additionalInfo =
            document.getElementById("additionalInfo").value.trim();


        if (
            !fullName ||
            !phone ||
            !location ||
            !produce ||
            !quantity
        ) {

            alert("Please fill in all required fields.");

            return;
        }


        const message =
            "Hello Framlil General Enterprise Ltd.%0A%0A" +

            "*Farmer / Supplier Enquiry*%0A%0A" +

            "Name: " + encodeURIComponent(fullName) + "%0A" +

            "Phone: " + encodeURIComponent(phone) + "%0A" +

            "Farm Location: " +
            encodeURIComponent(location) + "%0A" +

            "Produce: " +
            encodeURIComponent(produce) + "%0A" +

            "Estimated Quantity: " +
            encodeURIComponent(quantity) + "%0A" +

            "Preferred Contact Time: " +
            encodeURIComponent(
                contactTime || "Not specified"
            ) + "%0A%0A" +

            "Additional Information: " +
            encodeURIComponent(
                additionalInfo || "None"
            );


        const whatsappNumber = "254717417125";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            message;


        window.open(
            whatsappURL,
            "_blank",
            "noopener"
        );

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= IMAGE ERROR CHECK ================= */

const websiteImages =
    document.querySelectorAll("img");

websiteImages.forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "Framlil image could not be loaded:",
            image.getAttribute("src")
        );

    });

});


/* ================= PAGE LOADED ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Framlil General Enterprise Ltd. website loaded successfully."
        );

    }
);