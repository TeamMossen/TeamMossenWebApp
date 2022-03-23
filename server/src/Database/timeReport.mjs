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
    console.log("Post time report success");
  }
    const Database = await notion.databases.query({
        database_id: notionTimeReportDatabaseId,
});

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
        return response.results.map(x => x.properties);
            //[x.properties, x.id]);
}

async function GetTimeReportsByDate(date){
    const response = Database;
    return response.results.filter(x => x.properties.Date.date.start == date).map(x => {
        const container = {  }
        container.user = x.properties.Person.relation[0].id;
        container.hours = x.properties.Hours.number;
        //console.log(x.properties);
        return container
    });

}
async function GetTimeReportsByWeek(week){
    const response = Database;
    

}


  export{
    PostTimeReport,
    Database
  }