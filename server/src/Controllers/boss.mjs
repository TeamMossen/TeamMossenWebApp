import { GetProjects, Database } from "../Database/project.mjs";
import { AuthenticateToken } from "./login.mjs";
//import { Database } from "../Database/user.mjs";
import { PostTimeReport} from "../Database/timeReport.mjs";



//GET ''
const getWorkedHours = async (req, res, next) => {
    console.log(req.decoded);
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(JSON.stringify(await GetProjects(req.query.status)));
    res.end();
  };


  export{
      getProjects,
      getWorkedHours
  }