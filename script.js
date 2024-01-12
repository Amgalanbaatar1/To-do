function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}
window.onload = function () {
  displayDate();
};
const tasks = [
  {
    id: 1,
    title: "Title 1",
    description: "description",
    priority: "High",
    status: "todo",
    position: 6,
  },

  {
    id: -1,
    title: "Title 2",
    description: "description",
    priority: "High",
    status: "inprogress",
    position: 2,
  },
  {
    id: -2,
    title: "Title 3",
    description: "description",
    priority: "Medium",
    status: "inprogress",
    position: 4,
  },
  {
    id: -3,
    title: "Title 4",
    description: "description",
    priority: "Low",
    status: "todo",
    position: 3,
  },
  {
    id: -4,
    title: "Title 5",
    description: "description",
    priority: "Low",
    status: "done",
    position: 1,
  },
  {
    id: -5,
    title: "Title 5",
    description: "description",
    priority: "Medium",
    status: "stuck",
    position: 5,
  },
];

let currentTarget = "todoTask";
let generatedId = 0;
let editingIndex;

function renderTasks() {
  const todoTaskElments = document.getElementById("todoTasks");
  const progressTaskElments = document.getElementById("progressTasks");
  const stuckTaskElments = document.getElementById("stuckTasks");
  const doneTaskElments = document.getElementById("doneTasks");

  let todoResult = "";
  let inprogressResult = "";
  let stuckResult = "";
  let doneResult = "";

  tasks.sort((a1, a2) => {
    return a1.position - a2.position;
  });

  for (let k = 0; k < tasks.length; k++) {
    const task = tasks[k];
    if ((task.title === "", task.des === "")) {
      alert("Ta utga oruulna uu?");
    } else {
      generatedId++;
      const taskHTML = `
      <div class="addedList" id="task-${generatedId}">
                <i style="position: absolute; top: 9px; left: 15px;font-size: 25px" class="fa-regular fa-circle-check"></i>
                <div class="titleDes">
                  <h2>${task.title}</h2>
                  <p>${task.des}</p>
                  <button style="border-radius: 5px;">${task.priority}</button>
                </div>
                <i onclick="removeBtn('task-${generatedId}')" style="position: absolute; top: 9px; right: 28px;font-size: 25px" class="fa-regular fa-circle-xmark"></i>
                <i onclick="editBtn()"style="position: absolute; top: 44px; right: 28px;font-size: 25px" class="fa-solid fa-pen-to-square"></i>
              </div>
    
      `;
      switch (task.status) {
        case "todo":
          todoResult += taskHTML;
          break;
        case "inprogress":
          inprogressResult += taskHTML;
          break;
        case "stuck":
          stuckResult += taskHTML;
          break;
        case "done":
          doneResult += taskHTML;
      }
    }
  }
  todoTaskElments.innerHTML = todoResult;
  progressTaskElments.innerHTML = inprogressResult;
  stuckTaskElments.innerHTML = stuckResult;
  doneTaskElments.innerHTML = doneResult;
}

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

  tasks.push({
    id: generatedId++,
    title: title,
    description: des,
    statusTasks: statusTasks,
    priority: priority,
  });
  renderTasks();
  hideModal();
  resetForm();
}

function removeBtn(taskId) {
  document.getElementById(taskId).remove();
}

function editBtn(index) {
  document.getElementById("titleInput").value = tasks[index].title;
  document.getElementById("description").value = tasks[index].description;
  document.getElementById("status").value = tasks[index].status;
  document.getElementById("taskPriority").value = tasks[index].priority;
}

renderTasks();
