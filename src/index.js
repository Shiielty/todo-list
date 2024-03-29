import "./style.css";
import { initializeWebsite, createTasksHeader, createTasksContainer, createForm, createProjectsList, createInputEdit} from "./dom";
import { projects, addProject, addTask, editTask, removeTask, changeProject, removeProject, whichActive } from "./handler"

const content = document.querySelector("#content");
let isInputActive = false;

content.appendChild(initializeWebsite());

const renderAll = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    content.appendChild(initializeWebsite());
    isInputActive = false;
}

const renderProjectList = () => {
    const main = document.querySelector("main");
    main.replaceChildren(createProjectsList());
    changeProjectTitleDisplay();
    isInputActive = false;
}

const cursorFocus = (element) => {
    const target = element;
    target.focus();
    target.select();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const displayOnHover = (items) => {
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            if (!isInputActive) {
                const elementId = item.dataset.itemId;
                const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
                element.classList.add("task-menu-visible");
            }
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

const todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

content.addEventListener("click", (e) => {
    if (e.target.className === "projects-menu") {
        isInputActive = false;
        const main = document.querySelector("main");
        if (main.childNodes.length > 1){
            main.replaceChildren(createProjectsList());
        } else {
            main.replaceChildren(createTasksHeader(), createTasksContainer());
            changeProjectTitleDisplay();
        }
    }

    if (e.target.className == "edit-task-btn") {
        isInputActive = true;
        const targetId = e.target.parentNode.dataset.itemId;
        const checklist = e.target.parentNode.parentNode;
        const activeProject = whichActive(projects);
        insertAfter(createForm(activeProject.tasks[targetId].title, activeProject.tasks[targetId].dueDate, activeProject.tasks[targetId].priority, activeProject.tasks[targetId].description, targetId), checklist);
        checklist.style.display = "none";
    }
    
    if (e.target.className === "delete-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeTask(targetId);
        renderAll();
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
            renderAll();
        }
    }

    if (e.target.className === "add-task") {
        isInputActive = true;
        insertAfter(createForm("", todayDate(), "normal", ""), e.originalTarget.parentNode);
        e.originalTarget.style.display = "none";
    }

    if (e.target.className === "close-btn") {
        isInputActive = false;
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
        renderAll();
    }

    if (e.target.className === "add-project-btn") {
        const addProjectInput = document.querySelector("#addProject");
        const projectTitle = addProjectInput.value;
        const projectTitleTrim = projectTitle.trim();

        if (projectTitle != "" && projectTitleTrim != "") {
            addProject(projectTitle, projects);
            renderProjectList();
        }
    }
    
    if (e.target.className === "delete-project-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        removeProject(targetId);
        renderProjectList();
    }

    if (e.target.className === "edit-project-btn") {
        isInputActive = true;
        const targetList = e.target.parentNode.parentNode;
        const targetId = e.target.parentNode.dataset.itemId;
        targetList.style.display = "none";
        insertAfter(createInputEdit(targetId, projects[targetId].projectTitle), targetList);
        cursorFocus(targetList.nextSibling.firstChild);
    }

    if (e.target.className === "confirm-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        const editInput = e.target.parentNode.firstChild;
        const projectTitle = editInput.value;
        const projectTitleTrim = projectTitle.trim();

        if (projectTitle != "" && projectTitleTrim != "") {
            projects[targetId].projectTitle = projectTitle;
            console.log(projects)
            renderProjectList();
        }
    }

    if (e.target.className === "cancel-btn") {
        renderProjectList();
    }
})

content.addEventListener("mouseover", (e) => {
    if (e.target.className.includes("task-item") && isInputActive == false) {
        const taskItems = document.querySelectorAll(".task-item");
        displayOnHover(taskItems);
    }

    if (e.target.className.includes("project-item") && isInputActive == false) {
        const projectItems = document.querySelectorAll(".project-item");
        displayOnHover(projectItems);
    }
})

content.addEventListener("change", (e) => {
    if (e.target.type == "checkbox") {
        if (e.target.checked) {
            whichActive(projects).tasks[e.target.id].checked = "true";
            
        } else {
            whichActive(projects).tasks[e.target.id].checked = "false";
        }
        
        const headerSubtitle2 = document.querySelector("header>p:nth-of-type(1)");
        let taskRemaining = whichActive(projects).tasks.filter((task) => task.checked == "false").length;
        headerSubtitle2.textContent = `You have ${taskRemaining} task left to do,`;
    }
})