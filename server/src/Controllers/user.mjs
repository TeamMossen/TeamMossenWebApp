import { GetActiveProjects } from "../Database/project.mjs";
import { AuthenticateToken } from "./login.mjs";
import { PostTimeReport, Database } from "../Database/timeReport.mjs";

const returnDatabase = async (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    //PostTimeReport("date","person id",6,"project id","ZZZ");
    res.writeHead(200);
    res.write(JSON.stringify(Database));
    res.end();
}

//GET '/user'
const getActiveProjects = async (req, res, next) => {
  console.log(req.decoded);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.write(JSON.stringify(await GetActiveProjects()));
  res.end();
};


// //POST '/tea'
// const newTea = (req, res, next) => {
//     res.json({message: "POST new tea"});
// };

// //DELETE '/tea'
// const deleteAllTea = (req, res, next) => {
//     res.json({message: "DELETE all tea"});
// };

// //GET '/tea/:name'
// const getOneTea = (req, res, next) => {
//     res.json({message: "GET 1 tea"});
// };

// //POST '/tea/:name'
// const newComment = (req, res, next) => {
//     res.json({message: "POST 1 tea comment"});
// };

// //DELETE '/tea/:name'
// const deleteOneTea = (req, res, next) => {
//     res.json({message: "DELETE 1 tea"});
// };

//export controller functions
export {
    returnDatabase,
    getActiveProjects, 
    // newTea,
    // deleteAllTea,
    // getOneTea,
    // newComment,
    // deleteOneTea,
};