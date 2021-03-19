import { Md } from "../types/md.type";
import { resolve as pathResolve } from "path";
import { readdir } from "fs";
import { contentModuleFactory, ContentType } from "../factories/content-module.factory";

export class FileService {
  public static async readDir(dir: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      readdir(pathResolve(dir), (err, files) => {
        if (err) {
          reject(err);
        }

        resolve(files);
      });
    });
  }

  public static async readContent<T>(type: ContentType, fileName: string): Promise<Md<T>> {
    const content: Md<T> = await contentModuleFactory<T>(type, fileName);
    return { attributes: content?.attributes, html: content?.html };
  }
}
