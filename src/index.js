import "./style.css";
import { initializeWebsite } from "./dom";
// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild(initializeWebsite());

// const arr = projects;
// content.addEventListener('click', ((e) => {
//     if (e.target.nodeName == "BUTTON") {
//         console.log(arr);
//         addProject("project", arr);
//     }
// }))