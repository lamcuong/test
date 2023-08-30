const express = require("express");
const app = express();
// app.get("/events", (req, res) => {
//   res.writeHead(200, {
//     "Content-type": "text/event-stream",
//     "Cache-Control": "no-cache",
//     "Connection": "keep-alive",
//     "Access-Control-Allow-Origin": "*",
//   });
//   setInterval(() => {
//     const data = { message: '123'};
//     res.write(`data: ${JSON.stringify(data)}\n\n`);
//   }, 3000);
// });
app.get('/', (req, res) => {
    res.send('123');
  });
const IP_ADDRESS = "103.61.122.153"
const PORT = 2022
console.log(app)
app.listen(2022,'103.61.122.153',() => {
    
    console.log(`Server is running at http://${IP_ADDRESS}:${PORT}/`);
  });