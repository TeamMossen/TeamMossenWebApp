import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = await notion.databases.query({
        database_id: notionPeoplesDatabaseId,
    });
    const person = response.results.filter(x => x.properties.id.rich_text[0].plain_text == id).map(x => x.properties);
    console.log(person);
}

export {
    GetUserById
}