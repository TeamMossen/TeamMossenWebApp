import { notionProjectsDatabaseId, notion } from '../notion.js'

async function GetProjects(status) {
    const response = await notion.databases.query({
        database_id: notionProjectsDatabaseId,
    });
    if(status == "active")
        return response.results.filter(x => x.properties.Status.select.name == "Active").map(x => {
            const container = {  }
            container.id = x.id;
            container.properties = x.properties;
            return container
        });
    else
        return response.results.map(x => {
            const container = {  }
            container.id = x.id;
            container.properties = x.properties;
            return container
        });
            //[x.properties, x.id]);
}

const Database = await notion.databases.query({
    database_id: notionProjectsDatabaseId,
});

export {
    GetProjects,
    Database
}