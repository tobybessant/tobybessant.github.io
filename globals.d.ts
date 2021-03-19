declare module "*.md" {
  const attributes: { [key: string]: string | string[] | {}[] };
  const html: string;
  export { attributes, html };
}
