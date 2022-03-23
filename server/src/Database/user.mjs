import { notionPeoplesDatabaseId, notion } from '../notion.js'

async function GetUserById(id) {
    const response = Database;
    //console.log(response);
    const user = response.results.filter(x => !!x.properties.Property.people[0] &&
         x.properties.Property.people[0]. id == id);
    //.map(x => x.properties);

    return {
        id: id,
        name: user[0].properties.Name.title[0].plain_text,
        role: user[0].properties.Role.rich_text[0].plain_text,
        pageId: user[0].id
    }
}
async function GetUsers() {
    const response = Database;
    // if(status == "active")
    //     return response.results.filter(x => x.properties.Status.select.name == "Active").map(x => {
    //         const container = {  }
    //         container.id = x.id;
    //         container.properties = x.properties;
    //         //console.log(x.properties);
    //         return container
    //     });
    // else
    return response.results.map(x => {
            const container = {  }
            container.id = x.id;
            container.properties = x.properties;
            //console.log(x.properties);
            return container
        });
       // return response.results.map(x => x.properties);
            //[x.properties, x.id]);
}

const Database = await notion.databases.query({
    database_id: notionPeoplesDatabaseId,
});

export {
    GetUserById,
    GetUsers,
    Database
}