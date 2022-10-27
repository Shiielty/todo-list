import Menu from './public/hamburger.png';

const createParagraph = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
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

    const menuIcon = new Image();
    menuIcon.src = Menu;

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

// const createMain = () => {    
   
// }

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")
    wrapper.appendChild(createHeader());
    // wrapper.appendChild(createMain());
    
    return wrapper;
}


export { initializeWebsite }
