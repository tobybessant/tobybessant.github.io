module.exports.fetchProject = slug => {
  return this.projects.find(project => {
    return this.generateProjectSlug(project) === slug;
  });
};

module.exports.generateProjectSlug = project => {
  return project.name.replace(" ", "");
};

module.exports.projects = [
  {
    name: "Data Miner",
    description:
      "I am the desc!!I am the desc!!I am the desc!!I am the desc!!I am the desc!!I am the desc!!",
    tags: ["C#"],
    last_updated: "4th Jan 2020",
    img: [
      "https://www.tobybessant.co.uk/images/portfolioimages/university-room-system-img1.png",
      "https://www.tobybessant.co.uk/images/portfolioimages/university-room-system-img1.png"
    ]
  },
  {
    name: "Street Scene",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Unity", "C#", "3D Modelling"],
    last_updated: "23rd Aug 2019"
  },
  {
    name: "Room Scene",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Unity", "C#", "3D Modelling"],
    last_updated: "23rd Aug 2019"
  },
  {
    name: "Habitat",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Angular", "Ionic", "Cordova", "Mobile"],
    last_updated: "23rd Aug 2019"
  },
  {
    name: "Typist",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Vue", "Node", "SPA"],
    last_updated: "23rd Aug 2019"
  },
  {
    name: "Portfolio Site",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Vue", "Node"],
    last_updated: "23rd Aug 2019"
  }
];
