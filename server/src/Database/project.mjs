import { notionProjectsDatabaseId, notion } from '../notion.js'

async function GetProjects(status) {
    const response = await notion.databases.query({
        database_id: notionProjectsDatabaseId,
    });
    if(status == "active")
        return response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
    else
        return response.results.map(x => x.properties);
}

const Database = await notion.databases.query({
    database_id: notionProjectsDatabaseId,
});

export {
    GetProjects,
    Database
}