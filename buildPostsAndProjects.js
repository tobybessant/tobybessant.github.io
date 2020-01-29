const fs = require("fs");
const path = require("path");

// -- MD PARSER
const showdown = require("showdown");
const converter = new showdown.Converter();

// -- PROJECTS
const projectsRootFolder = "./src/data/projects";
const projectsData = require(projectsRootFolder).projects;

for (let project of projectsData) {
  if (project.bodyPath) {
    const raw = fs.readFileSync(
      path.join(projectsRootFolder, project.bodyPath)
    );

    project.bodyContent = converter.makeHtml(raw.toString());
  }
}

