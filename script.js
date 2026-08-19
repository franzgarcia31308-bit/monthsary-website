const button = document.getElementById("reasonsButton");
const reasons = document.getElementById("reasons");

button.addEventListener("click", function() {
    reasons.classList.toggle("show");
});