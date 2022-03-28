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
            //console.log(x.properties);
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

async function EditProjects(page, hours, dateStart, dateEnd) {

    const response = await notion.pages.update({
        page_id: page,
        properties: {
            "Hours": {
                "id": "GP%5DW",
                "type": "number",
                "number": parseInt(hours)
            },
            "Timespan": {
                "id": "ulOq",
                "type": "date",
                "date": {
                    "start": dateStart,
                    "end": dateEnd,
                    "time_zone": null
                }
            },
        }});
}
const Database = await notion.databases.query({
    database_id: notionProjectsDatabaseId,
});

export {
    GetProjects,
    EditProjects,
    Database
}