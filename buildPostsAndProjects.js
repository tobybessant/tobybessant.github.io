const fs = require("fs");
const path = require("path");

// -- MD PARSER
const showdown = require("showdown");
const converter = new showdown.Converter();

// -- PROJECTS
const projectsRootFolder = "./src/data/projects";
const projects = require(projectsRootFolder);
const projectsData = projects.data;
const compiledDestination = path.join(projectsRootFolder, "compiled.json");

for (let project of projectsData) {
  if (project.bodyPath) {
    const raw = fs.readFileSync(
      path.join(projectsRootFolder, project.bodyPath)
    );

    project.bodyContent = converter.makeHtml(raw.toString());
    project.slug = projects.generateProjectSlug(project);
  }
}

fs.writeFileSync(compiledDestination, JSON.stringify(projectsData));

