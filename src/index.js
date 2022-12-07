import "./style.css";
import { initializeWebsite, createTasksContainer, createForm } from "./dom";
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

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

content.addEventListener("click", (e) => {
    if (e.target.className === "dev-test-button") {
        const targetProject = projects.find(project => project.status == "inactive");;
        changeProject(targetProject);
        render();
    }

    if (e.target.className == "edit-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        const checklist = e.target.parentNode.parentNode;
        const activeProject = whichActive(projects);
        insertAfter(createForm(activeProject.tasks[targetId].title, activeProject.tasks[targetId].dueDate, activeProject.tasks[targetId].priority, activeProject.tasks[targetId].description, targetId), checklist);
        checklist.style.display = "none";
        console.log(e.target.parentNode.parentNode);
    }
    
    if (e.target.className === "delete-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeTask(targetId);
        render();
    }
    
    if (e.target.className === "submit-btn") {
        const taskTitle = document.querySelector("input#taskTitle");
        const taskDueDate = document.querySelector("input#dueDate");
        const taskPriority = document.querySelector("select#task-priority");
        const taskDescription = document.querySelector("input#taskDesc");
        const title = taskTitle.value;
        const dueDate = taskDueDate.value;
        const priority = taskPriority.value;
        const description = taskDescription.value;
        const taskTitleTrim = title.trim();
        if (title != "" && taskTitleTrim != "") {
            addTask(title, dueDate, priority, description);
            console.table(projects)
            render();
        }
    }

    if (e.target.className === "add-task") {
        insertAfter(createForm("", "2022-01-01", "normal", ""), e.originalTarget.parentNode);
        e.originalTarget.style.display = "none";
    }

    if (e.target.className === "close-btn") {
        const formId = e.target.parentNode.attributes[1].value;

        if (formId === "none") {
            const addTaskBtn = document.querySelector(".add-task");
            addTaskBtn.style.display = "block";
            e.target.parentNode.remove();
        } else {
            const checklist = e.target.parentNode.previousSibling;
            checklist.style.display = "flex";
            e.target.parentNode.remove();
        }
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