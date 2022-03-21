import { notionTimeReportDatabaseId, notion } from '../notion.js'

//
async function PostTimeReport(date, userId, hours, projectId, note){
    const response = await notion.pages.create({
      parent: {
        database_id: notionTimeReportDatabaseId,
      },
      properties: {
        "Hours": {
            "number": hours
        },
        "Date": {
            "date": {
                "start": date//"2022-03-21"
            }
        },
        "Project": {
            "relation": [
                {
                    "id": projectId//"cf56730d-ad3b-4c22-9772-fec55ee95e77"
                }
            ]
        },
        "Person": {
            "relation": [
                {
                    "id": userId//"99f9c07d-88f0-4b39-abf5-6ba8e3e6765c"
                }
            ]
        },
        "Note": {
            "title": [
                {
                    "text": {
                        "content": note
                    }
                }
            ]
        }
    }});
    console.log(response);
  }
  const Database = await notion.databases.query({
    database_id: notionTimeReportDatabaseId,
});

  export{
    PostTimeReport,
    Database
  }