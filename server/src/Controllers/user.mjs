import { GetProjects } from "../Database/project.mjs";
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
const getProjects = async (req, res, next) => {
  console.log(req.decoded);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.write(JSON.stringify(await GetProjects(req.query.status)));
  res.end();
};

const postTimeReport = (req, res, next) => {
    //PostTimeReport("2022-03-21","99f9c07d-88f0-4b39-abf5-6ba8e3e6765c",6,"cf56730d-ad3b-4c22-9772-fec55ee95e77","ZZZ");
  PostTimeReport(req.query.date, req.query.id, req.query.hours, req.query.project, req.query.note);
  console.log("tjena");
}
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
    getProjects,
    postTimeReport, 
    // newTea,
    // deleteAllTea,
    // getOneTea,
    // newComment,
    // deleteOneTea,
};