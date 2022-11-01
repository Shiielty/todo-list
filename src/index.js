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
    if (e.target.className === "task-item") {
        const elementId = e.target.dataset.itemId;
        const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
        element.classList.add("task-menu-visible");

        // This code will make the task menu disappear when the mouse isn't hover .task-item anymore.
        const taskItems = document.querySelectorAll(".task-item");
        taskItems.forEach((item) => {
            item.addEventListener("mouseleave", () => {
                const elementId = item.dataset.itemId;
                const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
                element.classList.remove("task-menu-visible");
            })
        })
    }
})