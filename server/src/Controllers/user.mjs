import { notionProjectsDatabaseId, notion } from '../notion.js'


const returnDatabase = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    const response = await notion.databases.query({
        database_id: notionProjectsDatabaseId,
    });
    res.writeHead(200);
    res.write(JSON.stringify(response));
    res.end();
}
// const redirectToOauth = async (req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Content-Type", "application/json");
//     const response = await notion.databases.query({
//         database_id: notionDatabaseId,
//     });
//     res.writeHead(200);
//     res.write(JSON.stringify(response));
//     res.end();
// }

//GET '/user'
const getActiveProjects = async (req, res, next) => {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  
  const response = await notion.databases.query({
    database_id: notionProjectsDatabaseId,
  });
  // Only supports the / route
  //console.log(response);
  const query = response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
  
  res.writeHead(200);
  res.write(JSON.stringify(query));
  res.end();
};

//POST '/tea'
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea"});
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

//export controller functions
export {
    returnDatabase,
    getActiveProjects, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea,
};