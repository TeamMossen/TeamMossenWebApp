import { notionDatabaseId, notion } from '../notion.js'

//GET '/user'
const getActiveProjects = async (req, res, next) => {
      // Avoid CORS errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  
  const response = await notion.databases.query({
    database_id: notionDatabaseId,
  });
  // Only supports the / route
  const query = response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
  console.log(query);
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
    getActiveProjects, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea
};