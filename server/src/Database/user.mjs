import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = await notion.databases.query({
        database_id: notionPeoplesDatabaseId,
    });
    const user = response.results.filter(x => x.properties.id.rich_text[0].plain_text == id).map(x => x.properties);

    const temp = {
        id: id,
        name: user[0].Name.title[0].plain_text,
        role: user[0].Role.rich_text[0].plain_text,
    }
    console.log(temp);
}

export {
    GetUserById
}