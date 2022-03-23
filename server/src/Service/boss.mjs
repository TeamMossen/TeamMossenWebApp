import { GetProjects, Database } from "../Database/project.mjs";
import { GetUsers } from "../Database/user.mjs";
import { PostTimeReport} from "../Database/timeReport.mjs";

async function boss() {
    
    //get list of people
    let users = await GetUsers().map(x => {
        id: x.id;
        name: x.Name.title[0].plain_text;
        hours: 0;
    }).array();
    let projects = await GetUsers();
    projects.forEach(project => {
        users
    });
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    //get timereport by date/week

    //loop through each timereport, get and assign += hour to list of people.


    //return 
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

export {

}