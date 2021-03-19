import { Md } from "../types/md.type";
import { IProject } from "../types/project.interface";
import { FileService } from "./file.service";

export class ProjectService {
  public static async getProjectBySlug(slug: string): Promise<IProject> {
    return this.getProjectByFileName(`${slug}.md`);
  }

  public static async getProjectByFileName(fileName: string): Promise<IProject> {
    const content: Md<IProject> = await FileService.readMarkdown("project", fileName);
    return content.attributes;
  }

  public static async loadProjectContent(slug: string): Promise<Md<IProject>> {
    return FileService.readMarkdown("project", `${slug}.md`);
  }

  public static async getProjects(): Promise<IProject[]> {
    const fileNames = await FileService.readDir("content/_projects");

    const projects: IProject[] = [];

    for (const fileName of fileNames) {
      const project = await this.getProjectByFileName(fileName);
      projects.push(this.initialiseProject(fileName, project));
    }

    return projects;
  }

  public static async getFavouriteProjects(): Promise<IProject[]> {
    const fileNames = await FileService.readDir("content/_projects");

    const projects: IProject[] = [];

    for (const fileName of fileNames) {
      const project = await this.getProjectByFileName(fileName);
      projects.push(this.initialiseProject(fileName, project));
    }

    return projects;
  }

  private static initialiseProject(fileName: string, project: IProject): IProject {
    return {
      title: project.title ?? null,
      slug: fileName.substr(0, fileName.indexOf(".")),
      favourite: !!project.favourite,
      imageSrc: project.imageSrc ?? null,
      tags: project.tags ?? []
    };
  }
}
