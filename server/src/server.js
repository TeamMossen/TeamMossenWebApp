import { Client } from "@notionhq/client";
import 'dotenv/config';
import http from 'http';
const host = "localhost";
const port = 8000;
const notionDatabaseId = '826b2f0b4d7b4db8835b7e542740b232';
const notionSecret = 'secret_gYMaWz1WyGLjJ8vBVppZjapzdCB4wOx9ZH2e60HyPO9';
const notion = new Client({
    auth: notionSecret,
  });
  
const server = http.createServer(async (req, res) => {
  // Avoid CORS errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    // Will respond to queries to the domain root (like http://localhost/)
    case "/":
      const query = await notion.databases.query({
        database_id: notionDatabaseId,
      });
      // Only supports the / route
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(query);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});