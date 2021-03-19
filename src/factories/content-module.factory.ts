import { Md } from "../types/md.type";

export type ContentType = "project";

export const contentModuleFactory = <T>(type: ContentType, fileName: string): Promise<Md<T>> => {
  switch (type) {
    case "project":
      return import(`../../content/_projects/${fileName}`);
    default:
      return Promise.reject("Unknown ContentType");
  }
};
