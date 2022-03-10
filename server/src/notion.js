import 'dotenv/config';
import { Client } from "@notionhq/client";

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_KEY;
const notion = new Client({
    auth: notionSecret,
});


export {
    notionDatabaseId,
    notion,
};