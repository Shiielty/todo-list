// Todos and Projects
const projects = [
    {
        "projectTitle": "Inbox",
        "tasks": [
            {
                "title": "Task 1",
            },
            {
                "title": "Task 2",
            },
            {
                "title": "Task 3",
            },
            {
                "title": "It works yay!!",
            }, ],
        "status": "inactive",
    },
    {
        "projectTitle": "Project 2",
        "tasks": [
            {
                "title": "Task 99",
            },
            {
                "title": "Task 100",
            },
            {
                "title": "Task 101",
            },
            {
                "title": "It fucking works, lets gooo!!",
            }, ],
        "status": "active",
    }
]; 

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

const addProject = (title, arr) => {
    const project = Project(title);
    arr.push(project);
    if (arr.length === 1) arr[0].status = "active";
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

const test = () => console.log("Hello friend.");

export { projects, addProject, addTask, removeTask, changeProject, whichActive, test }