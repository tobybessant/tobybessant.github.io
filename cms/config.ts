import { CmsConfig } from "netlify-cms-core";
import { configureBackend } from "./config-functions";

// Extend inferface to add cms_manual_init method.
interface NetlifyCmsConfig extends CmsConfig {
  cms_manual_init?: boolean;
}

export const config: NetlifyCmsConfig = {
  cms_manual_init: true,
  backend: configureBackend(),
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
        { label: "Favourite", name: "favourite", widget: "boolean", required: false },
        { label: "Featured Image", name: "hero_image", widget: "image", required: false },
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
          label_singular: "Tag",
          field: { label: "Tag text", name: "tag_text", widget: "string" },
          required: false
        },
        {
          label: "Extra Images",
          name: "images",
          widget: "list",
          label_singular: "Image",
          field: { label: "Image", name: "image", widget: "image" },
          required: false
        }
      ]
    }
  ]
};
