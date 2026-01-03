const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Express is running");
// });

// // GET method route
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })

// POST method route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage')
// })
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/users', (req, res) => res.send("express is running"));
app.post("/users", (req, res) => res.send("POST ok"));
app.put("/users/:id", (req, res) => res.send("PUT ok"));
app.delete("/users/:id", (req, res) => res.send("DELETE ok"));
//curl -X 
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
app.use(express.json());
/***
 * for testing :
option 1 (in terminal): 
curl -X POST http://localhost:3000/users
curl -X PUT http://localhost:3000/users/1
curl -X PUT http://localhost:3000/users/1
curl -X DELETE http://localhost:3000/users/1
option 2: 
inspect -> console 
fetch("/users", { method: "POST" })
  .then(r => r.text())
  .then(console.log);
// POST ok 
fetch("/users/1", { method: "PUT" })
  .then(r => r.text())
  .then(console.log);
// PUT ok 
fetch("/users/1", { method: "DELETE" })
  .then(r => r.text())
  .then(console.log);
// DELETE ok 

 */
