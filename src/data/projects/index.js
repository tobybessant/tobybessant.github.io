module.exports.fetchProject = async slug => {
  let p = this.projects.find(project => {
    return this.generateProjectSlug(project) === slug;
  });

  let body = await fetch(p.bodyPath);
  console.log(body);

  return p;
};

module.exports.generateProjectSlug = project => {
  return project.name.replace(" ", "");
};

const tools = {
  vue: {
    label: "VueJS",
    icon: "assets/Tools/vue.png"
  },
  node: {
    label: "NodeJS",
    icon: "assets/Tools/node.svg"
  },
  socketio: {
    label: "socket.io",
    icon: "assets/Tools/socketio.svg"
  },
  git: {
    label: "Git",
    icon: "assets/Tools/git.png"
  },
  express: {
    label: "Express",
    icon: "assets/Tools/express.png"
  },
  mocha: {
    label: "Mocha",
    icon: "assets/Tools/mocha.png"
  },
  mongodb: {
    label: "MongoDB",
    icon: "assets/Tools/mongodb.png"
  }
}

module.exports.data = [
  {
    name: "Typist",
    desc: "Typist is a web-based racing game, where participants race against each other to finish typing a randomly-generated paragraph of text.",
    favourite: true,
    tags: ["JavaScript", "VueJS", "NodeJS"],
    last_updated: "10th Jan 2020",
    img: [
      "/assets/Typist/image3.png",
      "/assets/Typist/image6.png",
      "/assets/Typist/image9.png"
    ],
    tools: [
      tools.git,
      tools.vue,
      tools.node,
      tools.socketio,
      tools.express,
      tools.mongodb,
      tools.mocha
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/Typist"
      }
    ],
    bodyPath: "posts/typist.md"
  },
  {
    name: "Habitat",
    desc: "Habitat is a mobile application aimed at providing a communication platform for landlords and tenants to use during a tenancy. This includes managing property maintenance issues, miscellaneous house information, and contacts.",
    favourite: true,
    tags: ["JavaScript", "Angular8", "NodeJS"],
    last_updated: "23rd Aug 2019",
    img: [
      "/assets/Habitat/image1.png"
    ],
    tools: [
      tools.git,
      tools.node
    ],
    links: [
      {
        label: "Release Website",
        url: "https://habitat.ebrisoft.com"
      }
    ],
    bodyPath: "posts/habitat.md"
  },
  {
    name: "Terrain Generation",
    tags: ["C++", "OpenGL"],
    favourite: true,
    last_updated: "5th Jan 2020",
    img: [
      "/assets/TerrainGeneration/image1.png"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/TerrainGeneration"
      }
    ],
    bodyPath: "posts/terraingeneration.md"
  },
  {
    name: "Model Loader",
    tags: ["C++", "OpenGL"],
    last_updated: "29th Nov 2020",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/ModelLoader"
      }
    ],
    bodyPath: "posts/modelloader.md"
  },
  {
    name: "Keycard System",
    tags: ["Java", "OOP"],
    last_updated: "5th Sep 2019",
    img: [
      "https://www.tobybessant.co.uk/images/portfolioimages/university-room-system-img1.png"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/University-Room-System"
      }
    ],
    bodyPath: "posts/keycardsystem.md"
  },
  {
    name: "Data Miner",
    tags: ["C#"],
    last_updated: "29rd Mar 2018",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/Shopping-Data-Miner"
      }
    ],
    bodyPath: "posts/dataminer.md"
  }
];

/*
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
  ,
  {
    name: "Portfolio Site",
    description: "Wooooooo aosdfoasdfo",
    tags: ["Vue", "Node"],
    last_updated: "23rd Aug 2019"
  } */
