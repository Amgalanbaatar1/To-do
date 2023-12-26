function showModal() {
  const modal = document.getElementById("createModal");

  modal.style.display = "flex";
  console.log(modal);
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

window.onload = function () {
  displayDate();
};
