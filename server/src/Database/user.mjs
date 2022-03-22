import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = await notion.databases.query({
        database_id: notionPeoplesDatabaseId,
    });
    //console.log(response);
    const user = response.results.filter(x => !!x.properties.Property.people[0] &&
         x.properties.Property.people[0]. id == id);
    //.map(x => x.properties);

    return {
        id: id,
        name: user[0].properties.Name.title[0].plain_text,
        role: user[0].properties.Role.rich_text[0].plain_text,
        pageId: user[0].pageId
    }
}

const Database = await notion.databases.query({
    database_id: notionPeoplesDatabaseId,
});

export {
    GetUserById,
    Database
}