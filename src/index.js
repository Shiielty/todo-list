import "./style.css";
import { initializeWebsite } from "./dom";
// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild(initializeWebsite());