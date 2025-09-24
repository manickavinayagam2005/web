const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span>${input.value}</span>
    <div>
      <button onclick="toggleComplete(this)">✔</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;
  taskList.appendChild(li);
  input.value = "";
}

function toggleComplete(btn) {
  btn.parentElement.previousElementSibling.classList.toggle("completed");
}
