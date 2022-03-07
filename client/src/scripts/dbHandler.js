import { Client } from '@notionhq/client'
 const databaseId = process.env.NOTION_DATABASE_ID;
 const notionSecret = process.env.NOTION_KEY;
 const notion = new Client({ auth: notionSecret })

export async function GetDb() {
    const databaseId = process.env.NOTION_DATABASE_ID
        
    const response = await notion.databases.retrieve({ database_id: databaseId })
    .then((response) => console.log(response));
}
