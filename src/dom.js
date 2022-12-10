import { projects, whichActive, test, addTask } from './handler';
import Menu from './public/hamburger.png';
import Bin from './public/bin.png';
import Edit from './public/editing.png';
import Enter from './public/enter.png';
import UpArrow from './public/up-arrow-icon.png';
import Checkmark from './public/checkmark-icon.png';
import Multiply from './public/multiply-icon.png';

const createParagraph = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

const createImage = (image) => {
    const img = new Image();
    img.src = image;

    return img;
}

const createList = (text) => {
    const li = document.createElement("li");
    li.textContent = text;

    return li;
}

const createInput = (id, type) => {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.setAttribute("type", type);

    return input;
}

const createLabel = (id, labelText) => {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    return label;
}

const createTaskItem = (id, labelText, checked) => {
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item");
    taskItem.dataset.itemId = id;
    const input = createInput(id, "checkbox");

    if (checked == "true") {
        input.checked = true;
    }

    const label = createLabel(id, labelText);

    taskItem.appendChild(input);
    taskItem.appendChild(label);

    return taskItem;
}

const createMenuButton = (id, editBtnClass, deleteBtnClass) => {
    const menuButton = document.createElement("div");
    menuButton.classList.add("task-menu");
    menuButton.dataset.itemId = id;

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    const editIcon = createImage(Edit);
    const deleteIcon = createImage(Bin);

    editBtn.classList.add(editBtnClass);
    deleteBtn.classList.add(deleteBtnClass)

    editBtn.appendChild(editIcon);
    deleteBtn.appendChild(deleteIcon);
    menuButton.appendChild(editBtn);
    menuButton.appendChild(deleteBtn);

    return menuButton;
}

const createTextInput = (id, labelText, placeholder="") => {
    const textInput = document.createElement("div");
    const input = createInput(id, "text");
    input.setAttribute("placeholder", placeholder);
    
    const label = createLabel(id, labelText);
    
    textInput.appendChild(label);
    textInput.appendChild(input);
    
    return textInput;
} 

const createOption = (value) => {
    const option = document.createElement("option");
    option.setAttribute("value", value.toLowerCase());
    option.textContent = value;

    return option;
}

const createForm = (titleValue, dueDateValue, priorityValue, descriptionValue, id="none" ) => {
    const form = document.createElement("div");
    form.classList.add("form");
    form.dataset.itemId = id;

    const taskTitle = createInput("taskTitle", "text");
    taskTitle.setAttribute("placeholder", "Task title...");
    const dueDateLabel = createLabel("dueDate", "Due Date: ");
    const dueDate = createInput("dueDate", "date");
    const priorityLabel = createLabel("priority", "Priority: ");
    const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "task-priority");
    const descriptionLabel = createLabel("taskDesc", "Notes:");
    const description = createInput("taskDesc", "text");
    description.setAttribute("placeholder", "insert your notes here");

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submit-btn");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "Close";

    const highPriority = createOption("High");
    const normalPriority = createOption("Normal");
    const lowPriority = createOption("Low");

    taskTitle.value = titleValue;
    dueDate.value = dueDateValue;
    description.value = descriptionValue;

    // selected attribute will become the value of the priority
    switch (priorityValue) {
        case "high":
            highPriority.setAttribute("selected", true);
            break;
        case "normal":
            normalPriority.setAttribute("selected", true);
            break;
        case "low":
            lowPriority.setAttribute("selected", true);
            break;
        default:
            break;
    }
    
    priority.appendChild(highPriority);
    priority.appendChild(normalPriority);
    priority.appendChild(lowPriority);
    
    form.appendChild(taskTitle);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(priorityLabel);
    form.appendChild(priority);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(submitBtn);
    form.appendChild(closeBtn);

    return form;
}


