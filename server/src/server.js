import express from 'express'; //import express
//import { Client } from "@notionhq/client";
import cors from 'cors';
import { userRouter } from './Routes/user.mjs';
import { loginRouter } from './Routes/login.mjs';
import { bossRouter } from './Routes/boss.mjs';
import { projectmanagerRouter } from './Routes/projectmanager.mjs';
//const routes = require('./Routes/user'); // import the routes

//const host = "localhost";
const port = 8000;



const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRouter, loginRouter, bossRouter, projectmanagerRouter); //to use the routes

const listener = app.listen(process.env.PORT || port, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})




// import http from 'http';
// import './Controllers/User.js';


// const server = http.createServer(async (req, res) => {
//   // Avoid CORS errors
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Content-Type", "application/json");
//   switch (req.url) {
//     // Will respond to queries to the domain root (like http://localhost/)
//     case "/user":
//       const response = await notion.databases.query({
//         database_id: notionDatabaseId,
//       });
//       // Only supports the / route
//       const query = response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
//       console.log(query);
//       res.writeHead(200);
//       res.write(JSON.stringify(query));
//       res.end();
//       break;
//     default:
//       res.writeHead(401);
//       res.end(JSON.stringify({ error: "Resource not found" }));
//   }
// });

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });