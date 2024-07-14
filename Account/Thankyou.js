function success() {
  document.getElementsByClassName("popup")[0].classList.add("active");
}
success();
document
  .getElementById("dismiss-popup-btn")
  .addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });
document.getElementById("dismiss-btn").onclick = function () {
  location.href = "/miniproject2/Index.html";
};