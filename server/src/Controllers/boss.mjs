import { GetWrokedHours } from "../Service/boss.mjs";
import { AuthenticateToken } from "./login.mjs";

//GET ''
const getWorkedHours = async (req, res, next) => {
    //console.log(req.decoded);
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(JSON.stringify(await GetWrokedHours(req.query.span, req.query.when)));
    res.end();
  };


  export{
      getWorkedHours
  }