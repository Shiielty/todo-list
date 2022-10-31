import "./style.css";
import { initializeWebsite, createTasksContainer } from "./dom";
import { projects, addProject, addTask, removeTask, changeProject } from "./handler"
// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild(initializeWebsite());

const main = document.querySelector("main");
let taskContainer = document.querySelector(".task-container");


// Controller

const render = () => {
    taskContainer.remove();
    main.appendChild(createTasksContainer());
    taskContainer = document.querySelector(".task-container");
}

content.addEventListener("click", (e) => {
    if (e.target.className === "dev-test-button") {
        const targetProject = projects.find(project => project.status == "inactive");;
        changeProject(targetProject);
        render();
    }
    // console.log(e);
})