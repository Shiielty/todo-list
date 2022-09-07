import "./style.css";

const content = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = "In development...";

const h2 = document.createElement("h2");
h2.textContent = "psst, open the console";

content.appendChild(h1);
content.appendChild(h2);