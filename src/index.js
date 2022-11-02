import "./style.css";
import { initializeWebsite, createTasksContainer } from "./dom";
import { projects, addProject, addTask, removeTask, changeProject, whichActive } from "./handler"
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
    
    if (e.target.className === "delete-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeTask(targetId);
        render();
    }
    
    if (e.target.className === "enter-btn") {
        const taskInput = document.querySelector("#taskInput");
        const taskTitle = taskInput.value;
        addTask(taskTitle);
        render();
    }
})

content.addEventListener("mouseover", (e) => {
    if (e.target.className === "task-item") {
        const taskItems = document.querySelectorAll(".task-item");
        taskItems.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const elementId = item.dataset.itemId;
                const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
                element.classList.add("task-menu-visible");
            })
            item.addEventListener("mouseleave", () => {
                const elementId = item.dataset.itemId;
                const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
                element.classList.remove("task-menu-visible");
            })
        })
    }
})