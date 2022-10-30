import { projects, addProject, addTask, removeTask, changeProject, whichActive, test } from './handler';
import Menu from './public/hamburger.png';

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

const createInput = (id) => {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("name", id);

    return input;
}

const createLabel = (id, labelText) => {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    return label;
}

const createCheckbox = (id, labelText) => {
    const checkbox = document.createElement("div")
    const input = createInput(id);
    input.setAttribute("type", "checkbox");

    const label = createLabel(id, labelText);

    checkbox.appendChild(input);
    checkbox.appendChild(label);

    return checkbox;
}

const createTextInput = (id, labelText, placeholder="") => {
    const textInput = document.createElement("div");
    const input = createInput(id);
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", placeholder);
    
    const label = createLabel(id, labelText);
    
    textInput.appendChild(label);
    textInput.appendChild(input);
    
    return textInput;
} 

const activeProject = whichActive(projects);

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
    projectTitle.textContent = activeProject.projectTitle;

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

const createMain = () => {    
    const main = document.createElement("main");

    const tasksHeader = document.createElement("div");
    const taskContainer = document.createElement("div");
    const today = createList("Today"); 
    const tomorrow = createList("Tomorrow"); 
    const upcoming = createList("Upcoming"); 
    const someday = createList("Someday");
    const taskInput = createTextInput("taskInput", "+", "Create new task...");

    tasksHeader.classList.add("task-header");
    taskContainer.classList.add("task-container");
    today.classList.add("active");
    
    // const exampleTask = ["Run for 30 Minutes", "Working on the Project", "Buy groceries", "Sleep at 10:00 A.M"]
    // Use tasks in projects array instead
    
    activeProject.tasks.forEach((item) => {
        const checkbox = createCheckbox(activeProject.tasks.indexOf(item), item.title);
        taskContainer.appendChild(checkbox);
    })
    
    tasksHeader.appendChild(today);
    tasksHeader.appendChild(tomorrow);
    tasksHeader.appendChild(upcoming);
    tasksHeader.appendChild(someday);
    taskContainer.appendChild(taskInput);
    main.appendChild(tasksHeader);
    main.appendChild(taskContainer);

    return main;
}

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());

    return wrapper;
}

export { initializeWebsite }