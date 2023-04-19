declare module "react-notion-x/lib/notion-utils" {
  export function createNotionProps(
    blocks: any[],
    page: any
  ): { [key: string]: any };
}
