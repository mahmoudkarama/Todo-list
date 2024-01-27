let savedTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
let taskList = document.querySelector("#taskList");
// add tasks to page from local storage
savedTasks.forEach((task) => {
    addTaskToPage(task);
});
// add tasks to local storage
window.addTask = function () {
    let taskInput = document.querySelector("#taskInput");
    let taskText = taskInput.value.trim();

    if (taskText != "") {
        savedTasks.push(taskText);
        window.localStorage.setItem("tasks", JSON.stringify(savedTasks));

        addTaskToPage(taskText);

        taskInput.value = "";
    }
}
// add task to page
function addTaskToPage(task) {
    const newTask = document.createElement("li");

    const taskTxt = document.createElement("span");
    taskTxt.innerHTML = task;

    // const dateTxt = document.createElement("span");
    // let date = new Date();
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDay();
    // let dateSlash = [day, month, year].join("/");
    // dateTxt.innerHTML = dateSlash;

    const taskDel = document.createElement("button"); 
    taskDel.innerHTML = "Delet";  
    taskDel.id = "del";

    newTask.appendChild(taskTxt);
    // newTask.appendChild(dateTxt);
    newTask.appendChild(taskDel);
    taskList.appendChild(newTask);
}
// delete task
document.addEventListener("click", (e) => {
    //delet from page
    if (e.target.id == "del") {
        let element = e.target.parentElement;
        element.remove();

        // delet from localStorage
        let localStorageElement = e.target.previousElementSibling.innerHTML;
        // let index = savedTasks.indexOf(localStorageElement);
        // if (index != -1) {
        //     savedTasks.splice(index, 1);
        //     localStorage.setItem("tasks", JSON.stringify(savedTasks));
        // }
        savedTasks.splice(savedTasks.indexOf(localStorageElement), 1);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }




})

