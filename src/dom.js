import { projects, whichActive, test } from './handler';
import Menu from './public/hamburger.png';
import Bin from './public/bin.png';
import Edit from './public/editing.png';
import Enter from './public/enter.png'

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

const createTaskItem = (id, labelText) => {
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item");
    taskItem.dataset.itemId = id;
    const input = createInput(id, "checkbox");

    const label = createLabel(id, labelText);

    taskItem.appendChild(input);
    taskItem.appendChild(label);

    return taskItem;
}

const createTaskMenu = (id) => {
    const taskMenu = document.createElement("div");
    taskMenu.classList.add("task-menu");
    taskMenu.dataset.itemId = id;

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    const editIcon = createImage(Edit);
    const deleteIcon = createImage(Bin);

    editBtn.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn")

    editBtn.appendChild(editIcon);
    deleteBtn.appendChild(deleteIcon);
    taskMenu.appendChild(editBtn);
    taskMenu.appendChild(deleteBtn);

    return taskMenu;
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
}

const createForm = () => {
    const form = document.createElement("form");
    const title = createInput("taskTitle", "text");
    const description = createInput("taskDesc", "text");
    const dueDateLabel = createLabel("dueDate", "Due Date: ")
    const dueDate = createInput("dueDate", "date");
    const priorityLabel = createLabel("priority", "Priority: ")
    const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "task-priority");

    const highPriority = createOption("High");
    const normalPriority = createOption("Normal");
    const lowPriority = createOption("Low");
    
    priority.appendChild(highPriority);
    form.appendChild(normalPriority);
    form.appendChild(lowPriority);
    
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(priorityLabel);
    form.appendChild(priority);

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
    projectMenu.classList.add("dev-test-button");
    menuIcon.classList.add("dev-test-button");
    
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
    const taskInput = createTextInput("taskInput", "+", "Create new task...");
    const enterBtn = document.createElement("button");
    const enterIcon = createImage(Enter)
    
    taskContainer.classList.add("task-container");
    enterBtn.classList.add("enter-btn"); 
    
    whichActive(projects).tasks.forEach((task) => {
        const taskId = whichActive(projects).tasks.indexOf(task);
        const taskTitle = task.title;
        const checkbox = createTaskItem(taskId, taskTitle);

        checkbox.appendChild(createTaskMenu(taskId));
        taskContainer.appendChild(checkbox);
    })
    
    enterBtn.appendChild(enterIcon)
    taskInput.appendChild(enterBtn);
    taskContainer.appendChild(taskInput);

    return taskContainer
}

const createMain = () => {    
    const main = document.createElement("main");

    main.appendChild(createTasksHeader());
    main.appendChild(createTasksContainer());

    return main;
}

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());

    return wrapper;
}

export { initializeWebsite, createTasksContainer }