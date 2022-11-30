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

const cursorFocus = (elementSelector) => {
    const target = document.querySelector(elementSelector);
    target.focus();
    target.select();
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
        const taskDueDate = document.querySelector("input#dueDate");
        const taskPriority = document.querySelector("select#task-priority");
        const taskDescription = document.querySelector("input#taskDesc");
        const taskTitle = taskInput.value;
        const dueDate = taskDueDate.value;
        const priority = taskPriority.value;
        const description = taskDescription.value;
        const taskTitleTrim = taskTitle.trim();
        if (taskTitle != "" && taskTitleTrim != "") {
            addTask(taskTitle, dueDate, priority, description);
            console.table(projects)
            render();
        }
    }

    if (e.target.id === "taskInput") {
        const form = document.querySelector(".task-container > div.form");
        form.classList.toggle("form-active");
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

content.addEventListener("keypress", (e) => {    
    if (e.target.id === "taskInput" || e.target.id === "taskDesc") {
        if (e.key === "Enter") {
            e.preventDefault();
            document.querySelector(".enter-btn").click();
            cursorFocus("#taskInput");
            const form = document.querySelector(".task-container > div.form");
            form.classList.add("form-active");
        }
    }
})

content.addEventListener("input", (e) => {
    if (e.target.id === "taskInput") {
        const form = document.querySelector(".task-container > div.form");
        form.classList.add("form-active");
    }
})