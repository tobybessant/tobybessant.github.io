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
    icon: "/assets/Tools/vue.png"
  },
  node: {
    label: "NodeJS",
    icon: "/assets/Tools/node.svg"
  },
  socketio: {
    label: "socket.io",
    icon: "/assets/Tools/socketio.svg"
  },
  git: {
    label: "Git",
    icon: "/assets/Tools/git.png"
  },
  express: {
    label: "Express",
    icon: "/assets/Tools/express.png"
  },
  mocha: {
    label: "Mocha",
    icon: "/assets/Tools/mocha.png"
  },
  mongodb: {
    label: "MongoDB",
    icon: "/assets/Tools/mongodb.png"
  },
  ionic: {
    label: "Ionic",
    icon: "/assets/Tools/ionic.png"
  },
  cordova: {
    label: "Cordova",
    icon: "/assets/Tools/cordova.png"
  },
  angular: {
    label: "Angular8",
    icon: "/assets/Tools/angular.png"
  },
  typescript: {
    label: "TypeScript",
    icon: "/assets/Tools/ts.png"
  },
  vs: {
    label: "VisualStudio",
    icon: "/assets/Tools/vs.png"
  },
  vscode: {
    label: "Visual Studio Code",
    icon: "/assets/Tools/vscode.png"
  },
  cplusplus: {
    label: "C++",
    icon: "/assets/Tools/cplusplus.png"
  },
  opengl: {
    label: "OpenGL",
    icon: "/assets/Tools/opengl.jpg"
  },
  glm: {
    label: "GLM",
    icon: "/assets/Tools/glm.png"
  },
  java: {
    label: "Java",
    icon: "/assets/Tools/java.png"
  },
  netbeans: {
    label: "Netbeans",
    icon: "/assets/Tools/netbeans.png"
  },
  xd: {
    label: "AdobeXD",
    icon: "/assets/Tools/xd.png"
  },
  unity: {
    label: "Unity",
    icon: "/assets/Tools/unity.jpg"
  },
  threedsmax: {
    label: "3DSMax",
    icon: "/assets/Tools/3dsmax.png"
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
    last_updated: "2nd Jan 2020",
    img: [
      "/assets/Habitat/image1.png"
    ],
    tools: [
      tools.git,
      tools.node,
      tools.typescript,
      tools.angular,
      tools.ionic,
      tools.cordova,
      tools.vscode,
      tools.xd
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
      "/assets/TerrainGeneration/image1.png",
      "/assets/TerrainGeneration/image2.png",
      "/assets/TerrainGeneration/image3.png",
      "/assets/TerrainGeneration/image4.png"
    ],
    tools: [
      tools.git,
      tools.vs,
      tools.cplusplus,
      tools.opengl,
      tools.glm
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/TerrainGeneration"
      },
      {
        label: "YouTube Demo",
        url: "https://youtu.be/qH41VISRSoA?t=10"
      }
    ],
    bodyPath: "posts/terraingeneration.md"
  },
  {
    name: "Portfolio Site",
    tags: ["VueJS", "NodeJS", "JavaScript"],
    last_updated: "20th Feb 2020",
    img: [
      "/assets/PortfolioSite/homepage.png"
    ],
    bodyPath: "posts/portfoliosite.md"
  },
  {
    name: "Model Loader",
    tags: ["C++", "OpenGL"],
    last_updated: "29th Nov 2019",
    img: [
      "/assets/ModelLoader/image2.png",
      "/assets/ModelLoader/image1.png"
    ],
    tools: [
      tools.git,
      tools.vs,
      tools.cplusplus,
      tools.opengl,
      tools.glm
    ],
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
    tools: [
      tools.git,
      tools.java,
      tools.netbeans
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
    name: "The Birthday",
    tags: ["C#", "Unity3D"],
    last_updated: "16th Aug 2018",
    img: [
      "/assets/TheBirthday/image.png"
    ],
    tools: [
      tools.git,
      tools.unity,
      tools.threedsmax
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tobybessant/The-Birthday"
      }
    ],
    bodyPath: "posts/thebirthday.md"
  },

];