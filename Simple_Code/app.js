const http = require("http");

const configVars = [
  "APP_NAME",
  "APP_ENV",
  "APP_VERSION",
  "WELCOME_MESSAGE",
  "THEME",
  "TIMEZONE",
  "LOG_LEVEL",
  "FEATURE_LOGIN",
  "FEATURE_SIGNUP",
  "FEATURE_PAYMENT",
  "CACHE_ENABLED",
  "MAX_USERS",
  "REGION",
  "SUPPORT_EMAIL",
  "COMPANY_NAME"
];

const secretVars = [
  "DB_USER",
  "DB_PASSWORD",
  "API_KEY",
  "JWT_SECRET",
  "REDIS_PASSWORD",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "OAUTH_CLIENT_ID",
  "OAUTH_CLIENT_SECRET",
  "ENCRYPTION_KEY"
];

function renderList(title, vars, source) {
  return `
    <h2>${title}</h2>
    <table>
      <tr><th>Name</th><th>Value</th><th>Source</th></tr>
      ${vars.map(v => `
        <tr>
          <td>${v}</td>
          <td>${process.env[v] || "NOT SET"}</td>
          <td>${source}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
<!DOCTYPE html>
<html>
<head>
  <title>ConfigMap & Secret Practice</title>
  <style>
    body {
      font-family: Arial;
      background: #f4f6f8;
      padding: 20px;
    }
    h1 {
      color: #2c3e50;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 30px;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    th {
      background: #e3e7ff;
    }
    .note {
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <h1>🚀 Kubernetes ConfigMap & Secret Practice App</h1>
  <p class="note">
    ConfigMaps = non-sensitive config<br/>
    Secrets = sensitive values
  </p>

  ${renderList("📦 ConfigMap Values (15)", configVars, "ConfigMap")}
  ${renderList("🔐 Secret Values (10)", secretVars, "Secret")}

</body>
</html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
