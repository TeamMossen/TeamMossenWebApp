import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = Database;
    const user = response.results.filter(x => !!x.properties.Property.people[0] &&
         x.properties.Property.people[0]. id == id);

    return {
        id: id,
        name: user[0].properties.Name.title[0].plain_text,
        role: user[0].properties.Role.rich_text[0].plain_text,
        pageId: user[0].id
    }
}
async function GetUsers() {
    const response = Database;
    return response.results.map(x => {
            const container = {  }
            container.id = x.id;
            container.properties = x.properties;
            return container
        });
}

const Database = await notion.databases.query({
    database_id: notionPeoplesDatabaseId,
});

export {
    GetUserById,
    GetUsers,
    Database
}