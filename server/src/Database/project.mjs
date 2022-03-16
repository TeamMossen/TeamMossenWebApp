import { notionProjectsDatabaseId, notion } from '../notion.js'

async function GetActiveProjects() {
    const response = await notion.databases.query({
        database_id: notionProjectsDatabaseId,
    });
    return response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
}

export {
    GetActiveProjects
}