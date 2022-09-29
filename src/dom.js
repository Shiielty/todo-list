const wrapper = document.createElement("div");

const header = document.createElement("header");
const main = document.createElement("main");

const title = document.createElement("h1");
const projectHeader = document.createElement("p");
const projectWrapper = document.createElement("div");
const projectTitle = document.createElement("p");
const addProjectBtn = document.createElement("button");
const taskWrapper = document.createElement("div");
const taskTitle = document.createElement("p");
const addTaskBtn = document.createElement("button");

projectHeader.classList.add("project-header");
projectWrapper.classList.add("project-wrapper");
addProjectBtn.classList.add("add-project-btn");
taskWrapper.classList.add("task-wrapper");
addTaskBtn.classList.add("add-task-btn");

title.textContent = "To-do List";
projectHeader.textContent = "Project";
projectTitle.textContent = "Default Project";
addProjectBtn.textContent = "+ Add Project";
taskTitle.textContent = "Example Task";
addTaskBtn.textContent = "+Add Task";

taskWrapper.appendChild(taskTitle);
main.appendChild(taskWrapper);
main.appendChild(addTaskBtn);

projectWrapper.appendChild(projectTitle);
header.appendChild(title);
header.appendChild(projectHeader);
header.appendChild(projectWrapper);
header.appendChild(addProjectBtn)

wrapper.appendChild(header);
wrapper.appendChild(main);

export { wrapper }
