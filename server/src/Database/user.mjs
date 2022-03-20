import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = await notion.databases.query({
        database_id: notionPeoplesDatabaseId,
    });
    //console.log(response);
    const user = response.results.filter(x => !!x.properties.Property.people[0] &&
         x.properties.Property.people[0]. id == id)
    .map(x => x.properties);

    return {
        id: id,
        name: user[0].Name.title[0].plain_text,
        role: user[0].Role.rich_text[0].plain_text,
    }
}

const Database = await notion.databases.query({
    database_id: notionPeoplesDatabaseId,
});

export {
    GetUserById,
    Database
}