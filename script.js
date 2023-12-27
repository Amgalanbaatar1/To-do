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

function addTask() {
  const title = document.getElementById("titleInput").value;
  const des = document.getElementById("description").value;

  const taskHTML = ` <div class="addedList">${title} </br>${des}</div>`;

  const todoElment = document.getElementById("todoTasks");

  todoElment.innerHTML = todoElment.innerHTML + taskHTML;

  hideModal();

  document.getElementById("titleInput").value = "";
  document.getElementById("description").value = "";
}
