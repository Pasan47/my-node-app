const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl);
  const path = parsedUrl.pathname;
  const method = req.method;
  //const query = parsedUrl.query;
  if (path === "/api/users" && method === "GET") {
    const users = [
      { id: 1, name: "pasan" },
      { id: 2, name: "jhon" },
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (path === "/api/users" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  } else if (path === "/api/page" && method === "POST") {
    let bodyForPage = "";
    req.on("data", (chunk) => {
      bodyForPage += chunk.toString();
    });
    req.on("end", () => {
      const newPage = JSON.parse(bodyForPage);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify(newPage));
    });
  }
});

// server.on("connection", (socket) => {
//   console.log("hello world ");
// });
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
