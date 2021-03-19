import { CmsConfig } from "netlify-cms-core";

interface NetlifyCmsConfig extends CmsConfig {
  cms_manual_init?: boolean;
}

export const config: NetlifyCmsConfig = {
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
        { label: "Favourite", name: "favourite", widget: "boolean" },
        { label: "Featured Image", name: "hero_image", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
          label_singular: "Tag",
          field: { label: "Tag text", name: "tag_text", widget: "string" }
        },
        {
          label: "Extra Images",
          name: "images",
          widget: "list",
          label_singular: "Image",
          field: { label: "Image", name: "image", widget: "image" }
        }
      ]
    }
  ]
};
