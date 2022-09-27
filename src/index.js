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
    const tasks = []
    return {projectTitle, tasks }
}

// submit object (task/project) to an array
const addTasks = (task, tasks) => {
    tasks.push(task);
}

const removeTasks = (task, tasks) => {
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
}
