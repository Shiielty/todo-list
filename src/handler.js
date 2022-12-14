// Todos and Projects
const projects = [
    {
        "projectTitle": "Project 1",
        "tasks": [
            {
                "title": "Task 1",
                "dueDate": "2022-01-01",
                "priority": "low",
                "description": "This is description of task 1",
                "checked": "false"
            },
            {
                "title": "Task 2 (high priority)",
                "dueDate": "2022-01-02",
                "priority": "high",
                "description": "This is description of task 2",
                "checked": "false"
            },
            {
                "title": "Task 3 (normal priority)",
                "dueDate": "2022-03-01",
                "priority": "normal",
                "description": "This is description of task 3",
                "checked": "false"
            },
            {
                "title": "Task 4 (low priority)",
                "dueDate": "2022-04-01",
                "priority": "low",
                "description": "This is description of task 4",
                "checked": "false"
            }, ],
        "status": "active",
    },
    {
        "projectTitle": "Project 2",
        "tasks": [
            {
                "title": "Task 99",
                "dueDate": "2032-04-01",
                "priority": "low",
                "description": "This is description of task 99",
                "checked": "true"
            },
            {
                "title": "Task 100",
                "dueDate": "2032-04-02",
                "priority": "low",
                "description": "This is description of task 100",
                "checked": "false"
            },
            {
                "title": "Task 101",
                "dueDate": "2032-04-03",
                "priority": "high",
                "description": "This is description of task 101",
                "checked": "true"
            },
            {
                "title": "Task 102",
                "dueDate": "2022-04-10",
                "priority": "high",
                "description": "This is description of task 1000",
                "checked": "false"
            }, ],
        "status": "inactive",
    }
]; 

// Todos function factory
const Task = (title, dueDate, priority, description, checked) => {
    return { title, dueDate, priority, description, checked }
}

// Project function factory
const Project = (projectTitle) => {
    const tasks = [];
    const status = "inactive";

    return {projectTitle, tasks, status}
}

const addTask = (title, dueDate, priority, description) => {
    const currentProject = whichActive(projects);
    const task = Task(title, dueDate, priority, description, "false");
    currentProject.tasks.push(task);
}

const editTask = (title, dueDate, priority, description, id) => {
    const currentProject = whichActive(projects);
    currentProject.tasks[id].title = title;
    currentProject.tasks[id].dueDate = dueDate;
    currentProject.tasks[id].priority = priority;
    currentProject.tasks[id].description = description;
}

const removeTask = (id) => {
    const currentProject = whichActive(projects);
    currentProject.tasks.splice(id, 1);
}

const addProject = (title, arr) => {
    const project = Project(title);
    arr.push(project);
    if (arr.length === 1) arr[0].status = "active";
}

const whichActive = (projects) => {
    let activeProject = projects.find(project => project.status == "active");
    if (activeProject != undefined) {
        return activeProject;
    } else {
        projects[0].status = "active";
        activeProject = projects.find(project => project.status == "active");
        return activeProject;
    }
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

export { projects, addTask, editTask ,removeTask, addProject, changeProject, removeProject, whichActive, test }