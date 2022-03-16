import 'dotenv/config';
import { Client } from "@notionhq/client";

const notionClientId = process.env.NOTION_CLIENT_ID;
const notionSecret = process.env.NOTION_SECRET;
const notionProjectsDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
const notionPeoplesDatabaseId = process.env.NOTION_PEOPLES_DATABASE_ID;
const notionApiSecret = process.env.NOTION_API_SECRET;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const notion = new Client({
    auth: notionApiSecret,
});


export {
    notionClientId,
    notionProjectsDatabaseId,
    notionPeoplesDatabaseId,
    notionApiSecret,
    notion,
    notionSecret,
    accessTokenSecret
};