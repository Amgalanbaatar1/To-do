function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}
window.onload = function () {
  displayDate();
};

let currentTarget = "todoTask";
let generatedId = 0;

function resetForm() {
  document.getElementById("titleInput").value = "";
  document.getElementById("description").value = "";
}

function showModal(targetId) {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  currentTarget = targetId;
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function addTask() {
  const title = document.getElementById("titleInput").value;
  const des = document.getElementById("description").value;
  const statusTasks = document.getElementById("status").value;
  const priority = document.getElementById("taskPriority").value;

  generatedId++;
  const taskHTML = `
  <div class="addedList" id="task-${generatedId}">
            <i style="position: absolute; top: 9px; left: 15px;font-size: 25px" class="fa-regular fa-circle-check"></i>
            <div class="titleDes">
              <h2>${title}</h2>
              <p>${des}</p>
              <button style="border-radius: 5px;">${priority}</button>
            </div>
            <i onclick="removeBtn('task-${generatedId}')" style="position: absolute; top: 9px; right: 28px;font-size: 25px" class="fa-regular fa-circle-xmark"></i>
            <i style="position: absolute; top: 44px; right: 28px;font-size: 25px" class="fa-solid fa-pen-to-square"></i>
          </div>

  `;
  const todoElment = document.getElementById(currentTarget);
  todoElment.innerHTML = todoElment.innerHTML + taskHTML;

  hideModal();

  resetForm();
}

function removeBtn(taskId) {
  document.getElementById(taskId).remove();
}
