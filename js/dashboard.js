const currentDate = document.querySelector(".date");
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
let days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

today = `${dd}/${mm}/${yyyy}`;
currentDate.innerHTML = `${today} <i class="fas fa-search"></i>`;
