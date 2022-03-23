import { GetUsers } from "../Database/user.mjs";
import { GetTimeReportsByDay} from "../Database/timeReport.mjs";

async function GetWrokedHours(span, when) {
    
    //get list of people
    //console.log(await GetUsers());
     let users = (await GetUsers()).map(user => {
        const container = {}
        container.id = user.id;
        container.name = user.properties.Name.title[0].plain_text;
        container.hours = 0;
        return container;
    });
    let timeReports;
    if(span == "day")
        timeReports = await GetTimeReportsByDay(when);
    timeReports.forEach(timereport => {
      users.filter(user => user.id == timereport.user)[0].hours += timereport.hours;
   });
    //get timereport by date/week

    //loop through each timereport, get and assign += hour to list of people.

    return users;
}

export {
    GetWrokedHours
}