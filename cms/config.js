export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "tobybessant/portfolio",
    branch: "master"
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "projects",
      label: "Projects",
      folder: "content/_projects",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Body", name: "body", widget: "markdown" }
      ]
    }
  ]
};
