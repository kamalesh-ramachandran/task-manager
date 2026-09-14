function addTask() {
    const input = document.querySelector("input");
    const taskList = document.querySelector("ul");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);

    input.value = "";
}