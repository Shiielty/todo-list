// import "./style.css";

const content = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = "In development...";

const h2 = document.createElement("h2");
h2.textContent = "psst, open the console";

content.appendChild(h1);
content.appendChild(h2);

// Todos and Projects
const projects = []; 

// Todos function factory
const Task = (title) => {
    return { title }
}

// Project function factory
const Project = (projectTitle) => {
    const tasks = [];
    const status = "inactive";
    return {projectTitle, tasks, status }
}

const addProject = (project) => {
    projects.push(project);
}

const addTask = (task) => {
    const currentProject = whichActive(projects);
    currentProject.tasks.push(task);
}

const removeTask = (task) => {
    const currentProject = whichActive(projects);
    const taskIndex = currentProject.tasks.indexOf(task);
    currentProject.tasks.splice(taskIndex, 1);
}

const whichActive = (projects) => {
    const activeProject = projects.find(project => project.status == "active");
    return activeProject;
}

const changeProject = (targetProject) => {
    const currentProject = whichActive(projects);
    currentProject.status = "inactive";
    targetProject.status = "active";
}
