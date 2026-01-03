const express = require('express');
const app = express();
console.log('index file started');

const bookRouter = require('./router/books.js');
console.log('book router loaded: ', typeof bookRouter);

app.use((req, res, next) => {
  console.log('app hit: ', req.method, req.url);
  next();
});

app.use('/books', bookRouter);

app.use((req, res) => {
  res.status(404).send('app level 404');
});
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
}); // amar 3000 e arekta run kortesilo tai 

// app.get('/book', (req, res) => {
//   res.send('Get a random book');
// });
// app.post('/book', (req, res) => {
//   res.send('Add a book');
// });
// app.put('/book', (req, res) => {
//   res.send('Update the book');
// });
// // instead we write like this :
/**
 * app.route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });
 */


// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }
// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }
// app.get('/example/d', [cb0, cb1], (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from D!')
// })




// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }
// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }
// const cb2 = function (req, res) {
//   res.send('Hello from C!')
// }
// app.get('/example/c', [cb0, cb1, cb2]) // er mane cb0 -> cb1 -> cb2 ei order e kaj korbe 



// app.get('/', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })


// app.get('/user/:id', (req, res, next) => {
//   if (req.params.id === '0') {
//     return next('route') // er mane baki part gula korbe nah next route e chole jabe
//   }
//   res.send(`User ${req.params.id}`) // baki gula korbe nah mane ei part ta skip marbe 
// })
// app.get('/user/:id', (req, res) => { // next route e chole jabe mane eikhane ashbe
//   res.send('Special handler for user ID 0')
// })


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
// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

// app.get('/users', (req, res) => res.send("express is running"));
// app.post("/users", (req, res) => res.send("POST ok"));
// app.put("/users/:id", (req, res) => res.send("PUT ok"));
// app.delete("/users/:id", (req, res) => res.send("DELETE ok"));
// //curl -X 
// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });
// app.use(express.json());
// /***
//  * for testing :
// option 1 (in terminal): 
// curl -X POST http://localhost:3000/users
// curl -X PUT http://localhost:3000/users/1
// curl -X PUT http://localhost:3000/users/1
// curl -X DELETE http://localhost:3000/users/1
// option 2: 
// inspect -> console 
// fetch("/users", { method: "POST" })
//   .then(r => r.text())
//   .then(console.log);
// // POST ok 
// fetch("/users/1", { method: "PUT" })
//   .then(r => r.text())
//   .then(console.log);
// // PUT ok 
// fetch("/users/1", { method: "DELETE" })
//   .then(r => r.text())
//   .then(console.log);
// // DELETE ok 

//  */
