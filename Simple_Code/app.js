const http = require("http");

// Read secrets from environment variables
const DB_USER = process.env.DB_USER || "default-user";
const DB_PASSWORD = process.env.DB_PASSWORD || "default-pass";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Secrets Demo</h1>
    <p>DB User: ${DB_USER}</p>
    <p>DB Password: ${DB_PASSWORD}</p>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
