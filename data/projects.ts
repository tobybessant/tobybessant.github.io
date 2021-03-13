import { IProject } from "../src/types/project.interface";

const IMG_ROOT: string = "/img/";

const projects: IProject[] = [
  {
    title: "Pilot UAT",
    imageSrc: IMG_ROOT + "terrain-generation-1.png",
    favourite: true,
    tags: ["SPA", "Angular", "TypeScript"],
    slug: "pilot-uat"
  },
  {
    title: "PCG Terrain Generation",
    imageSrc: IMG_ROOT + "terrain-generation-1.png",
    favourite: true,
    tags: ["C++", "PCG"],
    slug: "pcg-terrain-generation"
  },
  {
    title: "Typist",
    imageSrc: IMG_ROOT + "typist-1.png",
    favourite: true,
    tags: ["VueJS", "JavaScript"],
    slug: "typist"
  }
];

export default projects;
