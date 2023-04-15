import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY as string });
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const fetchPages = async ({ slug }: { slug?: string }) => {
  // フィルタリング条件を定義
  const and: any = [
    {
      property: "isPublic",
      checkbox: {
        equals: true,
      },
    },
    {
      property: "slug",
      rich_text: {
        is_not_empty: true,
      },
    },
  ];

  if (slug) {
    and.push({
      property: "slug",
      rich_text: {
        equals: slug,
      },
    });
  }

  // Notion APIを使ってデータベースからページ情報を取得し、フィルタリング条件を適用
  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: and,
    },
    sorts: [
      {
        property: "published",
        direction: "descending",
      },
    ],
  });
};

// ページIDに紐づくブロックをフェッチする関数
export const fetchBlocksByPageId = async (pageId: string) => {
  // ページIDを指定して、そのページに含まれるブロックを取得
  return await notion.blocks.children.list({ block_id: pageId });
};
