import { notionTimeReportDatabaseId, notion } from '../notion.js'

//
async function PostTimeReport(date, userId, hours, project, note){
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
                "start": date
            }
        },
        "Project": {
            "relation": [
                {
                    "id": project
                }
            ]
        },
        "Person": {
            "relation": [
                {
                    "id": userId
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