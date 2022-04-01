const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.end("Home page");
  } else if (req.url === "/about") {
    // Blocking code!!!!
    for (i = 0; i < 1000; i++) {
      for (y = 0; y < 1000; y++) {
        console.log(`${i} ${y}`);
      }
    }
    resp.end("About page");
  } else {
    resp.end("Error page");
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
