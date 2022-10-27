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

const createCheckbox = (index, text) => {
    const checkbox = document.createElement("div")

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `${index}`);
    input.setAttribute("name", `${index}`);

    const label = document.createElement("label");
    label.setAttribute("for", `${index}`);
    label.textContent = text;

    checkbox.appendChild(input);
    checkbox.appendChild(label);

    return checkbox;
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
    projectTitle.textContent = "Projects"

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
   const today = createList("Today"); 
   const tomorrow = createList("Tomorrow"); 
   const upcoming = createList("Upcoming"); 
   const someday = createList("Someday");
   tasksHeader.appendChild(today);
   tasksHeader.appendChild(tomorrow);
   tasksHeader.appendChild(upcoming);
   tasksHeader.appendChild(someday);

   main.appendChild(tasksHeader);

   const exampleTask = ["Run for 30 Minutes", "Working on the Project", "Buy groceries", "Sleep at 10:00 A.M"]

   exampleTask.forEach((item) => {
    const checkbox = createCheckbox(exampleTask.indexOf(item), item);
    main.appendChild(checkbox);
   })

   return main;
}

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());
    
    return wrapper;
}


export { initializeWebsite }
