import 'dotenv/config';
import { Client } from "@notionhq/client";

const notionClientId = process.env.NOTION_CLIENT_ID;
const notionSecret = process.env.NOTION_SECRET;
const notion = new Client({
    auth: notionSecret,
});


export {
    notionClientId,
    notion,
    notionSecret
};