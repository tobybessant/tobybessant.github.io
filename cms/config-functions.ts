import { CmsBackend } from "netlify-cms-core";

export const configureBackend = (): CmsBackend => {
  const backendName: string =
    process.env.NODE_ENV === "development" ? "local repo" : "production repo";

  console.log(`Running in ${process.env.NODE_ENV}, using ${backendName}.`);

  if (process.env.NODE_ENV === "development") {
    return {
      name: "proxy",
      proxy_url: "http://localhost:8081/api/v1",
      branch: "master"
    };
  }

  return {
    name: "github",
    repo: "tobybessant/portfolio",
    branch: "master"
  };
};