const createHeader = () => {
    const header = document.createElement("header");
    const title = document.createElement('h1');
    const subtitle1 = createParagraph("Good Morning, Shiielty!")
    const subtitle2 = createParagraph("You have 3 task left to do,")
    const subtitle3 = createParagraph("Let's do it!")
    const projectNav = document.createElement("nav");
    const projectTitle = document.createElement("button");
    const projectMenu = document.createElement("button");
    const menuIcon = createImage(Menu);
    
    title.textContent = "Just Do It List";
    projectTitle.textContent = whichActive(projects).projectTitle;
    projectMenu.classList.add("projects-menu");
    menuIcon.classList.add("projects-menu");
    
    projectMenu.appendChild(menuIcon);
    
    projectNav.appendChild(projectTitle);
    projectNav.appendChild(projectMenu);
    
    header.appendChild(title);
    header.appendChild(subtitle1);
    header.appendChild(subtitle2);
    header.appendChild(subtitle3);
    header.appendChild(projectNav);
    
    return header;
}

const createTasksHeader = () => {
    const tasksHeader = document.createElement("div");
    const today = createList("Today"); 
    const tomorrow = createList("Tomorrow"); 
    const upcoming = createList("Upcoming"); 
    const someday = createList("Someday");

    tasksHeader.classList.add("task-header");
    today.classList.add("active");
    
    tasksHeader.appendChild(today);
    tasksHeader.appendChild(tomorrow);
    tasksHeader.appendChild(upcoming);
    tasksHeader.appendChild(someday);

    return tasksHeader
}

const createTasksContainer = () =>{
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.classList.add("add-task");
    
    whichActive(projects).tasks.forEach((task) => {
        const taskId = whichActive(projects).tasks.indexOf(task);
        const taskTitle = task.title;
        const checkbox = createTaskItem(taskId, taskTitle, task.checked);

        checkbox.appendChild(createMenuButton(taskId, "edit-task-btn", "delete-task-btn"));
        taskContainer.appendChild(checkbox);
    })
    
    taskContainer.appendChild(addTaskBtn);

    return taskContainer
}

const createMain = () => {    
    const main = document.createElement("main");

    main.appendChild(createTasksHeader());
    main.appendChild(createTasksContainer());

    return main;
}

const createProjectsList = () => {
    const listWrapper = document.createElement("div");

    const projectListHeading = document.createElement("h2")
    projectListHeading.textContent = `Project (${projects.length}):`;
    listWrapper.appendChild(projectListHeading);

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("project-input-wrapper");
    const projectInput = createInput("addProject", "text");
    const arrowIcon = createImage(UpArrow);
    const inputBtn = document.createElement("button");
    
    projectInput.setAttribute("placeholder", "+ Create new project");
    inputBtn.classList.add("add-project-btn");
    
    projects.forEach((project) => {
        const projectId = projects.indexOf(project);
        const item = document.createElement("div");
        item.classList.add("project-item");
        item.textContent = project.projectTitle;
        item.dataset.itemId = projectId;
        
        item.appendChild(createMenuButton(projectId, "edit-project-btn", "delete-project-btn"));
        listWrapper.appendChild(item);
    })

    inputBtn.appendChild(arrowIcon);
    inputWrapper.appendChild(projectInput);
    inputWrapper.appendChild(inputBtn);
    listWrapper.appendChild(inputWrapper);

    return listWrapper;
}

const createInputEdit = (id, inputValue) => {
    const inputEdit = document.createElement("div");
    const input = createInput("editInput", "text");
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const checkIcon = createImage(Checkmark);
    const multiplyIcon = createImage(Multiply);

    inputEdit.classList.add("project-item-edit");
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.classList.add("cancel-btn");

    inputEdit.dataset.itemId = id;
    input.value = inputValue;

    confirmBtn.appendChild(checkIcon);
    cancelBtn.appendChild(multiplyIcon);
    inputEdit.appendChild(input);
    inputEdit.appendChild(confirmBtn);
    inputEdit.appendChild(cancelBtn);

    return inputEdit;
}

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());

    return wrapper;
}

export { initializeWebsite, createTasksHeader, createTasksContainer, createForm, createProjectsList, createInputEdit }