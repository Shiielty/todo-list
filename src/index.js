import "./style.css";
import { initializeWebsite, createTasksHeader, createTasksContainer, createForm, createProjectsList } from "./dom";
import { projects, addProject, addTask, editTask, removeTask, changeProject, removeProject, whichActive } from "./handler"
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

const displayOnHover = (items) => {
    items.forEach((item) => {
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

const changeProjectTitleDisplay = () => {
    const projectName = document.querySelector("nav>button:first-of-type")
    projectName.textContent = whichActive(projects).projectTitle;
}

content.addEventListener("click", (e) => {
    if (e.target.className === "projects-menu") {
        const main = document.querySelector("main");
        if (main.childNodes.length == 2){
            main.replaceChildren(createProjectsList());
        } else {
            main.replaceChildren(createTasksHeader(), createTasksContainer());
            changeProjectTitleDisplay();
        }
    }

    if (e.target.className == "edit-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        const checklist = e.target.parentNode.parentNode;
        const activeProject = whichActive(projects);
        insertAfter(createForm(activeProject.tasks[targetId].title, activeProject.tasks[targetId].dueDate, activeProject.tasks[targetId].priority, activeProject.tasks[targetId].description, targetId), checklist);
        checklist.style.display = "none";
        console.log(e.target.parentNode.parentNode);
    }
    
    if (e.target.className === "delete-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeTask(targetId);
        render();
    }
    
    if (e.target.className === "submit-btn") {
        const formId = e.target.parentNode.attributes[1].value;
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
            if (formId === "none") {
                addTask(title, dueDate, priority, description);
            } else {
                editTask(title, dueDate, priority, description, formId);
            }
            // console.table(projects)
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

    if (e.target.className === "project-item") {
        const targetId = e.target.dataset.itemId;
        changeProject(projects[targetId]);
        render();
    }

    // if (e.target.className === "edit-project-btn") {

    // }

    if (e.target.className === "delete-project-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeProject(targetId);
        const main = document.querySelector("main");
        main.replaceChildren(createProjectsList());
        changeProjectTitleDisplay();
    }
})

content.addEventListener("mouseover", (e) => {
    if (e.target.className === "task-item" || e.target.className === "project-item") {
        switch (e.target.className) {
            case "task-item":
                const taskItems = document.querySelectorAll(".task-item");
                displayOnHover(taskItems);
                break;
            case "project-item":
                const projectItems = document.querySelectorAll(".project-item");
                displayOnHover(projectItems);
                break
            default:
                break;
        }
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