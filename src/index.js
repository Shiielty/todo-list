import "./style.css";
import { initializeWebsite, createTasksContainer } from "./dom";
import { projects, addProject, addTask, removeTask, changeProject } from "./handler"
// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild(initializeWebsite());

const render = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    content.appendChild(initializeWebsite());
}

content.addEventListener("click", (e) => {
    if (e.target.className === "dev-test-button") {
        const targetProject = projects.find(project => project.status == "inactive");;
        changeProject(targetProject);
        render();
    }
})

content.addEventListener("mouseover", (e) => {
    if (e.target.className === "task-item" || e.target.className === "task-menu") {
        const targetId = e.target.dataset.itemId;
        const target = document.querySelector(`.task-menu[data-item-id="${targetId}"]`);
        target.classList.add("task-menu-visible");
    }
})

content.addEventListener("mouseout", (e) => {
    if (e.target.className === "task-item" || e.target.className === "task-menu") {
        const targets = document.querySelectorAll(".task-menu");
        targets.forEach((target) => target.classList.remove("task-menu-visible"))
    }
})