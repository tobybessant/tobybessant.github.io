const fs = require("fs");
const path = require("path");

// -- MD PARSER
const showdown = require("showdown");
const converter = new showdown.Converter();

converter.setOption("headerLevelStart", 3);
converter.setOption("tables", true);

// -- PROJECTS
const projectsRootFolder = "./src/data/projects";
const projects = require(projectsRootFolder);
const projectsData = projects.data;
const compiledDestination = path.join(projectsRootFolder, "compiled.json");

let availableTags = [];

for (let project of projectsData) {
  if (project.bodyPath) {
    const raw = fs.readFileSync(
      path.join(projectsRootFolder, project.bodyPath)
    );

    project.bodyContent = converter.makeHtml(raw.toString());
    project.slug = projects.generateProjectSlug(project);

    // sort tags
    if(project.tags !== undefined) {
      const sortedTags = project.tags.sort();
      project.tags = sortedTags;
    }

    // check available tags
    for(tag of project.tags) {
      if(!availableTags.includes(tag)) availableTags.push(tag);
    }
  }
}

const output = {
  availableTags,
  projectsData
};

fs.writeFileSync(compiledDestination, JSON.stringify(output));

