const express = require('express');
const router = express.Router();

console.log('book router loaded');

router.use((req, res, next) => {
  console.log('ROUTER HIT:', req.method, req.url);
  next();
});

router.get('/', (req, res) => {
  res.send('get books ok');
});
router.post('/', (req, res) => {
  res.send('post books ok');
});
router.use((req, res) => {
  res.status(404).send('router level 404');
});


// router.route('/')
//   .all((req, res, next) => {
//     console.log('Books route hit');
//     next();
//   })
//   .get((req, res) => {
//     res.send('Get books');
//   })
//   .post((req, res) => {
//     res.send('Add book');
//   });

module.exports = router;
