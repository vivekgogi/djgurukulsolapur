// For Responsive Header
const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", (e) => {
  header.classList.toggle("active");
});

// For Teaching Support Table Data
document.addEventListener("DOMContentLoaded", function () {
  fetch("../data/teaching_support.json")
    .then((response) => response.json())
    .then((data) => {
      for (let section in data) {
        let table = document.querySelector("#" + section + " table tbody");
        data[section].forEach((item) => {
          let row = document.createElement("tr");
          for (let key in item) {
            let cell = document.createElement("td");
            cell.textContent = item[key];
            row.appendChild(cell);
          }
          table.appendChild(row);
        });
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// For Initializing AOS Library
document.addEventListener("DOMContentLoaded", function () {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/aos@next/dist/aos.css";
  document.head.appendChild(link);

  var script = document.createElement("script");
  script.src = "https://unpkg.com/aos@next/dist/aos.js";
  document.head.appendChild(script);

  script.onload = function () {
    AOS.init();
  };
});

// For Current Year in Main Footer
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent =
  "Copyright © " + currentYear;
