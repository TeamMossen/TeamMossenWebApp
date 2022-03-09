import { Client } from "@notionhq/client";
import 'dotenv/config';
import http from 'http';
import 'dotenv/config' 
const host = "localhost";
const port = 8000;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_KEY;
const notion = new Client({
    auth: notionSecret,
  });
  
const server = http.createServer(async (req, res) => {
  // Avoid CORS errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    // Will respond to queries to the domain root (like http://localhost/)
    case "/user":
      const response = await notion.databases.query({
        database_id: notionDatabaseId,
      });
      // Only supports the / route
      res.setHeader("Content-Type", "application/json");
      const query = response.results.filter(x => x.properties.Status.select.name == "Active").map(x => x.properties);
      console.log(query);
      res.writeHead(200);
      res.write(JSON.stringify(query));
      res.end();
      break;
    default:
      res.writeHead(401);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});