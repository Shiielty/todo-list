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

const addProject = (title) => {
    const project = Project(title);
    projects.push(project);
    if (projects.length === 1) projects[0].status = "active";
}

const addTask = (title) => {
    const task = Task(title);
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

const removeProject = (index) => {
    projects.splice(index, 1);
}
